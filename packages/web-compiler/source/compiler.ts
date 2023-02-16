import { defineConfig } from 'vite'
import type { UserConfigExport, WebConfig } from './types'
import * as plugin from './plugins'

export * from 'vite'
export * from './plugins'
export * from './types'

// noinspection JSUnusedGlobalSymbols
export function webConfig (config?: WebConfig): UserConfigExport
{
    const customConfig = config ?? {}
    const tsConfig = config?.tsconfig ?? 'tsconfig.json'

    return defineConfig({
        ...customConfig,
        server: {
            https: true,
            hmr: { protocol: 'wss' },
            ...(customConfig?.server ?? {}),
        },
        css: {
            postcss: {
                plugins: [
                    plugin.cssUnwrapNesting,
                    plugin.cssSimplifyCalc,
                ]
            }
        },
        plugins: [
            plugin.resolveTypescriptPaths({
                projects: [tsConfig]
            }),
            ...(customConfig?.plugins ?? []),
            plugin.lint({}),
            plugin.compressAssets(),
            plugin.generateCertificate(),
            plugin.compileTypescriptDefinitions({
                tsConfigFilePath: tsConfig
            }),
        ],
    })
}