_Meta-package containing a typescript preset for babel_

### Provides

- `@babel/plugin-proposal-class-properties`
- `@babel/plugin-proposal-decorators`
- `@babel/core`

### Usage

- Install: `yarn add -D @adaliszk/babel-typescript-preset`
- Add an `.babelrc.json` with the content of:
  ```json5
  {"presets": ["@adaliszk/babel-typescript-preset"]}
  ```
  or add it to your `package.json`:
  ```json5
  "babel": {
    "presets": [
      "@adaliszk/babel-typescript-preset"
    ]
  }
  ```
