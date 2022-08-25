#!/usr/bin/env bash

# provided as a handy way to quickly iterate using only docker.

function docker-ps-pretty() 
{ 
    local DOCKER_PS_PRETTY="table {{.ID}}\t{{.Names}}\t{{.State}}\t{{.Status}}\t{{.RunningFor}}\t{{.Image}}"
    echo; 
    docker ps --all --format "$DOCKER_PS_PRETTY"
}

function tree-pretty()
{
    tree -apugshDC $1
}

function warn-user()
{
    echo "*** Press ENTER when ready or ctrl-C to halt. $1"
    read
}


# arg1 --> container name
function docker-stop-rm-if-exists()
{
    local CONTAINER="$1"
    echo "*** docker: stopping and removing $CONTAINER"
    docker ps -q --all --filter "name=$CONTAINER" | grep -q . && docker stop $CONTAINER && docker rm -fv $CONTAINER
}

###
### Begin Festivities
###

# set -x

LANDSCAPE_ROOT=$HOME/landscape
LANDSCAPE_BASE=$LANDSCAPE_ROOT/neo4j
CONTAINER_NAME=landscape-graph
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=landscape

echo "*** $CONTAINER_NAME: Using $LANDSCAPE_BASE for docker mount points (/data, /logs, /import, /plugins)"

docker-ps-pretty
docker-stop-rm-if-exists "$CONTAINER_NAME"
docker-ps-pretty

# nuke anything left in mounted dirs
sudo chown $USER:$USER -R $LANDSCAPE_BASE
rm -rf $LANDSCAPE_BASE
tree-pretty $LANDSCAPE_ROOT

# create mount points
mkdir -p $LANDSCAPE_BASE/data
mkdir -p $LANDSCAPE_BASE/logs
mkdir -p $LANDSCAPE_BASE/import
mkdir -p $LANDSCAPE_BASE/plugins

# copy cleaned up landscape json --> import directory
export LANDSCAPE_GIT_REPO_ROOT=$(git rev-parse --show-toplevel)
cp -fv $LANDSCAPE_GIT_REPO_ROOT/landscape-items-clean.json $LANDSCAPE_BASE/import
tree-pretty "$LANDSCAPE_BASE"

echo "presently running in docker:"
docker-ps-pretty

warn-user "...last chance before docker run neo4j!"
echo "*** LAUNCHING NEO4J @ $LANDSCAPE_BASE"

######################################################################
# handy extras
#     --env NEO4J_AUTH=none \
# --env NEO4JLABS_PLUGINS='["apoc", "graph-data-science", "bloom"]'

# TODO: fix this on MacOS even though we set docker user, it'll still fail (oddly)
#        when running as the correct user, docker for mac does this https://github.com/docker/for-mac/issues/2657 (maybe?)
#        so for now without setting --user, it'll chown as neo4j user the import mount point, requiring a chown to nuke it 
#    --user="$(id -u):$(id -g)" \
######################################################################

# run neo!
docker run \
    --name $CONTAINER_NAME \
    -p7474:7474 -p7687:7687 \
    -d \
    -v $LANDSCAPE_BASE/data:/data \
    -v $LANDSCAPE_BASE/logs:/logs \
    -v $LANDSCAPE_BASE/import:/var/lib/neo4j/import \
    -v $LANDSCAPE_BASE/plugins:/plugins \
    --env NEO4J_AUTH=$NEO4J_USERNAME/$NEO4J_PASSWORD \
    --env NEO4J_apoc_import_file=enabled \
    --env NEO4JLABS_PLUGINS='["apoc"]' \
    --env NEO4J_dbms_logs_query_enabled=false \
    --env NEO4J_ACCEPT_LICENSE_AGREEMENT=yes \
    --env NEO4J_apoc_import_file_enabled=true \
    --env NEO4J_apoc_export_file_enabled=true \
    --env NEO4J_dbms_security_procedures_unrestricted=apoc.\\\*,gds.\\\* \
    --env NEO4J_dbms_logs_debug_level=INFO \
    --env NEO4J_dbms_ssl_policy_bolt_client_auth=NONE \
    --env NEO4j_dbms_connector_bolt_tls__level=IGNORE \
    neo4j:latest

#     --env NEO4J_dbms_connector_bolt_listen__address=0.0.0.0:7867 \

docker-ps-pretty

# launch Cypher Shell in container, execute cypher
until echo 'match (n) return count (n);' | docker exec --interactive landscape-graph cypher-shell -u $NEO4J_USERNAME -p $NEO4J_PASSWORD; \
do \
    echo "waiting 10s for bolt to appear, typically takes 40s-60s on a MB Pro"; \
    sleep 10; \
done
echo "*** neo4j online!"

# local backdoor to init db, wait for bolt, but not actually load anything
if [[] -z "${APP_DOCKER_NEO4J_DO_NOT_LOAD}" ]]; then
    # launch Cypher Shell in container, execute cypher
    cat load-clean-landscape.cypher \
    | docker exec --interactive landscape-graph cypher-shell -u $NEO4J_USERNAME -p $NEO4J_PASSWORD
fi

echo ""
echo "===> http://localhost:7474 ($NEO4J_USERNAME/$NEO4J_PASSWORD)"
echo ""


# docker run \
#   --user $(id -u):$(id -g) \
#   --name "${CONTAINER}" \
#   --detach \
#   --restart unless-stopped \
#   --publish ${NEO_HTTPS}:${NEO_HTTPS} \
#   --publish ${NEO_HTTP}:${NEO_HTTP} \
#   --publish ${NEO_BOLT}:${NEO_BOLT} \
#   --env NEO4JLABS_PLUGINS="${NEO_PLUGINS}" \
# dbms.connector.bolt.address=0.0.0.0:7687
#   --env NEO4J_dbms_connector_bolt_listen__address=0.0.0.0:7867 \
#   --env NEO4J_dbms_connector_https_listen__address=0.0.0.0:${NEO_HTTPS} \
#   --env NEO4J_dbms_connector_http_listen__address=0.0.0.0:${NEO_HTTP} \
#   --env NEO4J_dbms_connector_bolt_listen__address=0.0.0.0:${NEO_BOLT} \
#   --env NEO4J_dbms_connector_https_advertised__address=${NEO_HOST}:${NEO_HTTPS} \
#   --env NEO4J_dbms_connector_http_advertised__address=${NEO_HOST}:${NEO_HTTP} \
#   --env NEO4J_dbms_connector_bolt_advertised__address=${NEO_HOST}:${NEO_BOLT} \
#   --volume ${NEO_GRAPH_DIR}/data:/data \
#   --volume ${NEO_GRAPH_DIR}/import:/import \
#   --volume ${NEO_GRAPH_DIR}/plugins:/plugins \
#   --volume ${NEO_GRAPH_DIR}/conf:/var/lib/neo4j/conf \
#   --volume ${NEO_GRAPH_DIR}/logs:/logs \
#   --env NEO4J_dbms_logs_query_enabled=false \
#   --env NEO4J_dbms_connector_bolt_advertised__address=${NEO_HOST}:${NEO_BOLT} \
#   --env NEO4J_dbms_active__database="${CONTAINER}" \
#   --env NEO4J_ACCEPT_LICENSE_AGREEMENT=yes \
#   --env NEO4J_apoc_import_file_enabled=true \
#   --env NEO4J_apoc_export_file_enabled=true \
#   --env NEO4J_dbms_security_procedures_unrestricted=apoc.\\\*,gds.\\\* \
#   --env NEO4J_browser_remote__content__hostname__whitelist="${NEO_WHITELIST}" \
#   --env NEO4J_browser_post__connect__cmd="${NEO_PLAY}" \
#   --env NEO4J_dbms_memory_heap_initial__size=${NEO4J_dbms_memory_heap_initial__size} \
#   --env NEO4J_dbms_memory_heap_max__size=${NEO4J_dbms_memory_heap_max__size} \
#   --env NEO4J_dbms_memory_pagecache_size=${NEO4J_dbms_memory_pagecache_size} \
