import { NestFactory } from '@nestjs/core'
import { createLoggerFactory } from './createLogger'
import { defineApplication } from './defineApplication'
import type { AppConfig } from './types'

export async function createContext(config?: AppConfig)
{
    const logger = await createLoggerFactory(config)
    const app = await defineApplication(logger, config)

    return await NestFactory.createApplicationContext(app, {
        logger: logger(),
    })
}
