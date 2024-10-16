_My frequently used NPM packages wrapped up into easy-to-use packs_

# AdaLiszk's Node Toolbox

Working with the Node ecosystem building many projects and packages can become pretty heavy to maintain as each
individual project depends on the same set of dependencies but on different versions. While many automation tools does
try to combat this, it is very common to abstract away frequently used package groups into a centralised configuration
and preset library.

This repository contains my frequently used abstractions and configurations alongside of a few tools and framework
extensions that aims to aid work to be done more efficiently.

### Prerequisites

- [`node.js >= 20.x`](https://nodejs.org/en/download) as the environment for development
- [`pnpm >= 9.2`](https://pnpm.io/installation) as the package manager
- [`changeset >= 2.27`](https://github.com/changesets/changesets) as versioning and publishing tool
- [`turbo >= 1.9`](https://turbo.build/repo/docs) as the monorepo orchestrator
- [`biome >= 1.7`](https://biomejs.dev/) as the code formatter and linter

### Folder structure

- **/configs**: Static/Semi-Static configuration files in json, yaml, or commonjs
- **/packages**: Meta packages to work with frameworks and tools

## Packages

| Name                                                          | Type          | NPM                                                                                                                                                                   | Issues                                                                                                                                                                                                                                                                                     |
|:--------------------------------------------------------------|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`@adaliszk/dprint`](configs/dprint)                          | Config        | [![NPM](https://img.shields.io/npm/v/@adaliszk/dprint.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/qwik)                           | [![Issues](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Adprint%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/dprint)                                                                      |
| [`@adaliszk/biome`](configs/biome)                            | Config        | [![NPM](https://img.shields.io/npm/v/@adaliszk/biome.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/qwik)                            | [![Issues](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Abiome%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/biome)                                                                        |
| [`@adaliszk/qwik`](packages/qwik)                             | Config+Facade | [![NPM](https://img.shields.io/npm/v/@adaliszk/qwik.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/qwik)                             | [![Issues](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Aqwik%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/qwik)                                                                          |
| [`@adaliszk/qwik-storybook`](packages/qwik-storybook)         | Bundle        | [![NPM](https://img.shields.io/npm/v/@adaliszk/qwik-storybook.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/qwik-storbook)          | [![Issues](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Aqwik-storybook%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/qwik-storybook)                                                      |
| `@adaliszk/qwik-testing`                                      | -             | -                                                                                                                                                                     | -                                                                                                                                                                                                                                                                                          |
| [`@adaliszk/react`](packages/react)                           | Bundle        | [![NPM](https://img.shields.io/npm/v/@adaliszk/react.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/react)                           | [![Issues for React Bundle](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Areact%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/react)                                                       |
| `@adaliszk/react-storybook`                                   | -             | -                                                                                                                                                                     | -                                                                                                                                                                                                                                                                                          |
| `@adaliszk/react-testing`                                     | -             | -                                                                                                                                                                     | -                                                                                                                                                                                                                                                                                          |
| [`@adaliszk/typescript-testing`](packages/typescript-testing) | Bundle        | [![NPM](https://img.shields.io/npm/v/@adaliszk/typescript-testing.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/typescript-testing) | [![Issues for Typescript Testing](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&label%3A%20typescript&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Atypescript-testing%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/typescript-testing) |
| [`@adaliszk/web-compiler`](packages/web-compiler)             | Bundle        | [![NPM](https://img.shields.io/npm/v/@adaliszk/web-compiler.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/web-compiler)             | [![Issues for Web Compiler](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fweb-toolbox%20label%3Aweb-compiler%20is%3Aopen)](https://github.com/adaliszk/web-toolbox/labels/web-compiler)                                         |
| `@adaliszk/web-storybook`                                     | -             | -                                                                                                                                                                     | -                                                                                                                                                                                                                                                                                          |
| `@adaliszk/web-testing`                                       | -             | -                                                                                                                                                                     | -                                                                                                                                                                                                                                                                                          |

## Contributions

While this is my personal toolbox, you are free to use it and contribute to it!\
Bugreports are especially welcomed!
