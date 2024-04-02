#!/usr/bin/env  bash
# set -x
. base.sh
docker compose "${FOSSTOOLS_ENV_FILES[@]}" up --detach --force-recreate --remove-orphans
docker compose "${FOSSTOOLS_ENV_FILES[@]}" logs --follow
