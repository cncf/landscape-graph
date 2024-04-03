#!/bin/bash
set -euo pipefail

display_banner() {
    echo "============================================================="
    echo "GitHub Archive: combine daily archives into per repo archives"
    echo "============================================================="
    echo
}

display_help() {
    echo "Usage: $0 [options]"
    echo
    echo "Options:"
    echo " -s, --source <dir>        Source directory (required)"
    echo " -t, --target <dir>        Target directory (required)"
    echo " -d, --dry-run             Perform a dry run without creating files"
    echo " -v, --verbose             Enable verbose output"
    echo " -f, --fast-mode           Use faster but less resilient to mix-match compression, concatenation (cat) method"
    echo " -p, --use-pigz            Use pigz instead of gzip for compression"
    echo " -r, --report              Generate a report with line counts"
    echo " -e, --event-types <types> Process only specified event types (comma-separated)"
    echo " -h, --help                Display this help text"
}

SOURCE_DIR=""
TARGET_DIR=""
DRY_RUN=0
VERBOSE=0
FAST_MODE=0
USE_PIGZ=0
GENERATE_REPORT=0
EVENT_TYPES=""
SOURCE_LIST=()
failed_files=()

log() {
    if [[ $VERBOSE -eq 1 ]]; then
        echo "$@"
    fi
}

function log_to_file() {
    echo "$1" >> "$2"
}

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -s|--source)
            SOURCE_DIR="$2"
            shift 2
            ;;
        -t|--target)
            TARGET_DIR="$2"
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
        -f|--fast-mode)
            FAST_MODE=1
            shift
            ;;
        -p|--use-pigz)
            USE_PIGZ=1
            shift
            ;;
        -r|--report)
            GENERATE_REPORT=1
            shift
            ;;
        -e|--event-types)
            EVENT_TYPES="$2"
            shift 2
            ;;
        -h|--help)
            display_help
            exit 0
            ;;
        *)
            SOURCE_LIST+=("$1")
            shift
            ;;
    esac
done

if [[ $USE_PIGZ -eq 1 ]]; then
    COMPRESS_TOOL="pigz"
    DECOMPRESS_TOOL="pigz -dc"
else
    COMPRESS_TOOL="gzip"
    DECOMPRESS_TOOL="gzip -dc"
fi

VERIFY_INTEGRITY_TOOL="$DECOMPRESS_TOOL -t"

check_and_verify_file() {
    local file="$1"
    if [[ -f "$file" ]]; then
        if $VERIFY_INTEGRITY_TOOL "$file" > /dev/null 2>&1; then
            #echo "File $file passed integrity check."
            verified_files+=("$file")
        else
            echo "FAILED integrity check, $file"
            failed_files+=("$file")
        fi
    else
        echo "File not found: $file"
    fi
}

function process_event_dir() {
    local event_dir="$1"
    pushd "$event_dir" > /dev/null

    # Find {type}/{org}/{repo} directories (from type dir)
    find . -mindepth 2 -maxdepth 2 -type d -print0 | while IFS= read -r -d '' dir; do
        # Check if the directory exists
        if [[ -d "$dir" ]]; then
            # Split the path into components using "<<<" here-string
            IFS='/' read -r -a pathParts <<< "${dir:1}"

            eventType=${event_dir}
            org=${pathParts[1]}
            repo=${pathParts[2]}

            fileDir="${TARGET_DIR}/${eventType}/${org}"
            outFile="${fileDir}/${repo}.json.gz"
            log_file="${event_dir}_$(date +%Y%m%d_%H%M%S).log"
            
            echo "Processing ${eventType}/${org}/${repo}..." >> "$log_file"

            mkdir -p "$fileDir"
            
            sourceFiles=()
            for sourceFile in "$dir"/*.gz; do
                # Check if the source file exists
                if [[ -f "$sourceFile" ]]; then
                    sourceFiles+=("$sourceFile")
                else
                    log "Source file not found: $sourceFile" >> "$log_file"
                fi
            done

            if [[ $FAST_MODE -eq 1 ]]; then
                # Faster but less reliable concatenation method
                cat "${sourceFiles[@]}" >> "$outFile"
            else
                # Slower but more reliable concatenation method using zcat and gzip/pigz
                for file in "${sourceFiles[@]}"; do
                    $DECOMPRESS_TOOL "$file" | $COMPRESS_TOOL >> "$outFile"
                done
            fi
        else
            log "Directory not found: $dir" >> "$log_file"
        fi
    done
    popd > /dev/null
}

#so is visible to subshells
export -f process_event_dir

# check_files_in_parallel() {
#     local dir="$1"
#     find "$dir" -type f -name "*.gz" -print0 | xargs -0r -P10 -I{} bash -c 'check_and_verify_file "{}"'
# }

#####
display_banner
#####

if [[ -z "$SOURCE_DIR" ]]; then
    echo "Error: Source directory is required. Use -s or --source to specify it."
    display_help
    exit 1
fi

if [[ -z "$TARGET_DIR" ]]; then
    echo "Error: Target directory is required. Use -t or --target to specify it."
    display_help
    exit 1
fi

if [[ $DRY_RUN -eq 0 ]]; then
    log "Creating target directory: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"
fi

if [[ $GENERATE_REPORT -eq 1 ]]; then
    REPORT_FILE="${TARGET_DIR}/processing_report.csv"
    echo "Type,Org,Repo,SourceFile,Lines" > "$REPORT_FILE"
fi

start_time=$(date +%s)

if [[ $DRY_RUN -eq 0 ]]; then

    # event_datasets = $(find "$SOURCE_DIR" -mindepth 1 -maxdepth 1 -type d -print0)
    # echo "Event datasets: ${event_datasets[@]}"
    # cat event_datasets | xargs -0 -P 10 -I{} bash -c 'process_event_dir "{}"'
    
    find "$SOURCE_DIR" -mindepth 1 -maxdepth 1 -type d -print0 | xargs -0 -P 10 -I{} bash -c 'process_event_dir "{}"'   
fi

end_time=$(date +%s)
runtime=$((end_time - start_time))
echo "Total runtime: $runtime seconds"

echo "Failed files:"
for file in "${failed_files[@]}"; do
    echo "$file"
    echo "$file" >> "$TARGET_DIR/failed_files.txt"
done

for file in "${passed_files[@]}"; do
    echo "$file" >> "$TARGET_DIR/passed_files.txt"
done
