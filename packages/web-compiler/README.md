_Configuration for Web-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- TLS Encryption
- Typescript Path Resolution
- PWA Manifest Generator
- Compression
- Linting

### Usage

1. Install the package `yarn add --dev @adaliszk/web-compiler vite`
2. Configure vite for development and bundling:
    ```typescript
   import { webConfig } from '@adaliszk/web-compiler'
   
   export default webConfig()
   ```
3. Add vite commands to your scope:
    ```json
   "scripts": {
      "build": "vite build",
      "preview": "vite preview"
      "start": "vite"
   }
   ```