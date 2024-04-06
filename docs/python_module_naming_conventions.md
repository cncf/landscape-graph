
# Python Module Naming Conventions

## Overview
When naming Python modules, it is important to follow certain conventions to ensure compatibility with Python's import system, especially when working in environments like Jupyter and IPython.

## Key Points

### Python Import System and Hyphens
- Python's import system does not support hyphens (`-`) in module names. A file named `notebook-utils.py` cannot be imported using `import notebook-utils` as the hyphen is interpreted as a minus sign.
- The standard practice in Python is to use underscores (`_`) instead of hyphens in file and module names.

### Implications for Jupyter and IPython
- Jupyter and IPython adhere to the Python conventions and limitations. Importing a module with a hyphen in its name will result in a syntax error in these environments.

### Workaround
- If necessary, a module with a hyphenated name can be imported using `importlib`:
  ```python
  import importlib
  notebook_utils = importlib.import_module("notebook-utils")
  ```
- However, this is not standard practice and may lead to confusion and maintenance challenges.

### Best Practices
- Use underscores for Python filenames and module names to ensure compatibility with the Python import system.
- This practice aligns with the expectations of the Python community and prevents import-related issues.

### File Naming in Non-Python Contexts
- For files not intended for import (like data files, configuration files, etc.), using hyphens is generally acceptable.

### Conclusion
For Python modules intended for import, it's recommended to use underscores in filenames. This ensures smooth integration with Python's import system and avoids potential issues in Jupyter and IPython environments.