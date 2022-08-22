#!/usr/bin/env bash

set -x

# fancy npmrc / token secret...meh
# docker build . -t gen-exec-schema --secret id=npmrc,src=.npmrc

docker build . -t landgraph

