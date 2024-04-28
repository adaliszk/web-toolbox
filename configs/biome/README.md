_Meta-package for configuring Biome formatter and linter_

### Provides

- `@biomejs/biome`

### Usage

- Install the package `pnpm install -D @adaliszk/biome`
- Add an `biome.json` with:
  ```json
  {
    "extends": "@adaliszk/biome"
  }
  ```
  or
  ```json
  {
    "extends": "https://unpkg.com/@adaliszk/biome@latest/config.json"
  }
  ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@biomejs/biome`.
However, only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
