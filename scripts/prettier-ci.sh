#!/usr/bin/env bash
set -e
nvm-guard

echo "checking prettiness of json, md, yml files..."

prettier --check "**/*.{json,md,yml}"

echo "pretty files!"
