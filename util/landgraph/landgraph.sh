#!/usr/bin/env bash

set -x 

# save current path so relative paths continue to work
export LANDGRAPH_CLI_INVOKE_LOC=$(pwd)
cd "$(dirname ${BASH_SOURCE[0]})"

# Engage!
DEBUG=@neo4j/graphql:* node landgraph.js $@

