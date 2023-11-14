import os
import time
import json
import requests
from typing import List, Dict, Optional
from dataclasses import dataclass, asdict
from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
from datetime import datetime
import pandas as pd

GITHUB_TOKEN: Optional[str] = os.getenv("GITHUB_TOKEN")

@dataclass
class Release:
    tag_name: str
    created_at: str
    release_notes: str

def fetch_repos_for_org(org: str, token: str) -> List[str]:
    # For now, let's return a hardcoded list of repositories for testing
    return [f"{org}/repo1", f"{org}/repo2"]

def fetch_releases_for_repo(repo: str, token: str, begin_date: str, end_date: str) -> List[Release]:
    # For now, let's return a hardcoded list of releases for testing
    return [Release(tag_name="v1.0", created_at="2022-01-01", release_notes="First release")]

def write_to_file(data: List[Dict], file_type: str):
    # For now, let's write the data to a .jsonl file
    with open('output.jsonl', 'w') as f:
        for item in data:
            f.write(json.dumps(item) + '\n')

def main(repos: Optional[List[str]], orgs: Optional[List[str]]):
    if orgs is not None:
        for org in orgs:
            repos = fetch_repos_for_org(org, GITHUB_TOKEN)
            for repo in repos:
                releases = fetch_releases_for_repo(repo, GITHUB_TOKEN, "2022-11-07", "2023-11-07")
                data = [asdict(release) for release in releases]
                write_to_file(data, 'jsonl')

if __name__ == "__main__":
    main(None, ['org1'])