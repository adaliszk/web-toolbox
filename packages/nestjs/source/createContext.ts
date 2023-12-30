import { NestFactory } from '@nestjs/core'
import { createLoggerFactory } from './createLogger'
import { defineApplication } from './defineApplication'
import type { AppConfig } from './types'

export async function createContext(config?: AppConfig)
{
    const createLogger = createLoggerFactory(config)
    const app = defineApplication(createLogger, config)

    return await NestFactory.createApplicationContext(app, {
        logger: createLogger(),
    })
}
