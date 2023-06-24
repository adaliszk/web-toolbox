import type { WebConfig } from '@adaliszk/web-compiler'
import { webConfig } from '@adaliszk/web-compiler'
import * as plugin from './plugins'

export * from '@adaliszk/web-compiler'
export * from './plugins'


// noinspection JSUnusedGlobalSymbols
export function reactConfig (config?: WebConfig)
{
    const customConfig = config ?? {}

    return webConfig({
        ...customConfig,
        plugins: [
            ...(customConfig?.plugins ?? []),
            plugin.compileReact(),
        ],
    })
}
