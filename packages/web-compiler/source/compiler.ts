import type { UserConfigExport, WebConfig } from './types'
import type { UserConfig, PluginOption } from 'vite'

import { defineConfig } from 'vite'
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

    const conditionalPlugins: PluginOption[] = []
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
            preprocessorOptions: { sass: { indentedSyntax: true, ...(customConfig.sass ?? {}) } },
            postcss: {
                plugins: [
                    plugin.cssImports,
                    plugin.cssSimpleVariables({ variables: {} }),
                    plugin.cssUnwrapNesting,
                    plugin.cssSimplifyCalc,
                    ...(customConfig?.cssPlugins ?? []),
                    plugin.cssAutoPrefix,
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
    } as UserConfig)
}
