# pnc-api-types-ts

TypeScript based types used in PNC project.

This project clones **PNC project** and builds `pnc/rest-api` module to get `pnc-openapi.json` specification using `generate-openapi-spec.sh` script and transform it to `index.d.ts` using `dtsgen` command.

## Generate new types and release new version

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
