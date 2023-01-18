import tsconfig from '../tsconfig.json'
import QueueEngine from 'bull'
import Winston from 'winston'

export * from '@nestjs/bull'
export * as Nest from '@nestjs/core'
export * from '@nestjs/common'
export * from '@nestjs/config'
export * from '@nestjs/event-emitter'
export * from 'cache-manager'
export * from 'cache-manager-redis-store'
export * as ClassTransformer from 'class-transformer'
export * as ClassValidator from 'class-validator'
export * from 'nest-commander'
export * from 'redis'
export * as Rx from 'rxjs'
export * from 'reflect-metadata'

export {
    QueueEngine,
    Winston,
}

export * from './logging'

// Export for tsconfig
// noinspection JSUnusedGlobalSymbols
export default tsconfig