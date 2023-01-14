_Types for Node.js Fission Functions_

### Usage

1. Install the package `yarn add -D @adaliszk/fission`
2. Annotate your function with types
3. Build your typescript function into Node.js
4. Create the function: `fission function create --name hallo --code dist/hello.js --env nodejs`

### Types

- `FunctionHandler<T>`: Combined type for any function handler export
    ```typescript
    import { FunctionHandler } from '@adaliszk/fission'

    export const handler1: FunctionHandler<string> = (context) =>
    {
        return {
            status: 200,
            body: 'OK',
        }
    }
  
    export const handler2: FunctionHandler<string> = (context, callback) =>
    {
        callback(200, 'OK')
    }
  
    export const handler3: FunctionHandler = (socket, clients) =>
    {
        socket.on('message', (data) => {
            console.log('received: %s', data);
        })
    }
    ```
- `FunctionCallbackHandler<T>`: Callback-style handler function
    ```typescript
    import { FunctionCallbackHandler } from '@adaliszk/fission'
  
    export const handler: FunctionCallbackHandler<string> = (context, callback) =>
    {
        callback(200, 'OK')
    } 
    ```
- `FunctionResponseHandler<T>`: Generic Request-Response handler
    ```typescript
    import { FunctionResponseHandler } from '@adaliszk/fission'

    export const handler: FunctionResponseHandler<string> = (context) =>
    {
        return {
            status: 200,
            body: 'OK',
        }
    } 
    ```
- `FunctionSocketHandler<T>`: Websocket function
    ```typescript
    import { FunctionSocketHandler } from '@adaliszk/fission'

    export const handler: FunctionSocketHandler = (socket, clients) =>
    {
        socket.on('message', (data) => {
            console.log('received: %s', data);
        })
    } 
    ```