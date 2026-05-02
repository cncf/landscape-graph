#!/usr/bin/env bash
#
# Add or remove labels on GitHub issues via comments.
# Adapted from OpenTelemetry collector-contrib approach.
#
# Usage:
#   ISSUE=123 COMMENT="/label sgm/brew" SENDER="username" bash add-labels.sh
#

set -euo pipefail

if [[ -z "${ISSUE:-}" || -z "${COMMENT:-}" || -z "${SENDER:-}" ]]; then
    echo "Error: ISSUE, COMMENT, and SENDER environment variables must be set."
    echo "Usage: ISSUE=123 COMMENT='/label sgm/brew' SENDER='username' bash add-labels.sh"
    exit 1
fi

CUR_DIRECTORY=$(dirname "$0")

# Check if comment starts with /label
if [[ ${COMMENT:0:6} != "/label" ]]; then
    echo "Comment is not a label command (must start with '/label'), exiting."
    exit 0
fi

# Common labels that can be used without component mapping
declare -A COMMON_LABELS
COMMON_LABELS["good-first-issue"]="good first issue"
COMMON_LABELS["help-wanted"]="help wanted"
COMMON_LABELS["needs-triage"]="needs triage"
COMMON_LABELS["waiting-for-author"]="waiting for author"
COMMON_LABELS["bug"]="bug"
COMMON_LABELS["enhancement"]="enhancement"
COMMON_LABELS["documentation"]="documentation"
COMMON_LABELS["question"]="question"
COMMON_LABELS["duplicate"]="duplicate"
COMMON_LABELS["invalid"]="invalid"
COMMON_LABELS["wontfix"]="wontfix"
COMMON_LABELS["cleanup"]="cleanup"
COMMON_LABELS["infrastructure"]="infrastructure"

# Priority labels
COMMON_LABELS["priority:p0"]="p0-critical"
COMMON_LABELS["priority:p1"]="p1-high"
COMMON_LABELS["priority:p2"]="p2-medium"
COMMON_LABELS["priority:p3"]="p3-low"

# Effort labels
COMMON_LABELS["effort:minutes"]="e0-minutes"
COMMON_LABELS["effort:hours"]="e1-hours"
COMMON_LABELS["effort:days"]="e2-days"
COMMON_LABELS["effort:weeks"]="e3-weeks"
COMMON_LABELS["effort:months"]="e4-months"

# Extract labels from comment (remove /label prefix)
LABELS=$(echo "${COMMENT}" | sed -E 's%^/label%%')

echo "Processing label command from ${SENDER}..."
echo "Labels to process: ${LABELS}"

for LABEL_REQ in ${LABELS}; do
    # Trim any whitespace/newlines
    LABEL=$(echo "${LABEL_REQ}" | sed -E 's/^[+-]?//' | tr -d '\n' | xargs)
    
    # Check if we should add or remove
    SHOULD_ADD=true
    if [[ "${LABEL_REQ:0:1}" = "-" ]]; then
        SHOULD_ADD=false
    fi
    
    # First, check if it's a common label
    if [[ -v COMMON_LABELS["${LABEL}"] ]]; then
        ACTUAL_LABEL="${COMMON_LABELS["${LABEL}"]}"
        
        if [[ ${SHOULD_ADD} = true ]]; then
            echo "  Adding common label: ${ACTUAL_LABEL}"
            gh issue edit "${ISSUE}" --add-label "${ACTUAL_LABEL}"
        else
            echo "  Removing common label: ${ACTUAL_LABEL}"
            gh issue edit "${ISSUE}" --remove-label "${ACTUAL_LABEL}"
        fi
        continue
    fi
    
    # Check component labels file
    COMPONENT_LABELS_FILE="${CUR_DIRECTORY}/../component_labels.txt"
    
    if [[ ! -f "${COMPONENT_LABELS_FILE}" ]]; then
        echo "  Warning: component_labels.txt not found, skipping component label: ${LABEL}"
        continue
    fi
    
    # Look up the label in component_labels.txt
    # File format: "full_path    short_label"
    SHORT_LABEL=$(awk -v path="${LABEL}" '$1 == path || $2 == path {print $2}' "${COMPONENT_LABELS_FILE}")
    
    if [[ -z "${SHORT_LABEL}" ]]; then
        echo "  Warning: '${LABEL}' doesn't correspond to a known component, skipping."
        echo "  Available components are listed in: ${COMPONENT_LABELS_FILE}"
        continue
    fi
    
    if [[ ${SHOULD_ADD} = true ]]; then
        echo "  Adding component label: ${SHORT_LABEL}"
        gh issue edit "${ISSUE}" --add-label "${SHORT_LABEL}"
    else
        echo "  Removing component label: ${SHORT_LABEL}"
        gh issue edit "${ISSUE}" --remove-label "${SHORT_LABEL}"
    fi
done

echo "✓ Label command processed successfully"
