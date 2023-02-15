_Configuration for Qwik-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- `@adaliszk/web-compiler`
- Qwik

### Usage

1. Install the package `yarn add --dev @adaliszk/qwik-compiler vite`
2. Configure vite for development and bundling:
    ```typescript
   import { qwikConfig } from '@adaliszk/qwik-compiler'
   
   export default qwikConfig()
   ```
3. Add vite commands to your scope:
    ```json
   {
    "scripts": {
      "build": "vite build",
      "preview": "vite preview",
      "start": "vite"
    }
   }
   ```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@builder.io/qwik`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
