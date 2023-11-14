# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.15.2
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %% [markdown]
# # Entity Workshop: Github Archive (gharchive.org)

# %%
import pandas as pd

# hi tim this is a change to a file.  Here's another change.

# %%
from dask.distributed import Client

# macbook pro 14, 2021, M1 Max, 10 core
client = Client(n_workers=4)
client

# %% [markdown]
# ## Prepare Notebook 

# %%
# %matplotlib inline
# %matplotlib widget

# https://medium.com/@pablosjv/importing-local-python-modules-into-jupyter-notebooks-87336b2d7746
# %load_ext autoreload
# %autoreload 2

import os
import sys

# for the future.
#import modin.pandas as pd
# #%env MODIN_ENGINE=dask

import pandas as pd
import numpy as np

# By convention, we import the module dask.dataframe as dd, and call the corresponding DataFrame object ddf.
# Note: The term "Dask DataFrame" is slightly overloaded. Depending on the context, it can refer to the module or the DataFrame object. To avoid confusion, throughout this notebook:
# * dask.dataframe (note the all lowercase) refers to the API, and
# * DataFrame (note the CamelCase) refers to the object.
import dask
import dask.dataframe as dd


import matplotlib.pyplot as plt
from collections import defaultdict
from IPython.display import display, HTML
from sqlalchemy import Connection, create_engine

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 150)

# allow iteration on modules without having to restart the kernel each time
module_path = os.path.abspath(os.path.join('data/gharchive')) # or the path to your source code
sys.path.insert(0, module_path)

# load helpers
# %run data/gharchive/gharchive.py
config = GHARCHIVE_ENTITY_CONFIG

# load db helpers
# # %run data/gharchive/pandas2db.py

# data downloaded from gharchive.
SEED_ARCHIVE_NAME='2022-10-01-13.json.gz'

SEED_DIR = 'data/gharchive/seeds/apple-day0-mattyoung'
SEED_ARCHIVE = f'{SEED_DIR}/{SEED_ARCHIVE_NAME}'
print(f'\nSEED_ARCHIVE: {SEED_ARCHIVE}\n')


# intermediate files
OUT_DIR = 'data/gharchive/.processed/apple-day0-mattyoung'

# DICTIONARY CONTAINING ALL TABLES
# key: table_name, value: dataframe object
tbls = defaultdict(pd.DataFrame)

# %%
# !pip3 show sqlalchemy pandas sqlacodegen

# %% [markdown]
# ## Load OSRB and ecosystem data

# %%
osrb = load_repos('data/osrb/osrb-repos.txt')
display([dfoneline('osrb', osrb)], osrb.head(5))

# %%
osrb = safe_set_index(osrb, ['org_name', 'repo_name'])

display([dfoneline('osrb', osrb)])
osrb


# %% [markdown]
# ### osrb projects: 'org_name' = Apple

# %%
osrb.loc['apple']

# %% [markdown]
# ### osrb projects: 'org_name' = Apache

# %%
osrb.loc['apache']

# %% [markdown]
# ## What is the Github Archive?

# %% [markdown] jp-MarkdownHeadingCollapsed=true
# https://www.gharchive.org
#
# > Open-source developers all over the world are working on millions of projects: writing code & documentation, fixing & submitting bugs, and so forth. GH Archive is a project to record the public GitHub timeline, archive it, and make it easily accessible for further analysis.
# >
# >GitHub provides 15+ event types, which range from new commits and fork events, to opening new tickets, commenting, and adding members to a project. These events are aggregated into hourly archives, which you can access with any HTTP client
#
# * Activity archives are available starting 2/12/2011.
# * Activity archives for dates between 2/12/2011-12/31/2014 was recorded from the (now deprecated) Timeline API.
# * **Activity archives for dates starting 1/1/2015 is recorded from the Events API.**
#
# _ospo-tools non-goal: Handle gharchive.org data prior to `2015-01-01`_

# %% [markdown]
# ## Design: Github Events

# %% [markdown]
# ### How Github Event types are modeled
#
# > The Events API can return different types of events triggered by activity on GitHub. Each event response contains shared properties, but has a unique payload object determined by its event type. The Event object common properties describes the properties shared by all events, and each event type describes the payload properties that are unique to the specific event.
#
# _More info: https://docs.github.com/en/webhooks-and-events/events/github-event-types_

# %% [markdown]
# We use python3's [support for enumerations](https://docs.python.org/3/library/enum.html) to capture the **kinds of things** that exist.
#
# * code completion in editors reduces iterations due to typos in config, and RSI
# * the functions provided by the `enum` class are powerful. The HOWTO is detailed: https://docs.python.org/3/howto/enum.html
# * we leverage it for configuration
#
#
# ```python
# class EventType(Enum):
#     '''https://docs.github.com/en/webhooks-and-events/events/github-event-types '''
#
#     def __str__(self):
#             return str(self.value)
#
#     CommitCommentEvent            = 'CommitCommentEvent'
#     CreateEvent                   = 'CreateEvent'
#     DeleteEvent                   = 'DeleteEvent' 
#     ForkEvent                     = 'ForkEvent'
#     GollumEvent                   = 'GollumEvent'
#     IssueCommentEvent             = 'IssueCommentEvent'
#     IssuesEvent                   = 'IssuesEvent'
#     MemberEvent                   = 'MemberEvent'
#     PublicEvent                   = 'PublicEvent'
#     PullRequestEvent              = 'PullRequestEvent'
#     PullRequestReviewEvent        = 'PullRequestReviewEvent'
#     PullRequestReviewCommentEvent = 'PullRequestReviewCommentEvent'
#     PullRequestReviewThreadEvent  = 'PullRequestReviewThreadEvent'
#     PushEvent                     = 'PushEvent'
#     ReleaseEvent                  = 'ReleaseEvent'
#     SponsorshipEvent              = 'SponsorshipEvent'
#     WatchEvent                    = 'WatchEvent'
# ```

# %%
for et in list(EventType):
    print(et)

# %% [markdown]
# ### Entities

# %% [markdown]
# #### Common properties on each event

# %% [markdown] jp-MarkdownHeadingCollapsed=true
#
# ```json
# [
#   {
#     "type": "WatchEvent",
#     "public": false,
#     "payload": {
#     },
#     "repository": {
#       "id": 3,
#       "name": "octocat/Hello-World",
#       "url": "https://api.github.com/repos/octocat/Hello-World"
#     },
#     "actor": {
#       "id": 1,
#       "login": "octocat",
#       "gravatar_id": "",
#       "avatar_url": "https://github.com/images/error/octocat_happy.gif",
#       "url": "https://api.github.com/users/octocat"
#     },
#     "org": {
#       "id": 1,
#       "login": "github",
#       "gravatar_id": "",
#       "url": "https://api.github.com/orgs/github",
#       "avatar_url": "https://github.com/images/error/octocat_happy.gif"
#     },
#     "created_at": "2011-09-06T17:26:27Z",
#     "id": "12345"
#   }
# ]
# ```
#
#

# %% [markdown]
#
#
# In each event's common header, there are 3 interior objects, `repository`, `actor`, and `org`. Their existence is captured similarly in a python `Enum`:
#
# ```python
# class EntityType(Enum):
#     ''' Entities, one DataFrame per entity (table) in the resulting DB'''
#
#     def __str__(self):
#             return str(self.value)
#
#     EventType                             = 'EventType'
#     Event                                 = 'Event'
#     Actor                                 = 'Actor'
#     Repo                                  = 'Repo'
#     Org                                   = 'Org'
#
#     ForkEvent__Forkee                     = 'ForkEvent__Forkee'
#     ForkEvent_Forkee__Owner               = 'ForkEvent_Forkee__Owner'
#     ForkEvent_Forkee__License             = 'ForkEvent_Forkee__License'
#
#     IssueCommentEvent__Issue              = 'IssueCommentEvent__Issue'
#     IssueCommentEvent_Issue__Pull_Request = 'IssueCommentEvent_Issue__Pull_Request'
#
#     IssuesEvent__Issue                     = 'IssuesEvent__Issue'
#     IssuesEvent_Issue__Pull_Request        = 'IssuesEvent_Issue__Pull_Request'
#     
#     PullRequestEvent__PullRequest          = 'PullRequestEvent__PullRequest'
# ```

# %%
for et in list(EntityType):
    print(et)

# %% [markdown]
# ## Load Event Data

# %% [markdown]
# ### Download archive (October 1st, 2022, 9am-10am ET)

# %%
# !bash seed-apple-day0-mattyoung.sh

# %% [markdown]
# ### JSON Lines --> pandas DataFrame

# %% [markdown]
# * Each archive is a compressed (.gz) JSON Lines formatted file.
# * Each line of the file is a JSON object representing an event that happened, and is one of 20 types.

# %%
# dd.read_json?

# %%
archive = SEED_ARCHIVE
# !ls -laF '{archive}' && echo ""

# #%time event = pd.read_json(archive, orient='records', lines=True)

# 256 MB
blocksize = 2**28

# %time event = dd.read_json(archive, orient='records', lines=True, chunksize=blocksize)

# reduce sample size as necessary
#@event = event.sample(n=400, random_state=42)


# %%
event.visualize()

# %%

event['org_repo_name'] = event.apply(lambda x: x['repo']['name'], axis = 1).astype('string')

# org/repo --> org_name, repo_name
event = split_org_repo(event, 'org_repo_name')

dfoneline('event', event)
# %time event = event.astype(config['event']['dtypes_df'])
dfoneline('event', event)

print(event.dtypes)
event.head(3)

# store in global 
tbls['event'] = event

# %% [markdown]
# Recall that the header looks like this, note "id" is used as the a primary key as convention.  The helper library fixes up `id` columns to be named `{entity}_github_id`. 
#
# ```json
# [
#   {
#     "type": "WatchEvent",
#     "public": false,
#     "payload": {
#     },
#     "repository": {
#       "id": 3,
#       "name": "octocat/Hello-World",
#       "url": "https://api.github.com/repos/octocat/Hello-World"
#     },
#     "actor": {
#       "id": 1,
#       "login": "octocat",
#       "gravatar_id": "",
#       "avatar_url": "https://github.com/images/error/octocat_happy.gif",
#       "url": "https://api.github.com/users/octocat"
#     },
#     "org": {
#       "id": 1,
#       "login": "github",
#       "gravatar_id": "",
#       "url": "https://api.github.com/orgs/github",
#       "avatar_url": "https://github.com/images/error/octocat_happy.gif"
#     },
#     "created_at": "2011-09-06T17:26:27Z",
#     "id": "12345"
#   }
# ]
# ```
#
# The `name` and `url` fields are specified as `category_cols` - indicating that we should handle them as a [Pandas Category](https://pandas.pydata.org/docs/user_guide/categorical.html).
#
# >The categorical data type is useful in the following cases:
# >
# > * A string variable consisting of only a few different values. Converting such a string variable to a categorical variable will save some memory, see here.
# >
# > * The lexical order of a variable is not the same as the logical order (“one”, “two”, “three”). By converting to a categorical and specifying an order on the categories, sorting and min/max will use the logical order instead of the lexical order, see here.
# >
# > * As a signal to other Python libraries that this column should be treated as a categorical variable (e.g. to use suitable statistical methods or plot types).
#
# This is similar to the "dictionary compression" used in the Arrow projects. The value is stored once per unique value, rather than being duplicated per event. This produces a dramatic reduction in memory usage, making it viable to be used by an engineer with a MacBook Pro.
#
# More info: https://pandas.pydata.org/docs/user_guide/categorical.html#categorical-memory
#
# Configuration for the `repo` entity:
#
# ```json
# str(EntityType.Repo).lower(): {
#     'description': 'ENTITY: repo',
#     'dtypes_write': {
#         'repo_github_id': sa_dialect_postgresql.BIGINT,
#         'name':           sa_dialect_postgresql.TEXT,
#         'org_name':       sa_dialect_postgresql.TEXT,
#         'repo_name':      sa_dialect_postgresql.TEXT,
#         'url':            sa_dialect_postgresql.TEXT
#         },
#     'category_cols': ['name', 'url'],
#     'embedded_json_cols': [],
#     'natural_keys': ['id'],
#     'db_table_name': 'repo'
#     },
# ```

# %% [markdown]
# ## Filter out repos we don't wish to process

# %%
osrb = osrb.reset_index()
dfoneline('event', event)
osrb.head(5)

# %%
ecosystem_orgs = set(['adobe','alibaba','artsy','cfpb','cloudflare','docker','eleme',
                      'godaddy','google','guacsec','guardian','microsoft','mozilla',
                      'newrelic','ocsf','sigstore','square','stripe','twitter','wikimedia','zalando'])

osrb_orgs  = set(osrb['org_name'])
osrb_repos = set(osrb['name'])

# TODO: add generic filtering based on tags (leveraging postgres JSONB arrays + GIN index)

dfoneline('    event', event)

# non-ecosystem events
event_eco = event[event['org_name'].isin(osrb_orgs.union(ecosystem_orgs))]
dfoneline('  eco_org', event_eco)

event_osrb_org = event_eco[event_eco['org_name'].isin(osrb_orgs)]
dfoneline(' osrb_org', event_osrb_org)

event_osrb_repo = event_osrb_org[event_osrb_org['org_repo_name'].isin(osrb_repos)]
dfoneline('osrb_repo', event_osrb_repo)

# safe_set_index(event, ['org_name','repo_name','id'])

#     event, memory: 144755174 bytes, shape: (166151, 11)
#   eco_org, memory:  20423732 bytes, shape: (770, 11)
#  osrb_org, memory:  20343172 bytes, shape: (674, 11)
# osrb_repo, memory:  19884950 bytes, shape: (125, 11)

# SHED MEMORY
event = event_eco.copy()
display(event.info(), event.head(3))


# %% [markdown]
# ## Common Entities

# %% [markdown]
# **Create new tables w/ the normalized (previously nested) JSON**

# %% [markdown]
# ### Entity: Repo

# %%
# ENTITY: repo
event, repo = nested_dimension(tbls, 'repo', event, 'repo')
display(repo.head(3))
event.head(3)

# %%
#### org/repo --> org_name, repo_name

# %%
repo = split_org_repo(repo, 'name')
repo.head(3)

# %% [markdown]
# ### Entity: Actor

# %%
# ENTITY: actor
event, actor = nested_dimension(tbls, 'actor', event, 'actor')
display(actor.head(3))
event.head(3)

# %% [markdown]
# ### Entity: Org

# %%
# ENTITY: org
event, org = nested_dimension(tbls, 'org', event, 'org')
display(org.head(3))
event.head(3)

# %%
print('SUMMARY')
dfoneliners(tbls)

# print('TABLES')
# dfsummaries(tbls)

# %%

# %% [markdown]
# ## Write dataframes (tables) --> files to facilitate merging.

# %%
# SEED_ARCHIVE_NAME[:-8] # YYYY-MM-DD-HH.json.gz --> YYYY-MM-DD-HH
# !set -x && mkdir -p '{OUT_DIR}' && ls -lF '{OUT_DIR}'

# %%
import pyarrow.feather as feather

# intermediate files
OUT_DIR = 'data/gharchive/.processed/apple-day0-mattyoung'

print(f'SEED_ARCHIVE:      {SEED_ARCHIVE}')
print(f'SEED_DIR:          {SEED_DIR}')
print(f'SEED_ARCHIVE_NAME: {SEED_ARCHIVE_NAME}')
print(f'OUT_DIR:           {OUT_DIR}')

tup = os.path.splitext(SEED_ARCHIVE_NAME)
fname_root = f'{tup[0][:-8]}'                           # YYYY-MM-DD-HH.json.gz --> YYYY-MM-DD-HH

print(f'\n*** writing to files: {list(tbls.keys())}')

for k,df in tbls.items():
    fname_base     = f'{fname_root}.{k}'          # YYYY-MM-DD-HH.actor 
    dfoneline(f'{fname_base}',df)

    full_path_base = f'{OUT_DIR}/{fname_base}'
    
    # print(f'\n*** Pandas --> Pickle: {k}')
    # pickle_fname = f'{full_path_base}.pickle.gz'      # 2022-10-01.repo.pickle.gz
    # # %time df.to_pickle(pickle_fname)
    # print(f'DONE writing file: {pickle_fname}')
        
    print(f'\n*** Pandas --> Arrow: {k}')
    arrow_fname = f'{full_path_base}.arrow'      # 2022-10-01.repo.arrow
    
    with open(arrow_fname, 'wb') as f:
        # %time feather.write_feather(df, f, compression="lz4")
    print(f'DONE writing file: {arrow_fname}')


# %%
# !du -hs '{SEED_DIR}' && ls -lhS '{SEED_DIR}'/*
# !du -hs '{OUT_DIR}' && ls -lhS '{OUT_DIR}'/*

pd.set_option('display.max_columns', None)
event.head()

# %%
display(event.dtypes)

# %%
# # %run data/gharchive/gharchive.py
# config = GHARCHIVE_ENTITY_CONFIG
# event_dtypes_df = config['event']['dtypes_df']
# event_new = event.astype(event_dtypes_df)

# display(event.dtypes)
# display(event_new.dtypes)

# dfoneline('*** event    ', event)
# dfoneline('*** event_new', event_new)

# print(f'\n***  event\n-----\n')
# dfmemstat(event)
      
# print(f'\n*** event_new\n---------\n')
# dfmemstat(event_new)

# event.head(3)


# %%
dfmemstat(event)

# %%

# %%

# %% [markdown]
# ### Resources (arrow/feather/pandas)

# %% [markdown]
# * https://arrow.apache.org/docs/python/pandas.html
# * https://arrow.apache.org/docs/python/feather.html#feather-file-format
# * https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_feather.html#pandas-dataframe-to-feather
# * https://arrow.apache.org/docs/python/generated/pyarrow.feather.write_feather.html#pyarrow.feather.write_feather
#
# * https://arrow.apache.org/docs/python/data.html#dictionary-arrays
#
# * https://observablehq.com/@uwdata/introducing-arquero
# * https://observablehq.com/@uwdata/arquero-and-apache-arrow
# * https://observablehq.com/@uwdata/an-illustrated-guide-to-arquero-verbs
#

# %% [markdown]
# ## Push tables --> Postgres Database

# %%

# %%
# !pip list | grep jupyter


