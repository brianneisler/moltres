 #!/usr/bin/env bash
set -e
nvm-guard

echo "making files pretty..."

prettier --write "**/*.{json,md,yml}"

echo "files are now pretty!"
