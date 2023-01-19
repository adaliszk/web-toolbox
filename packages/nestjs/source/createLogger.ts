import type { LoggerService } from '@nestjs/common'
import { WinstonModule } from 'nest-winston'
import { format, transports } from 'winston'


export type WinstonLogLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'


const {
    ms,
    timestamp,
    uncolorize,
    colorize,
    errors,
    splat,
    printf,
    combine
} = format


export function targetFileOutput (filename: string)
{
    return new transports.File({
        filename,
        format: combine(
            ms(),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            uncolorize(),
            splat(),
            printf(
                (c) => `${c.timestamp}${c.ms}: ${c.level} [${c.context}] ${c.message}`,
            ),
        ),
    })
}


export function targetConsoleOutput ()
{
    return new transports.Console({
        format: combine(
            ms(),
            errors({ stack: true }),
            colorize({ all: true }),
            splat(),
            printf(
                (c) => `${c.ms} ${c.level} [${c.context}] ${c.message}`,
            ),
        ),
    })
}


export async function createLogger (level: WinstonLogLevel = 'info', filename: string): Promise<LoggerService>
{
    return WinstonModule.createLogger({
        level,
        transports: [
            targetFileOutput(filename),
            targetConsoleOutput(),
        ],
    })
}
