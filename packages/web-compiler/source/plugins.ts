import lint from 'vite-plugin-checker'
import resolveTypescriptPaths from 'vite-tsconfig-paths'
import compileTypescriptDefinitions from 'vite-plugin-dts'
import compressAssets from 'vite-plugin-compression2'
import generateCertificate from 'vite-plugin-mkcert'
import cssSimpleVariables from 'postcss-simple-vars'
import cssImports from 'postcss-import'
import cssUnwrapNesting from 'postcss-nested'
import cssSimplifyCalc from 'postcss-calc'
import sugarss from 'sugarss'
import cssAutoPrefix from 'autoprefixer'


export {
    resolveTypescriptPaths,
    compileTypescriptDefinitions,
    lint,
    compressAssets,
    generateCertificate,
    sugarss,
    cssImports,
    cssSimpleVariables,
    cssUnwrapNesting,
    cssSimplifyCalc,
    cssAutoPrefix
}
