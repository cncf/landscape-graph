# Standard library imports
from ast import Tuple
from datetime import datetime
from enum import Enum
import csv
import errno
import functools
import glob
import gzip
import json
import logging
import os
import sys
import time
from multiprocessing import Pool, Manager

# Related third party imports
import altair as alt
import ijson
import pandas as pd

# Local application/library specific imports
import ghafuncs as ghafuncs
from IPython.display import display

#####

def timing_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        elapsed_time = end_time - start_time
        print(f"Function '{func.__name__}' took {elapsed_time:.2f} seconds to execute.")
        return result
    return wrapper

def safe_set_index(df:         pd.DataFrame, 
                   idx_wanted: list[str],
                   sort:       bool = True,
                   inplace:    bool = True) -> pd.DataFrame:
    '''check to see if the index is already set, else, data loss as set_index can be destructive'''
    
    idx_existing = list(df.index.names)

    if idx_wanted == idx_existing:
        print(f'\n*** WARNING: attempt to set index to what it already is thwarted! \n')
    else:
        df.set_index(idx_wanted, verify_integrity=True, inplace=inplace)
        print(f'\t Index changed from {idx_existing} --> {list(df.index.names)}') 

    if sort:
        df.sort_index(inplace=inplace)

    return df

def split_org_repo(df:      pd.DataFrame, 
                   colname: str,
                   drop:    bool = False,
                   newcol_org_name:  str = 'org_name',
                   newcol_repo_name: str = 'repo_name') -> pd.DataFrame:
    '''split_org_repo(df, colname) - org_name/repo_name --> org_name, repo_name'''
    
    if colname is None:
        raise ValueError('split_org_repo: missing colname!')

    # https://swdevnotes.com/python/2022/extract-data-from-json-in-pandas-dataframe/
    # expand=True returns a dataframe  which we can rename columns on
    
    df_newcols = df[colname].copy().str.split(pat='/', n=1, expand=True)
    df_newcols.rename(columns={0: newcol_org_name, 1: newcol_repo_name}, inplace=True)

    if drop:
        df.drop(colname, axis=1, inplace=True)

    df = pd.concat([df,df_newcols], axis=1)

    return df

def compare_dataframes(df1: pd.DataFrame, df2: pd.DataFrame):
    # Calculate memory usage
    memory_df1 = df1.memory_usage(deep=True, index=False)
    memory_df2 = df2.memory_usage(deep=True, index=False)

    # Calculate data types
    dtype_df1 = df1.dtypes.astype(str)
    dtype_df2 = df2.dtypes.astype(str)

    # Create a new dataframe for comparison
    comparison = pd.DataFrame({
        'Original Dtype': dtype_df1,
        'Cleaned Dtype': dtype_df2,
        'Original Memory': memory_df1,
        'Cleaned Memory': memory_df2
    })

    # Calculate memory reduction
    comparison['Memory Reduction'] = comparison['Original Memory'] - comparison['Cleaned Memory']
    comparison['Memory Reduction Ratio'] = comparison['Memory Reduction'] / comparison['Original Memory']

    total_reduction = comparison['Memory Reduction'].sum()

    print(f"\nTotal memory usage of original dataframe: {memory_df1.sum()}")
    print(f"Total memory usage of cleaned dataframe: {memory_df2.sum()}")
    print(f"Total memory reduction: {total_reduction}")

    comparison_melted = comparison[['Cleaned Memory', 'Memory Reduction']].reset_index().melt(id_vars='index')

    num_bars = comparison_melted['index'].nunique()
    bar_height = 20
    chart_height = num_bars * bar_height
    
    chart = alt.Chart(comparison_melted).mark_bar().encode(
        x=alt.X('value:Q', title='Memory (bytes)'),
        y=alt.Y('index:N', title='Column'),
        color='variable:N',
        order=alt.Order(
        'variable:N',
        sort='ascending'
        ),
        tooltip=['index:N', 'variable:N', 'value:Q']

    ).properties(
        width=800,
        height=chart_height,
        title='Original Memory Footprint := Cleaned Footprint + Reduction'
    ).interactive()

    chart.display()
    display(comparison)

# def unique_counts(df: pd.DataFrame) -> pd.DataFrame:
#     df_ret = df.from_records(
#         [(col, df[col].nunique()) for col in df.columns],
#         columns=['column', 'num_unique']).sort_values(by=['num_unique'])
#     return df_ret
     
def discover_days(path_to_hourly_archives: str) -> list[str]:
    '''Enumerate all files, extracting unique YYYY-MM-DD from YY-MM-DD-hh.json.gz (hack: just checks for the last hour of the day!)'''

    if not os.path.exists(path_to_hourly_archives):
        raise FileNotFoundError(errno.ENOENT, os.strerror(errno.ENOENT), path_to_hourly_archives)
    
    days = list[str]()

    # the last archive of the day is YYYY-MM-DD-23.json.gz
    for fn in glob.glob(f"{path_to_hourly_archives}/*-23.json.gz"):
        file = os.path.split(fn)
        day = file[1].removesuffix('-23.json.gz')

        # day := YYYY-MM-DD
        days.append(day)

    days.sort()
    return days

def create_time_indexed_dir(base_dir: str, date_str: str) -> str:
    """Create a nested directory structure based on the given date string.

        Example usage
        
        base_dir = 'path/to/output'
        date_str = '2023-03-15-10'  # Example date string from a file name

        nested_dir = create_time_indexed_dir(base_dir, date_str)
    """
    # Parse the date
    date = datetime.strptime(date_str, '%Y-%m-%d-%H')

    # Construct nested directory path
    year_dir = os.path.join(base_dir, str(date.year))
    month_dir = os.path.join(year_dir, f"{date.month:02d}")
    day_dir = os.path.join(month_dir, f"{date.day:02d}")

    # Create directories
    os.makedirs(day_dir, exist_ok=True)

    return day_dir

class EventType(Enum):
    '''https://docs.github.com/en/webhooks-and-events/events/github-event-types '''

    def __str__(self):
            return str(self.value)

    CommitCommentEvent            = 'CommitCommentEvent'
    CreateEvent                   = 'CreateEvent'
    DeleteEvent                   = 'DeleteEvent' 
    ForkEvent                     = 'ForkEvent'
    GollumEvent                   = 'GollumEvent'
    IssueCommentEvent             = 'IssueCommentEvent'
    IssuesEvent                   = 'IssuesEvent'
    MemberEvent                   = 'MemberEvent'
    PublicEvent                   = 'PublicEvent'
    PullRequestEvent              = 'PullRequestEvent'
    PullRequestReviewEvent        = 'PullRequestReviewEvent'
    PullRequestReviewCommentEvent = 'PullRequestReviewCommentEvent'
    PullRequestReviewThreadEvent  = 'PullRequestReviewThreadEvent'
    PushEvent                     = 'PushEvent'
    ReleaseEvent                  = 'ReleaseEvent'
    SponsorshipEvent              = 'SponsorshipEvent'
    WatchEvent                    = 'WatchEvent'
    
    def __str__(self):
        return str(self.value)
    

def clean_dataframe(df: pd.DataFrame, categorical_threshold: float = 0.05) -> pd.DataFrame:
    """Clean DataFrame by inferring better data types for object columns."""
    
    # Infer better data types for object columns
    df = df.infer_objects()

    categorical_cols = []
    # date_cols = []
    dict_cols = []
    list_cols = []
    
    for col in df.columns:
        #print(f'processing col: {col}...')
        if df[col].dtype in ['int64', 'float64']:
            df[col] = pd.to_numeric(df[col], downcast='integer' if df[col].dtype == 'int64' else 'float')
        elif df[col].dtype == 'object':
            if isinstance(df[col].iloc[0], dict):
                dict_cols.append(col)
                continue
            elif isinstance(df[col].iloc[0], list):
                list_cols.append(col)
                continue
            else:

                # TODO: handle date parsing
                # try:
                #     df[col] = pd.to_datetime(df[col])
                #     date_cols.append(col)
                # except ValueError:
                #     pass

                # try for categorical
                if all(isinstance(i, (int, float, str)) for i in df[col]): 
                    num_unique_values = df[col].nunique()
                    num_total_values = len(df[col])
                    if num_unique_values / num_total_values < categorical_threshold:
                        df[col] = df[col].astype('category')
                        categorical_cols.append(col)


    # Print summary of findings
    # print(f'Columns({len(df.columns)}) Summary:')
    # print(f'Categorical : {categorical_cols}')
    # # print(f'Date        : {date_cols}')
    # print(f'Dictionary  : {dict_cols}')
    # print(f'List        : {list_cols}')

    # # Create a visual summary using Altair
    # for col in categorical_cols:
    #     chart = alt.Chart(df).mark_bar().encode(
    #         x=alt.X(col, type='nominal'),
    #         y='count()',
    #     )
    #     chart.display()

    return df

def update_dataframe(dfs, event_type, batch_data):
    """Update DataFrame for a specific event type with new batch data."""

    data_dicts = [json.loads(item) for item in batch_data]
    # print(batch_data)
    # print(data_dicts)

    temp_df = pd.json_normalize(data_dicts)

    # print(temp_df.info())
    # print(temp_df)

    if dfs[event_type].empty:
        # the first time we see a batch of data, we want to clean the DF. for now leaving this alone
        dfs[event_type] = clean_dataframe(temp_df)
    else:
        # df1 (first param) dtypes are preserved, df2 columns are converted w/ join set
        dfs[event_type] = pd.concat([dfs[event_type], temp_df], join='inner', ignore_index=True)
        
def read_gzip_file(input_file_path: str):
    """Generator function to read gzip file line by line."""
    with gzip.open(input_file_path, 'rb') as file:
        for line in file:
            yield line.decode('utf-8')

def process_line(line: str, org_names: set[str]):
    """Extracts event type and organization name from a line using streaming JSON parser."""
    event_type, org_name = None, None

    for prefix, event, value in ijson.parse(line):
        #print(f'prefix: {prefix}, event: {event}, value: {value}')
        if prefix.endswith('type') and event == 'string':
            event_type = value
        elif prefix.endswith('repo.name') and event == 'string':
            org_name = value.split('/')[0].lower()  # Extracting organization name from repo name
        
        if event_type and org_name:
            if org_name in org_names:     # TODO: handle multiple org and org/repo?
                return event_type, line
            break

    return None, None

def process_file(input_file_path: str, org_names: set[str], output_base_dir: str, batch_size=10000):
    """process_file transform a single gharchive.org archive file into feather files

    transform a single gharchive.org archive file (YYYY-MM-DD-h.json.gz) into a set of Feather files, one per EventType

    Args:
        input_file_path (str): _description_
        org_names (set[str]): _description_
        output_base_dir (str): _description_
        batch_size (int, optional): _description_. Defaults to 10000.
    """
    # Extract date string (YYYY-MM-DD) from the file name
    base_name = os.path.basename(input_file_path)
    date_str = base_name.split('.')[0]

    # Create nested directory structure (./YYYY/MM/DD/)
    nested_dir = create_time_indexed_dir(output_base_dir, date_str)

    dfs = {event_type: pd.DataFrame() for event_type in EventType}
    batch_data = {event_type: [] for event_type in EventType}

    # for each of the (millions of) lines in the file, extract the event_type and org_name
    # and append the full line to the appropriate batch_data list, then update the appropriate DataFrame as needed.
    for line in read_gzip_file(input_file_path):
        event_type, data = process_line(line, org_names)

        if event_type:
            event_type_enum = EventType[event_type] # Convert string to enum

            if event_type_enum in batch_data:
                batch_data[event_type_enum].append(data)
                if len(batch_data[event_type_enum]) >= batch_size:
                    update_dataframe(dfs, event_type_enum, batch_data[event_type])
                    batch_data[event_type_enum] = []

    # Process any remaining batch data
    for event_type, data in batch_data.items():
        if data:
            update_dataframe(dfs, event_type, data)

    # Save DataFrames as Feather files
    for event_type, df in dfs.items():
        if df.empty:
            continue

        feather_file_path = os.path.join(nested_dir, f'{date_str}.{event_type}.feather')
        print(f' *** Writing {feather_file_path} {df.shape}')
        # print(df.info())
        df.to_feather(feather_file_path)

    output_files = glob.glob(f'{nested_dir}/*.feather')
    return output_files


# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def process_day(args):
    day, orgs_included, log_dict, verbose = args
    results = []
    logging.info(f'Start processing day: {day}')
    try:
        for fn in glob.glob(f'{GHA_SOURCE_DIR}/{day}-*.json.gz'):
            input_file_size = os.path.getsize(fn)
            output_files = process_file(fn, orgs_included, GHA_TARGET_DIR, batch_size=10000)
            for output_file in output_files:
                output_file_size = os.path.getsize(output_file)
                results.append([day, fn, input_file_size, output_file, output_file_size])
            log_dict[day] = 'Success'
    except Exception as e:
        logging.error(f'Error processing day: {day}, error: {str(e)}')
        log_dict[day] = 'Fail'
    logging.info(f'Finished processing day: {day}')
    return results

def process_days(days: list[str], orgs_included: set[str], verbose=False):
    logging.info('Starting PoolManager')
    pool = Pool()
    m = Manager()
    log_dict = m.dict()
    results = []
    for result in pool.imap(process_day, [(day, orgs_included, log_dict, verbose) for day in days]):
        results.append(result)
    pool.close()
    pool.join()
    logging.info('Finished PoolManager')
    for day, status in log_dict.items():
        logging.info(f'Day: {day}, Status: {status}')
###

pd.set_option('display.max_rows', 512)
pd.set_option('display.max_columns', 512)
pd.set_option('display.width', 512)

OUT_DIR='generated'

# TODO: factor out landscape ('cncf') so this can be used for landscape(s) generically (https://landscapes.dev) 

CNCF_LANDSCAPE_FNAME_BASE='cncf-landscape'
CNCF_LANDSCAPE_FNAME_ROOT=f'{OUT_DIR}/{CNCF_LANDSCAPE_FNAME_BASE}'

CNCF_PROJECTS_FNAME_BASE=f'cncf-projects'
CNCF_PROJECTS_FNAME_ROOT=f'{OUT_DIR}/{CNCF_PROJECTS_FNAME_BASE}'

GHA_SOURCE_DIR=os.path.expanduser('~/gharchive-kcna23')
GHA_TARGET_DIR=os.path.expanduser('~/gharchive-cncf')

def main():
    # all generated output files land here

    print (f'cwd: {os.getcwd()}')

    #cncf_project_feather = os.path.join(os.getcwd(), 'notebooks', 'cncf', f'{CNCF_PROJECTS_FNAME_ROOT}.feather')
    cncf_project_feather = os.path.join(os.getcwd(), 'notebooks', 'cncf', f'{CNCF_PROJECTS_FNAME_ROOT}.feather')
    print(cncf_project_feather)
    
    df_projects = pd.read_feather(cncf_project_feather)
    orgs_included = set(df_projects['org_name'].str.lower().unique())
    print(f'orgs_included: {orgs_included}')

    days = discover_days(GHA_SOURCE_DIR)
    print(f'days: {days}')

    print(f'GHA_SOURCE_DIR: {GHA_SOURCE_DIR}, {len(days)} days, {days[0]} -->  {days[-1]}')
    print(f'GHA_TARGET_DIR: {GHA_TARGET_DIR}')

    print(f'Jupyter Kernel (venv): {sys.executable}')
    print(f'Output Location:       {OUT_DIR}  (.json, .jsonl, .csv, .md, .svg, .png, ...)')
    print(f'Output Landscape root: {CNCF_LANDSCAPE_FNAME_ROOT}')
    print(f'Output Projects  root: {CNCF_PROJECTS_FNAME_ROOT}')

    process_days(days, orgs_included, verbose=True)


if __name__ == "__main__":
    main()
