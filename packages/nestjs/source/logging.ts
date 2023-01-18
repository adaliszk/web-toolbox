import { LoggerService } from '@nestjs/common'
import { WinstonModule } from 'nest-winston'
import { format, transports } from 'winston'


export type WinstonLogLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'


export function targetFileOutput (filename: string)
{
    return new transports.File({
        filename,
        format: format.combine(
            format.ms(),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.uncolorize(),
            format.splat(),
            format.printf(
                (c) => `${c.timestamp}${c.ms}: ${c.level} [${c.context}] ${c.message}`,
            ),
        ),
    })
}


export function targetConsoleOutput ()
{
    return new transports.Console({
        format: format.combine(
            format.ms(),
            format.errors({ stack: true }),
            format.colorize({ all: true }),
            format.splat(),
            format.printf(
                (c) => `${c.ms} ${c.level} [${c.context}] ${c.message}`,
            ),
        ),
    })
}


// noinspection JSUnusedGlobalSymbols
export function createLogger (level: WinstonLogLevel = 'info', filename: string): LoggerService
{
    return WinstonModule.createLogger({
        level,
        transports: [
            targetFileOutput(filename),
            targetConsoleOutput(),
        ],
    })
}
