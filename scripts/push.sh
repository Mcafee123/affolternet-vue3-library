#!/bin/bash

# author: martin@affolter.net

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

git add *
git commit -m "Version updated"

git tag "$version"
git push
git push origin --tags