import { Request } from 'express'

export interface FunctionContext
{
    request: Request
}

export interface FunctionResponse
{
    status: number
    body: object | string | number
}

export type ResponseCallback = (statusCode: number, body: object | string | number) => void

export type FunctionHandler = (context: FunctionContext, callback?: ResponseCallback) => Promise<FunctionResponse>
