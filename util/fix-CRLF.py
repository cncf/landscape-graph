import mimetypes
import os
import subprocess
import sys
from tqdm import tqdm

def run_command(command):
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        sys.exit(1)
    return result.stdout.strip()

def is_text_file(file_path):
    mime_type, _ = mimetypes.guess_type(file_path)
    return mime_type is not None and mime_type.startswith('text')

def remove_carriage_returns(dry_run):
    changed_files = []
    for root, dirs, files in os.walk('.'):
        for file in tqdm(files, desc="Processing files"):
            file_path = os.path.join(root, file)
            if is_text_file(file_path):
                with open(file_path, 'rb') as f:
                    content = f.read()
                if b'\r\n' in content:
                    changed_files.append(file_path)
                    if not dry_run:
                        new_content = content.replace(b'\r\n', b'\n')
                        with open(file_path, 'wb') as f:
                            f.write(new_content)
    return changed_files

def main(branch='main', dry_run=False):
    base_commit = run_command(f"git merge-base {branch} HEAD")
    run_command(f"git rebase -i {base_commit}")

    print("Processing commits...")
    changed_files = remove_carriage_returns(dry_run)
    
    if changed_files:
        print(f"Files changed:\n{'\n'.join(changed_files)}")
    else:
        print("No ^M line endings found.")

if __name__ == "__main__":
    branch = sys.argv[1] if len(sys.argv) > 1 else 'main'
    dry_run = True if len(sys.argv) > 2 and sys.argv[2] == '--dry-run' else False
    main(branch, dry_run)
