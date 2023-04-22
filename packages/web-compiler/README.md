_Configuration for Web-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- TLS Encryption
- Typescript path resolution
- PostCSS + SASS preset
- Compression
- Linting

## TODO

- [ ] Implement module federation logic for auto-resolution
- [ ] Parse TSPaths and extend the resolution logic
- [ ] Expose PostCSS variables configuration

### Usage

1. Install the package `pnpm install --dev @adaliszk/web-compiler vite`
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