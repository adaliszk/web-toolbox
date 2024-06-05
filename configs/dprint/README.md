_Meta-package for Dprint with a default configuration_

### Usage

- Install the package `pnpm install -D @adaliszk/dprint dprint`
- Add an `dprint.json` with:
  ```json
  {
    "extends": "https://unpkg.com/@adaliszk/dprint@latest/config.json"
  }
  ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `dprint`.
However, only the Major and Minor versions are kept in sync. The Patch is used to bump the
meta-package.