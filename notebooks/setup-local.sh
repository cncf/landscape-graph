#!/bin/bash
set -e

GIT_TOPLEVEL="$(git rev-parse --show-toplevel)"

VENV_DIR="${GIT_TOPLEVEL}/.venv-ipynb"

# Create virtual environment
python3 -m venv "$VENV_DIR"

# Activate virtual environment
source "$VENV_DIR/bin/activate"

# Install requirements from requirements.txt
pip install -r requirements-base.txt

# Install additional requirements from requirements-dev.txt
pip install -r requirements-jupyterlab.txt

pip list --format=json > pip-list.json

# pip list --format=json | jq '.[].name' | xargs pip show

# Deactivate virtual environment
deactivate

echo "Virtual environment created and requirements installed."
echo "To activate the virtual environment, run:"
echo ""
echo "source .venv-ipynb/bin/activate"
echo ""
echo "If using the JupterLab (local) application configure server to:"
echo ""
echo "$(pwd)/.venv-ipynb/bin/python"
echo ""