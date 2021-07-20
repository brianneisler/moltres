#!/usr/bin/env bash
set -e

echo "generating docs..."

babel-node ./scripts/js/docs-generate.js $@

echo "docs generated!"
