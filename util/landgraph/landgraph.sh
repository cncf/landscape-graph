#!/usr/bin/env bash

set -x 

# save current path so relative paths continue to work
export LANDGRAPH_CLI_INVOKE_LOC=$(pwd)

# local launch 
#cd "$(dirname ${BASH_SOURCE[0]})"
#DEBUG=@neo4j/graphql:* node landgraph.js $@

docker run \
    -v $LANDGRAPH_CLI_INVOKE_LOC:$LANDGRAPH_CLI_INVOKE_LOC \
    --env DEBUG=@neo4j/graphql:* \
    --env LANDGRAPH_CLI_INVOKE_LOC=$LANDGRAPH_CLI_INVOKE_LOC \
    landgraph $@
