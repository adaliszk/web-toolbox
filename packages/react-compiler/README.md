_Configuration for React-based project compilation using Vite_

### Provides

Pre-configured Vite with:
- `@adaliszk/web-compiler`
- React

### Usage

1. Install the package `pnpm install --dev @adaliszk/react-compiler`
2. Configure vite for development and bundling:
    ```typescript
   import { reactConfig } from '@adaliszk/react-compiler'
   
   export default reactConfig()
   ```
3. Add vite commands to your scope:
    ```json
   {
     "scripts": {
       "build": "react-compiler build",
       "preview": "react-compiler preview",
       "start": "react-compiler"
     }
   }
   ```