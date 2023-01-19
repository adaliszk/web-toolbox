import type { AppConfig } from './types'
import { NestFactory } from '@nestjs/core'
import { configureApplication, defineApplication } from './defineApplication'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { createLogger } from './createLogger'


export async function createMicroservice (config?: AppConfig)
{
    const app = await defineApplication(config)
    const logger = await createLogger(config?.logger?.level ?? 'info', config?.logger?.file ?? '/tmp/service.log')
    const server = await NestFactory.createMicroservice<MicroserviceOptions>(app, {
        ...(config?.service ?? {}),
        logger,
    })
    await configureApplication(server, config)
    await server.listen()
    return server
}