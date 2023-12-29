import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { createLoggerFactory } from './createLogger'
import { configureApplication, defineApplication } from './defineApplication'
import type { AppConfig } from './types'

export async function createMicroservice(config?: AppConfig)
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
