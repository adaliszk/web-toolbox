import lint from "vite-plugin-checker";
import resolveTypescriptPaths from "vite-tsconfig-paths";
import compileTypescriptDefinitions from "vite-plugin-dts";
import { compression as compressAssets } from "vite-plugin-compression2";
import generateCertificate from "@vitejs/plugin-basic-ssl";
import cssSimpleVariables from "postcss-simple-vars";
import cssImports from "postcss-import";
import cssUnwrapNesting from "postcss-nested";
import cssSimplifyCalc from "postcss-calc";
import cssAutoPrefix from "autoprefixer";
import cssTailwind from "tailwindcss";

export {
    resolveTypescriptPaths,
    compileTypescriptDefinitions,
    lint,
    compressAssets,
    generateCertificate,
    cssImports,
    cssSimpleVariables,
    cssUnwrapNesting,
    cssSimplifyCalc,
    cssAutoPrefix,
    cssTailwind,
};
