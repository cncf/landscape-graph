# ForkEvent

## Table of Contents

| Field Name                                 | Type               |
| ------------------------------------------ | ------------------ |
| actor.avatar_url                           | string             |
| actor.display_login                        | string             |
| actor.gravatar_id                          | string             |
| actor.id                                   | int64              |
| actor.login                                | string             |
| actor.url                                  | string             |
| created_at                                 | string             |
| day                                        | string             |
| id                                         | string             |
| month                                      | string             |
| org.avatar_url                             | string             |
| org.gravatar_id                            | string             |
| org.id                                     | double             |
| org.login                                  | string             |
| org.url                                    | string             |
| org_name                                   | string             |
| payload.forkee.archive_url                 | string             |
| payload.forkee.archived                    | bool               |
| payload.forkee.assignees_url               | string             |
| payload.forkee.blobs_url                   | string             |
| payload.forkee.branches_url                | string             |
| payload.forkee.clone_url                   | string             |
| payload.forkee.collaborators_url           | string             |
| payload.forkee.comments_url                | string             |
| payload.forkee.commits_url                 | string             |
| payload.forkee.compare_url                 | string             |
| payload.forkee.contents_url                | string             |
| payload.forkee.contributors_url            | string             |
| payload.forkee.created_at                  | string             |
| payload.forkee.default_branch              | string             |
| payload.forkee.deployments_url             | string             |
| payload.forkee.description                 | string             |
| payload.forkee.disabled                    | bool               |
| payload.forkee.downloads_url               | string             |
| payload.forkee.events_url                  | string             |
| payload.forkee.fork                        | bool               |
| payload.forkee.forks                       | int64              |
| payload.forkee.forks_count                 | int64              |
| payload.forkee.forks_url                   | string             |
| payload.forkee.full_name                   | string             |
| payload.forkee.git_commits_url             | string             |
| payload.forkee.git_refs_url                | string             |
| payload.forkee.git_tags_url                | string             |
| payload.forkee.git_url                     | string             |
| payload.forkee.has_downloads               | bool               |
| payload.forkee.has_issues                  | bool               |
| payload.forkee.has_pages                   | bool               |
| payload.forkee.has_projects                | bool               |
| payload.forkee.has_wiki                    | bool               |
| payload.forkee.homepage                    | string             |
| payload.forkee.hooks_url                   | string             |
| payload.forkee.html_url                    | string             |
| payload.forkee.id                          | int64              |
| payload.forkee.issue_comment_url           | string             |
| payload.forkee.issue_events_url            | string             |
| payload.forkee.issues_url                  | string             |
| payload.forkee.keys_url                    | string             |
| payload.forkee.labels_url                  | string             |
| payload.forkee.language                    | string             |
| payload.forkee.languages_url               | string             |
| payload.forkee.license                     | null               |
| payload.forkee.license.key                 | string             |
| payload.forkee.license.name                | string             |
| payload.forkee.license.node_id             | string             |
| payload.forkee.license.spdx_id             | string             |
| payload.forkee.license.url                 | string             |
| payload.forkee.merges_url                  | string             |
| payload.forkee.milestones_url              | string             |
| payload.forkee.mirror_url                  | null               |
| payload.forkee.name                        | string             |
| payload.forkee.node_id                     | string             |
| payload.forkee.notifications_url           | string             |
| payload.forkee.open_issues                 | int64              |
| payload.forkee.open_issues_count           | int64              |
| payload.forkee.owner.avatar_url            | string             |
| payload.forkee.owner.events_url            | string             |
| payload.forkee.owner.followers_url         | string             |
| payload.forkee.owner.following_url         | string             |
| payload.forkee.owner.gists_url             | string             |
| payload.forkee.owner.gravatar_id           | string             |
| payload.forkee.owner.html_url              | string             |
| payload.forkee.owner.id                    | int64              |
| payload.forkee.owner.login                 | string             |
| payload.forkee.owner.node_id               | string             |
| payload.forkee.owner.organizations_url     | string             |
| payload.forkee.owner.received_events_url   | string             |
| payload.forkee.owner.repos_url             | string             |
| payload.forkee.owner.site_admin            | bool               |
| payload.forkee.owner.starred_url           | string             |
| payload.forkee.owner.subscriptions_url     | string             |
| payload.forkee.owner.type                  | string             |
| payload.forkee.owner.url                   | string             |
| payload.forkee.private                     | bool               |
| payload.forkee.public                      | bool               |
| payload.forkee.pulls_url                   | string             |
| payload.forkee.pushed_at                   | string             |
| payload.forkee.releases_url                | string             |
| payload.forkee.size                        | int64              |
| payload.forkee.ssh_url                     | string             |
| payload.forkee.stargazers_count            | int64              |
| payload.forkee.stargazers_url              | string             |
| payload.forkee.statuses_url                | string             |
| payload.forkee.subscribers_url             | string             |
| payload.forkee.subscription_url            | string             |
| payload.forkee.svn_url                     | string             |
| payload.forkee.tags_url                    | string             |
| payload.forkee.teams_url                   | string             |
| payload.forkee.trees_url                   | string             |
| payload.forkee.updated_at                  | string             |
| payload.forkee.url                         | string             |
| payload.forkee.watchers                    | int64              |
| payload.forkee.watchers_count              | int64              |
| public                                     | bool               |
| repo.id                                    | int64              |
| repo.name                                  | string             |
| repo.url                                   | string             |
| repo_name                                  | string             |
| repo_org_and_name                          | string             |
| type                                       | string             |
| year                                       | string             |
| payload.forkee.allow_forking               | bool               |
| payload.forkee.is_template                 | bool               |
| payload.forkee.topics                      | list<item: string> |
| payload.forkee.visibility                  | string             |
| payload.forkee.web_commit_signoff_required | bool               |
| payload.forkee.has_discussions             | bool               |
| payload.forkee.code_of_conduct             | null               |
| payload.forkee.code_of_conduct.html_url    | string             |
| payload.forkee.code_of_conduct.key         | string             |
| payload.forkee.code_of_conduct.name        | string             |
| payload.forkee.code_of_conduct.url         | string             |

## Table of Contents

- [actor.avatar_url](#actor.avatar_url)
- [actor.display_login](#actor.display_login)
- [actor.gravatar_id](#actor.gravatar_id)
- [actor.id](#actor.id)
- [actor.login](#actor.login)
- [actor.url](#actor.url)
- [created_at](#created_at)
- [day](#day)
- [id](#id)
- [month](#month)
- [org.avatar_url](#org.avatar_url)
- [org.gravatar_id](#org.gravatar_id)
- [org.id](#org.id)
- [org.login](#org.login)
- [org.url](#org.url)
- [org_name](#org_name)
- [payload.forkee.archive_url](#payload.forkee.archive_url)
- [payload.forkee.archived](#payload.forkee.archived)
- [payload.forkee.assignees_url](#payload.forkee.assignees_url)
- [payload.forkee.blobs_url](#payload.forkee.blobs_url)
- [payload.forkee.branches_url](#payload.forkee.branches_url)
- [payload.forkee.clone_url](#payload.forkee.clone_url)
- [payload.forkee.collaborators_url](#payload.forkee.collaborators_url)
- [payload.forkee.comments_url](#payload.forkee.comments_url)
- [payload.forkee.commits_url](#payload.forkee.commits_url)
- [payload.forkee.compare_url](#payload.forkee.compare_url)
- [payload.forkee.contents_url](#payload.forkee.contents_url)
- [payload.forkee.contributors_url](#payload.forkee.contributors_url)
- [payload.forkee.created_at](#payload.forkee.created_at)
- [payload.forkee.default_branch](#payload.forkee.default_branch)
- [payload.forkee.deployments_url](#payload.forkee.deployments_url)
- [payload.forkee.description](#payload.forkee.description)
- [payload.forkee.disabled](#payload.forkee.disabled)
- [payload.forkee.downloads_url](#payload.forkee.downloads_url)
- [payload.forkee.events_url](#payload.forkee.events_url)
- [payload.forkee.fork](#payload.forkee.fork)
- [payload.forkee.forks](#payload.forkee.forks)
- [payload.forkee.forks_count](#payload.forkee.forks_count)
- [payload.forkee.forks_url](#payload.forkee.forks_url)
- [payload.forkee.full_name](#payload.forkee.full_name)
- [payload.forkee.git_commits_url](#payload.forkee.git_commits_url)
- [payload.forkee.git_refs_url](#payload.forkee.git_refs_url)
- [payload.forkee.git_tags_url](#payload.forkee.git_tags_url)
- [payload.forkee.git_url](#payload.forkee.git_url)
- [payload.forkee.has_downloads](#payload.forkee.has_downloads)
- [payload.forkee.has_issues](#payload.forkee.has_issues)
- [payload.forkee.has_pages](#payload.forkee.has_pages)
- [payload.forkee.has_projects](#payload.forkee.has_projects)
- [payload.forkee.has_wiki](#payload.forkee.has_wiki)
- [payload.forkee.homepage](#payload.forkee.homepage)
- [payload.forkee.hooks_url](#payload.forkee.hooks_url)
- [payload.forkee.html_url](#payload.forkee.html_url)
- [payload.forkee.id](#payload.forkee.id)
- [payload.forkee.issue_comment_url](#payload.forkee.issue_comment_url)
- [payload.forkee.issue_events_url](#payload.forkee.issue_events_url)
- [payload.forkee.issues_url](#payload.forkee.issues_url)
- [payload.forkee.keys_url](#payload.forkee.keys_url)
- [payload.forkee.labels_url](#payload.forkee.labels_url)
- [payload.forkee.language](#payload.forkee.language)
- [payload.forkee.languages_url](#payload.forkee.languages_url)
- [payload.forkee.license](#payload.forkee.license)
- [payload.forkee.license.key](#payload.forkee.license.key)
- [payload.forkee.license.name](#payload.forkee.license.name)
- [payload.forkee.license.node_id](#payload.forkee.license.node_id)
- [payload.forkee.license.spdx_id](#payload.forkee.license.spdx_id)
- [payload.forkee.license.url](#payload.forkee.license.url)
- [payload.forkee.merges_url](#payload.forkee.merges_url)
- [payload.forkee.milestones_url](#payload.forkee.milestones_url)
- [payload.forkee.mirror_url](#payload.forkee.mirror_url)
- [payload.forkee.name](#payload.forkee.name)
- [payload.forkee.node_id](#payload.forkee.node_id)
- [payload.forkee.notifications_url](#payload.forkee.notifications_url)
- [payload.forkee.open_issues](#payload.forkee.open_issues)
- [payload.forkee.open_issues_count](#payload.forkee.open_issues_count)
- [payload.forkee.owner.avatar_url](#payload.forkee.owner.avatar_url)
- [payload.forkee.owner.events_url](#payload.forkee.owner.events_url)
- [payload.forkee.owner.followers_url](#payload.forkee.owner.followers_url)
- [payload.forkee.owner.following_url](#payload.forkee.owner.following_url)
- [payload.forkee.owner.gists_url](#payload.forkee.owner.gists_url)
- [payload.forkee.owner.gravatar_id](#payload.forkee.owner.gravatar_id)
- [payload.forkee.owner.html_url](#payload.forkee.owner.html_url)
- [payload.forkee.owner.id](#payload.forkee.owner.id)
- [payload.forkee.owner.login](#payload.forkee.owner.login)
- [payload.forkee.owner.node_id](#payload.forkee.owner.node_id)
- [payload.forkee.owner.organizations_url](#payload.forkee.owner.organizations_url)
- [payload.forkee.owner.received_events_url](#payload.forkee.owner.received_events_url)
- [payload.forkee.owner.repos_url](#payload.forkee.owner.repos_url)
- [payload.forkee.owner.site_admin](#payload.forkee.owner.site_admin)
- [payload.forkee.owner.starred_url](#payload.forkee.owner.starred_url)
- [payload.forkee.owner.subscriptions_url](#payload.forkee.owner.subscriptions_url)
- [payload.forkee.owner.type](#payload.forkee.owner.type)
- [payload.forkee.owner.url](#payload.forkee.owner.url)
- [payload.forkee.private](#payload.forkee.private)
- [payload.forkee.public](#payload.forkee.public)
- [payload.forkee.pulls_url](#payload.forkee.pulls_url)
- [payload.forkee.pushed_at](#payload.forkee.pushed_at)
- [payload.forkee.releases_url](#payload.forkee.releases_url)
- [payload.forkee.size](#payload.forkee.size)
- [payload.forkee.ssh_url](#payload.forkee.ssh_url)
- [payload.forkee.stargazers_count](#payload.forkee.stargazers_count)
- [payload.forkee.stargazers_url](#payload.forkee.stargazers_url)
- [payload.forkee.statuses_url](#payload.forkee.statuses_url)
- [payload.forkee.subscribers_url](#payload.forkee.subscribers_url)
- [payload.forkee.subscription_url](#payload.forkee.subscription_url)
- [payload.forkee.svn_url](#payload.forkee.svn_url)
- [payload.forkee.tags_url](#payload.forkee.tags_url)
- [payload.forkee.teams_url](#payload.forkee.teams_url)
- [payload.forkee.trees_url](#payload.forkee.trees_url)
- [payload.forkee.updated_at](#payload.forkee.updated_at)
- [payload.forkee.url](#payload.forkee.url)
- [payload.forkee.watchers](#payload.forkee.watchers)
- [payload.forkee.watchers_count](#payload.forkee.watchers_count)
- [public](#public)
- [repo.id](#repo.id)
- [repo.name](#repo.name)
- [repo.url](#repo.url)
- [repo_name](#repo_name)
- [repo_org_and_name](#repo_org_and_name)
- [type](#type)
- [year](#year)
- [payload.forkee.allow_forking](#payload.forkee.allow_forking)
- [payload.forkee.is_template](#payload.forkee.is_template)
- [payload.forkee.topics](#payload.forkee.topics)
- [payload.forkee.visibility](#payload.forkee.visibility)
- [payload.forkee.web_commit_signoff_required](#payload.forkee.web_commit_signoff_required)
- [payload.forkee.has_discussions](#payload.forkee.has_discussions)
- [payload.forkee.code_of_conduct](#payload.forkee.code_of_conduct)
- [payload.forkee.code_of_conduct.html_url](#payload.forkee.code_of_conduct.html_url)
- [payload.forkee.code_of_conduct.key](#payload.forkee.code_of_conduct.key)
- [payload.forkee.code_of_conduct.name](#payload.forkee.code_of_conduct.name)
- [payload.forkee.code_of_conduct.url](#payload.forkee.code_of_conduct.url)


