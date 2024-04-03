import json
import sys
import argparse
from tqdm import tqdm
from typing import List, Tuple

def file_size(file_path: str) -> int:
    with open(file_path, 'rb') as f:
        return f.seek(0, 2)

def find_bad_lines(file_path: str, chunk_size: int = 1024 * 1024 * 16) -> List[Tuple[int, str]]:
    bad_lines = []
    buffer = ''
    line_number = 0
    total_size = file_size(file_path)
    
    with open(file_path, 'r') as file:
        with tqdm(total=total_size, unit='B', unit_scale=True, desc="Reading") as pbar:
            while True:
                chunk = file.read(chunk_size)
                if not chunk:
                    break
                pbar.update(len(chunk.encode('utf-8')))
                buffer += chunk
                lines = buffer.split('\n')
                buffer = lines.pop()

                for line in lines:
                    line_number += 1
                    try:
                        json.loads(line)
                    except json.JSONDecodeError:
                        bad_lines.append((line_number, line.strip()))
                        print(f"Bad line found at line {line_number}: {line.strip()}") # Notify immediately
                        
    # process the last chunk of data, which might not end with a newline.
    # This ensures that the last line of the file is correctly handled,
    # especially if it doesn't end with a newline. This step is necessary
    # for files where the last line doesn't end with a newline
    if buffer.strip():
        line_number += 1
        try:
            json.loads(buffer)
        except json.JSONDecodeError:
            bad_lines.append((line_number, buffer.strip()))
            print(f"Bad line found at line {line_number}: {buffer.strip()}") # Notify immediately

    return bad_lines

def write_clean_file(input_file: str, bad_lines: List[Tuple[int, str]], output_file: str):
    bad_line_numbers = sorted(line_number for line_number, _ in bad_lines)
    buffer = ''
    line_number = 0
    total_size = file_size(input_file)
    
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
        with tqdm(total=total_size, unit='B', unit_scale=True, desc="Writing") as pbar:
            # Initialize the start of the first good range
            good_start = 0
            for bad_line_number in bad_line_numbers:
                # Read and write good lines up to the bad line
                while line_number < bad_line_number:
                    chunk = infile.readline()
                    if not chunk:
                        break
                    pbar.update(len(chunk.encode('utf-8')))
                    line_number += 1
                    if line_number > good_start:
                        outfile.write(chunk)
                # Skip the bad line
                infile.readline()
                line_number += 1
                # Update the start of the next good range
                good_start = line_number

            # Write the remaining good lines
            for line in infile:
                pbar.update(len(line.encode('utf-8')))
                outfile.write(line)

def write_clean_file_slowpoke(input_file: str, bad_lines: List[Tuple[int, str]], output_file: str, chunk_size: int = 1024 * 1024 * 16):
    bad_line_numbers = set(line_number for line_number, _ in bad_lines)
    buffer = ''
    line_number = 0
    total_size = file_size(input_file)
    
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
        with tqdm(total=total_size, unit='B', unit_scale=True, desc="Writing") as pbar:
            while True:
                chunk = infile.read(chunk_size)
                if not chunk:
                    break
                pbar.update(len(chunk.encode('utf-8')))
                buffer += chunk
                lines = buffer.split('\n')
                buffer = lines.pop()

                for line in lines:
                    line_number += 1
                    if line_number not in bad_line_numbers:
                        outfile.write(line + '\n')

            # Handle the last buffer if it's not a bad line
            if buffer.strip() and line_number + 1 not in bad_line_numbers:
                outfile.write(buffer + '\n')

def create_cli():
    parser = argparse.ArgumentParser(description="Process JSON lines files, filtering out malformed lines.")
    parser.add_argument('input_file', type=str, help='Input JSON lines file path')
    parser.add_argument('--output-file', type=str, help='Optional: Output file path for cleaned JSON lines')
    parser.add_argument('--chunk-size', type=int, default=1024*1024, help='Read chunk size in bytes (default: 16 MB)')
    args = parser.parse_args()

    bad_lines = find_bad_lines(args.input_file, args.chunk_size)
    print(f"Found {len(bad_lines)} bad lines.")
    for line_number, line in bad_lines:
        print(f"Line {line_number}: {line}")

    if args.output_file:
        write_clean_file(args.input_file, bad_lines, args.output_file)
        print(f"Cleaned file written to {args.output_file}")

if __name__ == "__main__":
    create_cli()







#############################



#############################

#############################

# import polars as pl
# import sys

# def process_file(file_path: str, output_path: str = None):
#     try:
#         df = pl.scan_ndjson(file_path, ignore_errors=True).collect()
#         if output_path:
#             df.write_ndjson(output_path)
#         return df
#     except Exception as e:
#         print(f"Error processing file: {e}")
#         return None

# def main():
#     if len(sys.argv) < 2:
#         print("Usage: python script.py <input_file> [<output_file>]")
#         sys.exit(1)
#     input_file = sys.argv[1]
#     output_file = sys.argv[2] if len(sys.argv) > 2 else None
#     process_file(input_file, output_file)

# if __name__ == "__main__":
#     main()

#############################

# import json
# import sys

# def find_bad_lines(file_path: str):
#     bad_lines = []
#     with open(file_path, 'r') as file:
#         for line_number, line in enumerate(file, start=1):
#             try:
#                 json.loads(line)
#             except json.JSONDecodeError:
#                 bad_lines.append((line_number, line.strip()))
#     return bad_lines

# def main():
#     if len(sys.argv) < 2:
#         print("Usage: python script.py <input_file>")
#         sys.exit(1)
#     input_file = sys.argv[1]
#     bad_lines = find_bad_lines(input_file)
#     print(f"Found {len(bad_lines)} bad lines.")
#     for line_number, line in bad_lines:
#         print(f"Line {line_number}: {line}")

# if __name__ == "__main__":
#     main()
