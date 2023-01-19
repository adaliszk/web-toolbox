import { INestApplication, ModuleMetadata } from '@nestjs/common'
import { MicroserviceOptions } from '@nestjs/microservices'
import { WinstonLogLevel } from './createLogger'

export interface AppConfig extends ModuleMetadata
{
    adapter?: INestApplication
    service?: MicroserviceOptions
    port?: number
    logger?: {
        level: WinstonLogLevel
        file: string
    }
    redis?: {
        host: string
        port?: number
        token?: string
        db?: number | string
        ttl?: number
    }
    eventEmitter?: {
        enabled: boolean,
        maxListeners?: number
        wildcard: boolean
        newListener: boolean
        removeListener: boolean
    }
    queues?: {
        enabled: boolean
        redis?: boolean
    }
}