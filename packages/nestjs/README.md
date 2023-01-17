_Bundle for React-based development using Vite_

### Provides

- React and React-DOM facades
- Vite configuration

### Usage

1. Install the package `yarn add --dev @adaliszk/react vite`
2. Configure vite for development and bundling:  
   `vite.config.ts`
    ```typescript
   import { reactConfig } from '@adaliszk/react'
   
   export default reactConfig()
   ```  
   
   `tsconfig.json`
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