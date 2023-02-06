import type { UserConfigExport, UserConfig } from 'vite'

export interface FederationConfig
{
    [organisation: string]: string
}

export interface WebConfig extends UserConfig
{
    /**
     * The path to the Typescript configuration to be used for generating definitions
     * (configures `vite-plugin-dts` and `vite-tsconfig-paths`)
     */
    tsconfig?: string

    /**
     * Configures federation base URL routes based on NPM organisations
     *
     * @example { "@adaliszk.io": "https://cdn.adaliszk.io/shared" }
     */
    federation?: FederationConfig

    /**
     *
     */
    remotes?: string[]

    /**
     *
     */
    exposes?: string[]
}

export {
    UserConfigExport
}