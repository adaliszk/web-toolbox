import type { UserConfigExport, UserConfig } from 'vite'

export interface WebConfig extends UserConfig
{
    federation?: object
    remotes?: string[]
    exposes?: string[]
}

export {
    UserConfigExport
}