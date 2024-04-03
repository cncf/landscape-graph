#!/usr/bin/env bash

set -eux

quarto render notebook_template.ipynb --to html --output-dir ../docs --output-name notebook_template.html
quarto render notebook_template.ipynb --to pdf --output-dir ../docs --output-name notebook_template.pdf
quarto render notebook_template.ipynb --to md --output-dir ../docs --output-name notebook_template.md