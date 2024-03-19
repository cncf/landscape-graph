#!/usr/bin/env bash

set -x
find . -name 'cncf*.json.tar'

# to handle filenames with spaces etc.
# (find)  : -print0 substitute null for newlines
# (xargs) : -0 substitute null for newlines

find . -name 'cncf*.json.tar' -print0 | xargs -0 -I {} -P 10 sh -c 'gzip -k -v {} > {}.log 2>&1'
