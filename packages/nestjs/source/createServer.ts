import type { AppConfig } from './types'
import type { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { configureApplication, defineApplication } from './defineApplication'
import { createLogger } from './createLogger'


export async function createServer<T extends INestApplication> (config?: AppConfig)
{
    const app = await defineApplication(config)
    const logger = await createLogger(config?.logger?.level ?? 'info', config?.logger?.file ?? '/tmp/server.log')

    let server
    if (config?.adapter) server = await NestFactory.create<T>(app, config.adapter, { logger })
    else server = await NestFactory.create<T>(app, { logger })

    await configureApplication(server, config)
    return server
}