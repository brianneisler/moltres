#!/usr/bin/env bash
set -e

echo "linting on CI..."

# NOTE BRN: We don't use the --fix flag on CI because at this point the code is already in the repo.
# If there are lint issues, they need to produce errors instead of autofixing.
eslint . --cache --ext ts,tsx,js,jsx

echo "lint complete!"

