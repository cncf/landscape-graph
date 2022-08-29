#!/usr/bin/env bash
set -x

source ../.subgraph-modules.env

pushd ../../util/landgraph
docker build . -t landgraph
popd

pwd
which landgraph
echo "Run the following to launch the CNCF subgraph"
echo "    landgraph --sdl cncf.graphql -gv"