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
3. Simplify your bootstrap file:

### Creating Nest.js Context

```typescript
import { createContext } from '@adaliszk/nestjs'
import { AppController } from './app.controller'
import { AppModule } from './app.module'

const App = createContext({ imports: [AppModule] })
const Route = App.get(AppController)

// Serve a function handler
export const handle = (context) =>
    Route.doTheThing(context.request, context.response)
```

### Creating a Nest.js Server

```typescript
import { createServer } from '@adaliszk/nestjs'
import { FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

const Serve = async () => await createServer<NestFastifyApplication>({
    adapter: new FastifyAdapter(),
    imports: [AppModule],
    threads: 4,
    port: 3000,
})

Serve().catch(console.error)
```
or
```typescript
import { createServer } from '@adaliszk/nestjs'
import { FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import { AppController } from './app.controller'

const Serve = async () => await createServer<NestFastifyApplication>({
    adapter: new FastifyAdapter(),
    // NOTE that you can use this bootstrap as your main module!
    controllers: [AppController],
    threads: 4,
    port: 3000,
})

Serve().catch(console.error)
```

#### Creating a Nest.js Microservice

```typescript
import { createMicroservice, Transport } from '@adaliszk/nestjs'
import { AppModule } from './app.module'

const Serve = async () => await createMicroservice({
    imports: [AppModule],
    threads: 4,
    service: {
        transport: Transport.TCP,
    },
})

Serve().catch(console.error)
```

# Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@nestjs/core`. However,
only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
