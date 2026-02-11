# GitHub Label Automation

## Overview

The CNCF Landscape Graph project uses an automated labeling system to help categorize issues and pull requests by their relevant Sub-Graph Module (SGM). This system is inspired by the [OpenTelemetry collector-contrib approach](https://github.com/open-telemetry/opentelemetry-collector-contrib).

## Component Labels

All Sub-Graph Modules have corresponding labels in the format `sgm/[module-name]`. For example:

- `sgm/brew` - Package manager module for Homebrew
- `sgm/github` - GitHub source control module
- `sgm/slack` - Real-time communication module for Slack
- `sgm/youtube` - Video platform module

### Label Categories

Labels are color-coded by category:

| Category | Color | Modules |
|----------|-------|---------|
| **BLOGS** | 🟪 Pink (`#E8B4D9`) | blogcncf |
| **BOARDS** | 🔵 Light Blue (`#B4D9E8`) | ghdiscuss, stackoverflow |
| **CORP** | 🟢 Light Green (`#D9E8B4`) | crunchbase, yahoofinance |
| **PACKAGES** | 🟡 Orange (`#FFD580`) | brew, choco, crate, deb, deno, go, maven, npm, pip, rpm |
| **RTC** | 💚 Teal (`#B4E8D9`) | discord, slack |
| **SCM** | 🟣 Purple (`#D9B4E8`) | gharchive, git, github, template |
| **SOCIAL** | 🟤 Beige (`#E8D9B4`) | email, linkedin, twitter |
| **THREATS** | 🔴 Red (`#FF9999`) | nist |
| **VIDEOS** | 🔵 Blue (`#99CCFF`) | youtube |
| **CORE** | ⚪ Gray (`#CCCCCC`) | core, cncf |

## Using Label Commands in Issues

Maintainers and collaborators can add or remove labels by commenting on issues with the `/label` command.

### Adding Labels

To add a single label:
```
/label sgm/brew
```

To add multiple labels:
```
/label sgm/brew sgm/npm sgm/pip
```

You can also explicitly use the `+` prefix:
```
/label +sgm/github +bug
```

### Removing Labels

To remove a label, use the `-` prefix:
```
/label -sgm/brew
```

Mix adding and removing:
```
/label sgm/npm -sgm/brew +bug
```

### Common Labels

In addition to component labels, you can also use these common labels:

**Issue Type:**
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `question` - Further information is requested
- `good-first-issue` - Good for newcomers
- `help-wanted` - Extra attention needed

**Priority:**
- `priority:p0` → `p0-critical`
- `priority:p1` → `p1-high`
- `priority:p2` → `p2-medium`
- `priority:p3` → `p3-low`

**Effort:**
- `effort:minutes` → `e0-minutes` (< 60 min)
- `effort:hours` → `e1-hours` (< 8 hrs)
- `effort:days` → `e2-days` (< 5 days)
- `effort:weeks` → `e3-weeks` (< 4 weeks)
- `effort:months` → `e4-months` (1+ months)

**Workflow:**
- `needs-triage` - Needs initial review
- `waiting-for-author` - Awaiting response
- `cleanup` - Code/docs cleanup
- `infrastructure` - Infrastructure changes

### Example Usage

```
/label sgm/brew priority:p1 effort:hours good-first-issue
```

This would add labels: `sgm/brew`, `p1-high`, `e1-hours`, and `good first issue` to the issue.

## How It Works

### Component Detection

The system automatically detects all Sub-Graph Modules by scanning the `db/` directory for:
- Directories matching the pattern `sgm-*`
- Core module directories (`core`, `cncf`)

### Label Mapping

The `.github/component_labels.txt` file maintains a mapping between full module paths and short label names:

```
# Format: full_path    short_label
packages/sgm-brew     sgm/brew
sgm-github            sgm/github
```

### Automation Workflows

#### 1. Add Labels via Comments (`add-labels.yml`)

- **Trigger:** When a comment is created on an issue
- **Condition:** Comment starts with `/label`
- **Action:** Parses the comment and adds/removes the specified labels
- **Script:** `.github/scripts/add-labels.sh`

#### 2. Generate Labels (`generate-labels.yml`)

- **Triggers:**
  - Weekly on Mondays at 9:00 UTC
  - Manual via `workflow_dispatch`
  - When `db/` structure changes
- **Action:** Scans for new modules and creates a PR to update labels
- **Script:** `.github/scripts/generate_component_labels.py`

## Adding New Sub-Graph Modules

When you add a new Sub-Graph Module to the `db/` directory:

1. **Automatic Detection:** The `generate-labels` workflow will automatically detect it on the next run
2. **Manual Trigger:** You can manually trigger the workflow via GitHub Actions
3. **Local Generation:** Run the script locally:
   ```bash
   python .github/scripts/generate_component_labels.py --update-settings
   ```

### Manual Steps

If you prefer to add labels manually:

1. Add an entry to `.github/component_labels.txt`:
   ```
   category/sgm-newmodule    sgm/newmodule
   ```

2. Add the label to `.github/settings.yml`:
   ```yaml
   - name: sgm/newmodule
     description: "Sub-Graph Module: category/sgm-newmodule"
     color: XXXXXX  # Use category's color
   ```

3. Commit and push the changes

## For Contributors

### Working on a Specific Module

If you're working on a specific SGM:

1. Find the module's label in the [component labels list](#component-labels)
2. Filter issues by that label: `is:open is:issue label:sgm/[module-name]`
3. When creating a new issue, add the appropriate SGM label

### Requesting a Label

If you need a label added to an issue but don't have permissions:

1. Comment on the issue: `@maintainers Could you add label: /label sgm/[module-name]?`
2. A maintainer can then comment with the actual `/label` command

## Troubleshooting

### Label Not Found

If you see "doesn't correspond to a known component":

1. Check the spelling of the label
2. Verify it exists in `.github/component_labels.txt`
3. View all available labels: `cat .github/component_labels.txt`

### Workflow Not Triggering

If the `/label` command doesn't work:

1. Ensure the comment starts with `/label` (no leading spaces)
2. Check that you have appropriate permissions
3. View the workflow run in the Actions tab

### Script Errors

To test the label generation script locally:

```bash
# Dry run (no changes)
python .github/scripts/generate_component_labels.py --dry-run

# Generate component_labels.txt
python .github/scripts/generate_component_labels.py

# Update both component_labels.txt and settings.yml
python .github/scripts/generate_component_labels.py --update-settings
```

## Reference

- **OpenTelemetry Inspiration:** [add-labels.sh](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/.github/workflows/scripts/add-labels.sh)
- **Sub-Graph Modules:** See [db/README.md](../db/README.md)
- **GitHub Settings App:** [probot/settings](https://github.com/apps/settings)

## Contributing

To improve the label automation system:

1. **Script improvements:** Edit `.github/scripts/generate_component_labels.py` or `add-labels.sh`
2. **Workflow enhancements:** Edit `.github/workflows/add-labels.yml` or `generate-labels.yml`
3. **Documentation:** Update this file

Issues and PRs welcome! Use `label:infrastructure` for automation-related changes.
