_Meta-package for configuring Biome formatter and linter_

### Usage

- Install the package `pnpm install -D @adaliszk/biome @biomejs/biome`
- Add an `biome.json` with:
  ```json
  {
    "extends": ["@adaliszk/biome"]
  }
  ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@biomejs/biome`.
However, only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
