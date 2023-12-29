import { BullModule } from '@nestjs/bull'
import { Logger as CommonLogger, Module, ValidationPipe } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule } from '@nestjs/config'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { redisStore } from 'cache-manager-redis-yet'

import { Logger } from './createLogger'
import { HttpExceptionFilter, ServiceInfoModule } from './helpers'

import type { DynamicModule, INestApplication, INestMicroservice, LoggerService } from '@nestjs/common'
import type { AppConfig } from './types'

export async function defineApplication(logger: () => LoggerService, config?: AppConfig)
{
    const configurableImports: DynamicModule[] = []

    const redisConfig = {
        host: config?.redis?.host ?? '127.0.0.1',
        port: config?.redis?.port ?? 6379,
        username: config?.redis?.username ?? undefined,
        password: config?.redis?.password ?? undefined,
        database: config?.redis?.db ?? 0,
    }

    if (config?.redis?.enabled)
    {
        configurableImports.push(CacheModule.registerAsync({
            useFactory: async () =>
            {
                const store = await redisStore({
                    ...redisConfig,
                    ttl: 5000,
                })
                return { store: () => store }
            },
            isGlobal: true,
        }))
    }

    if (config?.queues?.enabled)
    {
        configurableImports.push(BullModule.forRoot({ ...(config?.redis?.enabled ? { redis: redisConfig } : {}) }))
    }

    if (config?.eventEmitter?.enabled)
    {
        configurableImports.push(EventEmitterModule.forRoot({
            wildcard: config?.eventEmitter?.wildcard ?? true,
            newListener: config?.eventEmitter?.newListener ?? true,
            removeListener: config?.eventEmitter?.removeListener ?? true,
            maxListeners: config?.eventEmitter?.maxListeners ?? 32,
        }))
    }

    const configuration = () => ({
        appName: config?.name ?? 'NestJS Application',
        appVersion: config?.version,
        redis: config?.redis ? redisConfig : undefined,
        eventEmitter: config?.eventEmitter?.enabled ?? false,
        queues: config?.queues?.enabled ?? false,
    })

    @Module({
        imports: [
            ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
            ...configurableImports,
            ServiceInfoModule,
            ...(config?.imports ?? []),
        ],
        providers: [
            { provide: CommonLogger, useFactory: logger },
            { provide: Logger, useFactory: logger },
            ...(config?.providers ?? []),
        ],
        controllers: config?.controllers ?? [],
        exports: config?.exports ?? [],
    })
    class Server
    {}

    return Server
}

export async function configureApplication(
    app: INestApplication | INestMicroservice,
    logger: LoggerService,
    config?: AppConfig,
)
{
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalPipes(...(config?.globalPipes ?? []))
    app.useGlobalFilters(...[
        ...(config?.globalFilters ?? []),
        new HttpExceptionFilter(logger),
    ])
    app.useGlobalInterceptors(...(config?.globalInterceptors ?? []))
    app.useGlobalGuards(...(config?.globalGuards ?? []))
}
