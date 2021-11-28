_Meta Package for Typescript Stack_

Provides
--------
- `@adaliszk/typescript-eslint`
- `typescript`

Usage
-----
- Install the package `yarn add -D @adaliszk/typescript`
- Add an `tsconfig.json` with:
  ```json
  {
    "extends": "@adaliszk/typescript",
    "compileConfig": {
      "baseUrl": "./source/",
      "outDir": "temp"
    },
    "include": [
      "source/**/*"
    ]
  }
  ```
