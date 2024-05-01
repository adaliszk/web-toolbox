import type { UserConfigExport, WebConfig } from './types.mts'
import type { UserConfig, PluginOption } from 'vite'

import { defineConfig } from 'vite'
import * as plugin from './plugins.mts'

import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

export * from 'vite'
export * from './plugins.mts'
export * from './types.mts'

// noinspection JSUnusedGlobalSymbols
export function webConfig (config?: WebConfig): UserConfigExport
{
    const customConfig = config ?? {}
    const tsConfig = config?.tsconfig ?? 'tsconfig.json'
    const biomeUsed = existsSync(resolve(cwd(), 'biome.json'))

    const tsConfigContent = JSON.parse(readFileSync(resolve(cwd(), tsConfig), 'utf8'))
    const tsConfigCompilerOptions = tsConfigContent.compilerOptions ?? {
        target: 'esnext',
        declaration: true,
    }

    const conditionalPlugins: PluginOption[] = []
    if ((config?.tsdefinitions ?? tsConfigCompilerOptions.declaration) === true)
    {
        conditionalPlugins.push(plugin.compileTypescriptDefinitions({ tsconfigPath: tsConfig }))
    }

    const httpsMode = config?.https ?? true
    const sassEnabled = typeof customConfig?.sass === 'boolean' ? customConfig.sass : true
    const sassConfig = typeof customConfig?.sass === 'object' ? customConfig?.sass : {}

    return defineConfig({
        ...customConfig,
        server: {
            https: httpsMode,
            ...(httpsMode ? { hmr: { protocol: 'wss' }} : {}),
            ...(customConfig?.server ?? {}),
        },
        build: {
            target: customConfig?.target ?? tsConfigCompilerOptions.target,
            ...(customConfig?.build ?? {}),
        },
        css: {
            ...(sassEnabled
                ? {
                    preprocessorOptions: { sass: { indentedSyntax: true, ...sassConfig } },
                }
                : {}),
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
            // @ts-expect-error - This is a valid plugin function, but typescript doesn't know about it.
            ...(biomeUsed ? [plugin.biome({ mode: 'check', applyFixes: true })] : []),
            plugin.lint({}),
            plugin.compressAssets({ algorithm: 'brotliCompress' }),
            plugin.compressAssets({ algorithm: 'gzip' }),
            // @ts-expect-error - This is a valid plugin function, but typescript doesn't know about it.
            ...(httpsMode ? [plugin.generateCertificate()] : []),
            ...conditionalPlugins,
        ],
    } as UserConfig)
}
