_Facade for React-based development_

### Provides

- Eslint config for React
- React, React-DOM, and React-Router facades
- Vite configuration

### Usage

1. Install the package `pnpm install --dev @adaliszk/react vite`
2. Update your `tsconfig.json` to extend from the new config:
   ```json
   {
      "extends": "@adaliszk/react",
      "compilerOptions": {
        "sourceRoot": "source",
        "baseUrl": "source",
        "outDir": "dist"
      },
      "include": [
        "source/**/*"
      ]
   }
   ```
3. Use facades for quick access to React libraries
   ```typescript
   import { React, DOM } from '@adaliszk/react'
   import { DOMClient } from '@adlaiszk/react/client'
   ```  

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `react`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
