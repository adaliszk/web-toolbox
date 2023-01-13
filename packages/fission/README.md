_Types for Node.js Fission Functions_

### Usage

1. Install the package `yarn add -D @adaliszk/fission`
2. Annotate your function with types:
    ```typescript
    import { FunctionHandler } from '@adaliszk/fission'

    export const handler: FunctionHandler = (context) =>
    {
        return {
            status: 200,
            body: 'OK',
        }
    } 
    ```
3. Build your typescript function into Node.js to deploy with fission
4. Create the function: `fission function create --name hallo --code dist/hello.js --env nodejs`