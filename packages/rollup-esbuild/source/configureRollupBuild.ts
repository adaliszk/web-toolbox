import { ModuleFormat, Plugin, RollupOptions } from 'rollup'
import configureEsbuild from './configureEsbuild'


export interface RollupBuildOptions
{
    sourceFile: string,
    outFile: string,
    externalDependencies?: string[]
    pluginList?: Plugin[],
    tsconfigFile?: string,
}


function RollupBuildTarget (format: ModuleFormat)
{
    switch (format)
    {
    case 'es':
    case 'esm':
        return 'esnext'

    default:
        return 'es2017'
    }
}


export default function configureRollupBuild (outFormat: ModuleFormat, config: RollupBuildOptions): RollupOptions
{
    const buildTarget = RollupBuildTarget(outFormat)

    return {
        input: config.sourceFile,
        external: config.externalDependencies ?? [],
        plugins: config.pluginList ?? [
            configureEsbuild({
                tsconfig: config.tsconfigFile,
                target: buildTarget,
            }),
        ],
        output: {
            format: outFormat,
            file: config.outFile,
            sourcemap: true,
        },
    }
}
