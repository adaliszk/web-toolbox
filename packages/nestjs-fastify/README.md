_Bundle for Nest.js Fastify development_

### Provides

- Nest.js Fastify driver

### Usage

1. Install the package `yarn add @adaliszk/nestjs-fastify`
2. Use any of the packages from the exported types

#### Creating a Nest.js Server

```typescript
import { createServer } from '@adaliszk/nestjs'
import { FastifyAdapter, NestFastifyApplication } from '@adaliszk/nestjs-fastify'
import { AppModule } from './app.module'

(await createServer<NestFastifyApplication>({
    adapter: new FastifyAdapter(),
    imports: [ AppModule ],
})).listen(3000)

```


### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@nestjs/core`. However,
only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
