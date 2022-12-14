#!/bin/bash

# author: martin@affolter.net

set -e

branch=$(git branch)
if [ "$branch" != "* main" ]; then
  echo "not on main branch. $branch"
  exit 1
fi
if [ -z "$(git status --porcelain)" ]; then 
  echo "working directory clean"
else 
  echo "working directory NOT clean"
  exit 1
fi

version=$(node ./version.js)

echo "new version: $version"

pushd .
cd ..
git commit package.json -m "version updated: $version"
git tag "$version"

git push
git push --tags
popd