import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { createLoggerFactory } from './createLogger'
import { configureApplication, defineApplication } from './defineApplication'
import type { AppConfig } from './types'

export async function createMicroservice(config?: AppConfig)
{
    const createLogger = createLoggerFactory(config)
    const app = defineApplication(createLogger, config)

    const serverLogger = createLogger()
    const server = await NestFactory.createMicroservice<MicroserviceOptions>(app, {
        ...(config?.service ?? {}),
        logger: serverLogger,
    })

    configureApplication(server, serverLogger, {
        autoExceptionHandler: false,
        ...config,
    })

    return server
}
