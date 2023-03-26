import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { ServiceInfoController } from './ServiceInfo.controller'

@Module({
    imports: [TerminusModule],
    controllers: [ServiceInfoController],
})
export class ServiceInfoModule {}
