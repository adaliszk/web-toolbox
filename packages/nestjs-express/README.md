_Bundle for Nest.js Express development_

### Provides

- Nest.js Express driver

### Usage

1. Install the package `pnpm install @adaliszk/nestjs-express`
2. Use any of the packages from the exported types

#### Creating a Nest.js Server

```typescript
import { createServer } from '@adaliszk/nestjs'
import { NestExpressApplication } from '@adaliszk/es'
import { AppModule } from './app.module'

(await createServer<NestFastifyApplication>({
    imports: [ AppModule ],
})).listen(3000)

```


### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `@nestjs/core`. However,
only the Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
