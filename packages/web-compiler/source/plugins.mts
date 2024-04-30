import lint from "vite-plugin-checker";
import biome from "vite-plugin-biome";
import resolveTypescriptPaths from "vite-tsconfig-paths";
import compileTypescriptDefinitions from "vite-plugin-dts";
import { compression as compressAssets } from "vite-plugin-compression2";
import generateCertificate from "@vitejs/plugin-basic-ssl";
import cssSimpleVariables from "postcss-simple-vars";
import cssImports from "postcss-import";
import cssUnwrapNesting from "postcss-nested";
import cssSimplifyCalc from "postcss-calc";
import compileSass from "sass";
import cssAutoPrefix from "autoprefixer";

export {
    resolveTypescriptPaths,
    compileTypescriptDefinitions,
    biome,
    lint,
    compressAssets,
    generateCertificate,
    compileSass,
    cssImports,
    cssSimpleVariables,
    cssUnwrapNesting,
    cssSimplifyCalc,
    cssAutoPrefix,
};
