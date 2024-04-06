#!/usr/bin/env bash

set -euo pipefail

handle_sigint() {
    echo "Caught Ctrl+C, stopping..."
    # Perform any necessary cleanup here
    exit 1
}

# Trap SIGINT and call handle_sigint when it's received
trap 'handle_sigint' SIGINT

# Usage: start_dstat <log_dir>
start_dstat() {
  dstat -cdngy --output "$1/dstat.log" &
}

# # Usage: graph_dstat <log_dir> 
# graph_dstat() {
#   dstat-to-graphite < "$1/dstat.log" > "$1/dstat.png"
# } 

display_banner() {
    echo "===================================="
    echo "  gharchive: JSON to Parquet        "
    echo "===================================="
    echo
}
display_banner

display_help() {
    echo "Usage: $0 [options]"
    echo
    echo "Options:"
    echo "  -s, --source <dir>        Source directory containing subdirectories (required)"
    echo "  -t, --target <dir>        Target directory for consolidated files (optional)"
    echo "  -d, --dry-run             Perform a dry run without actual concatenation"
    echo "  -v, --verbose             Enable verbose output"
    echo "  -h, --help                Display this help text"
    echo
}

SOURCE=""
TARGET=""
DRY_RUN=0
VERBOSE=0

loggit() {
    if [[ $VERBOSE -eq 1 ]]; then
        echo "$@"
    fi
}

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -s|--source)
            SOURCE="$2"
            shift 2
            ;;
        -t|--target)
            TARGET="$2"
            shift 2
            ;;
        -d|--dry-run)
            DRY_RUN=1
            shift
            ;;
        -v|--verbose)
            VERBOSE=1
            shift
            ;;
        -h|--help)
            display_help
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            display_help
            exit 1
            ;;
    esac
done

if [[ -z "$SOURCE" ]]; then
    echo "Error: Source directory is required. Use -s or --source to specify it."
    display_help
    exit 1
fi

if [ ! -d "$SOURCE" ]; then
    echo "The specified source directory does not exist: $SOURCE"
    exit 1
fi

if [[ -z "$TARGET" ]]; then
    TARGET="$SOURCE"
else
    mkdir -p "$TARGET"
fi

targetLogsDir="$TARGET/logs"
mkdir -p "$targetLogsDir"

# Remove trailing slashes if present
SOURCE="${SOURCE%/}"
TARGET="${TARGET%/}"

loggit "Source: $SOURCE"
loggit "Target: $TARGET"
loggit "Dry Run: $DRY_RUN"
loggit "Verbose: $VERBOSE"

echo "WARNING: use at your own risk if calling from outside this repo"

GIT_TOPLEVEL="$(git rev-parse --show-toplevel)"

sgmRoot="$GIT_TOPLEVEL/db/scm/sgm-gharchive"
echo "sgmRoot: ${sgmRoot}"

schemaDir="$sgmRoot/schema"
mkdir -p "$schemaDir"
echo "schemaDir: ${schemaDir}"

echo "Consolidating JSON files in $SOURCE to parquest files in $TARGET"
consolidated_files=($(find "$SOURCE" -name '*-consolidated.gz'))

if [[ ${#consolidated_files[@]} -eq 0 ]]; then
    echo "No consolidated files found in $SOURCE"
    exit 0
fi

echo "consolidated_files: ${consolidated_files[@]}"

ls -lahF "$schemaDir"
ls -lahF "$SOURCE"
ls -lahF "$TARGET"


# Convert consolidated JSON files to Parquet in parallel
# This uses GNU parallel to run concurrent jobs for each file
#
# Explanation:
#
# parallel 
#   --bar              # Show progress bar for job status
#   --jobs NUM         # Run NUM concurrent jobs 
#   'CMD'              # Command to run for each job
#   ::: LIST           # Pass LIST items as arguments to CMD 
#
# For each consolidated JSON file, this will:
#
# 1. Call json2parquet, passing the json file as arg 1
#    and the output parquet file as arg 2
#
# 2. The json2parquet call converts the JSON to Parquet
#    and outputs the schema to stderr
#
# 3. We redirect stderr to a .schema file with the same
#    base name as the Parquet output file
#
# So in one call we get:
#
# - JSON converted to Parquet
# - Schema file generated
# - Runs concurrently for all files 
# - Progress shown in bar
#
# This avoids calling json2parquet twice, halving the processing time.

# export PARALLEL_SEQ=1

nowDate=$(date +%Y-%m-%d)
resultsLogfile="$targetLogsDir/json2parquet-consolidated-results-$nowDate.log"
jobLogfile="$targetLogsDir/json2parquet-consolidated-joblog-$nowDate.log"

echo "$resultsLogfile"
echo "$jobLogfile"

ls -lahF "$TARGET"
echo "converting files to parquet"

# yes we could do this in a pipeline.  this makes debugging hard when things fail.
process_file() {
    local gz_file="$1"
    local target_dir="$2"
    local schema_dir="$3"
    local base_name="$(basename "$gz_file" .gz)"

    # Assuming the .gz extension is removed after decompression
    local json_file="${target_dir}/${base_name}.json"
    local parquet_file="${target_dir}/${base_name}.parquet"
    local schema_file="${schema_dir}/${base_name}.schema"
    local metadata_file="${schema_dir}/${base_name}.pqmetadata"
    

    echo "[decompress] $gzfile --> $json_file"
    pigz -v -d -k "$gz_file" -c > "$json_file" || { echo "Decompression failed for $gz_file"; return 1; }

    echo "[json2parquet] $json_file --> $parquet_file, $schema_file"
    echo json2parquet "${json_file}" "${parquet_file}" -c gzip --dictionary --statistics page 2> "${schema_file}"
    
    if json2parquet "${json_file}" "${parquet_file}" -c gzip --dictionary --statistics page 2> "${schema_file}"; then
        echo "[SUCCESS] json2parquet for ${json_file}, returned $?"
        # success, nuke intermediate files
        rm -f "$json_file"
        echo "Page stats for ${parquet_file}:"
        parquet meta "${parquet_file}" | tee "${metadata_file}"
    else
        echo "[FAILED] json2parquet for ${json_file}, returned $?"
        return 1
    fi
}

export -f process_file

#
# process all consolidated files --> parquet
#
parallelArgs=(--verbose --progress --tag --linebuffer --color \
  --jobs ${#consolidated_files[@]} \
#   --jobs 5 \
  --joblog "$jobLogfile" \
  --results "$resultsLogfile")

echo parallelArgs: "$parallelArgs[@]"

parallel "${parallelArgs[@]}" process_file {} "$TARGET" "$schemaDir" ::: "${consolidated_files[@]}"

tree --metafirst -h -t "$TARGET" > "$TARGET/tree.txt"

###
###
###

# Decompress source files into target directory
#
# ᐅ pigz --help
# Usage: pigz [options] [files ...]
#   will compress files in place, adding the suffix '.gz'. If no files are
#   specified, stdin will be compressed to stdout. pigz does what gzip does,
#   but spreads the work over multiple processors and cores when compressing.
#
# Options:
#   -0 to -9, -11        Compression level (level 11, zopfli, is much slower)
#   --fast, --best       Compression levels 1 and 9 respectively
#   -A, --alias xxx      Use xxx as the name for any --zip entry from stdin
#   -b, --blocksize mmm  Set compression block size to mmmK (default 128K)
#   -c, --stdout         Write all processed output to stdout (won't delete)
#   -C, --comment ccc    Put comment ccc in the gzip or zip header
#   -d, --decompress     Decompress the compressed input
#   -f, --force          Force overwrite, compress .gz, links, and to terminal
#   -F  --first          Do iterations first, before block split for -11
#   -h, --help           Display a help screen and quit
#   -H, --huffman        Use only Huffman coding for compression
#   -i, --independent    Compress blocks independently for damage recovery
#   -I, --iterations n   Number of iterations for -11 optimization
#   -J, --maxsplits n    Maximum number of split blocks for -11
#   -k, --keep           Do not delete original file after processing
#   -K, --zip            Compress to PKWare zip (.zip) single entry format
#   -l, --list           List the contents of the compressed input
#   -L, --license        Display the pigz license and quit
#   -m, --no-time        Do not store or restore mod time
#   -M, --time           Store or restore mod time
#   -n, --no-name        Do not store or restore file name or mod time
#   -N, --name           Store or restore file name and mod time
#   -O  --oneblock       Do not split into smaller blocks for -11
#   -p, --processes n    Allow up to n compression threads (default is the
#                        number of online processors, or 8 if unknown)
#   -q, --quiet          Print no messages, even on error
#   -r, --recursive      Process the contents of all subdirectories
#   -R, --rsyncable      Input-determined block locations for rsync
#   -S, --suffix .sss    Use suffix .sss instead of .gz (for compression)
#   -t, --test           Test the integrity of the compressed input
#   -U, --rle            Use run-length encoding for compression
#   -v, --verbose        Provide more verbose output
#   -V  --version        Show the version of pigz
#   -Y  --synchronous    Force output file write to permanent storage
#   -z, --zlib           Compress to zlib (.zz) instead of gzip format
#   --                   All arguments after "--" are treated as files
#

#####

# ᐅ parallel --help
# Usage:
#
# parallel [options] [command [arguments]] < list_of_arguments
# parallel [options] [command [arguments]] (::: arguments|:::: argfile(s))...
# cat ... | parallel --pipe [options] [command [arguments]]
#
# -j n            Run n jobs in parallel
# -k              Keep same order
# -X              Multiple arguments with context replace
# --colsep regexp Split input on regexp for positional replacements
# {} {.} {/} {/.} {#} {%} {= perl code =} Replacement strings
# {3} {3.} {3/} {3/.} {=3 perl code =}    Positional replacement strings
# With --plus:    {} = {+/}/{/} = {.}.{+.} = {+/}/{/.}.{+.} = {..}.{+..} =
#                 {+/}/{/..}.{+..} = {...}.{+...} = {+/}/{/...}.{+...}
#
# -S sshlogin     Example: foo@server.example.com
# --slf ..        Use ~/.parallel/sshloginfile as the list of sshlogins
# --trc {}.bar    Shorthand for --transfer --return {}.bar --cleanup
# --onall         Run the given command with argument on all sshlogins
# --nonall        Run the given command with no arguments on all sshlogins
#
# --pipe          Split stdin (standard input) to multiple jobs.
# --recend str    Record end separator for --pipe.
# --recstart str  Record start separator for --pipe.
#
# GNU Parallel can do much more. See 'man parallel' for details
#
# Academic tradition requires you to cite works you base your article on.
# If you use programs that use GNU Parallel to process data for an article in a
# scientific publication, please cite:
#
#   Tange, O. (2024, February 22). GNU Parallel 20240222 ('Навальный').
#   Zenodo. https://doi.org/10.5281/zenodo.10719803
#
# This helps funding further development; AND IT WON'T COST YOU A CENT.
# If you pay 10000 EUR you should feel free to use GNU Parallel without citing.


# ᐅ json2parquet --version
# json2parquet 0.17.10

# ᐅ json2parquet --help
# Usage: json2parquet [OPTIONS] <JSON> <PARQUET>
#
# Arguments:
#   <JSON>     Input JSON file, stdin if not present
#   <PARQUET>  Output file
#
# Options:
#   -s, --schema-file <SCHEMA_FILE>
#           File with Arrow schema in JSON format
#       --max-read-records <MAX_READ_RECORDS>
#           The number of records to infer the schema from. All rows if not present. Setting max-read-records to zero will stop schema inference and all columns will be string typed
#   -c, --compression <COMPRESSION>
#           Set the compression [possible values: uncompressed, snappy, gzip, lzo, brotli, lz4, zstd, lz4-raw]
#   -e, --encoding <ENCODING>
#           Sets encoding for any column [possible values: plain, rle, bit-packed, delta-binary-packed, delta-length-byte-array, delta-byte-array, rle-dictionary]
#       --data-page-size-limit <DATA_PAGE_SIZE_LIMIT>
#           Sets data page size limit
#       --dictionary-page-size-limit <DICTIONARY_PAGE_SIZE_LIMIT>
#           Sets dictionary page size limit
#       --write-batch-size <WRITE_BATCH_SIZE>
#           Sets write batch size
#       --max-row-group-size <MAX_ROW_GROUP_SIZE>
#           Sets max size for a row group
#       --created-by <CREATED_BY>
#           Sets "created by" property
#       --dictionary
#           Sets flag to enable/disable dictionary encoding for any column
#       --statistics <STATISTICS>
#           Sets flag to enable/disable statistics for any column [possible values: none, chunk, page]
#       --max-statistics-size <MAX_STATISTICS_SIZE>
#           Sets max statistics size for any column. Applicable only if statistics are enabled
#   -p, --print-schema
#           Print the schema to stderr
#   -n, --dry
#           Only print the schema
#   -h, --help
#           Print help
#   -V, --version
#           Print version

#
# note: --dictionary without args should apply to all columns
#




# By default, GNU Parallel groups the output of each job together and only prints it when the job
# finishes. This ensures that the output from each job is kept separate and in order. However, this
# grouping process takes some CPU time.

# Disabling grouping with `--ungroup` can speed up GNU Parallel by a factor of 10 or more, as it
# reduces the CPU time required for output processing. This is particularly beneficial in scenarios
# where the exact order of output lines is not critical, or when the output can be mixed without
# causing confusion or errors.

# Since `--ungroup` allows output to be printed as soon as possible, it may cause output from
# different commands to be mixed. This means that lines from different jobs could appear interleaved
# in the output. This behavior is generally acceptable when the output is being redirected to a file
# or when the output is being processed by another tool that can handle mixed output.

# The `--ungroup` option should be used with caution, as it can lead to mixed output that might be
# difficult to interpret or process correctly. It's most suitable for scenarios where the output is
# being consumed by a tool or script that can handle mixed output, or when the exact order of output
# lines is not critical.

# using --ungroup for 10x