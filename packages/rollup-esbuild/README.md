_Meta-package and autoconfiguration for Rollup using ESBuild_

### Provides

- `rollup` and `rimraf`
- `esbuild` and `rollup-plugin-esbuild`

### Usage

- Install: `yarn add -D @adaliszk/rollup-esbuild`
- Specify build related fields in your `package.json`:
  ```json5
  {
    "scripts": {
      "build": "rollup -c"
    },
    "config": {
      "sourceFile": "source/<entrypoint>.ts"
    },
    "main": "dist/<package-name>.cjs",
    "module": "dist/<package-name>.mjs",
    "types": "dist/<package-name>.d.ts",
  }
  ```
- Add a `rollup.config.js` (or .ts) with the content of:
  ```javascript
  import { autoconfig } from '@adaliszk/rollup-esbuild'

  export default autoconfig()
  ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `rollup`. However, only the
Major and Minor versions are kept in sync. The patch section is used to bump the meta-package.
