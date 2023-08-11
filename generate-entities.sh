#!/usr/bin/env bash

JP="jp -f landscape-items-clean.json"

jp -f landscape-items-clean.json "[?relation].{ id: id, \
                                                flatName: flatName, \
                                                name: name, \
                                                relation: relation, \
                                                oss: oss, \
                                                license: license, \
                                                description: description \
                                                repos: repos }"