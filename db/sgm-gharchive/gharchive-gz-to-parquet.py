#!/usr/bin/env python3

import argparse
import csv
import errno
import functools
import glob
import gzip
import inspect
import json
import logging
import multiprocessing
import os
import signal
import sys
import time
import traceback
from ast import Tuple
from dataclasses import dataclass, asdict
from datetime import datetime
from enum import Enum
from multiprocessing import Pool, Manager
from pathlib import Path
from typing import Optional, Dict, List, Set, Tuple, Union, Any
from logging.handlers import RotatingFileHandler

import altair as alt
import humanize
import ijson
import numpy as np
import pandas as pd
from icecream import ic, install
from pandas.api.types import (is_numeric_dtype, is_bool_dtype, is_float_dtype, is_integer_dtype, is_datetime64_any_dtype, is_categorical_dtype)
from tqdm import tqdm, tqdm_notebook
import pyarrow as pa
import pyarrow.compute as pc
import pyarrow.dataset as ds
from pyarrow.dataset import ParquetFileFormat

g_pool = None
g_manager = None

def signal_handler(signal: int, frame: Any) -> None:
    global g_pool, g_manager
    print("\nKeyboard interrupt received. Shutting down gracefully...")
    
    if g_pool is not None:
        print("Pool information:")
        print(f"  Number of worker processes: {g_pool._processes}")
        print(f"  Tasks waiting in the queue: {g_pool._taskqueue.qsize()}")
        print(f"  Tasks being processed: {len(g_pool._cache)}")
        
        print("Terminating worker processes...")
        g_pool.terminate()
        print("Waiting for worker processes to finish...")
        g_pool.join()
        print("All worker processes finished.")
    else:
        print("No pool is currently active.")
    
    if g_manager is not None:
        print("Shutting down manager...")
        g_manager.shutdown()
        print("Manager shut down.")
    else:
        print("No manager is currently active.")
    
    print("Exiting the script.")
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

#####

###
# Pandas got a serious upgrade in Jan 2024
#
# https://pandas.pydata.org/docs/whatsnew/v2.2.0.html#copy-on-write
# pd.options.mode.copy_on_write = True
# pd.options.mode.copy_on_write = "warn"
#
# becomes default in pandas 3
# https://pandas.pydata.org/docs/whatsnew/v2.2.0.html#dedicated-string-data-type-backed-by-arrow-by-default
# pd.options.future.infer_string = True
#
# pandas now natively supports ADBC drivers (pyarrow)
# https://pandas.pydata.org/docs/whatsnew/v2.2.0.html#adbc-driver-support-in-to-sql-and-read-sql
# read_sql() and to_sql() now work with Apache Arrow ADBC drivers. Compared to traditional drivers 
# used via SQLAlchemy, ADBC drivers should provide significant performance improvements, better type support 
# and cleaner nullability handling.
#
# If you are interested in preserving database types as best as possible throughout the lifecycle of your DataFrame, 
# users are encouraged to leverage the dtype_backend="pyarrow" argument of read_sql()
#
# # for round-tripping (reads and subsequent writes)
#
# with pg_dbapi.connect(uri) as conn:
#     df2 = pd.read_sql("pandas_table", conn, dtype_backend="pyarrow")
#
# This will prevent your data from being converted to the traditional pandas/NumPy type system, 
# which often converts SQL types in ways that make them impossible to round-trip.
###

pd.set_option('display.max_rows', 999)
pd.set_option('display.max_columns', 999)
pd.set_option('display.width', 999)

# TODO: test and enable
# pd.options.future.infer_string = True
# pd.options.mode.copy_on_write = "warn"

#####


@dataclass
class OriginFilterSets:
    orgs: Set[str]
    exact_matches: Set[str]
    prefix_matches: Set[str]

def get_origin_filters(origin_filters_filename: str) -> OriginFilterSets:
    '''Parse the organization list file and return an instance of FilterSets dataclass containing sets for organization names, exact matches, and prefix matches.

    The input file is expected to have lines formatted as "match_type, filter" where:
        - match_type is one of "org", "exact", or "prefix"
        - filter is the organization name, organization/repository combination, or prefix for matching.
    This format allows specifying whether each line should be treated as a simple organization name,
    an exact organization/repository match, or a prefix match for organization/repository combinations.

    Args:
        origin_filters_filename (str): The path to the file containing the organization and repository filters.

    Returns:
        FilterSets: An instance of FilterSets dataclass containing organization names (org), exact matches (exact), and prefix matches (prefix).
    '''

    orgs = set()
    exact_matches = set()
    prefix_matches = set()

    with open(origin_filters_filename, 'r') as file:
        for line in file:
            match_type, filter_value = line.strip().split(',', 1)
            filter_value = filter_value.strip()
            if match_type == "org":
                orgs.add(filter_value)
            elif match_type == "exact":
                exact_matches.add(filter_value)
            elif match_type == "prefix":
                prefix_matches.add(filter_value)

    # Logging the sets
    logging.info("Organization Names: %s", orgs)
    logging.info("Exact Matches: %s", exact_matches)
    logging.info("Prefix Matches: %s", prefix_matches)

    return OriginFilterSets(orgs=orgs, exact_matches=exact_matches, prefix_matches=prefix_matches)

#####

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

#####

def handle_exception():
    exc_type, exc_value, exc_traceback = sys.exc_info()
    tb = traceback.extract_tb(exc_traceback)
    filename, line, func, text = tb[-1]
    
    error_message = f"{filename}:{line} An error ({exc_type.__name__}) occurred: {str(exc_value)}"
    print(error_message)
    
    # Print the stack trace
    traceback_lines = traceback.format_exception(exc_type, exc_value, exc_traceback)
    traceback_output = "".join(traceback_lines)
    print("Stack Trace:")
    print(traceback_output)
    
    # Print the local variables in the frame where the exception occurred
    frame = exc_traceback.tb_frame
    local_vars = frame.f_locals
    print("Local Variables:")
    for var_name, var_value in local_vars.items():
        print(f"{var_name}: {var_value}")
    
    # Print the arguments passed to the function where the exception occurred
    arg_info = inspect.getargvalues(frame)
    print("Function Arguments:")
    for arg_name in arg_info.args:
        arg_value = arg_info.locals[arg_name]
        print(f"{arg_name}: {arg_value}")

def timing_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        elapsed_time = end_time - start_time
        msg = f"Function '{func.__name__}' took {elapsed_time:.2f} seconds to execute."
        print(msg)
        return result
    return wrapper

def print_categoricals(df: pd.DataFrame):
    for col in df.select_dtypes(['category']).columns:
        ic({col}, df[col].cat.categories, df[col].value_counts())

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

    if not len(days):
        raise Exception(f'ERROR!  No days found at: {path_to_hourly_archives}')

    return days

def generate_markdown_documentation(df: pd.DataFrame, file_path: Optional[str] = None) -> str:
    """
    Generate Markdown documentation for all columns, data types, and additional stats in a DataFrame.
    Handles missing values when calculating unique values.
    Optionally writes the documentation to a .md file.

    Parameters:
    df (pd.DataFrame): The DataFrame to document.
    file_path (Optional[str]): The file path to save the Markdown documentation. If None, no file is written.

    Returns:
    str: A string containing the Markdown documentation.
    """
    markdown_doc = "# DataFrame Documentation\n\n"
    markdown_doc += f"Total Rows: {len(df)}\n\n"
    markdown_doc += "## Columns and Data Types\n\n"
    markdown_doc += "| Column Name | Data Type | Unique Values | Memory Usage |\n"
    markdown_doc += "|-------------|-----------|---------------|--------------|\n"

    for column in df.columns:
        col_dtype = df[column].dtype
        try:
            unique_vals = df[column].nunique(dropna=False) if df[column].dtype.name == 'category' or df[column].dtype.name == 'object' else 'N/A'
        except Exception as e:
            unique_vals = f"Error: {e}"

        memory_usage = humanize.naturalsize(df[column].memory_usage(index=False), binary=True)
        markdown_doc += f"| {column} | {col_dtype} | {unique_vals} | {memory_usage} |\n"

    if file_path:
        with open(file_path, 'w') as file:
            file.write(markdown_doc)

    return markdown_doc

def safe_downcast(df: pd.DataFrame, col: str, inplace: bool = False) -> pd.DataFrame:
    """
    Safely downcasts the column of a DataFrame to a smaller numeric type,
    only if there is no data loss. Handles int64, float64, and other numeric types.

    Parameters:
    df (pd.DataFrame): DataFrame containing the column to be downcasted.
    col (str): Name of the column to downcast.
    inplace (bool): If True, modify the DataFrame in place. Otherwise, return a new DataFrame.

    Returns:
    pd.DataFrame: DataFrame with the column downcasted if safe.
    """
    if not inplace:
        df = df.copy()

    original_data = df[col]

    if is_numeric_dtype(original_data):
        if is_integer_dtype(original_data):
            downcast_type = 'integer'
        elif is_float_dtype(original_data):
            downcast_type = 'float'
        else:
            # Handle other numeric types if necessary
            downcast_type = None

        if downcast_type:
            # Attempt to downcast
            downcasted_data = pd.to_numeric(original_data, downcast=downcast_type)

            # Check if downcasting causes data loss by casting back to original type and comparing
            if original_data.equals(downcasted_data.astype(original_data.dtype)):
                # Safe to downcast
                df[col] = downcasted_data
            else:
                # Data loss detected, do not downcast
                print(f"Downcasting column '{col}' would cause data loss. Skipping downcast.")
    else:
        print(f"Column '{col}' is not a numeric type for downcasting. Skipping.")

    return df

def old_clean_dataframe(df: pd.DataFrame, categorical_threshold: float = 0.05, auto_categorical: bool = False, downcast:bool = False) -> pd.DataFrame:
    """
    Cleans and optimizes the data types of a pandas DataFrame.

    This function infers more efficient data types for object columns in the DataFrame.
    
    Parameters:
    df (pd.DataFrame): The DataFrame to be cleaned and optimized.
    categorical_threshold (float, optional): The threshold used to determine if a column should be 
                                             converted to a categorical type based on the ratio of 
                                             unique values to total values. Defaults to 0.05.
    auto_categorical (bool, optional): If True, the function will automatically convert columns to 
                                       categorical types based on the categorical_threshold. Defaults to False.

    Returns:
    pd.DataFrame: The cleaned and optimized DataFrame.

    Note:
    - numerics are safely AND effeciently downcasted without losing precision or data. bools are handled.
    - columns ending in '_at' are converted (str -> date) if possible. other column names are not (yet ;)) supported
    - columns with dtype: {'category','datetime64[ns]'} are not altered.
    """
    #ic(df.shape, categorical_threshold, auto_categorical)
    
    # Infer better data types for object columns
    df = df.infer_objects()

    # TODO: consider making all url columns categorical
    categorical_cols = {'type'}

    for col in categorical_cols:
        if col in df.columns:
            df[col] = df[col].astype('category')

    for col in df.columns:
        if downcast and is_numeric_dtype(df[col]) and not is_bool_dtype(df[col]):
            safe_downcast(df, col, inplace=True)
        elif col.endswith('_at') and not is_datetime64_any_dtype(df[col]):
            try:
                df[col] = pd.to_datetime(df[col])
            except ValueError:
                pass  # Handle or log error as appropriate

    if auto_categorical:
        # ic('auto_categorical: Searching for categorical data in all columns', categorical_threshold, df.columns)

        for col in df.columns:
            if df[col].dtype.name not in ['category', 'datetime64[ns]']:

                # foreach column c in dataframe
                #   foreach element e in c
                #     if e in {integer, float, string}
                #       if true calculate ratio of unique values to total values in the column. 
                #       if this ratio is less than a specified categorical_threshold
                #         convert col -> categorical dtype
                if all(isinstance(i, (int, float, str)) for i in df[col]): 
                    num_unique_values = df[col].nunique()
                    num_total_values = len(df[col])
                    if num_unique_values / num_total_values < categorical_threshold:
                        df[col] = df[col].astype('category')
                        categorical_cols.add(col)

        # ic(categorical_cols, len(categorical_cols))
        
    return df


# TODO: test better impl
#
# Optimize clean_dataframe function for better performance and readability
#
# - Streamlined the process of converting columns to categorical types based on a threshold.
# - Improved the efficiency of downcasting numeric columns by directly applying the downcast operation to numeric columns.
# - Simplified the conversion of date columns to datetime, handling errors gracefully.
# - This refactoring aims to reduce the number of iterations over DataFrame columns and improve the overall performance of the data cleaning process.
def clean_dataframe(df: pd.DataFrame, categorical_threshold: float = 0.05, auto_categorical: bool = False, downcast: bool = False) -> pd.DataFrame:
    """
    Cleans and optimizes the data types of a pandas DataFrame.

    Parameters:
    df (pd.DataFrame): The DataFrame to be cleaned and optimized.
    categorical_threshold (float, optional): The threshold used to determine if a column should be 
                                             converted to a categorical type based on the ratio of 
                                             unique values to total values. Defaults to 0.05.
    auto_categorical (bool, optional): If True, the function will automatically convert columns to 
                                       categorical types based on the categorical_threshold. Defaults to False.
    downcast (bool, optional): If True, the function will attempt to downcast numeric columns. Defaults to False.

    Returns:
    pd.DataFrame: The cleaned and optimized DataFrame.
    """
    # Infer better data types for object columns
    df = df.infer_objects()

    # Convert columns to categorical types based on the threshold
    if auto_categorical:
        for col in df.columns:
            if df[col].dtype.name not in ['category', 'datetime64[ns]']:
                num_unique_values = df[col].nunique()
                num_total_values = len(df[col])
                if num_unique_values / num_total_values < categorical_threshold:
                    df[col] = df[col].astype('category')

    # Downcast numeric columns
    if downcast:
        for col in df.select_dtypes(include=['int64', 'float64']).columns:
            df[col] = pd.to_numeric(df[col], downcast='integer' if df[col].dtype.name == 'int64' else 'float')

    # Convert date columns
    for col in df.columns:
        if col.endswith('_at') and not is_datetime64_any_dtype(df[col]):
            try:
                df[col] = pd.to_datetime(df[col])
            except ValueError:
                pass # Handle or log error as appropriate

    return df

def compare_dataframes(df1: pd.DataFrame, 
                       df2: pd.DataFrame, 
                       generate_viz: bool = True,
                       verbose: bool = False) -> pd.DataFrame:
    """
    Compare two pandas DataFrames in terms of data types, memory usage, categorical columns, 
    and memory savings by column type. Clearly identifies if memory usage increased after cleaning.

    Parameters:
    df1 (pd.DataFrame): The first DataFrame to compare.
    df2 (pd.DataFrame): The second DataFrame to compare.
    generate_viz (bool): If True, generates a visualization of the memory usage comparison.

    Returns:
    pd.DataFrame: A DataFrame containing the comparison data.
    """

    # Calculate memory usage
    memory_df1 = df1.memory_usage(deep=True, index=False)
    memory_df2 = df2.memory_usage(deep=True, index=False)

    # Calculate data types
    dtype_df1 = df1.dtypes.astype(str)
    dtype_df2 = df2.dtypes.astype(str)

    # Identify categorical, date, and numerical columns
    categorical_columns = df1.select_dtypes(include=['category']).columns
    date_columns = df1.select_dtypes(include=['datetime']).columns
    numerical_columns = df1.select_dtypes(include=['float64', 'int64']).columns

    # Create a new dataframe for comparison
    comparison = pd.DataFrame({
        'Original Dtype': dtype_df1,
        'Cleaned Dtype': dtype_df2,
        'Original Memory': memory_df1,
        'Cleaned Memory': memory_df2,
        'Is Categorical': dtype_df2.apply(is_categorical_dtype),
        'Is Date': dtype_df2.apply(is_datetime64_any_dtype),
        'Is Numerical': dtype_df2.apply(lambda x: is_numeric_dtype(x) and not is_categorical_dtype(x))
    })

    # Calculate memory reduction and flag increased memory usage
    comparison['Memory Reduction'] = comparison['Original Memory'] - comparison['Cleaned Memory']
    comparison['Memory Reduction Ratio'] = comparison['Memory Reduction'] / comparison['Original Memory']
    comparison['Savings?'] = comparison['Memory Reduction'] < 0

    # Memory savings by type
    savings_categorical = comparison[comparison['Is Categorical']]['Memory Reduction'].sum()
    savings_date = comparison[comparison['Is Date']]['Memory Reduction'].sum()
    savings_numerical = comparison[comparison['Is Numerical']]['Memory Reduction'].sum()

    if verbose:
        print(f"Total memory savings for categorical columns: {savings_categorical}")
        print(f"Total memory savings for date columns: {savings_date}")
        print(f"Total memory savings for numerical columns: {savings_numerical}")
        ic(comparison)

    if generate_viz:
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

    return comparison

def update_dataframe(df_exist: pd.DataFrame, batch_data) -> pd.DataFrame:
    """
    Update a specific event type's dataframe with new batch data.
    """
    data_dicts = [json.loads(item) for item in batch_data]

    # don't unpack nested objects (max_level=0)
    df_new = pd.json_normalize(data_dicts, max_level=0)  

    #ic(df_exist.empty, df_exist.shape, df_new.shape)
    df_exist = pd.concat([df_exist, df_new], join='inner', ignore_index=True, copy=True)
    #ic(df_exist.shape)

    return df_exist

CHUNK_SIZE_8_MB = 8 * 1024 * 1024
CHUNK_SIZE_16_MB = 16 * 1024 * 1024
CHUNK_SIZE_32_MB = 32 * 1024 * 1024
CHUNK_SIZE_64_MB = 64 * 1024 * 1024

def read_gzip_file(input_file_path: str, chunk_size: int = 1024 * 1024, error_handling: str = 'ignore'):
    partial_line = b''

    with gzip.open(input_file_path, 'rb') as file:
        while True:
            chunk = file.read(chunk_size)

            if not chunk:
                if partial_line:
                    yield partial_line.decode('utf-8', errors=error_handling)
                break

            chunk = partial_line + chunk
            lines = chunk.splitlines(keepends=True)

            if lines[-1].endswith(b'\n'):
                partial_line = b''
            else:
                partial_line = lines.pop()

            for line in lines:
                yield line.decode('utf-8', errors=error_handling)

# def read_gzip_file(input_file_path: str):
#     """Generator function to read gzip file line by line."""
#     with gzip.open(input_file_path, 'rb') as file:
#         for line in file:
#             yield line.decode('utf-8')
        

def process_line(line: str, origin_filters: OriginFilterSets, event_type_map: Dict[str, EventType]):
    """Extracts the event_type and org_name from a single line of a gharchive.org archive file and checks for matches 
    based on organization names, exact matches, and prefix matches.

    This function performs a three-tiered check to determine if a line from the archive should be processed based on the
    organization and repository information it contains:
    
    1. Org Check: Checks if the organization name extracted from the line is in the provided org_names set.
    2. Prefix Check: If no exact match is found, it checks for a prefix match against the org_repo_prefix_list, where each
       entry is treated as a prefix with an implicit '*' at the end for matching.
    3. Exact Match Check: If the org check fails, it checks for an exact match of the organization/repository combination
       against the provided org_repo_list.

    Args:
        line (str): A single line from a gharchive.org archive file.
        origin_filters (OriginFilterSets):
            orgs (set[str]): A set of organization names to filter on.
            prefix_matches (set[str], optional): A set of organization/repository combinations for prefix matching.
            exact_matches (set[str], optional): A set of organization/repository combinations for exact matching.
        event_type_map (Dict[str, EventType]): A mapping of event type strings to their corresponding EventType enum values.

    Returns:
        tuple: A tuple containing (event_type, line) if a match is found based on the provided criteria; otherwise,
               (None, line).
    """
    event_type, org_repo, org_name = None, None, None
        
    for prefix, event, value in ijson.parse(line):
        if prefix.endswith('type') and event == 'string':
            event_type = event_type_map.get(value)
        elif prefix.endswith('repo.name') and event == 'string':
            org_repo = value.lower()
            if org_repo:
                org_name = value.split('/')[0]  # Extracting organization name from org/repo

        if event_type and not origin_filters:
            # not filtering on any origin (org/repo), so...done.
            return event_type, line

        if event_type and org_repo:
                
            # org check
            if origin_filters.orgs and org_name in origin_filters.orgs:
                    return event_type, line

            # exact match
            elif origin_filters.exact_matches and org_repo in origin_filters.exact_matches:
                return event_type, line

            # prefix
            elif origin_filters.prefix_matches:
                for prefix in origin_filters.prefix_matches:
                    if org_repo.startswith(prefix):
                        return event_type, line

            # NOT A MATCH. Halt loop if no matches found, or we would walk thru entire JSON field by field.
            break  
        
    return None, line  # Return (None, line) if no match is found

def split_org_repo(df:      pd.DataFrame, 
                   colname: str,
                   drop:    bool = False,
                   newcol_org_name:  str = 'org_name',
                   newcol_repo_name: str = 'repo_name') -> pd.DataFrame:
    '''split_org_repo(df, colname) - org_name/repo_name --> org_name, repo_named'''
    
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


def normalize_json_columns(df: pd.DataFrame, columns_to_normalize: List[str]) -> pd.DataFrame:
    """
    Normalize and flatten specified JSON columns in a DataFrame.

    Parameters:
    - df: The DataFrame containing the columns to normalize.
    - columns_to_normalize: A list of column names containing JSON objects to be normalized.

    Returns:
    - A DataFrame with the specified JSON columns normalized and flattened, with prefixed column names.
    """
    for column in columns_to_normalize:
        # Directly normalize the column data assuming it's already a dictionary
        normalized_data = pd.json_normalize(df[column])
        
        # Create prefixed column names based on the original column name
        normalized_data.columns = [f"{column}.{subcol}" for subcol in normalized_data.columns]
        
        # Drop the original JSON column from the DataFrame
        df = df.drop(column, axis=1)
        
        # Join the normalized data with the original DataFrame, aligning on the index
        df = df.join(normalized_data)
    
    return df

def write_to_arrow_dataset(dfs: dict[pd.DataFrame], date: datetime, output_base_dir: str, verbose: bool = False, autoclean = False) -> None:
    """
    write_to_arrow_dataset write all dataframes to partitioned dataset
    """
    def file_visitor(f):
        print(f"path={f.path}, size={f.size}, num_columns={f.metadata.num_columns}, num_rows={f.metadata.num_rows}")    

    # these are the same for all events from this file
    year = f'{date.year}'
    month = f'{date.month:02d}'
    day = f'{date.day:02d}'

    # https://github.com/apache/arrow/blob/640667664abbdb9ddf38d32781715cc783a69885/python/pyarrow/_dataset_parquet.pyx#L645
    parquet_format = ParquetFileFormat()
    write_file_options = parquet_format.make_write_options(compression='lz4')

    for event_type, df in dfs.items():
        if df.empty:
            #ic(event_type, date_str, df.empty)
            print(f'{event_type}: empty')
            continue

        #ic(event_type, date_str, df.shape, output_base_dir)

        df['year'] = year
        df['month'] = month
        df['day'] = day

        df['repo_org_and_name'] = pd.json_normalize(df['repo'])['name'] 
        df = split_org_repo(df, colname='repo_org_and_name', drop=False)

        df = normalize_json_columns(df, ['actor','repo','org','payload'])
        #df.info(verbose=True)

        # dfnew = df.infer_objects()
        # delta = compare_dataframes(df, dfnew, generate_viz=False)

        if autoclean:
            # df_orig = df.copy(deep=True)
            find_cats = True            # search thru all columns (can be 150+) for categorical data
            threshold: float = 0.05      # ratio of unique values to total values (unique/total) in each str column, 
            df = clean_dataframe(df, auto_categorical=find_cats, categorical_threshold=threshold) 

        # if verbose and find_cats:
        #     ic('find_cats', threshold, df.shape)
        #     print_categoricals(df)        

        # if verbose:
        #     # Compare dataframes
        #     compare_dataframes(df_orig, df, generate_viz=False)

        partition_keys = ['org_name', 'repo_name']        
        df.set_index(partition_keys, inplace=True)

        # Convert the DataFrame to a PyArrow Table
        # https://arrow.apache.org/docs/python/pandas.html#pandas-integration
        table = pa.Table.from_pandas(df, preserve_index=True, preserve_index_metadata=True)
        
        # TODO: (for generic abstraction) make sure partition keys all exist and there are no missing values
               
        if output_base_dir.startswith('s3://'):
            # path = os.path.join(path, event_type.name)
            #ds.write_dataset(table, base_dir=path, filesystem=filesystem, format='parquet', partitioning=part, schema=table.schema)
            raise NotImplementedError('s3:// not implemented yet')
        else:
            path = os.path.join(output_base_dir, event_type.name)
                
            # when combined with overwrite_or_ignore, this will create a new file for each partition w/ append semantics
            basename_template = f'{year}-{month}-{day}' + '_part-{i}.parquet'

            ds.write_dataset(table, 
                             base_dir=path, 
                             format='parquet',
                             file_options=write_file_options, # compression defined herein
                             partitioning=partition_keys,
                             max_partitions=4096,
                             #file_visitor=file_visitor, 
                             existing_data_behavior='overwrite_or_ignore',
                             basename_template=basename_template)

    if verbose:
        ###
        # ON THE NATURE OF TIME IN PANDAS
        #
        # In the context of the to_json method in Pandas, specifying date_format='iso' indicates that 
        # datetime objects in the DataFrame should be formatted according to the ISO 8601 standard when 
        # converting the DataFrame to JSON. ISO 8601 is an international standard for date and time representations.
        #
        # The ISO 8601 format looks like this: YYYY-MM-DDTHH:MM:SS, where:
        #
        # - YYYY is the four-digit year,
        # - MM is the two-digit month,
        # - DD is the two-digit day of the month,
        # - T is a separator that indicates the start of the time component,
        # - HH is the two-digit hour,
        # - MM is the two-digit minute,
        # - SS is the two-digit second.
        #
        # For example, "2024-03-06T14:25:00" represents the 6th of March, 2024, at 14 hours, 25 minutes, and 0 seconds.
        #
        # When you use date_format='iso' with to_json, Pandas will convert all datetime columns 
        # to strings using this format. This ensures that the datetime information is represented in a clear, 
        # standardized way in the resulting JSON, making it easily understandable and parsable (ISO 8601 is THE standard).
        ###
        print('write_to_arrow_dataset: Done!')
@dataclass
class ArtifactWriteLogRecord:
    action: str
    record_count: int
    org_name: str
    repo_name: str
    event_type: str
    year: str
    month: str
    day: str
    file_path: str

def write_to_jsonlines(dfs: Dict[EventType, pd.DataFrame], date: datetime, output_base_dir: str, verbose: bool = False) -> pd.DataFrame:
    """
    write_to_jsonlines write all dataframes to .json.gz
    """
    
    year = f'{date.year}'
    month = f'{date.month:02d}'
    day = f'{date.day:02d}'

    artifact_write_log: list[ArtifactWriteLogRecord] = []
    
    for event_type, df in dfs.items():
        if df.empty:
            continue

        df['year'] = year
        df['month'] = month
        df['day'] = day

        df['repo_org_and_name'] = pd.json_normalize(df['repo'])['name'] 
        df = split_org_repo(df, colname='repo_org_and_name', drop=False)
        df = normalize_json_columns(df, ['actor','repo','org','payload'])

        # note "type_" so as not to conflict with python's "type" keyword
        for (org_name, repo_name, event_type), group in df.groupby(['org_name', 'repo_name', 'type']):
            dir_path = os.path.join(output_base_dir, str(event_type), org_name, repo_name)
            Path(dir_path).mkdir(parents=True, exist_ok=True)
            file_path = os.path.join(dir_path, f'{org_name}_{repo_name}_{year}-{month}-{day}.json.gz')

            rec = ArtifactWriteLogRecord(
                action='WRITE',
                record_count=len(group),
                org_name=org_name,
                repo_name=repo_name,
                event_type=event_type,
                year=year,
                month=month,
                day=day,
                file_path=file_path
            )
            artifact_write_log.append(rec)

            with gzip.open(file_path, 'wt', encoding='utf-8') as file:
                group.to_json(file, orient='records', lines=True, 
                              date_format='iso', date_unit='ns')

    df_log = pd.DataFrame([asdict(record) for record in artifact_write_log])
    
    return df_log
            
# def write_to_jsonlines(dfs: Dict[EventType, pd.DataFrame], date: datetime, output_base_dir: str, verbose: bool = False) -> pd.DataFrame:
#     """
#     write_to_jsonlines write all dataframes to .json.gz
#     """
    
#     # these are the same for all events from this file
#     year = f'{date.year}'
#     month = f'{date.month:02d}'
#     day = f'{date.day:02d}'

#     #
#     # for each type of event in dfs, write to json lines file
#     #
#     for event_type, df in dfs.items():
#         if df.empty:
#             # ic(event_type, date_str, df.empty)
#             # print(f'{event_type}: empty')
#             continue

#         #ic(event_type, date_str, df.shape, output_base_dir)
        
#         df['year'] = year
#         df['month'] = month
#         df['day'] = day

#         df['repo_org_and_name'] = pd.json_normalize(df['repo'])['name'] 
#         df = split_org_repo(df, colname='repo_org_and_name', drop=False)
#         df = normalize_json_columns(df, ['actor','repo','org','payload'])
        
#         partition_keys = ['org_name', 'repo_name']        
#         df = df.set_index(partition_keys, inplace=False, drop=False).sort_index()

#         unique_combinations = df[['org_name', 'repo_name']].drop_duplicates()
#         ###
#         # df_unique_combinations
#         #                                    org_name            repo_name
#         # org_name repo_name
#         # apple    foundationdb              apple            foundationdb
#         #          swift                     apple                   swift
#         #          swift-async-algorithms    apple  swift-async-algorithms
#         #          swift-package-manager     apple   swift-package-manager
#         #          swift-syntax              apple            swift-syntax
#         ###
        
#         # the default handler is invoked when a column contains a value that cannot be converted to a JSON string.
#         num_difficult_things = 0
#         def default_handler(difficult_thing):
#             nonlocal num_difficult_things
#             num_difficult_things += 1
#             print(f'WARNING default_handler: {difficult_thing}')
#             return str(f'PARSE_ERROR_{str(difficult_thing)}')

#         if df.empty:
#             #print(f'{event_type}: empty')
#             continue

#         artifact_write_log: list[ArtifactWriteLogRecord] = []
        
#         df_log = pd.DataFrame(columns=['action', 'record_count', 'org_name', 'repo_name', 'year', 'month', 'day', 'file_path'])

#         # for _, row in unique_combinations.iterrows():
#         #     org_name, repo_name = row['org_name'], row['repo_name']
#         #     partitioned_df = pd.DataFrame()                           # Initialize an empty DataFrame in case empty
#         #     partitioned_df = df.loc[(org_name, repo_name)]
#         for _, row in unique_combinations.iterrows():
#             org_name, repo_name = row['org_name'], row['repo_name']
            
#             # Attempt to select the partition of the DataFrame based on the multi-index
#             try:
#                 partitioned_df = df.loc[(org_name, repo_name)]
#             except KeyError:
#                 print(f"Warning - unexpected... Skipping combination ({org_name}, {repo_name}) as the partitioned DataFrame is empty.")
#                 continue

#             # Check if the partitioned DataFrame is empty after selection
#             if partitioned_df.empty:
#                 print(f"Warning - unexpected... Skipping combination ({org_name}, {repo_name}) as the partitioned DataFrame is empty.")
#                 continue

#             #
#             # construct a file path that won't collide, as we process by first aggregating all days.
#             # example: ~/gharchive-benchmarks/single-hour/IssueCommentEvent/apple/foundationdb/apple_foundationdb_2023-09-20.json.gz
#             #
#             dir_path = os.path.join(output_base_dir, str(event_type), org_name, repo_name)
#             Path(dir_path).mkdir(parents=True, exist_ok=True)
#             file_path = os.path.join(dir_path, f'{org_name}_{repo_name}_{year}-{month}-{day}.json.gz')

#             print(partitioned_df.info())
            
#             rec = ArtifactWriteLogRecord(
#                 action='WRITE',
#                 record_count=len(partitioned_df),
#                 org_name=org_name,
#                 repo_name=repo_name,
#                 year=year,
#                 month=month,
#                 day=day,
#                 file_path=file_path
#             )
#             artifact_write_log.append(rec)

#             with gzip.open(file_path, 'wt', encoding='utf-8') as file:
#                 partitioned_df.to_json(file, orient='records', lines=True, 
#                                     date_format='iso', date_unit='ns', 
#                                     default_handler=default_handler)
                

#     df_log = pd.DataFrame([asdict(record) for record in artifact_write_log])

#     # artifact_base_noext = f'processing-log.{org_name}_{repo_name}_{year}-{month}-{day}'
#     # df_log.to_csv(f'{artifact_base_noext}.csv')
#     # df_log.to_parquet(f'{artifact_base_noext}.parquet')
            
#     if verbose:
#         if num_difficult_things > 0:
#             print(f'WARNING: num_difficult_things={num_difficult_things}')
    
#     return df_log



class ArtifactType(Enum):
    PARQUET = 'parquet'
    JSONLINES = 'jsonlines'

#@timing_decorator
def write_to_artifacts(dfs: Dict[str, pd.DataFrame], date: datetime, output_base_dir: str, verbose: bool = False, artifact_type: ArtifactType = ArtifactType.JSONLINES,) -> pd.DataFrame:
    """
    Writes data frames to specified artifact type (parquet or jsonlines), using an enum for artifact types.

    Parameters:
    - dfs: A dictionary of pandas DataFrame to write, keyed by a descriptor.
    - date: The date for partitioning the output.
    - output_base_dir: The base directory for writing the output files.
    - verbose: If True, print additional information during processing.
    - artifact_type: The type of artifact to write, (jsonlines or parquet))
    """
    if artifact_type == ArtifactType.PARQUET:
        write_to_arrow_dataset(dfs=dfs, date=date, output_base_dir=output_base_dir, verbose=verbose)
    elif artifact_type == ArtifactType.JSONLINES:
        df_log = write_to_jsonlines(dfs=dfs, date=date, output_base_dir=output_base_dir, verbose=verbose)
        return df_log
    else:
        raise ValueError("Unsupported artifact type. Choose ArtifactType.PARQUET or ArtifactType.JSONLINES.")

    if verbose:
        print(df_log)

    
def create_common_columns(df: pd.DataFrame, column_dtypes: dict[str, str]) -> pd.DataFrame:
    """
    create_common_columns() adds common columns w/ dtypes
    """
    
    years = [str(year) for year in range(2009, 2049)]    # BUG: github launched in 2008, +40 years, timebomb --> 2048
    months = [f"{month:02d}" for month in range(1, 13)]  # 01 to 12
    days = [f"{day:02d}" for day in range(1, 32)]        # 01 to 31
    event_type_values = [e.name for e in EventType]

    # ic(years, months, days, event_type_values)

    df['year'] = pd.Categorical(values=[], categories=years, ordered=True)
    df['month'] = pd.Categorical(values=[], categories=months, ordered=True)
    df['day'] = pd.Categorical(values=[], categories=days, ordered=True)

    df['type'] = pd.Categorical(values=[], categories=event_type_values, ordered=False)

    # TODO: add org_name and repo_name, extracted from the dict object df['repo'] "name" key.  

    # Check and update columns according to event_dtypes
    for col, dtype in column_dtypes.items():
        if col in df.columns:
            
            # copious conversions can contain creeping cpu cost creating cantankerous code cabals
            if df[col].dtype == dtype:
                msg = f"Column '{col}' already exists with correct data type."
                #ic(msg)
            else:
                msg = f"Updating data type of column '{col}' to {dtype}."
                #ic(msg)

                df[col] = df[col].astype(dtype)
        else:
            msg = f"Adding column '{col}' as {dtype}."
            #ic(msg)
            
            if dtype == 'category':
                df[col] = pd.Categorical(values=[])
            else:
                # create a new (empty) column w/ the correct dtype.
                df[col] = pd.Series(dtype=dtype)

    # ic(df)
    # print_categoricals(df)

    # defaults: DataFrame.convert_dtypes(infer_objects=True, convert_string=True, convert_integer=True, convert_boolean=True, convert_floating=True, dtype_backend='numpy_nullable'
    # https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.convert_dtypes.html#pandas.DataFrame.convert_dtypes
    # df_arrow_backed = df.convert_dtypes(dtype_backend='pyarrow')
    #
    # both int64 and Int64 result in int64[pyarrow] (the nullable type)
    # df_delta = compare_dataframes(df, df_arrow_backed, generate_viz=False)
    # ic(df_delta)

    return df.convert_dtypes(dtype_backend='pyarrow')

@dataclass
class MissingDataRecord:
    event_id: str
    event_type: str
    error_message: str

def process_file(input_file_path: str, 
                 origin_filters: OriginFilterSets,
                 batch_size=10000) -> Tuple[Dict[EventType, pd.DataFrame], List[MissingDataRecord]]:
    """
    process_file transform a single gharchive.org archive file into parquet files
    """
      
    # Extract date string (YYYY-MM-DD) from the file name
    base_name = os.path.basename(input_file_path)
    date_str = base_name.split('.')[0]

    dfs = {event_type: pd.DataFrame() for event_type in EventType}
    missing_data_records = []

    # https://medium.com/dunder-data/data-types-and-missing-values-aa0003e51b27
    # the source of much late night debugging.  int64 is not nullable.  the new pandas dtype Int64 is.
    # 
    event_dtypes = {
        'id': pd.Int64Dtype(),
        'type': 'category',
        'actor': object,
        'repo': object,
        'payload': 'string',
        'public': bool,
        'created_at': 'datetime64[ns, UTC]',
        'org': object,
        'org_name': 'string',
        'repo_name': 'string'
    }

    # as data is added it'll be coerced to the correct type without balooning memory
    for et, df in dfs.items():
        #ic(et)
        df = create_common_columns(df, event_dtypes)
        #ic(et, df.shape)

    # create a dictionary of lists, one per event type
    batch_data = {event_type: [] for event_type in EventType}

    # Precompute the mapping of event type strings to EventType enum values
    event_type_map = {event_type.value: event_type for event_type in EventType}

    # for each of the (potentially millions of) lines in the file, extract the event_type and org_name
    # and append the full line to the appropriate batch_data list, then update the appropriate DataFrame as needed.
    # ic(date_str, input_file_path)

    # CHUNK_SIZE_8_MB = 8 * 1024 * 1024
    # CHUNK_SIZE_16_MB = 16 * 1024 * 1024
    # CHUNK_SIZE_32_MB = 32 * 1024 * 1024
    # CHUNK_SIZE_64_MB = 64 * 1024 * 1024
    for line in read_gzip_file(input_file_path, CHUNK_SIZE_8_MB):
        try:
            # quickly determine event type and if repo is in the org list we're filtering for
            event_type, line_data = process_line(line, origin_filters, event_type_map)

            if event_type:
                batch_data[event_type].append(line_data)

                if len(batch_data[event_type]) >= batch_size:
                    #ic('batch_size reached', event_type.name, batch_size)
                    
                    df = dfs[event_type]
                    df = update_dataframe(df, batch_data[event_type])
                    dfs[event_type] = df

                    # Clear batch data
                    batch_data[event_type] = []
        except Exception as e:
            event_id = None
            try:
                # if we can, get id of failing event
                event_data = json.loads(line)
                event_id = event_data.get('id')
            except:
                print(f"Error processing line: {str(e)}\n---\n{line}\n---\n")
                pass

            # Log the missing data record
            missing_data_record = MissingDataRecord(
                event_id=str(event_id),
                event_type=event_type.name if event_type else None,
                error_message=str(e)
            )
            missing_data_records.append(missing_data_record)

    for event_type, leftovers in batch_data.items():
        # if there are no remaining records it'll be an empty list
        if leftovers:
            df = dfs[event_type]
            df = update_dataframe(df, leftovers)
            dfs[event_type] = df

    return dfs, missing_data_records

@dataclass
class ProcessingContext:
    source_dir: str
    target_dir: str
    no_keep: bool
    origin_filters: Optional[OriginFilterSets]
    verbose: bool
    workers: int
    log_results: str

#@timing_decorator
def process_day(context: ProcessingContext, day: str):
    """ 
    Process all files for a given day and aggregate the data.
    """
    ic(day, context)

    source_dir     = context.source_dir
    target_dir     = context.target_dir
    no_keep        = context.no_keep
    origin_filters = context.origin_filters
    verbose        = context.verbose

    log_dict = {}  # Use a regular dictionary instead of g_manager.dict()
    all_missing_data_records = []

    # Initialize a dictionary to store aggregated dataframes for all event types
    aggregated_dfs = {event_type: pd.DataFrame() for event_type in EventType}

    # Process all files for the given day
    for fn in glob.glob(os.path.join(source_dir, f'{day}-*.json.gz')):
        logging.info(f'Processing: {fn}')

        # this is per event queue size before disk flush is necessary
        # TODO: surface as a parameter 
        batch_size = 5000
        
        if not origin_filters:
            # no origin filter = all records. This means LOTS of memory since we're finding all records
            batch_size = 50000     

        try:
            # Attempt to process file, get the returned dataframes
            file_dfs, missing_data_records = process_file(fn, origin_filters, batch_size=batch_size)
            all_missing_data_records.extend(missing_data_records)

            # Aggregate dataframes for each event type
            for event_type, df in file_dfs.items():
                if not df.empty:
                    aggregated_dfs[event_type] = pd.concat([aggregated_dfs[event_type], df], ignore_index=True)
            
            if no_keep:
                os.remove(fn)

            #print(f'Finished processing file: {fn}')

        except Exception as e:
            handle_exception()
            logging.error(f'Error processing file: {fn}, error: {str(e)}')
            log_dict[fn] = f'Fail: {str(e)}'

    logging.info(f'Finished processing all files for day: {day}')

    date = datetime.strptime(day, '%Y-%m-%d')
    
    if verbose:
        for et, df in aggregated_dfs.items():
            msg = "{:<29} | {:>10}".format(str(et), df.shape[0])
            logging.info(f'\t{msg}')
    

    ###
    # Write aggregated dataframes (up to 20 event types if present) to disk
    #
    # * these land here: event_type/org/repo/org_repo_YYYY-MM-DD.json.jz
    # * they replace orders of magnitude more files into consolidated per-repo-per-event files.
    # * the source is 1 file per 20 event_type per "org/repo" / {day}.json.gz
    ###
    try:
        df_log = write_to_artifacts(aggregated_dfs, date, target_dir, verbose)
        if 'record_count' in df_log.columns:
            summary_msg = (
                f"records={df_log['record_count'].sum()}, "
                f"orgs={df_log['org_name'].nunique()}, "
                f"repos={df_log['repo_name'].nunique()}, "
                f"event_types={set(df_log['event_type'].to_list())}, "
                f"start={df_log['year'].min()}-{df_log['month'].min().zfill(2)}-{df_log['day'].min().zfill(2)}, "
                f"stop={df_log['year'].max()}-{df_log['month'].max().zfill(2)}-{df_log['day'].max().zfill(2)}")
            log_dict[day] = summary_msg
        else:
            log_dict[day] = "No records found"
    except Exception as e:
        handle_exception()
        logging.error(f'Error writing artifacts for day: {day}, error: {str(e)}')
        log_dict[day] = f'Fail: {str(e)}'


    print(f'Finished processing day: {day}, log_dict length: {len(log_dict)}')
    return log_dict  # Ensure that log_dict is always returned

#@timing_decorator
def process_days(context: ProcessingContext, days: list[str]):
    """process_days Create multiprocessing Pool, Manager, and create one task per day to process."""
    
    ic()
    log_dict = {}  # Use a regular dictionary instead of g_manager.dict()
    results = []

    if context.verbose:
        ic(g_pool, g_manager, log_dict, results)

    try:
        logging.info(f"Processing {len(days)} days using {context.workers} workers")
        # ... rest of the function

    except KeyboardInterrupt:
        print("Caught KeyboardInterrupt, terminating workers")
        g_pool.terminate()
    finally:
        g_pool.close()

    for result in results:
        log_dict.update(result)

    if context.verbose:
        ic('Worker Results')
        ic('--------------')
        for day, status in log_dict.items():
            msg = f'Day: {day}, Status: {status}'
            ic(msg)

    if log_dict and context.log_results:
        with open(context.log_results, 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(['Day', 'Status'])  # Write header row
            for day, status in log_dict.items():
                writer.writerow([day, status])

        df_log_dict = pd.DataFrame.from_dict(log_dict, orient='index', columns=['Status'])
        df_log_dict.index.name = 'Day'
        df_log_dict.to_parquet(f'{context.log_results}.parquet', engine='pyarrow')
    
    return log_dict

def parse_args():
    ic()

    parser = argparse.ArgumentParser(description="Process GitHub Archive data.")
    
    parser.add_argument("--source", required=True, help="Source directory path")
    parser.add_argument("--target", required=True, help="Target directory path")
    parser.add_argument("--no-keep", action='store_true', required=False, help="DESTRUCTIVE: delete source archives after processing")
    parser.add_argument("--org-file", default=None, help="Path to the org list file")
    parser.add_argument("--verbose", action='store_true', help="Enable verbose output")
    parser.add_argument("--workers", type=int, default=multiprocessing.cpu_count(), help="Number of workers in the pool manager")
    parser.add_argument("--log-results", default=f'{os.path.splitext(os.path.basename(__file__))[0]}-worker-results.csv', help="Path to save the log_dict file")
    args = parser.parse_args()

    # Environment variables override command line arguments
    args.source_dir = os.getenv('GHA_SOURCE_DIR', args.source)
    args.target_dir = os.getenv('GHA_TARGET_DIR', args.target)
    args.no_keep = os.getenv('GHA_NO_KEEP', args.no_keep)
    args.org_file = os.getenv('GHA_ORG_LIST_FILE', args.org_file)
    args.verbose = bool(os.getenv('GHA_VERBOSE', args.verbose))
    args.workers = int(os.getenv('GHA_WORKERS', args.workers))
    args.log_results = os.getenv('GHA_LOG_RESULTS', args.log_results)
    
    args.log_results = os.path.join(args.target_dir, args.log_results)

    if args.verbose:
        ic(args)

    # Validation
    if not os.path.exists(args.source_dir):
        sys.exit(f'Error: Source directory {args.source_dir} does not exist.')
    if not os.path.exists(args.target_dir):
        sys.exit(f'Error: Target directory {args.target_dir} does not exist.')
    if args.org_file and not os.path.exists(args.org_file):
        sys.exit(f'Error: Org list file {args.org_file} does not exist.')

    return args

###



@timing_decorator
def main():
    global g_pool, g_manager
    
    print(f"Current Working Directory: {os.getcwd()}")
    print(f"Script Path: {os.path.abspath(__file__)}")

    # Set working directory to the location the script was called from
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    ic((f'cwd: {os.getcwd()}'))

    args = parse_args()

    source: str = args.source
    target: str = args.target
    no_keep: bool = args.no_keep
    
    if args.org_file:
        origin_filters = get_origin_filters(args.org_file)
    else:
        origin_filters = None

    days: list[str] = discover_days(source)
    verbose: bool = args.verbose
    workers: int = args.workers
    log_results: str = args.log_results

    summary = f'{workers} workers, source: {source}, {len(days)} days: {days[0]} -->  {days[-1]})'
    print(summary)

    context = ProcessingContext(
        source_dir=source,
        target_dir=target,
        no_keep=no_keep,
        origin_filters=origin_filters,
        verbose=verbose,
        workers=workers,
        log_results=log_results
    )

    g_manager = Manager()
    g_pool = Pool(processes=workers)        
    if verbose:
        print('Starting PoolManager')
        ic(context)
    try:
        ret = process_days(context, days)
        
    except KeyboardInterrupt:
        print("Interrupted by user")
    finally:
        g_pool.close()
        g_pool.terminate()

    print(ret)
    
    # Print summary of missing/malformed events
    missing_data_files = glob.glob(os.path.join(target, 'missing_data_*.csv'))
    if missing_data_files:
        print("Missing Data Records:")
        for file_path in missing_data_files:
            missing_data_df = pd.read_csv(file_path)
            print(f"File: {file_path}: Total missing records {len(missing_data_df)}")
            print("---")
            print(missing_data_df)
            print("---")
    else:
        print("No missing data records found.")
    print('Goodbye!')


if __name__ == "__main__":
    main()