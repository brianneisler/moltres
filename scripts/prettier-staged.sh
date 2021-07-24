#!/usr/bin/env bash
set -e

echo "prettying staged files..."

prettier --write $@

echo "files are now pretty!"
