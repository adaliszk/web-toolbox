import lint from 'vite-plugin-checker'
import resolveTypescriptPaths from 'vite-tsconfig-paths'
import compileTypescriptDefinitions from 'vite-plugin-dts'
import compressAssets from 'vite-plugin-compression2'
import generateCertificate from 'vite-plugin-mkcert'
import cssUnwrapNesting from 'postcss-nested'
import cssSimplifyCalc from 'postcss-calc'



export {
    resolveTypescriptPaths,
    compileTypescriptDefinitions,
    lint,
    compressAssets,
    generateCertificate,
    cssUnwrapNesting,
    cssSimplifyCalc,
}