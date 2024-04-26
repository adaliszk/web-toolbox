import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["source/client.ts", "source/server.ts", "source/bundle.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: true,
    sourcemap: true,
    minify: true,
    clean: true,
});
