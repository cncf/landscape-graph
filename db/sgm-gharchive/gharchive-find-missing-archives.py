#!/usr/bin/env python3

# python gharchive-find-missing-archives.py --help                          
# usage: gharchive-find-missing-archives.py [-h] [--years [YEARS ...]] [--start_date START_DATE] [--end_date END_DATE] [--persist]
#                                           [--filename FILENAME] [--missing_files_list]
#                                           directory

# Check existence of hourly archive files in a specified directory.

# positional arguments:
#   directory             Directory path to check for files

# options:
#   -h, --help            show this help message and exit
#   --years [YEARS ...]   Optional: Year(s) to check, e.g., 2023 or 2020 2021 2022
#   --start_date START_DATE
#                         Optional: Start date in YYYY-MM-DD format
#   --end_date END_DATE   Optional: End date in YYYY-MM-DD format
#   --persist             Optional: Persist data to file
#   --filename FILENAME   Optional: Base filename for persisted data
#   --missing_files_list  Optional: Create a list of missing files. Defaults to 'gha-missing-files.txt'
#   --download_missing    Optional: Download missing files after analysis.

import pandas as pd
import os
from datetime import datetime
import argparse
from tqdm import tqdm
import pyarrow as pa
import pyarrow.feather as feather
import requests

def generate_and_check_filenames(start_date: datetime, end_date: datetime, directory: str) -> pd.DataFrame:
    date_range = pd.date_range(start=start_date, end=end_date, freq='H')
    df = pd.DataFrame({'filename': date_range.strftime('%Y-%m-%d-') + date_range.hour.astype(str) + '.json.gz'})
    df['exists'] = df['filename'].apply(lambda x: os.path.exists(os.path.join(directory, x)))
    return df

def process_years_and_directory(years: list, directory: str) -> pd.DataFrame:
    all_files = pd.DataFrame()
    for year in years:
        start_date = datetime(year, 1, 1, 0)
        end_date = datetime(year, 12, 31, 23)
        year_files = generate_and_check_filenames(start_date, end_date, directory)
        all_files = pd.concat([all_files, year_files])
    return all_files

def persist_data(df: pd.DataFrame, format: str, filename: str):
    if format == 'feather':
        feather.write_feather(df, f'{filename}.feather')
    elif format == 'csv':
        df.to_csv(f'{filename}.csv', index=False)
    else:
        raise ValueError("Unsupported format. Only 'feather' and 'csv' are supported.")

def convert_years_to_date_ranges(years: list) -> list:
    if not years:
        return []

    sorted_years = sorted(years)
    date_ranges = []

    start_year = sorted_years[0]
    end_year = start_year

    for year in sorted_years[1:]:
        # if consecutive years, continue extending range
        if year == end_year + 1:
            end_year = year
        else:
            # Add previous range, start a new range
            date_ranges.append((datetime(start_year, 1, 1, 0), datetime(end_year, 12, 31, 23)))
            start_year = year
            end_year = year

    # Add the final range
    date_ranges.append((datetime(start_year, 1, 1, 0), datetime(end_year, 12, 31, 23)))
    return date_ranges

def generate_filenames(start_date: datetime, end_date: datetime) -> list:
    date_range = pd.date_range(start=start_date, end=end_date, freq='H')
    return [d.strftime('%Y-%m-%d-') + str(d.hour) + '.json.gz' for d in date_range]

def create_visualizations(df, summary):
    try:
        import altair as alt
        alt.data_transformers.enable("vegafusion")
        from altair import datum

        # Line Chart - Expected vs. Found Files Over Time
        line_chart = alt.Chart(df).mark_line().encode(
            x='year_month:T',
            y=alt.Y('total_files:Q', title='Total Files'),
            color='status:N'
        ).transform_fold(
            fold=['total_files', 'found_files'],
            as_=['status', 'total_files']
        )

        # Area Chart - File Sizes Over Time
        area_chart = alt.Chart(df).mark_area(opacity=0.3).encode(
            x="year_month:T",
            y=alt.Y('total_size:Q', title='Total File Size'),
        )

        # Table with rollup info
        rollup_table = alt.Chart(summary).mark_text().encode(
            y=alt.Y('year:O', axis=alt.Axis(title='Year')),
            text=alt.Text('rollup_info:N'),
            color=alt.value('black')
        ).transform_calculate(
            rollup_info=datum.total_files + ' files (' + datum.percent_found + '% found)'
        )

        # Sparklines
        sparkline = alt.Chart(summary).mark_line().encode(
            x='month:O',
            y='found_files:Q',
            color=alt.value('lightgray')
        ).properties(width=100, height=50)

        chart = (line_chart | area_chart) & (rollup_table | sparkline)

        chart_vega = chart.to_dict(format='vega')
        return chart_vega

    except ImportError as e:
        if e.name == 'altair_viewer':
            print("Altair viewer is not installed. Visualizations cannot be displayed.")
        else:
            print("Altair is not installed. No visualizations will be generated.")
        return None

def download_file(url, directory):
    local_filename = os.path.join(directory, url.split('/')[-1])

    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)

    return local_filename

def parse_args():
    parser = argparse.ArgumentParser(description="Check existence of hourly archive files in a specified directory.")
    parser.add_argument("--years", type=int, nargs='*', help="Optional: Year(s) to check, e.g., 2023 or 2020 2021 2022")
    parser.add_argument("--start_date", type=lambda s: datetime.strptime(s, '%Y-%m-%d'), help="Optional: Start date in YYYY-MM-DD format")
    parser.add_argument("--end_date", type=lambda s: datetime.strptime(s, '%Y-%m-%d'), help="Optional: End date in YYYY-MM-DD format")
    parser.add_argument("--persist", action='store_true', help="Optional: Persist data to file")
    parser.add_argument("--filename", type=str, help="Optional: Base filename for persisted data")
    parser.add_argument("--missing_files_list", action='store_true', help="Optional: Create a list of missing files. Defaults to 'gha-missing-files.txt'")
    parser.add_argument("--download_missing", action='store_true', help="Optional: Download missing files after analysis.")
    parser.add_argument("directory", type=str, help="Directory path to check for files")
    args = parser.parse_args()

    if args.years is None and (args.start_date is None or args.end_date is None):
        parser.error("Either years or both start_date and end_date must be provided.")
    
    return args

#
# main
#

def main():
    args = parse_args()

    if args.years:
        date_ranges = convert_years_to_date_ranges(args.years)
    else:
        date_ranges = [(args.start_date, args.end_date)]

    all_files = pd.DataFrame()
    all_filenames = []

    print("Generating filenames...")
    for start_date, end_date in date_ranges:
        filenames = generate_filenames(start_date, end_date)
        all_filenames.extend(filenames)

    print("Checking that expected files exist...")
    file_existence_data = []
    for filename in tqdm(all_filenames, desc="Processing", unit="file"):
        exists = os.path.exists(os.path.join(args.directory, filename))
        file_existence_data.append(pd.DataFrame({'filename': [filename], 'exists': [exists]}))

    all_files = pd.concat(file_existence_data, ignore_index=True)

    if args.persist:
        base_filename = args.filename if args.filename else datetime.now().strftime("%Y%m%d%H%M%S")
        persist_data(all_files, 'feather', base_filename)
        persist_data(all_files, 'csv', base_filename)

    if args.missing_files_list:
        missing_files = all_files[~all_files['exists']]['filename']
        missing_files.to_csv('gha-missing-files.txt', index=False, header=False)
        print("Missing files list saved to 'gha-missing-files.txt'")

    print("Completed. File existence check results:")

    # intentionally nested, assumes args.directory to avoid tuples and remain tidy
    def get_file_size(filename):
        file_path = os.path.join(args.directory, filename)
        return os.path.getsize(file_path) / (1024 ** 3) if os.path.exists(file_path) else 0

    all_files['size_gb'] = all_files['filename'].apply(get_file_size).round(2) # note, round needs to happen outside lambda
    all_files['year'] = all_files['filename'].str.extract(r'(\d{4})')
    all_files['month'] = all_files['filename'].str.extract(r'-(\d{2})-')
    
    # Group by year and month with file size details in GB
    summary = all_files.groupby(['year', 'month']).agg(
        total_files=('exists', 'size'),
        total_size_gb=('size_gb', 'sum'),
        missing_files=('exists', lambda x: (~x).sum()),
        found_files=('exists', 'sum'),
        found_size_gb=('size_gb', lambda x: x[x > 0].sum())
    ).reset_index()

    # Calculate percentages and average file size in GB
    summary['percent_found'] = (summary['found_files'] / summary['total_files'] * 100).round(1)
    summary['avg_file_size_gb'] = (summary['found_size_gb'] / summary['found_files']).round(2)

    # Yearly roll-up summary with size details in GB
    yearly_summary = summary.groupby('year').agg(
        total_files=('total_files', 'sum'),
        total_size_gb=('total_size_gb', 'sum'),
        missing_files=('missing_files', 'sum'),
        found_files=('found_files', 'sum'),
        found_size_gb=('found_size_gb', 'sum')
    ).reset_index()  # Resets the index to include 'year' as a column

    yearly_summary['percent_found'] = (yearly_summary['found_files'] / yearly_summary['total_files'] * 100).round(1)
    yearly_summary['avg_found_file_size_gb'] = (yearly_summary['found_size_gb'] / yearly_summary['found_files']).round(2)

    print("\nMonthly Summary:")
    print(summary.to_string(index=False))

    print("\nYearly Roll-up Summary:")
    print(yearly_summary.to_string(index=False))

    visualizations = create_visualizations(all_files, yearly_summary)
    if visualizations:
        try:
            visualizations.show()
        except Exception as e:
            print(f"Error displaying visualizations: {e}")

    if args.download_missing:
        missing_files = all_files[~all_files['exists']]['filename']
        if not missing_files.empty:
            print (f'\nMISSING FILES:\n{missing_files.to_string(index=False)}\n')  
            confirm = input("Do you want to download the missing files? (yes/no): ")
            if confirm.lower() == 'yes':
                print("Downloading missing files...")
                for filename in missing_files:
                    url = f"https://data.gharchive.org/{filename}"
                    print(f"Downloading {url}...")
                    download_file(url, args.directory)
                print("\nDownload completed.")
            else:
                print("Download cancelled.")
        else:
            print("No missing files to download.")

if __name__ == "__main__":
    main()

