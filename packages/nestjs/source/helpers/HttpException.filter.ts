import { ArgumentsHost, Catch, ExceptionFilter, HttpException, LoggerService } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'

@Catch(Error)
@Catch(HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter implements ExceptionFilter
{
    constructor (private readonly log: LoggerService)
    {
        super()
    }

    catch (error: HttpException | Error, host: ArgumentsHost)
    {
        const response = host.switchToHttp().getResponse()

        const status = error instanceof HttpException ? error.getStatus() : 500
        const code = error.constructor.name
        const message = error.message

        const context = error.stack?.match('at (.*) \\(')?.[1] ?? 'Unknown'

        const severity = status >= 500 ? 'error' : status < 400 ? 'log' : 'warn'
        this.log[severity](`<<<[${context}] ${code}: ${message}`, error.cause ?? error)

        return response.status(status).send(error)
    }
}
