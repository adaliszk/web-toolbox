_My frequently used NPM packages wrapped up into easy-to-use packs_

AdaLiszk's Node Toolbox
=======================
Working with the Node ecosystem and building many projects and packages can become 
pretty heavy to maintain as each individual project depends on the same set of 
dependencies but on different versions. While many automation tools does try to
combat this, it is very common to abstract away frequently used package groups into
meta-packages. This allows a centralised location to enforce versions, configs,
and tool usage alongside of simplifying imports and automation burden.


### Prerequisites
- [`nodejs>=16`](https://nodejs.org/en/download) as the environment for development
- [`yarn>=3`](https://yarnpkg.com/getting-started/install) as the package manager
- [`lerna>=4`](https://www.npmjs.com/package/lerna) as the distribution tool


### Project structure
- **/metas**: Meta packages to pack up the frequently used dependencies
- **/packages**: Extensions for metas, automations, and development tools
- **/specifications**: Interfaces, Decorators, and Mixins for specifications
- **/stacks**: Meta packages and their extensions for a development stack


Packages
--------
| Name | Type | NPM | Issues 
|:---- |:---- |:------ |:------
| `@adaliszk/cli` | Stack | _TBD_ | -
| `@adaliszk/cli-commander` | Meta | _TBD_ | -
| `@adaliszk/cli-logging` | Meta | _TBD_ | -
| `@adaliszk/cli-jest` | Meta | _TBD_ | -
| `@adaliszk/cli-nexe` | Meta | _TBD_ | -
| `@adaliszk/eslint` | Stack | _TBD_ | -
| `@adaliszk/json-api-spec` | Spec | _TBD_ | -
| `@adaliszk/nest.js` | Stack | _TBD_ | -
| `@adaliszk/nest-api` | Stack | _TBD_ | -
| `@adaliszk/nest-service` | Stack | _TBD_ | -
| `@adaliszk/nest-winston` | Package | _TBD_ | -
| `@adaliszk/next.js` | Stack | _TBD_ | -
| `@adaliszk/next-pwa` | Stack | _TBD_ | -
| `@adaliszk/react` | Stack | _TBD_ | -
| `@adaliszk/react-jest` | Meta | _TBD_ | -
| [`@adaliszk/typescript`](stacks/typescript/README.md) | Stack |[![NPM](https://img.shields.io/npm/v/@adaliszk/typescript.svg)](https://www.npmjs.com/package/@adaliszk/typescript) | ![Issues for Typescript](https://img.shields.io/github/issues-search?label=label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Atypescript)
| [`@adaliszk/typescript-eslint`](metas/typescript-eslint/README.md) | Meta | [![NPM](https://img.shields.io/npm/v/@adaliszk/typescript-eslint.svg)](https://www.npmjs.com/package/@adaliszk/typescript-eslint) | ![Issues for Typescript-ESLint](https://img.shields.io/github/issues-search?label=label%3A%20typescript-eslint&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Atypescript-eslint)
| `@adaliszk/typescript-jest` | Meta | _TBD_ | -
| `@adaliszk/typescript-rollup` | Meta | _TBD_ | -
| `@adaliszk/webcomponent` | Stack | _TBD_ | -
| `@adaliszk/wc-jest` | Meta | _TBD_ | -
| `@adaliszk/wc-lit` | Meta | _TBD_ | -
| `@adaliszk/wc-lit-react` | Package | _TBD_ | -
| `@adaliszk/wc-parcel` | Meta | _TBD_ | -
| `@adaliszk/wc-parcel-lit-import-css` | Package | _TBD_ | -

