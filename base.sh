FOSSTOOLS_ENV_FILES=(--env-file versions.default.env --env-file db.default.env)

# construct --build-arg argument(s) from _versions.env
buildargs_awkout=$(awk '/^[^#]/ {printf " --build-arg " $0} END { print "" }' _versions.env)
buildargs="BUILDARGS=( $buildargs_awkout )"
eval $buildargs
