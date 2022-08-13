#!/bin/bash

# author: martin@affolter.net

set -e

name=$(node setname.js 'affolternet-vue3-library-local')

npm link

node setname.js 'affolternet-vue3-library'

pushd .

cd ../debug

npm link affolternet-vue3-library-local

popd
