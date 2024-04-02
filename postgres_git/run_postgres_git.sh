#!/usr/bin/env bash

set -x

repo_root=$(git rev-parse --show-toplevel)
image=$USER/fossjlab:dev

docker run --rm -p 8888:8888 --env JUPYTER_ENABLE_LAB=yes -v $repo_root:/home/jovyan/work $image 

