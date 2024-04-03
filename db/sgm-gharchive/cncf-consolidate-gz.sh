#!/bin/bash

handle_sigint() {
    echo "Caught Ctrl+C, stopping..."
    # Perform any necessary cleanup here
    exit 1
}

# Trap SIGINT and call handle_sigint when it's received
trap 'handle_sigint' SIGINT

set -euox pipefail

# Usage: ./consolidate-gz.sh [options]

# Options:
#   -s, --source <dir>        Source directory containing subdirectories (required)
#   -t, --target <dir>        Target directory for consolidated files (optional)
#   -d, --dry-run             Perform a dry run without actual concatenation
#   -v, --verbose             Enable verbose output
#   -h, --help                Display this help text
./consolidate-gz.sh --source ~/gharchive-cncf/debug.cncf.all \
                    --target ~/gharchive-cncf/debug.cncf.byrepo \
                    --verbose
                    # --dry-run