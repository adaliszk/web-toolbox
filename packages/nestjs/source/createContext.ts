import type { AppConfig } from './types'
import { NestFactory } from '@nestjs/core'
import { defineApplication } from './defineApplication'
import { createLogger } from './createLogger'


export async function createContext (config?: AppConfig)
{
    const app = await defineApplication(config)
    const logger = await createLogger(config?.logger?.level ?? 'info', config?.logger?.file ?? '/tmp/nestjs.log')
    return await NestFactory.createApplicationContext(app, {
        logger,
    })
}