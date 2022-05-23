#!/bin/sh

echo "This is release script for pnc-api-types-ts repo.

usage: './release.sh pnc-revision' where pnc revision is tag or commit hash
for example: './release.sh 2.3.0' , './release.sh 252b39a3715b0038ab2ca9228c01859c5b45cbd7' or './release.sh 252b39a'

script will generate new api types, change version and commit changes automatically.
You can then check the result and push it. 
"

if [[ -z "${1}" ]]
  then echo "ERROR: PNC revision missing"
  exit 2 
fi

PNC_REV=${1}
PNC_VER=${PNC_REV}

# checking if user used long hash and if yes generating short one for later usage 
if [ ${#PNC_REV} -eq 40 ]; then
   PNC_VER=$(git rev-parse --short ${PNC_REV});
fi

mkdir .tmp

pushd .tmp

wget https://repo1.maven.org/maven2/org/jboss/pnc/project-manipulator/project-manipulator-cli/1.1.0/project-manipulator-cli-1.1.0.jar

git clone https://github.com/project-ncl/pnc.git

pushd pnc 

git reset --hard ${PNC_REV}

pushd rest-api

mvn clean install -DskipTests

# getting project.version from pnc project (example: 2.4.0-SNAPSHOT)
MVN_PNC_VERSION=$(mvn -q -Dexec.executable=echo -Dexec.args='${project.version}' --non-recursive exec:exec)

popd && popd

cp pnc/rest-api/target/pnc-openapi.json .

#putting together version for npm package (example: 2.3.0-pnc-2.3.0 or 2.3.0-SNAPSHOT-pnc-aNdosndf)
NPM_VERSION=(${MVN_PNC_VERSION}-pnc-${PNC_VER})
NPM_TAG=(v${NPM_VERSION})

echo "Using generated npm version: ${NPM_VERSION}"

popd

#using project-manipulator to update package.json version to new generated one
java -jar .tmp/project-manipulator-cli-1.1.0.jar -f package.json -DversionOverride=${NPM_VERSION}

npm run generate:dts

rm -rf .tmp

git add .

git commit -m "PNC api types for release ${NPM_VERSION}"

git tag ${NPM_TAG}

echo "
WE ARE DONE, you can check result and if you are satisfied push it.
Simply run 'git push && git push --tags'"
