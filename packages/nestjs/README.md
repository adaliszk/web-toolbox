_Bundle for Nest.js microservice development_

### Provides

- Nest.js with Microservice tools
- Event Emitter and Queue Manager
- Commander for CLI arguments
- Cache Manager and Redis

### Usage

1. Install the package `yarn add @adaliszk/nestjs`
2. Use any of the packages from the exported types

#### Creating Nest.js Context

```typescript
import { createContext } from '@adaliszk/nestjs'
import { AppModule } from './app.module'
import { AppController } from './app.controller'

const app = createContext({ imports: [ AppModule ] })

// Serve a Fission function
const handle = (context) => {
    const route = app.get(AppController)
    
    return route.doTheThing(context.request, context.response)
}
```

#### Creating a Nest.js Server

```typescript
import { createServer } from '@adaliszk/nestjs'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

(await createServer<NestFastifyApplication>({
    adapter: new FastifyAdapter(),
    imports: [ AppModule ],
})).listen(3000)

```

#### Creating a Nest.js Microservice

```typescript
import { createMicroservice, Transport } from '@adaliszk/nestjs'
import { AppModule } from './app.module'

(await createMicroservice({
    imports: [ AppModule ],
    service: {
        transport: Transport.TCP
    }
})).listen()

```


### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@nestjs/core`. However,
only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
