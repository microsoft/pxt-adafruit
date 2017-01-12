#!/usr/bin/env bash

set -e

# Set up NVM
export NVM_DIR="/home/dotnet-bot/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" 

nvm install 5

echo Git branch: $GIT_BRANCH
echo isPR: $1

if [[ "$GIT_BRANCH" =~ ^v([0-9]+\.){2}[0-9]+$ ]]; then
    echo Setting TRAVIS_TAG to $GIT_BRANCH
    export TRAVIS_TAG=$GIT_BRANCH
fi

if [ "$1" == "false" ]; then
    echo Setting TRAVIS_BRANCH to $GIT_BRANCH
    export TRAVIS_BRANCH=$GIT_BRANCH
    echo Setting TRAVIS_PULL_REQUEST to false
    export TRAVIS_BRANCH=false
fi

npm install
npm test