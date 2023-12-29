import { Controller, Get, Logger } from '@adaliszk/nestjs'
import { AppService } from './app.service'

@Controller()
export class AppController
{
    constructor (
        private readonly appService: AppService,
        private readonly log: Logger,
    )
    {
        this.log.setContext(this.constructor.name)
    }

    @Get('error')
    sendError (): Error
    {
        throw new Error('My custom error message')
    }

    @Get('hello')
    sayHello (): string
    {
        this.log.info('Hello there!', { who: 'General Kenobi' })
        return this.appService.getHello()
    }
}
