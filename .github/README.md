# Quick Start: Label Automation

For detailed documentation, see [LABEL_AUTOMATION.md](LABEL_AUTOMATION.md).

## Adding Labels to Issues

Comment on any issue with:
```
/label sgm/[module-name]
```

For example:
```
/label sgm/brew priority:p1 good-first-issue
```

## Available Module Labels

View all 28 module labels in [component_labels.txt](component_labels.txt).

Categories: blogs, boards, corp, packages, rtc, scm, social, threats, videos, core

## For Maintainers

- Labels are defined in [settings.yml](settings.yml)
- Auto-generated weekly by [generate-labels workflow](.github/workflows/generate-labels.yml)
- Managed via `/label` commands in [add-labels workflow](.github/workflows/add-labels.yml)
