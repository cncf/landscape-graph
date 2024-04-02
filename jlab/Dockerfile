FROM quay.io/jupyter/datascience-notebook:lab-4.1.5

#
# Fix: https://github.com/hadolint/hadolint/wiki/DL4006
# Fix: https://github.com/koalaman/shellcheck/wiki/SC3014
#
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

USER root

RUN apt-get update --yes && \
    apt-get install --yes --no-install-recommends \
    libpq-dev gcc jq htop neovim zsh graphviz default-jdk && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

USER ${NB_UID}

RUN python3 -m pip install --upgrade pip

COPY requirements.core.txt requirements.core.txt
COPY requirements.jlab.txt requirements.jlab.txt

RUN pip3 install -r requirements.core.txt && rm -Rf /${USER}/.cache/pip
RUN pip3 install -r requirements.jlab.txt && rm -Rf /${USER}/.cache/pip

USER ${NB_UID}
WORKDIR "${HOME}"

# To view labels:
# docker image inspect --format='{{json .Config.Labels}}' myimage | jq

ARG   VERSION="v0.0.0+unknown"
LABEL VERSION="$VERSION"

ARG   SHORTSHA="unset"
LABEL SHORTSHA="$SHORTSHA"

ARG   LONGSHA"unset"
LABEL LONGSHA="$LONGSHA"

ARG   BUILD_WHEN"unset"
LABEL BUILD_WHEN="$BUILD_WHEN"

ARG   BUILD_WHEN_UTC"unset"
LABEL BUILD_WHEN_UTC="$BUILD_WHEN_UTC"

ARG   COMMENT="No comment."
LABEL COMMENT="$COMMENT"