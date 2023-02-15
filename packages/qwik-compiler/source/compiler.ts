import type { UserConfigExport } from '@adaliszk/web-compiler'
import type { QwikConfig } from './types'

import { webConfig } from '@adaliszk/web-compiler'
import * as plugin from './plugins'

export * from '@adaliszk/web-compiler'

// noinspection JSUnusedGlobalSymbols
export function qwikConfig (config?: QwikConfig): UserConfigExport
{
    const customConfig = config ?? {}

    return webConfig({
        ...customConfig,
        plugins: [
            ...(customConfig?.plugins ?? []),
            plugin.city(),
            plugin.qwik(),
        ],
    })
}