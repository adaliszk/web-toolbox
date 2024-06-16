import { type Options, defineConfig } from "tsup";

const sharedConfig: Partial<Options> = {
    platform: "node",
    target: "node20",
    format: ["esm", "cjs"],
    tsconfig: "./tsconfig.json",
    minify: true,
    sourcemap: true,
    dts: true,
    external: ["node:crypto"],
};

// noinspection JSUnusedGlobalSymbols - Used by tsup
export default defineConfig([
    {
        name: "bundle",
        entry: ["./src/bundle.ts"],
        outDir: "./dist",
        ...sharedConfig,
    },
]);
