#!/usr/bin/env python3
"""
Generate component labels for Sub-Graph Modules (SGM).

This script scans the db/ directory for all SGM modules and generates:
1. A component_labels.txt file mapping paths to short labels
2. Label definitions for .github/settings.yml
3. Can optionally update settings.yml automatically

Usage:
    python generate_component_labels.py [--dry-run] [--update-settings]
"""

import os
import re
import argparse
import yaml
from pathlib import Path
from typing import Dict, List, Tuple


# Color scheme for different SGM categories
CATEGORY_COLORS = {
    'blogs': 'E8B4D9',
    'boards': 'B4D9E8',
    'corp': 'D9E8B4',
    'packages': 'FFD580',
    'rtc': 'B4E8D9',
    'scm': 'D9B4E8',
    'social': 'E8D9B4',
    'threats': 'FF9999',
    'videos': '99CCFF',
    'core': 'CCCCCC',
    'default': 'DDDDDD'
}


def find_sgm_modules(base_dir: Path) -> List[Tuple[str, str, str]]:
    """
    Find all Sub-Graph Module directories.
    
    Returns:
        List of tuples: (category, module_name, full_path)
    """
    modules = []
    db_dir = base_dir / 'db'
    
    if not db_dir.exists():
        print(f"Error: {db_dir} does not exist")
        return modules
    
    # Scan for sgm-* directories
    for item in db_dir.rglob('sgm-*'):
        if item.is_dir():
            # Get relative path from db/
            rel_path = item.relative_to(db_dir)
            parts = rel_path.parts
            
            if len(parts) == 1:
                # Top-level SGM (e.g., sgm-gharchive)
                category = 'scm'
                module_name = parts[0]
            else:
                # Nested SGM (e.g., packages/sgm-brew)
                category = parts[0]
                module_name = parts[-1]
            
            modules.append((category, module_name, str(rel_path)))
    
    # Also add core modules that aren't prefixed with sgm-
    for category_dir in ['core', 'cncf']:
        cat_path = db_dir / category_dir
        if cat_path.exists() and cat_path.is_dir():
            modules.append((category_dir, category_dir, category_dir))
    
    return sorted(modules, key=lambda x: (x[0], x[1]))


def generate_component_labels_file(modules: List[Tuple[str, str, str]], output_file: Path):
    """Generate the component_labels.txt mapping file."""
    with open(output_file, 'w') as f:
        f.write("# Component Labels Mapping\n")
        f.write("# Format: full_path    short_label\n")
        f.write("#\n")
        f.write("# This file maps component paths to short labels for use in GitHub issues.\n")
        f.write("# It is used by the add-labels.sh script to resolve label references.\n")
        f.write("#\n\n")
        
        current_category = None
        for category, module_name, full_path in modules:
            if category != current_category:
                f.write(f"\n# {category.upper()} modules\n")
                current_category = category
            
            # Generate short label name (remove sgm- prefix if present)
            short_name = module_name.replace('sgm-', '')
            short_label = f"sgm/{short_name}"
            
            f.write(f"{full_path:<30} {short_label}\n")
    
    print(f"✓ Generated {output_file}")


def generate_settings_labels(modules: List[Tuple[str, str, str]]) -> List[Dict]:
    """Generate label definitions for settings.yml."""
    labels = []
    
    for category, module_name, full_path in modules:
        short_name = module_name.replace('sgm-', '')
        label_name = f"sgm/{short_name}"
        
        # Get color for this category
        color = CATEGORY_COLORS.get(category, CATEGORY_COLORS['default'])
        
        # Create label definition
        label = {
            'name': label_name,
            'description': f"Sub-Graph Module: {full_path}",
            'color': color
        }
        labels.append(label)
    
    return labels


def update_settings_file(labels: List[Dict], settings_file: Path, dry_run: bool = False):
    """Update the .github/settings.yml file with new component labels."""
    if not settings_file.exists():
        print(f"Error: {settings_file} does not exist")
        return
    
    # Read existing settings
    with open(settings_file, 'r') as f:
        settings = yaml.safe_load(f)
    
    if 'labels' not in settings:
        settings['labels'] = []
    
    # Get existing label names
    existing_labels = {label['name'] for label in settings['labels']}
    
    # Add new labels that don't already exist
    new_labels_count = 0
    for label in labels:
        if label['name'] not in existing_labels:
            settings['labels'].append(label)
            new_labels_count += 1
            print(f"  + Adding label: {label['name']}")
    
    if dry_run:
        print(f"\n[DRY RUN] Would add {new_labels_count} new labels to {settings_file}")
        return
    
    # Write updated settings
    with open(settings_file, 'w') as f:
        yaml.dump(settings, f, default_flow_style=False, sort_keys=False)
    
    print(f"✓ Updated {settings_file} with {new_labels_count} new labels")


def print_summary(modules: List[Tuple[str, str, str]]):
    """Print a summary of detected modules."""
    print("\n" + "="*70)
    print("DETECTED SUB-GRAPH MODULES")
    print("="*70 + "\n")
    
    category_counts = {}
    current_category = None
    
    for category, module_name, full_path in modules:
        if category != current_category:
            print(f"\n{category.upper()}:")
            current_category = category
        
        short_name = module_name.replace('sgm-', '')
        label_name = f"sgm/{short_name}"
        color = CATEGORY_COLORS.get(category, CATEGORY_COLORS['default'])
        
        print(f"  • {full_path:<30} → {label_name:<20} (#{color})")
        
        category_counts[category] = category_counts.get(category, 0) + 1
    
    print("\n" + "-"*70)
    print(f"TOTAL: {len(modules)} modules across {len(category_counts)} categories")
    print("-"*70 + "\n")
    
    for category, count in sorted(category_counts.items()):
        print(f"  {category:<15} {count:>3} module(s)")
    print()


def main():
    parser = argparse.ArgumentParser(
        description="Generate component labels for Sub-Graph Modules"
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help="Show what would be generated without making changes"
    )
    parser.add_argument(
        '--update-settings',
        action='store_true',
        help="Update .github/settings.yml with new labels"
    )
    args = parser.parse_args()
    
    # Find repository root
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent.parent
    
    print(f"Scanning for Sub-Graph Modules in: {repo_root}/db/\n")
    
    # Find all SGM modules
    modules = find_sgm_modules(repo_root)
    
    if not modules:
        print("No Sub-Graph Modules found!")
        return
    
    # Print summary
    print_summary(modules)
    
    # Generate component labels file
    component_labels_file = repo_root / '.github' / 'component_labels.txt'
    if not args.dry_run:
        generate_component_labels_file(modules, component_labels_file)
    else:
        print(f"[DRY RUN] Would generate {component_labels_file}")
    
    # Generate settings labels
    labels = generate_settings_labels(modules)
    
    # Update settings.yml if requested
    if args.update_settings:
        settings_file = repo_root / '.github' / 'settings.yml'
        update_settings_file(labels, settings_file, dry_run=args.dry_run)
    else:
        print(f"\n💡 To update .github/settings.yml, run with --update-settings flag")
    
    if args.dry_run:
        print("\n[DRY RUN] No files were modified")


if __name__ == '__main__':
    main()
