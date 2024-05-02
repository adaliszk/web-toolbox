import type { UserConfigExport, WebConfig } from "./types.js";
import type { UserConfig, PluginOption } from "vite";

import { defineConfig } from "vite";
import * as plugin from "./plugins.js";

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { cwd } from "node:process";

export * from "vite";
export * from "./plugins.js";
export * from "./types.js";

/**
 * Create a web-focused Vite configuration with some convenient defaults:
 * - Typescript path resolution
 * - Linting (TSC, Stylelint, ESLint)
 * - Compression (Brotli and Gzip)
 * - PostCSS preset with Tailwind detection
 * - TLS Encryption
 */
export function webConfig(config?: WebConfig): UserConfigExport {
    const customConfig = config ?? {};

    // Typescript configuration
    const tsConfig = config?.tsconfig ?? "tsconfig.json";
    const tsConfigContent = JSON.parse(readFileSync(resolve(cwd(), tsConfig), "utf8"));
    const tsConfigCompilerOptions = tsConfigContent.compilerOptions ?? {
        target: "esnext",
        declaration: true,
    };

    // Conditional Typescript plugins
    const conditionalPlugins: PluginOption[] = [];
    if ((config?.tsdefinitions ?? tsConfigCompilerOptions.declaration) === true) {
        conditionalPlugins.push(plugin.compileTypescriptDefinitions({ tsconfigPath: tsConfig }));
    }

    // Tailwind Detection
    const tailwindConfigPath = [
        existsSync(resolve(cwd(), "tailwind.config.ts")),
        existsSync(resolve(cwd(), "tailwind.config.js")),
    ];
    const tailwindDetected = tailwindConfigPath.some(Boolean);

    const httpsMode = config?.https ?? true;
    return defineConfig({
        ...customConfig,
        server: {
            https: httpsMode,
            ...(httpsMode ? { hmr: { protocol: "wss" } } : {}),
            ...(customConfig?.server ?? {}),
        },
        build: {
            target: customConfig?.target ?? tsConfigCompilerOptions.target,
            ...(customConfig?.build ?? {}),
        },
        css: {
            postcss: {
                plugins: [
                    plugin.cssImports,
                    plugin.cssSimpleVariables({ variables: {} }),
                    plugin.cssUnwrapNesting,
                    plugin.cssSimplifyCalc,
                    ...(tailwindDetected ? [plugin.cssTailwind] : []),
                    ...(customConfig?.cssPlugins ?? []),
                    plugin.cssAutoPrefix,
                ],
            },
        },
        plugins: [
            plugin.resolveTypescriptPaths({ projects: [tsConfig] }),
            ...(customConfig?.plugins ?? []),
            plugin.lint({}),
            plugin.compressAssets({ algorithm: "brotliCompress" }),
            plugin.compressAssets({ algorithm: "gzip" }),
            // @ts-expect-error - This is a valid plugin function, but typescript doesn't know about it.
            ...(httpsMode ? [plugin.generateCertificate()] : []),
            ...conditionalPlugins,
        ],
    } as UserConfig);
}
