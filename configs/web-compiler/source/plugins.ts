import lint from 'vite-plugin-checker'
import resolveTypescriptPaths from 'vite-tsconfig-paths'
import compressAssets from 'vite-plugin-compression2'
import generateCertificate from 'vite-plugin-mkcert'
import { VitePWA as generateWebAppManifest } from 'vite-plugin-pwa'
import minifyTemplateLiterals from 'rollup-plugin-html-literals'
import cssUnwrapNesting from 'postcss-nested'
import cssSimplifyCalc from 'postcss-calc'


export {
    resolveTypescriptPaths,
    lint,
    compressAssets,
    minifyTemplateLiterals,
    generateCertificate,
    generateWebAppManifest,
    cssUnwrapNesting,
    cssSimplifyCalc,
}