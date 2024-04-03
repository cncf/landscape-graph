
"""Module notebook_utils: Provides utility functions for data science workflows.

This module includes functions for setting up output directories, profiling, 
CLI argument parsing, and logging, suitable for use in Jupyter notebooks and as 
a standalone CLI tool."""

import argparse
import cProfile
import gc
import glob
import json
import logging
import os
import pprint as pp
import sys

from pathlib import Path


import altair as alt    # https://altair-viz.github.io/
import vegafusion as vf # https://vegafusion.io/

# ## VegaFusion (https://vegafusion.io)
#
#   - https://vegafusion.io/mime_renderer.html#row-limit
#
#   - Charts of large datasets that do not perform any form of aggregation (e.g. Scatter Plots)
#   can still result in very large chart specification that risk crashing the web browser they
#   are displayed in. To protect against this, the VegaFusion mime renderer supports an optional
#   row_limit argument to the enable() function.
#
#   - Unlike the default Altair row limit, this row limit is enforced after all supported data
#   transformations have been applied.
#
#   - For example, in the case of a histogram there will be one row per histogram bin after
#   transforms are applied.
#
#   - The default row_limit is 10,000
#
# ## How it works
#
#   - The mime renderer plugs into Altair’s data transformer and renderer frameworks to intercept
#     requests to render the Vega-Lite specs produced by Altair and performs the following:
#
#   - Inline pandas DataFrames are extracted and converted into Arrow tables
#   - The Vega-Lite spec is compiled to Vega using VlConvert
#
#   - The Arrow tables from (1) and the Vega spec from (2) are fed into the VegaFusion runtime.
#     The runtime evaluates transforms and identifies the subset of columns that are actually required
#     by the visualization. The resulting data is inlined back into the Vega spec.
#
#   - The Vega spec resulting from (3) is displayed using a Jupyter mimetype bundle
#
#   - Unlike the widget renderer, the mime renderer works entirely in Python and does not require any
#     custom notebook extensions.
#
# * Inline Data Transformer
#   - Unlike the VegaFusion widget renderer, the mime renderer does not require writing Chart DataFrames
#     to files on disk. Instead, these DataFrames are converted to Arrow tables and passed directly
#     to the VegaFusion runtime (bypassing JSON serialization).
#
#   - This approach is implemented by the "vegafusion-inline" data transformer, which is automatically
#     enabled by the vegafusion.enable() function.
# vf.enable(row_limit=None)
vf.enable(mimetype='vega', row_limit=50000)

import dask.dataframe as dd
import humanize
import numpy as np
import pandas as pd
import polars as pl
import pyarrow as pa
import pyarrow.dataset as ds
import pyarrow.parquet as pq

from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"

# Set pandas display options
pd.set_option('display.max_rows', 1024)
pd.set_option('display.max_columns', 512)
pd.set_option('display.width', 1024)

from collections import defaultdict
from enum import Enum
from icecream import ic
from pandas.api.types import (CategoricalDtype, is_bool_dtype,
                              is_categorical_dtype, is_datetime64_any_dtype,
                              is_float_dtype, is_integer_dtype, is_numeric_dtype)
from sqlalchemy import types as sa_types
from sqlalchemy.dialects import postgresql as sa_dialect_postgresql

import adbc_driver_postgresql.dbapi

# WIP / experimenting
from ipydatagrid import DataGrid

# # so that we can run both local python as well as juypter notebooks
# if "display" not in globals():
#     def display(df: pd.DataFrame) -> None:
#         dfsummary(df)

#     def display(dfs: list[pd.DataFrame]) -> None:
#         dfsummaries(dfs)

def gc_collect():
    '''Garbage collect, to reduce memory footprint'''
    gc.collect()

_ppdf_enabled = True
#_ppdf_enabled = False

def ppdf(df:pd.DataFrame, verbose:bool = True, head_num:int = 5) -> None:
    if not _ppdf_enabled:
       return
    print(df.head(head_num).info(verbose=verbose))

def dfsummary(df: pd.DataFrame, verbose:bool = True) -> None:
    if not _ppdf_enabled:
       return
    if 0 == nrows(df):
        print(f'*** dfsummary: empty dataframe ***')
        return
    print(df.info(show_counts=True, verbose=verbose))

def dfsummaries(dfs: list[pd.DataFrame], verbose:bool = True) -> None:
    for k in dfs.keys():
        print(f'*** dfsummary: {k} ***')
        dfsummary(dfs[k], verbose)

def dfoneline(name: str, df: pd.DataFrame) -> None:
    '''Print a dataframe on a single line'''
    print(f'{name}, memory: {df.memory_usage(deep=True).sum()} bytes, shape: {df.shape}, cols={df.columns.to_list()}')

def dfoneliners(entities: defaultdict[pd.DataFrame]) -> None:
    for name, df in entities.items():
        dfoneline(name, df)

def dfmemstat(df: pd.DataFrame, deep: bool = True) -> None:
    if not _ppdf_enabled:
       return
    print(f'{df.memory_usage(deep=deep)}')

def dfmemstats(entities: defaultdict[pd.DataFrame]) -> None:
    for name, df in entities.items():
        dfoneline(name, df)
        dfmemstat(df)

def nrows(df: pd.DataFrame) -> int:
    '''The one true way to get the number of rows in a dataframe'''
    return df.shape[0]

def make_categorical(df: pd.DataFrame, cols) -> None:
    '''column --> pandas category type to reducing memory footprint'''
    for col in cols:
        df[col] = df[col].astype('category')

def assert_col_exists(df: pd.DataFrame, col: str) -> None:
    '''assert_col_exists(df, entity_name) - raise ValueError if an entity_name isnot in df.columns.values'''
    if col not in df.columns.values:
        raise ValueError(f'col: {col} not in df.columns.values: {df.columns.values}')

def assert_cols_exist(df: pd.DataFrame, cols: list[str]) -> None:
    '''assert_cols_exist(df, entity_names) - raise ValueError if an entity_name is not in df.columns.values'''
    cols_set = set(cols)
    for c in cols_set:
        assert_col_exists(df, c)

def setup_output_dir(output_dir='out/'):
    """Create the output directory if it does not exist."""
    os.makedirs(output_dir, exist_ok=True)
    return output_dir

def profile(output_file, output_dir='out/'):
    """Decorator for profiling a function and saving the profile results."""
    def decorator(func):
        def wrapper(*args, **kwargs):
            profile = cProfile.Profile()
            profile.enable()
            result = func(*args, **kwargs)
            profile.disable()
            profile_path = os.path.join(output_dir, f'{output_file}.prof')
            profile.dump_stats(profile_path)
            with open(f'{output_dir}{output_file}.txt', 'w') as f:
                profile.print_stats(stream=f)
            df = pd.DataFrame(profile.getstats())
            df.to_feather(f'{output_dir}{output_file}.feather')
            return result
        return wrapper
    return decorator

def setup_logging():
    """Configure the logging settings."""
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def parse_cli_args():
    """Parse CLI arguments for the module."""
    parser = argparse.ArgumentParser(description='Notebook Utilities CLI')
    parser.add_argument('-o', '--output', type=str, default='out/', help='Output directory')
    parser.add_argument('-f', '--file', type=str, help='Input file to process')
    # Add more CLI arguments as needed
    return parser.parse_args()

if __name__ == '__main__':
    args = parse_cli_args()
    setup_output_dir(args.output)
    # Add more CLI logic here

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

def clean_dataframe(df: pd.DataFrame, categorical_threshold: float = 0.05, auto_categorical: bool = False) -> pd.DataFrame:
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
        if is_numeric_dtype(df[col]) and not is_bool_dtype(df[col]):
            safe_downcast(df, col, inplace=True)
        elif col.endswith('_at') and not is_datetime64_any_dtype(df[col]):
            try:
                df[col] = pd.to_datetime(df[col])
            except ValueError:
                pass  # Handle or log error as appropriate

    if auto_categorical:
        #ic('auto_categorical: Searching for categorical data in all columns', categorical_threshold, df.columns)

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

        # categorical_cols, len(categorical_cols))
        
    return df

def compare_dataframes(df1: pd.DataFrame, 
                       df2: pd.DataFrame, 
                       generate_viz: bool = True) -> pd.DataFrame:
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

    print(f"\nTotal memory savings for categorical columns: {savings_categorical}")
    print(f"Total memory savings for date columns: {savings_date}")
    print(f"Total memory savings for numerical columns: {savings_numerical}")

    #ic(comparison)

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
            title='Memory Reduction by Column'
        ).interactive()

        chart.display()

    return comparison

