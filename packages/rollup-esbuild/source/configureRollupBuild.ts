import { ModuleFormat, Plugin, RollupOptions } from 'rollup'
import { configureEsbuild } from './configureEsbuild'


export interface RollupBuildOptions
{
    sourceFile: string,
    outFormat: ModuleFormat,
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


export default function configureRollupBuild (config: RollupBuildOptions): RollupOptions
{
    const buildTarget = RollupBuildTarget(config.outFormat)

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
            format: config.outFormat,
            file: config.outFile,
            sourcemap: true,
        },
    }
}
