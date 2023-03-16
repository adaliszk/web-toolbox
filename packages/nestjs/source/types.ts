import { ModuleMetadata, ExceptionFilter, NestInterceptor, PipeTransform, CanActivate } from '@nestjs/common'
import { AbstractHttpAdapter } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { WinstonLogLevel } from './createLogger'


export interface AppConfig extends ModuleMetadata
{
    adapter?: AbstractHttpAdapter
    service?: MicroserviceOptions
    port?: number
    logger?: {
        level: WinstonLogLevel
        file: string
    }
    globalFilters?: ExceptionFilter[]
    globalInterceptors?: NestInterceptor[]
    globalPipes?: PipeTransform<unknown>[]
    globalGuards?: CanActivate[]
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