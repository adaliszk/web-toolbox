> [!WARNING]
> This package is deprecated as I moved to use `deno` where these kind of preset configs are no longer required.

_Meta-package for Typescript with a default configuration_

### Provides

- `typescript`, `tslib`, and `@types/node`
- `tsx`

### Usage

- Install the package `pnpm install -D @adaliszk/typescript typescript`
- Add an `tsconfig.json` with:
  ```json
  {
    "extends": "@adaliszk/typescript",
    "compileConfig": { "baseUrl": "source", "outDir": "temp" },
    "include": ["source/**/*"]
  }
  ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `typescript`.
However, only the Major and Minor versions are kept in sync. The Patch is used to bump the
meta-package.
