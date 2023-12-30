#!/usr/bin/env node

import { program } from 'commander'
import { esbuildDecorators } from 'esbuild-decorators'
import { version, build, BuildOptions } from 'esbuild'
import { rimrafSync } from 'rimraf'

import * as chokidar from 'chokidar'
import { spawn, ChildProcess } from 'node:child_process'
import * as process from 'node:process'
import * as path from 'node:path'
import * as fs from 'node:fs'

import { name as pkgName, version as pkgVersion, description as pkgDescription } from '../package.json'


const cwd = process.cwd()
const tsconfig = path.resolve(cwd, 'tsconfig.build.json') ?? path.resolve(cwd, 'tsconfig.json')
const nestconfig = path.resolve(cwd, 'nest-cli.json')
const nest = JSON.parse((fs.readFileSync(nestconfig)).toString())
const mainFile = path.join(nest.entryFile ?? 'main')
const srcDir = nest.sourceRoot ?? 'src'
const srcPath = path.resolve(cwd, srcDir)
const configFile = path.resolve(srcPath, 'nest-compiler.config.ts')


program
    .name(pkgName)
    .version(pkgVersion)
    .description(pkgDescription)
    .option('-o, --outdir <outdir>', 'Output directory', 'dist')
    .option('--watch', 'Watch for changes', false)
    .action(async (args) =>
    {
        await clean(args)

        if (args.watch)
            return await watch(args)

        await compile(args)
        await printStats(args)
    })
    .parse(process.argv)


async function clean (options: { outdir: string })
{
    rimrafSync(options.outdir)
}

async function watch (options: { outdir: string })
{
    const distFile = path.resolve(cwd, options.outdir, mainFile + '.js')

    let server: ChildProcess | undefined
    const compileAndRun = async () =>
    {
        await compile(options)

        if (server)
        {
            console.log('> Restarting server...')
            server.kill()
        }

        server = spawn('node', [distFile], {
            stdio: 'inherit',
            env: {
                ...process.env,
                NODE_ENV: 'development',
            },
        })
    }

    chokidar
        .watch(`./${srcDir}/**/*.{ts,js}`, { ignoreInitial: true })
        .on('ready', compileAndRun)
        .on('add', compileAndRun)
        .on('change', compileAndRun)
        .on('unlink', compileAndRun)
}

async function compile (options: { outdir: string })
{
    const entry = path.resolve(srcPath, mainFile + '.ts')
    let config: BuildOptions = {}
    if (fs.existsSync(configFile))
    {
        console.log('> loading configs from nest-compiler.config.ts')
        config = (await import(configFile)).default as BuildOptions
    }

    console.log(`> esbuild@${version}`)

    return await build({
        ...config,
        entryPoints: [entry],
        outdir: options.outdir,
        target: 'node18',
        format: 'cjs',
        platform: 'node',
        bundle: true,
        sourcemap: true,
        treeShaking: true,
        keepNames: true,
        minify: true,
        plugins: [
            esbuildDecorators({
                tsconfig,
                cwd,
            }),
            ...(config?.plugins ?? []),
        ],
        tsconfig,
        external: [
            '@adaliszk/nestjs',
            '@nestjs/core',
            '@nestjs/common',
            '@nestjs/platform-fastify',
            '@nestjs/websockets',
            '@fastify/static',
            '@fastify/view',
            'express',
            'kafkajs',
            'mqtt',
            'util',
            ...(config?.external ?? []),
        ],
    })
}

async function printStats ({ outdir }: { outdir: string })
{
    const chalk = (await import('chalk')).default
    const prettyBytes = (await import('pretty-bytes')).default
    const files = fs.readdirSync(path.resolve(cwd, outdir))

    for (const file of files)
    {
        const stats = fs.statSync(path.resolve(cwd, outdir, file))
        console.log(chalk.white(`~ ${outdir}/${file}`), chalk.green(prettyBytes(stats.size, { space: false })))
    }
}
