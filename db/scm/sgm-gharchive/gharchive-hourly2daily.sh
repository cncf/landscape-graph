#!/bin/bash
set -euox pipefail

display_banner() {
    echo "==========================================================="
    echo "GitHub Archive: Create daily archives from hourly archives"
    echo "==========================================================="
    echo
}

display_help() {
    echo "Usage: $0 [options]"
    echo
    echo "Options:"
    echo "  -s, --source <dir>        Source directory (required)"
    echo "  -t, --target <dir>        Target directory (required)"
    echo "  -d, --dry-run             Perform a dry run without creating files"
    echo "  -v, --verbose             Enable verbose output"
    echo "  -f, --fast-mode           Use faster but less resialient to mix-match compression, concatenation (cat) method"
    echo "  -p, --use-pigz            Use pigz instead of gzip for compression"
    echo "  -r, --report              Generate a report with line counts"
    echo "  -h, --help                Display this help text"
    echo
}

SOURCE_DIR=""
TARGET_DIR=""
DRY_RUN=0
VERBOSE=0
FAST_MODE=0
USE_PIGZ=0
GENERATE_REPORT=0
SOURCE_LIST=()

log() {
    if [[ $VERBOSE -eq 1 ]]; then
        echo "$@"
    fi
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

# pigz is multi-core aware gzip
if [[ $USE_PIGZ -eq 1 ]]; then
    COMPRESS_TOOL="pigz"
    DECOMPRESS_TOOL="pigz -dc"
else
    COMPRESS_TOOL="gzip"
    DECOMPRESS_TOOL="gzip -dc"
fi

display_banner

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
    echo "Event Type,Organization,Repository,SourceFile,Lines" > "$REPORT_FILE"
fi

start_time=$(date +%s)

if [[ $DRY_RUN -eq 0 ]]; then
    # Navigate to SOURCE_DIR
    pushd "$SOURCE_DIR" > /dev/null

    # Find {type}/{org}/{repo} directories
    find . -mindepth 3 -maxdepth 3 -type d -print0 | while IFS= read -r -d '' dir; do
        # Check if the directory exists
        if [[ -d "$dir" ]]; then
            # Split the path into components using "<<<" here-string
            # "<<<" allows passing a string as input to a command
            # "${dir:2}" removes the leading "./" from the directory path
            IFS='/' read -r -a pathParts <<< "${dir:2}"

            eventType=${pathParts[0]}
            org=${pathParts[1]}
            repo=${pathParts[2]}

            fileDir="${TARGET_DIR}/${eventType}/${org}"
            outFile="${fileDir}/${repo}.json.gz"

            mkdir -p "$fileDir"

            # Process each source file
            for sourceFile in "$dir"/*.gz; do
                # Check if the source file exists
                if [[ -f "$sourceFile" ]]; then
                    sourceLines=$($DECOMPRESS_TOOL "$sourceFile" | wc -l)

                    if [[ $FAST_MODE -eq 1 ]]; then
                        # Faster but less reliable concatenation method
                        cat "$sourceFile" >> "$outFile"
                    else
                        # Slower but more reliable concatenation method using zcat and gzip/pigz
                        $DECOMPRESS_TOOL "$sourceFile" | $COMPRESS_TOOL >> "$outFile"
                    fi

                    if [[ $GENERATE_REPORT -eq 1 ]]; then
                        echo "$eventType,$org,$repo,$(basename "$sourceFile"),$sourceLines" >> "$REPORT_FILE"
                    fi

                    log "Appended $sourceFile to $outFile, $sourceLines lines"
                else
                    log "Source file not found: $sourceFile"
                fi
            done
        else
            log "Directory not found: $dir"
        fi
    done

    popd > /dev/null
fi

# Record the end time
end_time=$(date +%s)

# Calculate the total runtime
runtime=$((end_time - start_time))

# Print the total runtime
echo "Total runtime: $runtime seconds"