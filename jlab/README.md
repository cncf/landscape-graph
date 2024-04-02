#  jlab

A custom jupyterlab image based on the datascience-notebook image

## jupyterlab docker image

### Standard images provided by `jupyterlab`

![jupyterlab image tree](images/jlab-image-tree.svg)
_(source: <https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html>)_

---

### grand-base image: `jupyter/scipy-notebook`

[Source on GitHub](https://github.com/jupyter/docker-stacks/tree/main/scipy-notebook) |
[Dockerfile commit history](https://github.com/jupyter/docker-stacks/commits/main/scipy-notebook/Dockerfile) |
[Docker Hub image tags](https://hub.docker.com/r/jupyter/scipy-notebook/tags/)

`jupyter/scipy-notebook` includes popular packages from the scientific Python ecosystem.

- Everything in `jupyter/minimal-notebook` and its ancestor images
- [altair](https://altair-viz.github.io),
  [beautifulsoup4](https://www.crummy.com/software/BeautifulSoup/),
  [bokeh](https://docs.bokeh.org/en/latest/),
  [bottleneck](https://bottleneck.readthedocs.io/en/latest/),
  [cloudpickle](https://github.com/cloudpipe/cloudpickle),
  [conda-forge::blas=\*=openblas](https://www.openblas.net),
  [cython](https://cython.org),
  [dask](https://www.dask.org/),
  [dill](https://pypi.org/project/dill/),
  [h5py](https://www.h5py.org),
  [jupyterlab-git](https://github.com/jupyterlab/jupyterlab-git),
  [matplotlib-base](https://matplotlib.org/),
  [numba](https://numba.pydata.org/),
  [numexpr](https://github.com/pydata/numexpr),
  [openpyxl](https://openpyxl.readthedocs.io/en/stable/),
  [pandas](https://pandas.pydata.org/),
  [patsy](https://patsy.readthedocs.io/en/latest/),
  [protobuf](https://protobuf.dev/getting-started/pythontutorial/),
  [pytables](https://www.pytables.org/),
  [scikit-image](https://scikit-image.org),
  [scikit-learn](https://scikit-learn.org/stable/),
  [scipy](https://scipy.org/),
  [seaborn](https://seaborn.pydata.org/),
  [sqlalchemy](https://www.sqlalchemy.org/),
  [statsmodel](https://www.statsmodels.org/stable/index.html),
  [sympy](https://www.sympy.org/en/index.html),
  [widgetsnbextension](https://ipywidgets.readthedocs.io/en/latest/user_install.html#installing-in-classic-jupyter-notebook),
  [xlrd](https://www.python-excel.org)
  packages
- [ipympl](https://github.com/matplotlib/ipympl) and
  [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/)
  for interactive visualizations and plots in Python notebooks
- [Facets](https://github.com/PAIR-code/facets)
  for visualizing machine learning datasets

### base image: `jupyter/datascience-notebook`

[Source on GitHub](https://github.com/jupyter/docker-stacks/tree/main/datascience-notebook) |
[Dockerfile commit history](https://github.com/jupyter/docker-stacks/commits/main/datascience-notebook/Dockerfile) |
[Docker Hub image tags](https://hub.docker.com/r/jupyter/datascience-notebook/tags/)

`jupyter/datascience-notebook` includes libraries for data analysis from the Julia, Python, and R
communities.

- Everything in the `jupyter/scipy-notebook` and `jupyter/r-notebook` images and their ancestor
  images
- [rpy2](https://rpy2.github.io/doc/latest/html/index.html) package
- The [Julia](https://julialang.org/) compiler and base environment
- [IJulia](https://github.com/JuliaLang/IJulia.jl) to support Julia code in Jupyter notebooks
- [Pluto.jl](https://plutojl.org/) reactive Julia notebook interface, made accessible with [jupyter-pluto-proxy](https://github.com/yuvipanda/jupyter-pluto-proxy)
- [HDF5](https://github.com/JuliaIO/HDF5.jl) package











