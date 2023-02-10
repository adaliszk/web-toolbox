_Facade for Qwik-based development_

### Provides

- Eslint config for Qwik
- Qwik and Qwik-City facades

### Usage

1. Install the package `yarn add --dev @adaliszk/qwik vite`
2. Update your `tsconfig.json` to extend from the new config:
   ```json
   {
      "extends": "@adaliszk/qwik/config",
      "compilerOptions": {
        "baseUrl": "source",
        "outDir": "dist"
      },
      "include": [
        "src/**/*.tsx",
        "src/**/*"
      ]
   }
   ```
3. Use facades for quick access to React libraries
   ```typescript
   import { Qwik, City } from '@adaliszk/qwik'
   // or
   import { component$ } from '@adaliszk/qwik'
   ```  

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@builder.io/qwik`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
