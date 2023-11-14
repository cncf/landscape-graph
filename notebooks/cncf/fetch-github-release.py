from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
from dataclasses import dataclass, asdict
import pandas as pd
from typing import List
import argparse

from dotenv import load_dotenv
load_dotenv()

# Data class for releases
@dataclass
class Release:
    tag_name: str
    created_at: str
    published_at: str
    name: str = ""
    body: str = ""
    url: str = ""

# Function to fetch releases for a single repository
def fetch_releases_for_repo(owner: str, name: str, github_token: str) -> List[Release]:
    headers = {"Authorization": f"bearer {github_token}"}
    transport = RequestsHTTPTransport(url='https://api.github.com/graphql', headers=headers, use_json=True)
    client = Client(transport=transport, fetch_schema_from_transport=True)

    query = gql("""
        query($owner: String!, $name: String!, $endCursor: String) {
            repository(owner: $owner, name: $name) {
                releases(first: 100, after: $endCursor) {
                    edges {
                        node {
                            tagName
                            createdAt
                            publishedAt
                            name
                            description
                            url
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                    }
                }
            }
        }
    """)

    releases = []
    has_next_page = True
    end_cursor = None

    while has_next_page:
        params = {
            "owner": owner,
            "name": name,
            "endCursor": end_cursor
        }
        result = client.execute(query, variable_values=params)

        for edge in result["repository"]["releases"]["edges"]:
            release = edge["node"]
            releases.append(Release(
                tag_name=release["tagName"],
                created_at=release["createdAt"],
                published_at=release["publishedAt"],
                name=release.get("name", ""),
                body=release.get("description", ""),
                url=release["url"],
            ))

        page_info = result["repository"]["releases"]["pageInfo"]
        end_cursor = page_info["endCursor"]
        has_next_page = page_info["hasNextPage"]

    return releases

# Function to fetch releases for all repositories
def fetch_all_releases(repos: List[str], github_token: str) -> pd.DataFrame:
    all_releases = []
    for repo in repos:
        owner, name = repo.split('/')
        releases = fetch_releases_for_repo(owner, name, github_token)
        all_releases.extend(releases)
    return pd.DataFrame([asdict(release) for release in all_releases])

# CLI functionality
def cli():
    parser = argparse.ArgumentParser(description="Fetch GitHub repository releases.")
    parser.add_argument('repos', nargs='+', help="Repositories to fetch in the 'org/repo' format.")
    parser.add_argument('--token', required=True, help="GitHub token for authentication.")
    args = parser.parse_args()

    try:
        releases_df = fetch_all_releases(args.repos, args.token)
        print(releases_df)
    except Exception as e:
        print(f"An error occurred: {e}")

# Main execution
if __name__ == "__main__":
    debugmode = True
    if debugmode:
        token = os.environ.get("GITHUB_TOKEN")
        if token is None:
            raise ValueError("Please set the GITHUB_TOKEN environment variable.")
        else:
            fetch_all_releases(['prometheus/prometheus', 'open-telemetry/opentelemetry-collector'], token)
    else:
        cli()
