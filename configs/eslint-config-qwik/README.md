_Typescript Qwik ESLint Config_

This package contains an eslint configuration that extends my [`@adaliszk/eslint-config-typescript`](https://www.npmjs.com/package/@adaliszk/eslint-config-typescript) settings and adds
typescript-based qwik linting.

### Provides

- `@adaliszk/eslint-config-typescript`
- `eslint-plugin-qwik`

### Usage

- Install: `pnpm install -D @adaliszk/eslint-config-qwik eslint`
- Add an `.eslintrc.yml` with the content of:
  ```yaml
  extends:
    - "@adaliszk/qwik"
  ```
  or to avoid clutter, put it into your `package.json`:
  ```yaml
  "eslintConfig": {
    "extends": [
      "@adaliszk/qwik"
    ]
  }
  ```
- Hook up with a script:
  ```yaml
  "scripts": {
    "lint": "eslint src/**/*.tsx"
  }
  ```

### Caveats

- When using node module based workspaces, you must include this package as a no-hoist so that eslint would find the
  configuration correctly.

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@builder.io/qwik`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
