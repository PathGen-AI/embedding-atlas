#!/bin/bash

# Build only the JavaScript/TypeScript packages needed by the web UI
# (skips Python backend + docs, which require platform-specific deps like torch)

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

pushd packages/viewer
npm run package
popd

pushd packages/embedding-atlas
npm run package
popd


