#!/bin/bash

# Build all JavaScript and Python packages

set -euxo pipefail

pushd packages/utils
npm run package
popd

pushd packages/component
npm run package
popd

pushd packages/table
npm run package
popd

# Skipping viewer build on Intel macOS due to Python/uv/torch constraints
pushd packages/viewer
npm run package
popd

pushd packages/embedding-atlas
npm run package
popd

pushd packages/examples
npm run build
popd

# Skipping backend build (Python) on Intel macOS
pushd packages/backend
./build.sh
popd

# Skipping docs build due to uv Python environment constraints on Intel macOS
pushd packages/docs
npm run build
popd
