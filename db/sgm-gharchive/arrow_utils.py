from collections import defaultdict
from pathlib import Path

import pyarrow as pa
import pyarrow.dataset as pad
import pyarrow.dataset as ds
from pyarrow.feather import write_feather

from pyarrow import compute as pc
import pandas as pd
import time
import functools
from typing import Dict, List, Optional
from pydantic.dataclasses import dataclass as pydantic_dataclass
import pydantic


@pydantic_dataclass
class ColumnStatistics:
    name: str
    arrow_type: str
    pandas_dtype: str
    postgres_mapping: str
    num_rows_total: int
    num_non_null_rows: int
    num_null_rows: int
    num_unique_values: int
    size_bytes: int
    size_mb: float
    size_gb: float
    
# pa.Schame requires the arbitrary_types_allowed flag
# @pydantic.dataclass(arbitrary_types_allowed=True)
# class DatasetFlatteningResult:
#     arrow_schema: pa.Schema
#     pandas_dtypes: Dict[str, str]
#     dataset_summary: pd.DataFrame
#     column_statistics: pd.DataFrame
#     #column_statistics: Dict[str, ColumnStatistics]

class DatasetFlatteningResult:
  def __init__(self):
    self.arrow_schema = None  
    self.pandas_dtypes = None
    self.dataset_summary = None
    self.column_statistics = None

def arrow_to_postgres_type(arrow_type: pa.DataType) -> str:
    mapping = {
        pa.bool_(): "boolean",
        pa.int8(): "smallint",
        pa.int16(): "smallint",
        pa.int32(): "integer",
        pa.int64(): "bigint",
        pa.uint8(): "smallint",
        pa.uint16(): "integer",
        pa.uint32(): "bigint",
        pa.uint64(): "numeric",
        pa.float16(): "real",
        pa.float32(): "real",
        pa.float64(): "double precision",
        pa.string(): "text",
        pa.binary(): "bytea",
        pa.date32(): "date",
        pa.date64(): "timestamp",
        pa.timestamp('us'): "timestamp",
        # Add more mappings as needed
    }
    return mapping.get(arrow_type, "text")

def swifty_timing_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        elapsed_time = end_time - start_time
        print(f"Function '{func.__name__}' took {elapsed_time:.2f} seconds to execute.")
        return result
    return wrapper

@swifty_timing_decorator
def flatten_dataset(
    dataset: pad.Dataset, 
    output_path: str,
    columns_to_flatten: List[str],
    drop_original_columns: bool = True,
    filter_expression: Optional[pc.Expression] = None
) -> DatasetFlatteningResult:

    def file_visitor(written_file):
        print(f"path={written_file.path}")
        print(f"size={written_file.size} bytes")
        print(f"metadata={written_file.metadata}")
        print(f"partition_keys={written_file.partition_keys}")

    # Flatten the dataset w/ arrow's pd.json_normalize()
    # table = dataset.to_table()
    # flattened_table = table.flatten()
    
    Path(output_path).mkdir(parents=True, exist_ok=True)    

    partition_keys = ['org_name', 'repo_name']    
    partitioning = dataset.partitioning if dataset.partitioning is not None else ds.partitioning(partition_keys)

    writer = None

    batch_stats = {}
    schema_counts = defaultdict(int)
    final_schema = None
    
    for batch_num, batch in enumerate(dataset.to_batches(filter=filter_expression)):
        
        flattened_batch = batch.flatten(columns_to_flatten)

        if drop_original_columns:
            flattened_batch = flattened_batch.drop(columns_to_flatten)

        batch_schema = flattened_batch.schema
        if final_schema is None:
            final_schema = batch_schema

        schema_counts[batch_schema] += 1
        
        year = flattened_batch.column('year')
        month = flattened_batch.column('month')
        day = flattened_batch.column('day')

        basename_template = f'{year}-{month}-{day}' + '_part-{i}.feather'

        batch_stats[batch_num] = {
            'num_rows': len(flattened_batch),
            'null_counts': flattened_batch.null_count,
            'distinct_counts': pc.distinct_count(flattened_batch),
            'bytes': flattened_batch.nbytes
        }
        
        # Initialize the writer with the schema of the first batch and the partitioning scheme
        if writer is None:
            writer = ds.FileSystemDataset.write(
                flattened_batch.schema, 
                base_dir=output_path,
                partitioning=partitioning,
                format='feather',
                compression='lz4',
                max_partitions=4096,
                file_visitor=file_visitor, 
                existing_data_behavior='overwrite_or_ignore',
                basename_template=basename_template
            )
        
        writer.write_batch(flattened_batch)
    
    if writer is not None:
        writer.finalize()

    if len(schema_counts) > 1:
        print(f"Warning: flattened dataset contains multiple schemas:")
        for schema, count in sorted(schema_counts.items(), key=lambda item: item[1], reverse=True):
            print(f'count={count}, schema={schema}')

        print(f'Creating a union schema for all schemas in the flattened dataset...')
        try:
            union_schema = pa.unify_schemas(list(schema_counts.keys()))
            final_schema = union_schema
            print(f'Union schema:\n{union_schema}')
        except (pa.ArrowInvalid, pa.ArrowTypeError) as e:
            print(e)
            raise e


    # Generate rollup statistics
    total_rows = sum(s['num_rows'] for s in batch_stats.values())
    total_nulls = {c: sum(s['null_counts'][c] for s in batch_stats.values()) 
                   for c in flattened_batch.schema}
    total_distinct = {c: set().union(*[s['distinct_counts'][c] for s in batch_stats.values()])
                      for c in flattened_batch.schema}
    total_bytes = sum(s['bytes'] for s in batch_stats.values())

    # Create ColumnStatistics objects
    column_stats = {
        col.name: ColumnStatistics(
            name=col.name,
            arrow_type=str(col.type),
            pandas_dtype=str(col.type.to_pandas_dtype()),
            postgres_mapping=arrow_to_postgres_type(col.type),
            num_rows_total=total_rows,
            num_null_rows=total_nulls[col.name],
            num_unique_values=len(total_distinct[col.name]),
            size_bytes=total_bytes * col.type.bit_width() / 8,
            size_mb=total_bytes * col.type.bit_width() / (8 * 1024**2),
            size_gb=total_bytes * col.type.bit_width() / (8 * 1024**3)
        )
        for col in flattened_batch.schema
    }
    column_stats_df = pd.DataFrame.from_dict(column_stats, orient='index')

    org_names = [v.name for v in column_stats.values()]
    repo_names = [v.arrow_type for v in column_stats.values()]
    num_rows = [v.num_rows_total for v in column_stats.values()]
    num_nulls = [v.num_null_rows for v in column_stats.values()]
    num_uniques = [v.num_unique_values for v in column_stats.values()]

    # Create the DataFrame 
    summary_df = pd.DataFrame({
        'org_name': org_names,
        'repo_name': repo_names,
        'num_rows_total': num_rows,
        'num_null_rows': num_nulls,
        'num_unique_values': num_uniques
    })

    # Return DatasetFlatteningResult
    result = DatasetFlatteningResult(
        arrow_schema=final_schema,
        pandas_dtypes={col: stat.pandas_dtype for col, stat in column_stats.items()},
        dataset_summary=summary_df,
        column_statistics=column_stats_df
    )

    return result



# def summarize_dataset(dataset: pad.Dataset) -> None:
#     num_rows: int = 0
#     num_batches: int = 0
#     columns: List[str] = []

#     for i, batch in enumerate(dataset.to_batches()):
#         num_rows += len(batch)
#         num_batches += 1
#         if i == 0:
#             columns = batch.schema.names

#     print(f"Number of rows: {num_rows}")
#     print(f"Number of batches: {num_batches}")
#     print(f"Column names: {columns}")


# def print_batches(dataset: pad.Dataset) -> None:
#     for record_batch in dataset.to_batches():
#         print(len(record_batch))
