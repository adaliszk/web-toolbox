import type { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { createLoggerFactory } from './createLogger'
import { configureApplication, defineApplication } from './defineApplication'
import type { AppConfig } from './types'

import cluster from 'node:cluster'
import os from 'node:os'
import process from 'node:process'

export const LOGICAL_CPU_COUNT = os.cpus().length
export const NODE_ENV = process.env.NODE_ENV ?? 'production'

export async function createServer<T extends INestApplication>(config?: AppConfig): Promise<T | undefined>
{
    const logger = await createLoggerFactory(config)
    const console = logger()

    const DESIRED_THREAD_COUNT = (config?.threads ?? LOGICAL_CPU_COUNT) <= LOGICAL_CPU_COUNT
        ? config?.threads ?? LOGICAL_CPU_COUNT
        : LOGICAL_CPU_COUNT

    if (DESIRED_THREAD_COUNT === 1)
    {
        console.warn('Cannot start threads when there is only one logical core!', 'NestManager')
    }

    if (NODE_ENV !== 'production')
    {
        console.warn('Environment is not production, skipping threads...', 'NestManager')
    }

    if (cluster.isPrimary && DESIRED_THREAD_COUNT > 1 && NODE_ENV === 'production')
    {
        console.log(`Starting ${DESIRED_THREAD_COUNT} threads...`, 'NestManager')
        for (let i = 0; i < DESIRED_THREAD_COUNT; i++) cluster.fork()

        console.log(`Manager ${process.pid} started`, 'NestManager')
        cluster.on('exit', () => process.exit(1))

        return
    }

    console.log(`Start server ${process.pid}...`, 'NestManager')

    const serverLogger = logger()
    const app = await defineApplication(logger, config)
    const server = config?.adapter
        ? await NestFactory.create<T>(app, config.adapter, { logger: serverLogger })
        : await NestFactory.create<T>(app, { logger: serverLogger })

    await configureApplication(server, serverLogger, config)
    return server
}
