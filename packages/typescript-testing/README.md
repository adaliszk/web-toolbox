_Meta-Package for testing Typescript with Vitest_

### Provides

- `@testdeck/vitest`
- `vitest`
- `chai`

### Usage

- Install the package `pnpm install -D @adaliszk/typescript-testing vitest`
- Add a vitest config:
  ```typescript
  import { defineConfig } from '@adaliszk/typescript-testing'

  export default defineConfig({
      test: {
          // ...
      },
  })
  ```
- Add a script to run the tests and collect the coverage:
  ```json
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
  }
  ```

Furthermore, this package is a facade for the provided packages where each export is available on the default output, or
you can use them as namespace like `testdeck` and `chai`.

For example, what normally looks like:

```typescript
describe('MyModule', () => {
    it('should be able to import', () => {
        import() /* ... */
    })
})
```

Can be written with testdeck:

```typescript
import { describe, it } from '@adaliszk/typescript-testing'

@describe
class MyModule {
    @it
    'should be able to import'() {
        import() /* ... */
    }
}
```

### Versioning

Since this is a meta-package, the versioning reflect its main provided package, in this case `typescript`. However, only the
Major and Minor versions are kept in sync. The Patch is used to bump the meta-package.
