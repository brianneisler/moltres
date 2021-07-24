#!/usr/bin/env bash
set -e

echo "deploying..."

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
npm publish .

echo "deploy complete!"
