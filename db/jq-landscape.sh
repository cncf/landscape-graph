#!/bin/env bash
#set -x

function section-banner()
{
    echo ""
    echo "----------------"
    echo "$1"
    echo "----------------"
}


SRC=../landscape-items-clean.json

section-banner "CNCF Members --> members.json"
jq '.[] | select(.member)' $SRC > members.json

section-banner "CNCF Projects --> projects.json"
jq '.[] | select(.project)' $SRC > projects.json

# section-banner "CNCF Members: just the first member [2]: Ansible"
# jq '.[1] | select(.name == "Ansible")' $SRC > members-one.json

# section-banner "CNCF Projects: just the first"
# jq '.[1] | select(.project)' $SRC > projects-one.json

section-banner ".member"
jq '.[] | .member | select(. != null)' $SRC | sort -u

section-banner ".project"
jq '.[] | .project | select(. != null)' $SRC | sort -u

section-banner ".path"
jq '.[] | .path | select(. != null)' $SRC | sort -u

section-banner ".landscape"
jq '.[] | .landscape | select(. != null)' $SRC | sort -u

section-banner ".category"
jq '.[] | .category | select(. != null)' $SRC | sort -u

