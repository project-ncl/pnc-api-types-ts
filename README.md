# pnc-api-types-ts

TypeScript based types used in PNC project.

This project clones **PNC project** and builds `pnc/rest-api` module to get `pnc-openapi.json` specification using `generate-openapi-spec.sh` script and transform it to `index.d.ts` using `dtsgen` command.

## Releasing new version of pnc-api-types-ts

### Remote & automatic (preferred)

#### Option A - fully automatic

New pnc-api-types-ts release is created by our jenkins instance automatically when there is new tag created in **PNC** project repository.

#### Option B - one user click automatic 

When you need to create new pnc-api-types-ts release from unreleased PNC revision you can go to our jenkins instance and run `pnc-api-types-release` job. Job will ask for **PNC** revision to create new release from and takes care of rest.

### Local (deprecated, used if Remote is not working)

#### Option C - semi manual process

You need to clone repository and run release.sh script with desired **PNC** revision, after script finished you can check the result and push new release into remote repository.

for example: `./release.sh 2.3.0` or `./release.sh 0bf26885ec147b815be8be6f16cf484c976364c9`
 
#### Option D - completely manual process

Following steps need to be performed when there are new type changes coming from PNC project.

1. Change `<PNC version>` in `package.json` file:

```js
"generate:openapi": "./generate-openapi-spec.sh <PNC version>",

// for example:
"generate:openapi": "./generate-openapi-spec.sh 2.1.2",
```

2. Run `npm run build`

   - `index.d.ts` file should be automatically updated

3. Update `"version"` field in `package.json`

```js
// for example:
"version": "2.1.0",
```

4. Commit all changes and create new PR
5. After the RP is merged, create git tag using the same version as in step 3 with `"v"` prefix:

```
v2.1.0
```

6. (not doing right now) npm publish
