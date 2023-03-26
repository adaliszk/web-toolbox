import type { AppConfig } from './types'
import { NestFactory } from '@nestjs/core'
import { defineApplication } from './defineApplication'
import { createLoggerFactory } from './createLogger'


export async function createContext (config?: AppConfig)
{
    const logger = await createLoggerFactory(config)
    const app = await defineApplication(logger, config)

    return await NestFactory.createApplicationContext(app, {
        logger: logger(),
    })
}