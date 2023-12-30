import {
    CanActivate,
    ExceptionFilter,
    LoggerService,
    ModuleMetadata,
    NestInterceptor,
    PipeTransform,
} from '@nestjs/common'
import { AbstractHttpAdapter } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { HealthIndicatorResult } from '@nestjs/terminus'
import { LogLevel } from '../createLogger'

export type HealthCheckFn = () => Promise<HealthIndicatorResult>

export interface AppConfig extends ModuleMetadata
{
    /**
     * Provide a name for the application.
     * @default 'NestJS Application'
     */
    name?: string

    /**
     * Provide a version for the application.
     */
    version?: string

    /**
     * Pass HttpAdapter instance to the NestFactory.create() method.
     */
    adapter?: AbstractHttpAdapter

    /**
     * Pass MicroserviceOptions instance to the NestFactory.createMicroservice() method.
     */
    service?: MicroserviceOptions

    /**
     * Control the number of threads used to process requests.
     * @default os.cpus().length
     */
    threads?: number

    /**
     * Pass a custom logger to the NestApplication context.
     */
    logger?: LoggerService

    /**
     * Level of logging with the globally available Logger class.
     * @default 'info'
     */
    logLevel?: LogLevel

    /**
     * Pass a list of environment files to be loaded by the ConfigModule.
     * @default ['.env']
     */
    envFiles?: string[]

    /**
     * Pass a list of global filters to be used by the NestApplication instance.
     */
    globalFilters?: ExceptionFilter[]

    /**
     * Wether the exception filter for HTTP responses should be loaded by default
     * @default true for servers
     * @default false for microservices
     */
    autoExceptionHandler?: boolean

    /**
     * Pass a list of global interceptors to be used by the NestApplication instance.
     */
    globalInterceptors?: NestInterceptor[]

    /**
     * Pass a list of global pipes to be used by the NestApplication instance.
     */
    globalPipes?: PipeTransform<unknown>[]

    /**
     * Pass a list of global guards to be used by the NestApplication instance.
     */
    globalGuards?: CanActivate[]

    /**
     * Configure Redis usage within the application.
     */
    redis?: {
        enabled: boolean
        ttl?: number
        host?: string
        port?: number
        username?: string
        password?: string
        db?: number
    }

    /**
     * Configure the EventEmitter usage within the application.
     */
    eventEmitter?: {
        enabled: boolean
        maxListeners?: number
        wildcard: boolean
        newListener: boolean
        removeListener: boolean
    }

    /**
     * Configure the Queue usage within the application.
     */
    queues?: {
        enabled: boolean
        redis?: boolean
    }

    /**
     * Pass a list of health checks to be used by the TerminusModule.
     */
    healthChecks?: HealthCheckFn[]
}
