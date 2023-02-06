_Configuration for Web-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- TLS Encryption
- Typescript Path Resolution
- PWA Manifest Generator
- Compression
- Linting

### Usage

1. Install the package `yarn add --dev @adaliszk/web-compiler`
2. Configure vite for development and bundling:
    ```typescript
   import { webConfig } from '@adaliszk/web-compiler'
   
   export default webConfig()
   ```
3. Add vite commands to your scope:
    ```json
   "scripts": {
      "build": "web-compiler build",
      "preview": "web-compiler preview"
      "start": "web-compiler"
   }
   ```