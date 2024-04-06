#!/usr/bin/env bash

repo_root=$(git rev-parse --show-toplevel)
image=$USER/cncfjlab
label=dev
tag=$image:$label

# docker build -t $tag . --pull --no-cache --progress plain | tee $tag.docker-build.log
# docker build -t $tag . --no-cache --progress plain
docker build -t $tag . --progress plain

# create pip freeze file
docker run --rm $tag pip3 freeze > requirements.jlab.lock
docker run --rm $tag pip3 list > requirements.jlab.list
