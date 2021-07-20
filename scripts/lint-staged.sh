#!/usr/bin/env bash
set -e

echo "linting staged files..."

eslint --fix --cache --ext ts,tsx,js,jsx $@

echo "lint complete!"
