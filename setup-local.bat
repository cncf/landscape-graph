

@echo Run this script from the root of the project.
@echo python -m venv venv-lg
@echo venv-lg\Scripts\activate.bat

python -m pip install --upgrade pip
pip install -r jlab\requirements.core.txt
pip install -r jlab\requirements.jlab.txt