import type { AppConfig } from './types'
import { NestFactory } from '@nestjs/core'
import { configureApplication, defineApplication } from './defineApplication'
import { MicroserviceOptions } from '@nestjs/microservices'
import { createLoggerFactory } from './createLogger'


export async function createMicroservice (config?: AppConfig)
{
    const logger = await createLoggerFactory(config)
    const app = await defineApplication(logger, config)

    const serverLogger = logger()
    const server = await NestFactory.createMicroservice<MicroserviceOptions>(app, {
        ...(config?.service ?? {}),
        logger: serverLogger,
    })

    await configureApplication(server, serverLogger, config)
    return server
}
