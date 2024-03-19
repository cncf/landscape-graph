#!/usr/bin/env bash

set -ex

GIT_TOPLEVEL="$(git rev-parse --show-toplevel)"

VENV_DIR="${GIT_TOPLEVEL}/.venv-ipynb"

# Create virtual environment
python3 -m venv "$VENV_DIR"

# Activate virtual environment
source "$VENV_DIR/bin/activate"

# Install requirements from requirements.txt
pip install -r "$GIT_TOPLEVEL/jlab/requirements.core.txt"

# Install additional requirements from requirements-dev.txt
pip install -r "$GIT_TOPLEVEL/jlab/requirements.jlab.txt"

pip list --format=json | jq > pip-list.json


#
# Language Server Protocol (LSP) packages
#

# https://pypi.org/project/jupyterlab-lsp/  (reproducing for clarity)
#
# (Optional, Linux/OSX-only) As a security measure by default Jupyter server 
# only allows access to files under the Jupyter root directory (the place where 
# you launch the Jupyter server). Thus, in order to allow jupyterlab-lsp to navigate 
# to external files such as packages installed system-wide or to libraries inside 
# a virtual environment (conda, pip, ...) this access control mechanism needs to 
# be circumvented: inside your Jupyter root directory create a 
# symlink named .lsp_symlink pointing to your system root /.
#
# ln -s / .lsp_symlink
#
# As this symlink is a hidden file the Jupyter server must be instructed to serve
#  hidden files. Either use the appropriate command line flag:
#
# jupyter lab --ContentsManager.allow_hidden=True
#
# or, alternatively, set the corresponding setting inside your jupyter_server_config.py.
#
# Help in implementing a custom ContentsManager which will enable navigating 
# to external files without the symlink is welcome.

echo "Creating SymLink (.lsp_symlink) to $VENV_DIR from $GIT_TOPLEVEL (jupyterlab root dir)"
ln -s "$VENV_DIR" "$GIT_TOPLEVEL/.lsp_symlink"



# for debugging package conflicts
# pip list --format=json | jq '.[].name' | xargs pip show

# Deactivate virtual environment
deactivate

echo "-----------------------------------------------------------------"
echo "Virtual environment created and requirements installed."
echo "-----------------------------------------------------------------"
echo ""
echo "*** To activate the virtual environment, run:"
echo ""
echo "source $VENV_DIR/bin/activate" 
echo ""
echo "...or..."
echo ""
echo "source ../.venv-ipynb/bin/activate"
echo ""
echo "or" 
echo ""
echo "source $VENV_DIR/bin/activate"
echo ""
echo "-----------------------------------------------------------------"
echo "*** If using the JupterLab (local) application configure server to:"
echo ""
echo "$VENV_DIR/bin/python"
echo ""
echo "*** to run JupyterLab directly from this virtual env:"
echo ""
echo "jupyter lab --ContentsManager.allow_hidden=True"
