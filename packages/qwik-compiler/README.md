_Configuration for Qwik-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- `@adaliszk/web-compiler`
- Qwik and Qwik-City

### Usage

1. Install the package `yarn add --dev @adaliszk/qwik-compiler`
2. Configure vite for development and bundling:
    ```typescript
   import { qwikConfig } from '@adaliszk/qwik-compiler'
   
   export default qwikConfig()
   ```
3. Add vite commands to your scope:
    ```json
   {
    "scripts": {
      "build": "qwik-compiler build",
      "preview": "qwik-compiler preview",
      "start": "qwik-compiler"
    }
   }
   ```

### Configuration

The `qwikConfig` factory provides a user configuration that extends vite's config, but adds additional properties. With
this package, the additional properties are:

- `qwik`: Configuration for the `qwikVite` plugin
- `city`: Configuration for the `qwikCity` plugin, if boolean supplied it can control if the plugin is loaded or not 

Example:
```typescript
import { qwikConfig } from '@adaliszk/qwik-compiler'
   
export default qwikConfig({
    city: false,  // Disable City for projects that does not need router
    qwik: {       // Configure Qwik as usual
        debug: true,
    }
})
```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@builder.io/qwik`. However, only the
Major and Minor versions are kept in sync, and the Patch is used to bump the meta-package.
