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

    return webConfig({
        ...customConfig,
        plugins: [
            ...(customConfig?.plugins ?? []),
            customConfig?.city ? plugin.serveQwikCity(cityConfig) : undefined,
            plugin.compileQwik(qwikConfig),
        ].filter(i => i !== undefined),
    })
}