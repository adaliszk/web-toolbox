import { defineConfig } from 'vite'
import type { UserConfigExport, WebConfig } from './types'
import * as plugin from './plugins'

import { readFileSync } from 'fs'
import { resolve } from 'path'

export * from 'vite'
export * from './plugins'
export * from './types'

// noinspection JSUnusedGlobalSymbols
export function webConfig (config?: WebConfig): UserConfigExport
{
    const customConfig = config ?? {}
    const tsConfig = config?.tsconfig ?? 'tsconfig.json'

    const tsConfigContent = JSON.parse(readFileSync(resolve(tsConfig), 'utf-8'))
    const tsConfigCompilerOptions = tsConfigContent.compilerOptions ?? { target: 'esnext', declaration: true }

    const conditionalPlugins = []
    if ((config?.tsdefinitions ?? tsConfigCompilerOptions.declaration) === true)
        conditionalPlugins.push(plugin.compileTypescriptDefinitions({ tsConfigFilePath: tsConfig }))

    return defineConfig({
        ...customConfig,
        server: {
            https: true,
            hmr: { protocol: 'wss' },
            ...(customConfig?.server ?? {}),
        },
        build: {
            target: customConfig?.target ?? tsConfigCompilerOptions.target,
            ...(customConfig?.build ?? {}),
        },
        css: {
            postcss: {
                parser: plugin.sugarss,
                plugins: [
                    plugin.cssImports,
                    plugin.cssSimpleVariables(),
                    plugin.cssUnwrapNesting,
                    plugin.cssSimplifyCalc,
                    plugin.cssAutoPrefix,
                    ...(customConfig?.cssPlugins ?? []),
                ],
            },
        },
        plugins: [
            plugin.resolveTypescriptPaths({ projects: [tsConfig] }),
            ...(customConfig?.plugins ?? []),
            plugin.lint({}),
            plugin.compressAssets(),
            plugin.generateCertificate(),
            ...conditionalPlugins,
        ],
    })
}
