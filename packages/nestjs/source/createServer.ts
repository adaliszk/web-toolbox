import type { AppConfig } from './types'
import type { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { configureApplication, defineApplication } from './defineApplication'
import { createLogger } from './createLogger'


export async function createServer<T extends INestApplication> (config?: AppConfig)
{
    const app = await defineApplication(config)
    const logger = await createLogger(config?.logger?.level ?? 'info', config?.logger?.file ?? '/tmp/server.log')
    const server = await NestFactory.create<T>(app, { logger, ...(config?.adapter ?? {}) })
    await configureApplication(server, config)
    await server.listen(config?.port ?? 8000)

    return server
}