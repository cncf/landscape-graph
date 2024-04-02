#!/usr/bin/env  bash
#set -x

. base.sh
docker compose "${FOSSTOOLS_ENV_FILES[@]}" down --remove-orphans # --detach
