import type { UserConfigExport } from '@adaliszk/web-compiler'
import type { QwikConfig } from './types'

import { webConfig } from '@adaliszk/web-compiler'
import * as plugin from './plugins'

export * from '@adaliszk/web-compiler'
export * from './plugins'
export * from './types'


// noinspection JSUnusedGlobalSymbols
export function qwikConfig (config?: QwikConfig): UserConfigExport
{
    const customConfig = config ?? {}
    const cityConfig = typeof customConfig?.city === 'object' ? customConfig?.city : {}
    const qwikConfig = typeof customConfig?.qwik === 'object' ? customConfig?.qwik : {}
    const plugins = customConfig?.plugins ?? []

    if (customConfig?.city)
        plugins.push(plugin.serveQwikCity({ routesDir: 'source/routes', ...cityConfig }))

    plugins.push(plugin.compileQwik({ srcDir: 'source', ...qwikConfig }))

    return webConfig({
        ...customConfig,
        plugins,
    })
}
