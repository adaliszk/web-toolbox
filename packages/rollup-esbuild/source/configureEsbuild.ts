import { Plugin } from 'rollup'
import rollupEsbuild from 'rollup-plugin-esbuild'


export interface EsbuildConfig
{
    tsconfig?: string
    target?: string
}


export default function configureEsbuild (config: EsbuildConfig): Plugin
{
    return rollupEsbuild({
        tsconfig: config.tsconfig ?? 'tsconfig.json',
        target: config.target,
        jsx: 'preserve',
        sourceMap: true,
        minify: true,
        loaders: {
            '.json': 'json',
        },
    })
}
