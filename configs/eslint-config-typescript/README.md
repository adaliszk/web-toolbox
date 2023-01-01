_Typescript ESLint Meta Package_

This package contains an eslint configuration that extends the recommended and the standard configs, but overwrites some
rules:

- Indentation is set to 4 spaces for better readability by having more space between the attention lines, and having
  less space before wrapping thus forcing a cleaner code

- Curly braces are expected to be Allman style for better readability by separating statements and declarations from
  logic

- Two empty lines are required between imports and top level blocks, similar to PEP8

- Inferrable type removals are disabled because many type reflection libraries depends on having the types declared even
  if otherwise it could be inferred.

- Force using comas on multi-line statements for better git history

Furthermore, the config defines ignore pattern for `node_modules`, `temp`, and `dist` folders.

### Provides

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-standard` + (`eslint-plugin-import`, `eslint-plugin-promise`, `eslint-plugin-n`)
- `eslint`

### Usage

- Install: `yarn add -D @adaliszk/eslint-config-typescript`
- Add an `.eslintrc.yml` with the content of:
  ```yaml
  extends:
    - "@adaliszk/typescript"
  ```
  or to avoid clutter, put it into your `package.json`:
  ```yaml
  "eslintConfig": {
    "extemds": [
      "@adaliszk/typescript"
    ]
  }
  ```

### Caveats

- When using node module based workspaces, you must include this package as a no-hoist so that eslint would find the
  configuration correctly.

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `eslint`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
