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

# %%
# %pip list installed -v

# %%
# for PAT / token
from dotenv import load_dotenv

# %%
load_dotenv()

# %%
packages = ['PyGithub', 'opentelemetry-api', 'opentelemetry-sdk', 'python-dotenv']
packages_grep = '|'.join(packages)
packages_install = ' '.join(packages)
print(packages_grep)
print(packages_install)

# %%
# %pip list | grep -E "$packages_grep"

# %%
# %pip install PyGitHub opentelemetry-api opentelemetry-sdk

# %%
# %pip list | grep -E "$packages_grep"

# %%
import pandas as pd

def safe_set_index(df:         pd.DataFrame, 
                   idx_wanted: list[str]) -> pd.DataFrame:

    # check to see if the index is already set, else, data loss as set_index can be destructive
    idx_existing = list(df.index.names)

    if idx_wanted == idx_existing:
        print(f'\n*** WARNING: attempt to set index to what it already is thwarted! \n')
    else:
        df.set_index(idx_wanted, verify_integrity=True, inplace=True) # note: index must be unique!
        df.sort_index(inplace=True)
    return df

def split_org_repo(df:      pd.DataFrame, 
                   colname: str,
                   drop:    bool = False,
                   newcol_org_name:  str = 'org_name',
                   newcol_repo_name: str = 'repo_name') -> pd.DataFrame:
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
    return df

#############

def load_repos(fname: str=None, splitcols: bool=False) -> pd.DataFrame:
    '''Load repos from a file'''

    with open(fname, 'r') as f:
        df = pd.DataFrame(f.readlines(), columns=['name'])

    # strip comments (note '~' negation in selector)
    df = df[~df['name'].astype(str).str.startswith('#')]

    # clean up trailing newlines and where OSRB API returns a trailing slash
    df.name = df.name.str.rstrip(to_strip='\n')
    df.name = df.name.str.rstrip(to_strip='/')

    # {name: someOrg/someRepo} --> { name: 'someOrg/someRepo', org_name = 'someOrg', repo_name = 'someRepo'
    if splitcols:
        df = split_org_repo(df, colname='name')
    return df


# %%
osrb = load_repos('../../data/osrb/osrb-repos.txt')
osrb.head()

# repo_urls = [f'https://github.com/{org_repo}' for org_repo in osrb.name]
# repo_urls[:5]


# %% [markdown]
# ## Fetch project release data from GitHub API

# %%
import time
import os
import json
import pandas as pd
from typing import List
from datetime import datetime, timezone
from github import Github, GithubException

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 150)

def fetch_repo_data(token: str, repo_list: List[str], since: datetime=None, json_file: str=None, csv_file: str=None, state_file: str=None) -> pd.DataFrame:

    # Initialize DataFrame
    df = pd.DataFrame(columns=[
        'repo_name', 'release_name', 'release_date', 
        'language', 'release_notes'
    ])

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

        # Get all releases
        releases = repo.get_releases()
        language = repo.language

        for release in releases:
            if since is None or release.created_at >= since:
                df = pd.concat([df, pd.DataFrame({
                    'repo_name': [repo_str],
                    'release_name': [release.title],
                    'release_date': [str(release.published_at)],
                    'language': [language],
                    'release_notes': [release.body]
                })])
                print(f"Added {release.published_at}, {repo_str}::{release.title}  ")

        # Save state
        if state_file:
            state['repos_done'].append(repo_str)
            with open(state_file, 'w') as f:
                json.dump(state, f, indent=4)

        state['i'] += 1

    print (releases)
    
    # Save as CSV
    if csv_file:
        df.to_csv(csv_file, index=False)

    # Save as JSON
    if json_file:
        df.to_json(json_file, orient='records', lines=True)
    return df



# %%
# Example usage
token = os.environ['GITHUB_TOKEN']
repos = osrb.name
since_date = datetime(2023, 1, 1, tzinfo=timezone.utc)
json_file = "out/osrb-github-releases.json"
csv_file = "out/osrb-github-releases.csv"
state_file = "out/osrb-github-releases.state.json"

releases = fetch_repo_data(token, 
                           repos, 
                           since=since_date, 
                           json_file=json_file, 
                           csv_file=csv_file, 
                           state_file=state_file)
releases

# %% [markdown]
# ## Visualize Releases

# %%
# %pip install ipympl

# %matplotlib inline
# %matplotlib widget

# %%
import plotly.express as px
import matplotlib.pyplot as plt

def plot_releases_timeline(releases: pd.DataFrame):
    fig = px.timeline(releases, x_start="release_date", x_end="release_date", y="repo_name", color="language", title="GitHub Releases Timeline")
    fig.update_yaxes(autorange="reversed")
    fig.show()

def plot_releases_scatter_simple(releases: pd.DataFrame):
    # Filter releases by year
    releases_2023 = releases[releases['release_date'].dt.year == 2023]

    # Create scatter plot
    fig = px.scatter(releases_2023, x="release_date", y="repo_name", color="language", title="GitHub Releases Scatter Plot")
    fig.update_yaxes(autorange="reversed")
    fig.show()

def plot_releases_scatter(releases: pd.DataFrame):
    # Filter releases by year
    releases_2023 = releases[releases['release_date'].dt.year == 2023]

    # Group releases by organization
    releases_2023['organization'] = releases_2023['repo_name'].apply(lambda x: x.split('/')[0])

    # Create scatter plot
    fig = px.scatter(releases_2023, x="release_date", y="repo_name", color="organization", symbol="language", title="GitHub Releases Scatter Plot")
    fig.update_yaxes(autorange="reversed")
    
    fig.update_layout(showlegend=True,
                      autosize=True,
                      width=1000,
                      height=2500,
                      ),
    fig.show()


# %%
import pandas as pd
import os

debug_releases = releases.copy()
    
# Load releases data from CSV file
csv_file = "out/releases.csv"
if os.path.exists(csv_file):
    releases = pd.read_csv(csv_file)
else:
    print(f"CSV file {csv_file} not found")

releases.release_date = pd.to_datetime(releases.release_date)

plot_releases_scatter(releases)


# %% editable=true slideshow={"slide_type": ""}
releases_by_repo = releases[['repo_name', 'release_date']].groupby('repo_name').count()
releases_by_repo

# %%

# %%
