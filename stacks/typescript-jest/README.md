_Meta-Package for testing Typescript with Jest_

### Provides

- `@testdeck/jest`
- `jest` & `ts-jest`
- `chai`

### Usage

- Install the package `yarn add -D @adaliszk/typescript-jest`
- Add a jest config with:
  ```json
  {
    "rootDir": ".",
    "testRegex": ".(spec|test).ts$",
    "transform": {
      ".*\\.ts$": "ts-jest"
    },
    "testEnvironment": "node",
    "preset": "ts-jest"
  }
  ```
- Add a script to run jest:
  ```json
  "test": "jest"
  ```

Furthermore, this package is a facade for the provided packages where each export is available on the default output, or
you can use them as namespace like `testdeck` and `chai`.

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `jest`. However, only the
Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
