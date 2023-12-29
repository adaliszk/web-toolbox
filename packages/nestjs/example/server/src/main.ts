import { createServer } from '@adaliszk/nestjs'
import { FastifyAdapter, NestFastifyApplication } from '@adaliszk/nestjs-fastify'
import { AppController } from './app.controller'
import { AppService } from './app.service'

async function main()
{
    const app = await createServer<NestFastifyApplication>({
        name: 'nestjs-server-example',
        adapter: new FastifyAdapter(),
        controllers: [AppController],
        providers: [AppService],
        threads: 6,
    })

    app?.listen(3000)
}

main()
