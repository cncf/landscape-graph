#!/usr/bin/env bash

set -x

cat items.json | jq -c '.[]' > items.jsonl

# jp -f items.json "[?project].{ id: id, \
#                                 flatName: flatName, \
#                                 name: name, \
#                                 projectType: project, \
#                                 oss: oss, \
#                                 license: license, \
#                                 description: description \
#                                 repos: repos }"