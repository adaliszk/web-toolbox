import { type Options, defineConfig } from "tsup";

const sharedConfig: Partial<Options> = {
    platform: "node",
    target: "node18",
    format: "esm",
    tsconfig: "./tsconfig.json",
    minify: true,
    sourcemap: true,
    dts: true,
};

// noinspection JSUnusedGlobalSymbols - Used by tsup
export default defineConfig([
    {
        name: "bundle",
        entry: ["./src/bundle.ts"],
        outDir: "./dist",
        ...sharedConfig,
    },
    {
        name: "helpers",
        entry: ["./src/helpers.ts"],
        outDir: "./dist",
        ...sharedConfig,
    },
]);
