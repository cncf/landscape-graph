import argparse
import os
import glob
from pqdm.processes import pqdm
import logging
from pathlib import Path
from dataclasses import dataclass
from typing import List

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

@dataclass
class ArchiveMetrics:
    """Metrics for daily archive creation."""
    day: str
    missing_files: List[str]
    total_files: int
    total_size: int

@dataclass
class ArchiveArgs:
    """Arguments for daily archive creation."""
    workdir: str
    day: str
    outputdir: str
    dry_run: bool
    verbose: bool
    keep: bool

def create_daily_archive(args: ArchiveArgs) -> ArchiveMetrics:
    fullday_archive = os.path.join(args.outputdir, f"{args.day}.json.gz")
    missing_files = []
    total_files = 0
    total_size = 0
    for hour in range(24):
        hourly_archive = os.path.join(args.workdir, f"{args.day}-{hour}.json.gz")
        if not os.path.exists(hourly_archive):
            missing_files.append(hourly_archive)
            continue
        total_files += 1
        if not args.dry_run:
            # archives are not very large, this approach is simple and fast
            with open(hourly_archive, 'rb') as input:
                with open(fullday_archive, 'ab') as output:
                    data = input.read()
                    output.write(data)
                    total_size += len(data)
                    
    if not missing_files and not args.keep:
        for hour in range(24):
            hourly_archive = os.path.join(args.workdir, f"{args.day}-{hour}.json.gz")
            if os.path.exists(hourly_archive):
                os.remove(hourly_archive)
    return ArchiveMetrics(args.day, missing_files, total_files, total_size)


def generate_summary_report(metrics_list: List[ArchiveMetrics]) -> None:
    """Generate a summary report of the archive creation process."""
    total_days = len(metrics_list)
    total_files = sum(metrics.total_files for metrics in metrics_list)
    total_size = sum(metrics.total_size for metrics in metrics_list)
    print(f"Total Days Processed: {total_days}")
    print(f"Total Files Processed: {total_files}")
    print(f"Total Size Processed: {total_size / (1024 ** 2)} MB")

def process_day(args: ArchiveArgs) -> ArchiveMetrics:
    return create_daily_archive(args)

def discover_days(path_to_hourly_archives: str) -> list:
    days = set()
    for fn in glob.glob(f"{path_to_hourly_archives}/*-0.json.gz"):
        day = os.path.split(fn)[1].removesuffix('-0.json.gz')
        days.add(day)
    return list(days)

def main(workdir: str, outputdir: str, ncores: int, dry_run: bool, verbose: bool, generate_report: bool, keep: bool) -> None:
    if not os.path.exists(outputdir):
        os.makedirs(outputdir)
    days = discover_days(workdir)
    args_list = [ArchiveArgs(workdir, day, outputdir, dry_run, verbose, keep) for day in days]
    metrics_list = pqdm(args_list, process_day, n_jobs=ncores, desc='Processing days')
    if generate_report:
        generate_summary_report(metrics_list)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Create daily archives from hourly archives.')
    parser.add_argument('workdir', type=str, help='Directory containing hourly archives.')
    parser.add_argument('outputdir', type=str, help='Directory to output daily archives.')
    parser.add_argument('-n', '--ncores', type=int, default=min(os.cpu_count(), 60), help='Number of parallel processes to use.')
    parser.add_argument('-d', '--dry-run', action='store_true', help='Perform a dry run without creating files.')
    parser.add_argument('-v', '--verbose', action='store_true', help='Enable verbose output.')
    parser.add_argument('-r', '--generate-report', action='store_true', help='Generate a summary report after processing.')
    parser.add_argument('-k', '--keep', action='store_true', help='Keep original hourly files after daily archive created.')
    args = parser.parse_args()
    
    main(args.workdir, args.outputdir, args.ncores, args.dry_run, args.verbose, args.generate_report, args.keep)
