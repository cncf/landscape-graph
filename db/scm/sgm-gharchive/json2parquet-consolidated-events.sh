#!/usr/bin/env bash

set -ex

echo "WARNING: use at your own risk if calling from outside this repo"
echo "USAGE: ./json2parquet-consolidated-events.sh ~/gharchive-swift/swift.byrepo.consolidated.json-swift"


GIT_TOPLEVEL="$(git rev-parse --show-toplevel)"
schemaDir="$GIT_TOPLEVEL/data/gharchive/schema"
targetDir="$1"

echo "schemaDir: ${schemaDir}"
echo "targetDir: ${targetDir}"

ls -lahF $targetDir

# decompress all the .gz's in the current directory
time pigz --keep --decompress $targetDir/*.gz
ls -lahF $targetDir

# BUG: fix this in rollup-gz.sh
# add missing extension
find . -type f -maxdepth 1 -exec mv {} {}.json \;
ls -lahF $targetDir

#
# the 2 pass way
#

time json2parquet -c gzip CommitCommentEvent-consolidated.json             swift-CommitCommentEvent.parquet
time json2parquet -c gzip CreateEvent-consolidated.json                    swift-CreateEvent.parquet
time json2parquet -c gzip DeleteEvent-consolidated.json                    swift-DeleteEvent.parquet
time json2parquet -c gzip ForkEvent-consolidated.json                      swift-ForkEvent.parquet
time json2parquet -c gzip GollumEvent-consolidated.json                    swift-GollumEvent.parquet
time json2parquet -c gzip IssueCommentEvent-consolidated.json              swift-IssueCommentEvent.parquet
time json2parquet -c gzip IssuesEvent-consolidated.json                    swift-IssuesEvent.parquet
time json2parquet -c gzip MemberEvent-consolidated.json                    swift-MemberEvent.parquet
time json2parquet -c gzip PublicEvent-consolidated.json                    swift-PublicEvent.parquet
time json2parquet -c gzip PullRequestEvent-consolidated.json               swift-PullRequestEvent.parquet
time json2parquet -c gzip PullRequestReviewCommentEvent-consolidated.json  swift-PullRequestReviewCommentEvent.parquet
time json2parquet -c gzip PullRequestReviewEvent-consolidated.json         swift-PullRequestReviewEvent.parquet
time json2parquet -c gzip PushEvent-consolidated.json                      swift-PushEvent.parquet
time json2parquet -c gzip ReleaseEvent-consolidated.json                   swift-ReleaseEvent.parquet
time json2parquet -c gzip WatchEvent-consolidated.json                     swift-WatchEvent.parquet

#
# instead of mucking with stderr, do another pass to generate schema
#

time json2parquet --dry CommitCommentEvent-consolidated.json            swift-CommitCommentEvent.parquet            > CommitCommentEvent.schema
time json2parquet --dry CreateEvent-consolidated.json                   swift-CreateEvent.parquet                   > CreateEvent.schema
time json2parquet --dry DeleteEvent-consolidated.json                   swift-DeleteEvent.parquet                   > DeleteEvent.schema
time json2parquet --dry ForkEvent-consolidated.json                     swift-ForkEvent.parquet                     > ForkEvent.schema
time json2parquet --dry GollumEvent-consolidated.json                   swift-GollumEvent.parquet                   > GollumEvent.schema
time json2parquet --dry IssueCommentEvent-consolidated.json             swift-IssueCommentEvent.parquet             > IssueCommentEvent.schema
time json2parquet --dry IssuesEvent-consolidated.json                   swift-IssuesEvent.parquet                   > IssuesEvent.schema
time json2parquet --dry MemberEvent-consolidated.json                   swift-MemberEvent.parquet                   > MemberEvent.schema
time json2parquet --dry PublicEvent-consolidated.json                   swift-PublicEvent.parquet                   > PublicEvent.schema
time json2parquet --dry PullRequestEvent-consolidated.json              swift-PullRequestEvent.parquet              > PullRequestEvent.schema
time json2parquet --dry PullRequestReviewCommentEvent-consolidated.json swift-PullRequestReviewCommentEvent.parquet > PullRequestReviewCommentEvent.schema
time json2parquet --dry PullRequestReviewEvent-consolidated.json        swift-PullRequestReviewEvent.parquet        > PullRequestReviewEvent.schema
time json2parquet --dry PushEvent-consolidated.json                     swift-PushEvent.parquet                     > PushEvent.schema
time json2parquet --dry ReleaseEvent-consolidated.json                  swift-ReleaseEvent.parquet                  > ReleaseEvent.schema
time json2parquet --dry WatchEvent-consolidated.json                    swift-WatchEvent.parquet                    > WatchEvent.schema

# convert them all to parquet
# echo time json2parquet -c gzip $targetDir/CommitCommentEvent-consolidated.json            $targetDir/CommitCommentEvent-consolidated.parquet             2> $schemaDir/CommitCommentEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/CreateEvent-consolidated.json                   $targetDir/CreateEvent-consolidated.parquet                    2> $schemaDir/CreateEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/DeleteEvent-consolidated.json                   $targetDir/DeleteEvent-consolidated.parquet                    2> $schemaDir/DeleteEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/ForkEvent-consolidated.json                     $targetDir/ForkEvent-consolidated.parquet                      2> $schemaDir/ForkEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/GollumEvent-consolidated.json                   $targetDir/GollumEvent-consolidated.parquet                    2> $schemaDir/GollumEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/IssueCommentEvent-consolidated.json             $targetDir/IssueCommentEvent-consolidated.parquet              2> $schemaDir/IssueCommentEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/IssuesEvent-consolidated.json                   $targetDir/IssuesEvent-consolidated.parquet                    2> $schemaDir/IssuesEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/MemberEvent-consolidated.json                   $targetDir/MemberEvent-consolidated.parquet                    2> $schemaDir/MemberEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/PublicEvent-consolidated.json                   $targetDir/PublicEvent-consolidated.parquet                    2> $schemaDir/PublicEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/PullRequestEvent-consolidated.json              $targetDir/PullRequestEvent-consolidated.parquet               2> $schemaDir/PullRequestEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/PullRequestReviewCommentEvent-consolidated.json $targetDir/PullRequestReviewCommentEvent-consolidated.parquet  2> $schemaDir/PullRequestReviewCommentEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/PullRequestReviewEvent-consolidated.json        $targetDir/PullRequestReviewEvent-consolidated.parquet         2> $schemaDir/PullRequestReviewEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/PushEvent-consolidated.json                     $targetDir/PushEvent-consolidated.parquet                      2> $schemaDir/PushEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/ReleaseEvent-consolidated.json                  $targetDir/ReleaseEvent-consolidated.parquet                   2> $schemaDir/ReleaseEvent-consolidated.schema
# echo time json2parquet -c gzip $targetDir/WatchEvent-consolidated.json                    $targetDir/WatchEvent-consolidated.parquet                     2> $schemaDir/WatchEvent-consolidated.schema
