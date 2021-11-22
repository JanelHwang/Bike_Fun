#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m 'update deploy'

git push -f git@github.com:JanelHwang/Bike_Fun.git master:gh-pages

cd -