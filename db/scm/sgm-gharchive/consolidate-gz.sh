#!/bin/bash
set -euo pipefail

display_banner() {
    echo "===================================="
    echo "  GZ File Consolidation Script"
    echo "===================================="
    echo
}

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

log() {
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

display_banner

if [[ -z "$SOURCE" ]]; then
    echo "Error: Source directory is required. Use -s or --source to specify it."
    display_help
    exit 1
fi

# Ensure the source directory exists
if [ ! -d "$SOURCE" ]; then
    echo "The specified source directory does not exist: $SOURCE"
    exit 1
fi

# If target is not specified, use source directory for output
if [[ -z "$TARGET" ]]; then
    TARGET="$SOURCE"
else
    mkdir -p "$TARGET"
fi

# Remove trailing slashes if present
SOURCE="${SOURCE%/}"
TARGET="${TARGET%/}"

log "Source: $SOURCE"
log "Target: $TARGET"
log "Dry Run: $DRY_RUN"
log "Verbose: $VERBOSE"

process_directory() {
    local subdir="$1"
    local dirName=$(basename "$subdir")
    local outputFile="${TARGET}/${dirName}-consolidated.gz"

    if [[ $DRY_RUN -eq 1 ]]; then
        echo "Dry run: Files to be concatenated from $subdir into $outputFile:"
        find "$subdir" -type f -name "*.gz"
    else
        echo "Concatenating files from $subdir into $outputFile..."
        find "$subdir" -type f -name "*.gz" -exec cat {} + > "$outputFile"
    fi
}

# Loop through each subdirectory in the source directory
for subdir in "$SOURCE"/*; do
    if [ -d "$subdir" ]; then  # Check if it's a directory
        process_directory "$subdir"
    fi
done

if [[ $DRY_RUN -eq 1 ]]; then
    echo "Dry run complete."
else
    echo "Concatenation complete."
fi
