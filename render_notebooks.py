#!/usr/bin/env python3

# Quarto, by itself, does not execute Jupyter notebooks. It only renders them.
# This means that Quarto converts the notebooks into the desired output formats
# (like HTML, PDF, or Markdown) using the content as it currently exists in the
# notebook file. If the notebook contains code cells, their output will be
# included in the rendered document only if they were executed and their output
# was saved in the notebook file beforehand.

# To have updated or fresh execution of the notebooks' code cells and include
# their output in the rendered documents, you would typically need to execute
# the notebooks before rendering them. This can be done using tools like
# nbconvert with Jupyter, or by manually running the notebook within Jupyter
# itself to ensure all cells are executed and their outputs are saved.

# Quarto does integrate with Jupyter and other computational notebooks, but its
# primary function in this context is to render the existing content of these
# notebooks into various formats, not to execute their code cells.

import argparse
import subprocess
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm


def render_notebook(notebook: Path, output_dir: Path, format: str) -> dict:
    try:
        cmd = [
            "quarto", "render", str(notebook), "--to", format,
            "--output-dir", str(output_dir)
        ]
        subprocess.run(cmd, check=True, stderr=subprocess.PIPE, text=True)
        return {"notebook": notebook.name, "format": format, "status": "Success", "error": ""}
    except subprocess.CalledProcessError as e:
        error_message = e.stderr.strip().split('\n')[-1]
        return {"notebook": notebook.name, "format": format, "status": "Failed", "error": error_message}


def render_notebooks(notebooks_path: Path, output_path: Path) -> list:
    tasks = []
    for notebook in notebooks_path.rglob('*.ipynb'):
        relative_path = notebook.relative_to(notebooks_path)
        output_dir = output_path.joinpath(relative_path.parent)
        output_dir.mkdir(parents=True, exist_ok=True)
        for format in ['html', 'pdf', 'md']:
            tasks.append((notebook, output_dir, format))

    results = []
    with ThreadPoolExecutor() as executor:
        futures = {executor.submit(render_notebook, *task): task for task in tasks}
        for future in tqdm(as_completed(futures), total=len(tasks), desc="Rendering Notebooks", unit="notebook", leave=False):
            results.append(future.result())

    return results


def create_markdown_report(results: list, report_path: Path):
    lines = [
        "# Notebook Rendering Report\n",
        "| Notebook | Format | Status | Error Summary |\n",
        "| --- | --- | --- | --- |\n"
    ]
    for res in results:
        line = f"| {res['notebook']} | {res['format']} | {res['status']} | {res['error']} |\n"
        lines.append(line)

    with report_path.open('w') as f:
        f.writelines(lines)


def print_summary(results: list):
    print("\nRendering Summary:")
    print("Notebook | Format | Status")
    print("--- | --- | ---")
    for res in results:
        print(f"{res['notebook']} | {res['format']} | {res['status']}")


def main():
    parser = argparse.ArgumentParser(description="Render Jupyter notebooks to multiple formats.")
    parser.add_argument("--notebooks", default="notebooks", help="Path to the notebooks directory.")
    parser.add_argument("--output", default="docs", help="Path to the output directory.")

    args = parser.parse_args()
    notebooks_path = Path(args.notebooks).resolve()
    output_path = Path(args.output).resolve()

    results = render_notebooks(notebooks_path, output_path)

    print_summary(results)

    report_path = Path('notebook-rendering-report.md')
    create_markdown_report(results, report_path)
    print(f"\nDetailed report saved to {report_path}")


if __name__ == "__main__":
    main()
