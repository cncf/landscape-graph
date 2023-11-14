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
# # Fetch all GitHub Release info for OSRB projects

# %% [markdown]
# ## install dependencies

# %%
# %pip list | grep -E 'pandas|dask|sqlalchemy|psycopg2-binary|graphviz|PyGitHub|opentelemetry-api|opentelemetry-sdk|python-dotenv|jsonpath-ng'
# %pip install pandas dask sqlalchemy psycopg2-binary graphviz PyGitHub opentelemetry-api opentelemetry-sdk python-dotenv jsonpath-ng 

# %%
# %pip list | grep -E 'pandas|dask|sqlalchemy|psycopg2-binary|graphvizPy|GitHub|opentelemetry-api|opentelemetry-sdk|python-dotenv|jsonpath-ng'

# %%
import os
import time
import json
from datetime import datetime, timezone

import pandas as pd
from typing import List
from github import Github, GithubException

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 150)

# for PAT / token
from dotenv import load_dotenv
load_dotenv()


# %% [markdown]
# ## Load OSRB repo list

# %%
def safe_set_index(df:         pd.DataFrame, 
                   idx_wanted: list[str]) -> pd.DataFrame:

    # check to see if the index is already set, else, data loss as set_index can be destructive
    idx_existing = list(df.index.names)

    if idx_wanted == idx_existing:
        print(f'\n*** WARNING: attempt to set index to what it already is thwarted! \n')
    else:
        df.set_index(idx_wanted, verify_integrity=True, inplace=True) # note: index must be unique!
        df.sort_index(inplace=True, ascending=True)
    return df

def split_org_repo(df:               pd.DataFrame, 
                   colname:          str,
                   drop:             bool = False,
                   newcol_org_name:  str = 'org_name',
                   newcol_repo_name: str = 'repo_name',
                   multi_idx:        bool = False) -> pd.DataFrame:
    '''split_org_repo(df, colname) - org_name/repo_name --> org_name, repo_named'''
    
    if colname is None:
        raise ValueError('split_org_repo: missing colname!')

    # df['tmp'] = df[colname].copy()
    # df_newcols = df['tmp'].str.split(pat='/', n=1, expand=True)

    # https://swdevnotes.com/python/2022/extract-data-from-json-in-pandas-dataframe/
    # expand=True returns a dataframe  which we can rename columns on
    df_newcols = df[colname].copy().str.split(pat='/', n=1, expand=True)
    df_newcols.rename(columns={0: newcol_org_name, 1: newcol_repo_name}, inplace=True)

    if drop:
        df.drop(colname, axis=1, inplace=True)

    df = pd.concat([df,df_newcols], axis=1)

    if multi_idx:
        safe_set_index(df, idx_wanted=[newcol_org_name, newcol_repo_name])
    else:
        safe_set_index(df, idx_wanted=[colname])

    return df

#############

def load_repos(fname: str=None, splitcols: bool=False, lowercase: bool=False) -> pd.DataFrame:
    '''Load repos from a file'''

    with open(fname, 'r') as f:
        df = pd.DataFrame(f.readlines(), columns=['name'])

    # strip comments (note '~' negation in selector)
    df = df[~df['name'].astype(str).str.startswith('#')]

    # clean up trailing newlines and where OSRB API returns a trailing slash
    df.name = df.name.str.rstrip(to_strip='\n')
    df.name = df.name.str.rstrip(to_strip='/')

    if lowercase:
        df.name = df.name.str.lower()

    # {name: someOrg/someRepo} --> { name: 'someOrg/someRepo', org_name = 'someOrg', repo_name = 'someRepo'
    if splitcols:
        df = split_org_repo(df, colname='name', multi_idx=True)
    else:
        # split_org_repo handles setting the index and sorting
        safe_set_index(df, idx_wanted=['name'])
    return df




# %%
OSRB_FILE = '../../data/osrb/osrb-repos.txt'
#OSRB_FILE = '../../data/osrb/osrb-repos-debugsmall.txt'

osrb = load_repos(OSRB_FILE, lowercase=True)
display(osrb.head())

osrb_split = load_repos(OSRB_FILE, splitcols=True, lowercase=True)
display(osrb_split)

osrb_split.groupby('org_name').count()

# %% [markdown]
# ## Fetch project high level metadata from GitHub API

# %%
import time
import json
import pandas as pd
from typing import List, Tuple
from datetime import datetime, timezone
from github import Github, GithubException
from jsonpath_ng import parse

def fetch_repo_data(token: str, 
                    repo_list: List[str], 
                    include_releases: bool=False,
                    releases_since: datetime=None, 
                    json_file: str=None, 
                    csv_file: str=None, 
                    state_file: str=None, 
                    properties: List[Tuple[str, str]]=None) -> pd.DataFrame:

    # Initialize DataFrame
    df = pd.DataFrame()

    # Initialize GitHub client
    g = Github(token)

    # Initialize loop state
    if state_file:
        try:
            with open(state_file, 'r') as f:
                state = json.load(f)
        except FileNotFoundError:
            state = {'i': 0, 'repos_done': []}
    else:
        state = {'i': 0, 'repos_done': []}

    while state['i'] < len(repo_list):
        repo_str = repo_list[state['i']]

        # Skip problematic repository
        if repo_str == "ResearchKit/ResearchKit":
            print(f"Skipping {repo_str}")
            state['i'] += 1
            continue

        # Skip repository if already done
        if repo_str in state['repos_done']:
            print(f"Skipping {repo_str}")
            state['i'] += 1
            continue

        while True:
            try:
                repo = g.get_repo(repo_str)
                break
            except GithubException as e:
                if e.status == 404:
                    print(f"Repository {repo_str} not found")
                    break
                elif e.status == 429:
                    print(f"Rate limit exceeded, waiting for {e.headers['Retry-After']} seconds...")
                    time.sleep(int(e.headers['Retry-After']))
                else:
                    print(f"Error getting repository {repo_str}: {e}")
                    break

        if not repo:
            state['i'] += 1
            continue

        print(f"{repo_str} Fetching Metadata...")
        repo_dict = repo.raw_data

        if properties is None:
            # Add all properties to DataFrame
            df = pd.concat([df, pd.json_normalize(repo_dict)])
        else:
            # Add specified properties to DataFrame
            for prop_path, col_name in properties:
                jsonpath_expr = parse(prop_path)
                matches = jsonpath_expr.find(repo_dict)
                values = [match.value for match in matches]
                df[col_name] = values

        if include_releases:
            releases = repo.get_releases()
            for release in releases:
                if since is None or release.created_at >= since:
                    df = pd.concat([df, pd.DataFrame({
                        'repo_name': [repo_str],
                        'release_name': [release.title],
                        'release_date': [str(release.published_at)],
                        'language': [repo.language],
                        'release_notes': [release.body],
                        'stars': [repo.stargazers_count],
                        'forks': [repo.forks_count],
                        'open_issues': [repo.open_issues_count]
                    })])
                    print(f"Added {release.published_at}, {repo_str}::{release.title}  ")

        # Save state
        if state_file:
            state['repos_done'].append(repo_str)
            with open(state_file, 'w') as f:
                json.dump(state, f, indent=4)

        state['i'] += 1

    # Save as CSV
    if csv_file:
        df.to_csv(csv_file, index=False)

    # Save as JSON
    if json_file:
        # with open(json_file, 'w') as f:
        #     json.dump(df.to_dict(orient='records', f, indent=4)
        df.to_json(json_file, orient='records', indent=4, lines=True)

    return df



# %% [markdown]
# ## Get repo metadata from GitHub (REST) API

# %%
osrb.reset_index(inplace=False).name.to_list()

# %%
import os

repos = osrb.reset_index(inplace=False).name.to_list()
since_date = datetime(2023, 1, 1, tzinfo=timezone.utc)

fnbase = 'osrb-repo-summary'
json_file = f'{fnbase}.json'
csv_file = f'{fnbase}.csv'
state_file = f'{fnbase}.state.json'

repodata = fetch_repo_data(os.environ['GITHUB_TOKEN'], 
                           repos,
                           include_releases=False,
                           releases_since=since_date, 
                           json_file=json_file, 
                           csv_file=csv_file)

                           #state_file=state_file

print(repodata.info(show_counts=True))
display(repodata.head())


# %%
repodata.info(show_counts=True, verbose=True)

# %%
lang_report = repodata.groupby('language').agg({'name': 'count', 
                                                'stargazers_count': 'sum', 
                                                'forks_count': 'sum', 
                                                'open_issues_count': 'sum'})
repo_report = repodata[['full_name', 'name', 'homepage', 'topics', 'forks_count', 'stargazers_count', 'open_issues_count', 'description']].copy()
display(lang_report)
display(repo_report)


# %%
repo_report.to_csv('out/osrb-repo-report.csv', index=False)
repo_report.to_json('out/osrb-repo-report.json', orient='records', lines=True)

lang_report.to_csv('out/osrb-lang-report.csv')


# %%
