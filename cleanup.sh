#!/usr/bin/env  bash

set -x

. base.sh

docker compose "${FOSSTOOLS_ENV_FILES[@]}" down --remove-orphans --volumes
docker compose "${FOSSTOOLS_ENV_FILES[@]}" rm --stop --volumes --force

docker image rm $(docker image ls --format '{{.Repository}}:{{.Tag}}' | grep 'foss')

rm -rvf _versions.env
rm -rvf .cache
rm -rvf .config
rm -rvf .ipython
rm -rvf .jupyter
rm -rvf .npm
rm -rvf .local
rm -rvf .visualpython
rm -rvf .virtual_documents
rm -rvf .memestra
rm -rvf .mypy_cache

# created whenever a file is modified.
find -d . -name .ipynb_checkpoints | xargs -0 rm -v -rf "{}"

ls -laF ~/Library/jupyter
rm -rf ~/Library/jupyter
