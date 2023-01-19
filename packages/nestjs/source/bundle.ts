import tsconfig from '../tsconfig.json'
import QueueEngine from 'bull'
import Winston from 'winston'

export * from '@nestjs/bull'
export * as Nest from '@nestjs/core'
export * from '@nestjs/microservices'
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

export * from './createLogger'
export * from './createContext'
export * from './createServer'
export * from './defineApplication'
export * from './types'

// Export for tsconfig
// noinspection JSUnusedGlobalSymbols
export default tsconfig