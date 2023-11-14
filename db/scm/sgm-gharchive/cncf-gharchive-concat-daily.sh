#!/bin/bash

handle_sigint() {
    echo "Caught Ctrl+C, stopping..."
    # Perform any necessary cleanup here
    exit 1
}

# Trap SIGINT and call handle_sigint when it's received
trap 'handle_sigint' SIGINT

set -euox pipefail

# ᐅ ./gharchive-concat-daily.sh --help
# Usage: ./gharchive-concat-daily.sh [options]

# Options:
#  -s, --source <dir>        Source directory (required)
#  -t, --target <dir>        Target directory (required)
#  -d, --dry-run             Perform a dry run without creating files
#  -v, --verbose             Enable verbose output
#  -f, --fast-mode           Use faster but less resilient to mix-match compression, concatenation (cat) method
#  -p, --use-pigz            Use pigz instead of gzip for compression
#  -r, --report              Generate a report with line counts
#  -h, --help                Display this help text


# ./gharchive-concat-daily.sh --source ~/gharchive-cncf/debug.cncf.all \
#                             --target ~/gharchive-cncf/debug.cncf.byrepo \
#                             --verbose \
#                             --fast-mode  > gharchive-concat-daily.log

./gharchive-concat-daily.sh --source ~/gharchive-cncf/debug.cncf.all \
                            --target ~/gharchive-cncf/debug.cncf.byrepo \
                            --verbose \
                            --fast-mode  