import type {
    UserConfigExport,
    UserConfig,
    PluginOption,
    ServerOptions,
    EsbuildTransformOptions,
} from "vite";
import type { AcceptedPlugin, PluginCreator } from "postcss";
import type { Options as SassOptions } from "sass";

export interface FederationConfig {
    [organisation: string]: string;
}

export interface FederationRemotes {
    [organisation: string]: string[];
}

export interface FederationExposes {
    [endpoint: string]: string;
}

export type CssPlugin = AcceptedPlugin | PluginCreator<unknown>;

export interface WebConfig extends UserConfig {
    /**
     * Array of vite plugins to use.
     */
    plugins?: PluginOption[];

    /**
     * Toggle the automatic TLS certificates and HTTPS server
     * By default, this is set to true.
     */
    https?: boolean;

    /**
     * Compatibility transform target. The transform is performed with esbuild
     * and the lowest supported target is es2015/es6. Note this only handles
     * syntax transformation and does not cover polyfills (except for dynamic
     * import)
     *
     * Default: 'modules' - Similar to `@babel/preset-env`'s targets.esmodules,
     * transpile targeting browsers that natively support dynamic es module imports.
     * https://caniuse.com/es6-module-dynamic-import
     *
     * Another special value is 'esnext' - which only performs minimal transpiling
     * (for minification compat) and assumes native dynamic imports support.
     *
     * For custom targets, see https://esbuild.github.io/api/#target and
     * https://esbuild.github.io/content-types/#javascript for more details.
     */
    target?: "modules" | EsbuildTransformOptions["target"] | false;

    /**
     * The path to the Typescript configuration to be used for generating definitions
     * (configures `vite-plugin-dts` and `vite-tsconfig-paths`)
     */
    tsconfig?: string;

    /**
     * Controls whether to generate Typescript definitions
     * (configures `vite-plugin-dts`)
     */
    tsdefinitions?: boolean;

    /**
     * Configures federation base URL routes based on NPM organisations
     * @example { "@adaliszk.io": "https://cdn.adaliszk.io/ui" }
     */
    federation?: FederationConfig;

    /**
     * Specify which applications to look for in the federated imports
     * @example { "@adaliszk.io": ['react'] } => import { Button } from '@adaliszk.io/react/Button'
     */
    remotes?: FederationRemotes;

    /**
     * Specify which files to expose on what routes (relative from the source path)
     * @example { 'Button': 'atoms/Button.tsx' }
     */
    exposes?: FederationExposes;

    /**
     * Pass additional PostCSS plugins to the CSS preprocessor
     */
    cssPlugins?: CssPlugin[];

    /**
     * Configure the Sass preprocessor
     */
    sass?: SassOptions<"sync"> | boolean;
}

export { UserConfigExport };
