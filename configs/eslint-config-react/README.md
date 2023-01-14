_Typescript React ESLint Config_

This package contains an eslint configuration that extends my [`@adaliszk/eslint-config-typescript`]() settings and adds
typescript-based react linting.

### Provides

- `eslint-plugin-react`

### Usage

- Install: `yarn add -D @adaliszk/eslint-config-react eslint`
- Add an `.eslintrc.yml` with the content of:
  ```yaml
  extends:
    - "@adaliszk/react"
  ```
  or to avoid clutter, put it into your `package.json`:
  ```yaml
  "eslintConfig": {
    "extends": [
      "@adaliszk/react"
    ]
  }
  ```
- Hook up with a script:
  ```yaml
  "scripts": {
    "lint": "eslint source/** tests/**"
  }
  ```

### Caveats

- When using node module based workspaces, you must include this package as a no-hoist so that eslint would find the
  configuration correctly.

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `react`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
