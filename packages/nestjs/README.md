# @adaliszk/nestjs

This package provides an abstraction between your projects and the common boilerplate that Nest.js requires to serve services. The goal is to minimize the needed tooling and provide 80% of the work for you with 20% of the effort to run a highly performant application.

## Features

- Pre-configured Nest.js instance for Servers, Microservices, and Functions
- Common tools pre-loaded such as Configs, Cache, Queues, and Events
- Pino logger to a massive chunk of your performance budget while logging
- Multi-threaded runtime to scale with your deployment nodes
- Companion `@adaliszk/nestjs-compiler` for quick compilation into binaries

## Usage

1. Install the package `pnpm install @adaliszk/nestjs @adaliszk-nestjs-compiler`
2. Setup your service using `@adaliszk/nestjs`
3.

### Creating Nest.js Context

```typescript
import { createContext } from '@adaliszk/nestjs'
import { AppController } from './app.controller'
import { AppModule } from './app.module'

const app = createContext({ imports: [AppModule] })

// Serve a Fission function
const handle = (context) =>
{
    const route = app.get(AppController)

    return route.doTheThing(context.request, context.response)
}
```

### Creating a Nest.js Server

```typescript
import { createServer } from '@adaliszk/nestjs'
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

await createServer<NestFastifyApplication>({
    adapter: new FastifyAdapter(),
    imports: [AppModule],
    maxThreads: 4,
    port: 3000,
})
```

#### Creating a Nest.js Microservice

```typescript
import { createMicroservice, Transport } from '@adaliszk/nestjs'
import { AppModule } from './app.module'

await createMicroservice({
    imports: [AppModule],
    maxThreads: 4,
    service: {
        transport: Transport.TCP,
    },
})
```

# Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@nestjs/core`. However,
only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
