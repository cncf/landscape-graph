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
