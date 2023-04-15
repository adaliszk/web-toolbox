import lint from 'vite-plugin-checker'
import resolveTypescriptPaths from 'vite-tsconfig-paths'
import compileTypescriptDefinitions from 'vite-plugin-dts'
import compressAssets from 'vite-plugin-compression2'
import generateCertificate from 'vite-plugin-mkcert'
import cssSimpleVariables from 'postcss-simple-vars'
import cssImports from 'postcss-import'
import cssUnwrapNesting from 'postcss-nested'
import cssSimplifyCalc from 'postcss-calc'
import compileSass from 'sass'
import cssAutoPrefix from 'autoprefixer'


export {
    resolveTypescriptPaths,
    compileTypescriptDefinitions,
    lint,
    compressAssets,
    generateCertificate,
    compileSass,
    cssImports,
    cssSimpleVariables,
    cssUnwrapNesting,
    cssSimplifyCalc,
    cssAutoPrefix
}
