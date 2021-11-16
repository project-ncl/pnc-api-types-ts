#!/bin/sh
mkdir -p .tmp
cd .tmp

# git clone specific tag passed via parameter
echo "=== git clone --depth=1 --branch ${1} https://github.com/project-ncl/pnc.git ==="
git clone --depth=1 --branch ${1} https://github.com/project-ncl/pnc.git

cd pnc/rest-api
mvn clean install -DskipTests
cp ./target/pnc-openapi.json ../..