_Helpers for Qwik-based storybook documentation_

### Provides
- Storybook preset for Qwik
- Helper functions for quick configuration

### Usage

1. Install the package `pnpm install --dev @adaliszk/qwik-storybook`
2. Add a main configuration file for Storybook:
   ```typescript
   // .storybook/main.ts
   import { defineConfig } from '@adaliszk/qwik-storybook'
   
   export default defineConfig({
     // Add your configurations here
   })
   ```
3. Add a preview file for Storybook:
   ```typescript
    // .storybook/preview.ts
    import { definePreview } from '@adaliszk/qwik-storybook'
    import "../src/global.css"
   
    export default definePreview({
      // Add your configurations here
    })
    ```
4. Configure typescript for Storybook:
   ```json5
   // .storybook/tsconfig.json
   {
       "extends": "../tsconfig.json",
       "compilerOptions": {
           "types": ["vite/client", "storybooks"],
           "allowImportingTsExtensions": true,
           "jsx": "preserve",
           "moduleResolution": "Node16",
           "module": "CommonJS",
           "rootDir": "../"
       },
       "exclude": ["../**/*.spec.ts", "../**/*.test.ts", "../**/*.spec.tsx", "../**/*.test.tsx"],
       "include": [
           "../src/**/*.stories.tsx",
           "../src/**/*.stories.mdx",
           "../docs/**/*.mdx",
           "**/*.tsx",
           "**/*"
       ]
   }
   ```
5. Add storybook scripts to your `package.json`:
   ```json5
   {
     "scripts": {
       "build.docs": "storybook build",
       "start": "storybook dev -p 6006 --no-open"
     }
   }
   ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `storybook`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
