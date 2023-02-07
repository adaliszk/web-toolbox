_Facade for React-based development_

### Provides

- Eslint config for React
- React and React-DOM facades
- Vite configuration

### Usage

1. Install the package `yarn add --dev @adaliszk/react vite`
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
   import { React, ReactDOM } from '@adaliszk/react'
   ```  