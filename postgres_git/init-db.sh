#!/bin/bash
set -ex

#
# Initialize PostgreSQL extensions
#
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE EXTENSION IF NOT EXISTS git_fdw;
    CREATE SERVER IF NOT EXISTS git_fdw_server FOREIGN DATA WRAPPER git_fdw;
    CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
    CREATE EXTENSION IF NOT EXISTS pg_qualstats;
    CREATE EXTENSION IF NOT EXISTS hypopg;
    CREATE EXTENSION IF NOT EXISTS pgvector;
    CREATE EXTENSION IF NOT EXISTS postgres_fdw;
    CREATE EXTENSION IF NOT EXISTS pg_track_settings;
    CREATE EXTENSION IF NOT EXISTS pg_stat_monitor;
EOSQL

###

# Set to true for dry run, false to execute commands
DRY_RUN=false 

GIT_REPOS_PATH="/var/lib/postgresql/gitdata"

# Function to either print or execute SQL command
execute_sql() {
    if [ "$DRY_RUN" = true ]; then
        echo "DRY RUN: $1"
    else
        psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c "$1"
    fi
}

# Scan for Git repositories and create foreign tables
for org_dir in $GIT_REPOS_PATH/*; do
    if [ -d "$org_dir" ]; then
        for repo_path in $org_dir/*; do
            if [ -d "$repo_path/.git" ]; then
                repo_name=$(basename "$repo_path")
                org_name=$(basename "$org_dir")
                echo "Found Git repo: $org_name/$repo_name"

                # Discover default branch

                # alternate: default_branch=$(git -C "$repo_path" remote show origin | grep 'HEAD branch' | cut -d' ' -f5)
                default_branch=$(git -C "$repo_path" symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')
                echo "Default branch for $repo_name is $default_branch"

                # Prepare SQL to create foreign table
                sql_command="CREATE FOREIGN TABLE IF NOT EXISTS ${org_name}_${repo_name}_data (
                    file_path text,
                    file_content text
                ) SERVER git_fdw_server OPTIONS (repository_path '$repo_path', branch '$default_branch');"
                
                # Execute or print the SQL command
                execute_sql "$sql_command"

                # echo "First 7 rows of data from ${repo_name}_data:"
                # execute_sql "SELECT * FROM ${repo_name}_data ORDER BY some_column LIMIT 7;"

                # echo "Last 7 rows of data from ${repo_name}_data:"
                # execute_sql "SELECT * FROM ${repo_name}_data ORDER BY some_column DESC LIMIT 7;"
            fi
        done
    fi
done