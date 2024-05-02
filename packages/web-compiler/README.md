_Configuration for Web-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- Typescript path resolution
- PostCSS preset with Tailwind detection
- Linting (TSC, Stylelint, ESLint)
- Compression (Brotli and Gzip)
- TLS Encryption

## TODO

- [ ] Implement module federation logic for auto-resolution

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

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `vite`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
