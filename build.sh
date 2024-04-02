#!/usr/bin/env bash

# set -x

# create/update _versions.env
bash build.update-versions.sh

. base.sh

echo "---"
echo "${BUILDARGS[@]}"
echo "---"

docker compose --env-file _versions.env build --no-cache --pull "${BUILDARGS[@]}"

# create list of installed packages w/ versions
docker run --rm ${USER}/fossjlab:dev pip3 list > jlab/requirements.jlab.list

# create pip freeze file
docker run --rm ${USER}/fossjlab:dev pip3 freeze > jlab/requirements.jlab.lock

