# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.16.4
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %% [markdown]
# # CNCF 2024 - Watch Events

# %%
# # !echo "---"
# # !ls     ~/gharchive-cncf.2024
# # !echo "---"
# # !du -hs ~/gharchive-cncf.2024
# # !echo "---"

# # !du -hs ~/gharchive-cncf.2024/*

# %%
import altair as alt

# Enable VegaFusion data transformer to handle large datasets
alt.data_transformers.enable("vegafusion")

# Optionally, set the data transformer to use a local cache to improve performance
alt.data_transformers.enable('json', prefix='altair-data')

# Verify the configuration
print("Altair data transformer configuration:", alt.data_transformers.active)


# %%
from pathlib import Path
import os
import pyarrow.parquet as pq

DATASETS_ROOT_PATH="/Users/matt/gharchive-CNCF.2024"
DATASETS_ROOT = Path(DATASETS_ROOT_PATH)
DATASET_PATHS = {}

for file in os.listdir(DATASETS_ROOT):
    file_path = DATASETS_ROOT / file
    if file_path.is_file() and file.endswith('.parquet'):
        DATASET_PATHS[file] = file_path

DATASET_PATHS

# %%
# Read WatchEvent dataset
watch_events_path = DATASET_PATHS['WatchEvent-consolidated.parquet']
watch_events_df = pq.read_table(watch_events_path).to_pandas()

# Display basic info about the dataset
print(f"WatchEvents dataset shape: {watch_events_df.shape}")
watch_events_df.head()


# %%
import pandas as pd
import altair as alt
from datetime import datetime

# Read CNCF projects data
cncf_projects = pd.read_csv('../../../notebooks/cncf/projects-with-github.csv')

# Create mapping from org to tag
org_to_tag = cncf_projects.set_index('org')['tag'].to_dict()

# Map tag to watch events using existing org_name column
watch_events_df['tag'] = watch_events_df['org_name'].map(org_to_tag)

# Convert created_at to datetime if not already
watch_events_df['created_at'] = pd.to_datetime(watch_events_df['created_at'])

# Create daily watch counts by tag
daily_watches = (
    watch_events_df[watch_events_df['tag'].notna()]
    .groupby([pd.Grouper(key='created_at', freq='D'), 'tag'])
    .size()
    .reset_index(name='watch_count')
)

# Create visualization
chart = alt.Chart(daily_watches).mark_line().encode(
    x=alt.X('created_at:T', title='Date'),
    y=alt.Y('watch_count:Q', title='Watch Events'),
    color=alt.Color('tag:N', title='Project Tag'),
    tooltip=['created_at', 'tag', 'watch_count']
).properties(
    width=800,
    height=400,
    title='GitHub Watch Events by CNCF Project Tag Over Time'
).interactive()

chart


# %%
# Filter for observability tag
observability_watches = watch_events_df[watch_events_df['tag'] == 'observability']

# Create daily watch counts by project for observability tag
daily_observability_watches = (
    observability_watches
    .groupby([pd.Grouper(key='created_at', freq='D'), 'repo_name'])
    .size()
    .reset_index(name='watch_count')
)

# Create visualization for observability tag
observability_chart = alt.Chart(daily_observability_watches).mark_line().encode(
    x=alt.X('created_at:T', title='Date'),
    y=alt.Y('watch_count:Q', title='Watch Events'),
    color=alt.Color('repo_name:N', title='Project Name'),
    tooltip=['created_at', 'repo_name', 'watch_count']
).properties(
    width=800,
    height=400,
    title='GitHub Watch Events for Observability Projects Over Time'
).interactive()

observability_chart


# %%
# Filter for observability tag
observability_watches_top15 = (
    observability_watches
    .groupby('repo_name')
    .size()
    .reset_index(name='total_watch_count')
    .nlargest(15, 'total_watch_count')
    .merge(observability_watches, on='repo_name')
)

# Create daily watch counts by project for top 7 observability projects
daily_observability_watches_top15 = (
    observability_watches_top15
    .groupby([pd.Grouper(key='created_at', freq='D'), 'repo_name'])
    .size()
    .reset_index(name='watch_count')
)

# Create visualization for top 7 observability projects
observability_chart_top15 = alt.Chart(daily_observability_watches_top15).mark_line().encode(
    x=alt.X('created_at:T', title='Date'),
    y=alt.Y('watch_count:Q', title='Watch Events'),
    color=alt.Color('repo_name:N', title='Project Name'),
    tooltip=['created_at', 'repo_name', 'watch_count']
).properties(
    width=800,
    height=400,
    title='GitHub Watch Events for Top 15 Observability Projects Over Time'
).interactive()

observability_chart_top15


# %%
# Create cumulative watch counts by project for top 15 observability projects
cumulative_observability_watches_top15 = (
    observability_watches_top15
    .groupby(['repo_name', pd.Grouper(key='created_at', freq='D')])
    .size()
    .groupby(level=0).cumsum()
    .reset_index(name='cumulative_watch_count')
)

# Create stacked line chart for cumulative watch counts
cumulative_observability_chart_top15 = alt.Chart(cumulative_observability_watches_top15).mark_line().encode(
    x=alt.X('created_at:T', title='Date'),
    y=alt.Y('cumulative_watch_count:Q', title='Cumulative Watch Events'),
    color=alt.Color('repo_name:N', title='Project Name'),
    tooltip=['created_at', 'repo_name', 'cumulative_watch_count']
).properties(
    width=800,
    height=400,
    title='Cumulative GitHub Watch Events for Top 15 Observability Projects Over Time'
).interactive()

cumulative_observability_chart_top15


# %%
# Group by tag and date to get daily watch counts by tag
daily_watches_by_tag = (
    watch_events_df
    .groupby([pd.Grouper(key='created_at', freq='D'), 'tag'])
    .size()
    .reset_index(name='watch_count')
)

# Create visualization for watches by tag over time
watches_by_tag_chart = alt.Chart(daily_watches_by_tag).mark_line().encode(
    x=alt.X('created_at:T', title='Date'),
    y=alt.Y('watch_count:Q', title='Watch Events'),
    color=alt.Color('tag:N', title='Tag'),
    tooltip=['created_at', 'tag', 'watch_count']
).properties(
    width=800,
    height=400,
    title='GitHub Watch Events by Tag Over Time'
).interactive()

watches_by_tag_chart


# %%
