#!/usr/bin/env bash

set -x

# single worker w/ verbose logging
# ./gha-osrb.py --source ~/gharchive-test/raw --target ~/gharchive-datasets/osrb --org-file ./org-list.txt --verbose --workers 1 --no-keep

# ./gha-osrb.py --source ~/gha-raw --target ~/gharchive-datasets/osrb.2024-02-26 --org-file ./org-list.txt -L ~/gharchive-datasets/osrb.2024-02-26 --workers 10
 
./gha-osrb.py --source ~/gha-raw/2021 --target ~/gharchive-swift/swift.raw --org-file ./org-list-swift.txt --log-results ~/gharchive-swift/swift.raw --workers 10
