_Typescript ESLint Meta Package_

This package contains an eslint configuration that extends the recommended and the standard configs,
but overwrites some rules:

- Indentation is set to 4 spaces for better readability by having more space between the attention
  lines, and having less space before wrapping thus forcing a cleaner code

- Curly braces are expected to be Allman style for better readability by separating statements and
  declarations from logic

- Two empty lines are required between imports and top level blocks, similar to PEP8

- Explicit any is disabled because with TDD/BDD often it is a step to define an any type before
  it becomes more restrained

- Inferrable type removals are disabled because many type reflection libraries depends on having
  the types declared even if otherwise it could be inferred.

Furthermore, the config defines ignore pattern for `node_modules`, `temp`, and `dist` folders.


### Provides
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-standard` + (`eslint-plugin-import`, `eslint-plugin-promise`, `eslint-plugin-node`)
- `eslint`


### Usage
- Install: `yarn add -D @adaliszk/typescript-eslint`
- Add an `.eslintrc.yml` with the content of:
  ```yaml
  extends:
    - @adaliszk/typescript-eslint 
  ```
  or define your own rules:
  ```yaml
  extends:
    - plugin:@typescript-eslint/eslint-recommended
    - plugin:@typescript-eslint/recommended
    - eslint:recommended
    - standard
  # ...
  ```


### Caveats
- When using node module based workspaces, you must include this package as a no-hoist so that eslint 
  would find the configuration correctly.

- The ESLint Standard plugin does not support v8 correctly just yet, as it waits on its dependencies
  to support the newer version: https://github.com/standard/eslint-config-standard/pull/193


### Versioning
Since this is a meta-package, the versioning reflect its main provided package, in this case `eslint`.
However, only the Major and Minor versions are kept in sync, and the Patch is used to bump the 
meta-package.