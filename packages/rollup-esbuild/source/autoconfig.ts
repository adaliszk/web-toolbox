import { RollupOptions } from 'rollup'
import rollupTypescriptDefinitions from 'rollup-plugin-dts'
import configureRollupBuild from './configureRollupBuild'
import * as path from 'path'
import * as fs from 'fs'


export function autoconfig (): RollupOptions[]
{
    const pkgFile = path.resolve(process.cwd(), 'package.json')
    if (!fs.existsSync(pkgFile)) throw ReferenceError('CWD has no package.json, are you executing this from the correct WORK-PATH?')

    // read package.json
    const pkg = JSON.parse(fs.readFileSync(pkgFile).toString())
    if (!pkg.config) throw SyntaxError('$.config is not specified in your package.json!')

    // resolve source file for the bundle, required
    if (!pkg.config.sourceFile) throw SyntaxError('$.config.sourceFile is not specified, please point to your bundle source file!')
    const sourceFile = path.resolve(pkg.config.sourceFile).replace(`${process.cwd()}${path.sep}`, '')

    // collect multiple outputs
    const buildList: RollupOptions[] = []
    const externalDependencies = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.config?.externalDependencies ?? [])]
    const tsconfigFile = pkg.config?.tsconfig ?? 'tsconfig.json'
    const buildConfig = {
        tsconfigFile,
        externalDependencies,
        sourceFile,
    }

    function addBuild (outFile: string)
    {
        const config = { ...buildConfig, outFile }

        if (outFile.match(/\.cjs$/)) buildList.push(configureRollupBuild({ ...config, outFormat: 'cjs' }))
        if (outFile.match(/\.mjs$/)) buildList.push(configureRollupBuild({ ...config, outFormat: 'esm' }))
        if (outFile.match(/\.d.ts$/))
        {
            const definitionFile = sourceFile.replace(/source|src/, 'temp').replace(/\.ts$/, '.d.ts')
            buildList.push(configureRollupBuild({
                ...config,
                outFormat: 'es',
                sourceFile: definitionFile,
                pluginList: [
                    rollupTypescriptDefinitions(),
                ],
            }))
        }
    }

    // resolve main bundle file, required
    if (!pkg.main) throw SyntaxError('$.main is not specified, cannot build a bundle!')
    addBuild(path.resolve(pkg.main))

    // additional builds
    if (pkg.module) addBuild(path.resolve(pkg.module))
    if (pkg.types) addBuild(path.resolve(pkg.types))

    return buildList
}
