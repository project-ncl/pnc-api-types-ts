# pnc-api-types-ts

TypeScript based types used in PNC project.

This project clones **PNC project** and builds `pnc/rest-api` module to get `pnc-openapi.json` specification and transform it to `index.d.ts` with `dtsgen` command, this process is done using `release.sh` script .

## Prerequisites

See `"engines"` in [package.json](./package.json) for minimum version requirements (for example `node` and `npm`).

## Versioning

pnc-api-types-ts release version consists of 2 parts, first part is main pnc version taken from pnc pom file project.version property, this is used as main npm version and 'v' is added in front of this version. Then there is divider in form of '-pnc-' after which there is revision of pnc project pnc-api-types-ts release is generated from. Revision could mean tag in form of '2.2.0' or in case of hash there could be short hash used. Examples: v2.3.0-pnc-2.3.0 = release generated from pnc tag '2.3.0' this is also version in project.version property so v2.3.0 is used. v2.4.0-SNAPSHOT-pnc-a696895 = release generated from pnc revision of 'a696895' short hash, this revision has 2.4.0-SNAPSHOT as pnc project.version.

## Usage
Because of our "special" versioning and type of this project, we use it as dependency in specific version and not as interval of versions or greated than specific version dependency options.
This means we don't use `"pnc-api-types-ts": "project-ncl/pnc-api-types-ts#semver:^v2.3.0-pnc-2.3.0"`, but rather `"pnc-api-types-ts": "project-ncl/pnc-api-types-ts#v2.3.0-pnc-2.3.0"`, is recommended usage of this project as dependency.

## Releasing new version of pnc-api-types-ts

### Remote & automatic (preferred)

#### Option A - fully automatic

New pnc-api-types-ts release is created by our jenkins instance automatically, job `pnc-api-types-ts-release-automatic` is daily checking if new tag is created in **PNC** project repository, if yes, new release for `pnc-api-types-ts` is created.

#### Option B - one user click automatic 

When you need to create new pnc-api-types-ts release from unreleased PNC revision you can go to our jenkins instance and run `pnc-api-types-ts-release-manual` job. Job will ask for **PNC** revision to create new release from and takes care of rest.

### Local (deprecated, used if Remote is not working)

#### Option C - semi manual process

You need to clone repository and run release.sh script with desired **PNC** revision, after script finished you can check the result and push new release into remote repository.

for example: `./release.sh 2.3.0` or `./release.sh 0bf26885ec147b815be8be6f16cf484c976364c9`
