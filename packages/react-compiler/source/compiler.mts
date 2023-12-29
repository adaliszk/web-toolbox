import type { WebConfig } from '@adaliszk/web-compiler'
import { webConfig } from '@adaliszk/web-compiler'
import * as plugin from './plugins.mts'

export * from '@adaliszk/web-compiler'
export * from './plugins.mts'


export function reactConfig (config?: WebConfig)
{
    const customConfig: WebConfig = config ?? {}

    return webConfig({
        ...customConfig,
        plugins: [
            ...(customConfig?.plugins ?? []),
            plugin.compileReact(),
        ],
    })
}
