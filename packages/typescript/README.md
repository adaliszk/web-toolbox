_Meta-package for Typescript with a default configuration_


### Provides
- `@adaliszk/eslint-config-typescript`
- `typescript`
- `tslib`


### Usage
- Install the package `yarn add -D @adaliszk/typescript`
- Add an `tsconfig.json` with:
  ```json
  {
    "extends": "@adaliszk/typescript",
    "compileConfig": {
      "baseUrl": "./source",
      "outDir": "./temp"
    },
    "include": [
      "./source/**/*"
    ]
  }
  ```


### Versioning
Since this is a meta-package, the versioning reflect its main provided package, in this case `typescript`.
However, only the Major and Minor versions are kept in sync. The Patch is used to bump the
meta-package.
