import { defineConfig, UserConfigExport, UserConfig } from 'vite'
import * as plugin from './plugins'

export * from 'vite'

// noinspection JSUnusedGlobalSymbols
export function webConfig (config?: UserConfig): UserConfigExport
{
    const customConfig = config ?? {}

    return defineConfig({
        ...customConfig,
        server: {
            https: true,
            hmr: {
                protocol: 'wss'
            }
        },
        plugins: [
            plugin.tspath(),
            ...(customConfig?.plugins ?? []),
            plugin.check({}),
            plugin.compress(),
            plugin.mkcert(),
            plugin.pwagen(),
        ],
    })
}