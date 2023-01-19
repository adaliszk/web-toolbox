import type { AppConfig } from './types'
import { CacheModule, DynamicModule, INestApplication, INestMicroservice, Module, ValidationPipe } from '@nestjs/common'
import type { ClientOpts, RedisOptions } from 'redis'
import { ConfigModule } from '@nestjs/config'
import * as redisCache from 'cache-manager-redis-store'
import { BullModule } from '@nestjs/bull'
import { EventEmitterModule } from '@nestjs/event-emitter'


export async function defineApplication (config?: AppConfig)
{
    const redisConfig: RedisOptions = {
        host: config?.redis?.host ?? '127.0.0.1',
        port: config?.redis?.port ?? 6379,
        auth_pass: config?.redis?.token ?? '',
    }

    const configurableImports: DynamicModule[] = []

    if (config?.queues?.enabled)
    {
        configurableImports.push(BullModule.forRoot({
            redis: config?.redis ? redisConfig : null,
        }))
    }

    if (config?.eventEmitter?.enabled)
        configurableImports.push(EventEmitterModule.forRoot({
            wildcard: config?.eventEmitter?.wildcard ?? true,
            newListener: config?.eventEmitter?.newListener ?? true,
            removeListener: config?.eventEmitter?.removeListener ?? true,
            maxListeners: config?.eventEmitter?.maxListeners ?? 32,
        }))

    @Module({
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
            }),
            CacheModule.register<ClientOpts>({
                store: redisCache,
                ttl: config?.redis?.ttl ?? 300,
                isGlobal: true,
            }),
            ...(config?.imports ?? []),
            ...configurableImports,
        ],
        controllers: config?.controllers ?? [],
        providers: config?.providers ?? [],
        exports: config?.exports ?? [],
    })
    class Application
    {
    }

    return Application
}

export async function configureApplication (app: INestApplication | INestMicroservice, config?: AppConfig)
{
    app.useGlobalPipes(new ValidationPipe())
}