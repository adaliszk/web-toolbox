import { pino } from 'pino'

import type { LoggerService } from '@nestjs/common'
import type { Logger as PinoLogger } from 'pino'
import type { AppConfig } from './types'

export type LogLevel = 'fatal' | 'error' | 'info' | 'warn' | 'debug' | 'trace'

/**
 * Exposes the same interface as NestJS LoggerService, but uses PinoLogger
 * Pass a Metadata interface to the constructor to enable type checking for metadata
 */
export class Logger<Metadata = {}> implements LoggerService
{
    protected readonly level: LogLevel
    protected readonly logger: PinoLogger
    protected context?: string

    constructor (context?: string, logLevel?: LogLevel)
    {
        this.context = context
        this.level = logLevel ?? 'info'
        this.logger = pino({
            timestamp: pino.stdTimeFunctions.isoTime,
            level: this.level,
            context,
        })
    }

    setContext (context?: string)
    {
        this.context = context
    }

    log (message: string | object, context?: string): void
    log (message: string | object, metadata?: Metadata): void
    log (message: string | object, ctx?: Metadata | string): void
    {
        this.call('info', message, ctx)
    }

    info (message: string | object, context?: string): void
    info (message: string | object, metadata?: Metadata): void
    info (message: string | object, ctx?: Metadata | string): void
    {
        this.call('info', message, ctx)
    }

    error (message: string, error?: Error): void
    error (message: string, context?: string): void
    error (message: string, metadata?: Metadata): void
    error (message: string, error: Error, metadata?: Metadata): void
    error (message: string, ctx?: Metadata | Error | string, metadata?: Metadata): void
    {
        this.call('error', message, ctx, metadata)
    }

    warn (message: string, metadata?: Metadata)
    {
        this.call('warn', message, metadata)
    }

    debug (message: string | object, metadata?: Metadata)
    {
        this.call('debug', message, metadata)
    }

    verbose (message: string | object, metadata?: Metadata)
    {
        this.call('trace', message, metadata)
    }

    private call (
        level: LogLevel,
        message: string | object | Error,
        ctx?: Metadata | Error | string,
        metadata?: Metadata,
    )
    {
        const context = typeof ctx === 'string' ? ctx : this.context
        const msg = message instanceof Error
            ? <string> `[${message.constructor.name ?? context}] ${message.message}`
            : typeof message === 'string'
            ? <string> message
            : '[object]'

        if (message instanceof Error || ctx instanceof Error)
        {
            const error = message instanceof Error ? message : ctx as Error
            return this.logger[level](error, msg)
        }

        const meta = metadata ?? (typeof ctx === 'object' ? ctx : {})
        const obj = typeof message === 'object' ? { ...message, ...meta } : { ...meta }

        return this.logger[level](obj, `[${context}] ${msg}`)
    }
}

export async function createLoggerFactory<T>(config?: AppConfig): Promise<() => LoggerService>
{
    if (config?.logger !== undefined) return () => config.logger as LoggerService
    return () => new Logger<T>('', config?.logLevel)
}
