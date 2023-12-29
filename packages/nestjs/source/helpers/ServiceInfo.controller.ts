import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { RedisOptions, Transport } from '@nestjs/microservices'
import { HealthCheck, HealthCheckService, MicroserviceHealthIndicator } from '@nestjs/terminus'
import { HealthCheckFn } from '../types'

@Controller()
export class ServiceInfoController
{
    constructor (
        private config: ConfigService,
        private health: HealthCheckService,
        private service: MicroserviceHealthIndicator,
    )
    {}

    @Get('/')
    serviceInfo ()
    {
        const name = this.config.get('appName')
        const version = this.config.get('appVersion')
        return { name, version }
    }

    @Get('/health')
    @HealthCheck()
    check ()
    {
        const healthChecks: HealthCheckFn[] = []

        const redis = this.config.get('redis')
        if (redis?.enabled ?? false)
        {
            healthChecks.push(() =>
                this.service.pingCheck('redis', {
                    transport: Transport.REDIS,
                    options: redis,
                })
            )
        }

        return this.health.check([
            ...(this.config.get('healthChecks') ?? []),
            ...healthChecks,
        ])
    }
}
