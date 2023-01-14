import type { Request, Response } from 'express'
import type { Server as WsServer, WebSocket as WsClient } from 'ws'

export interface FunctionContext
{
    request: Request
    response: Response
    // TODO: Add URL template params and query string once https://github.com/fission/environments implemented it
}

export interface FunctionHeader
{
    // TODO: Annotate the possible header fields with a type
    [index: string]: string[] | string
}

export interface FunctionResponse<T>
{
    headers: FunctionHeader
    status: number
    body: T
}

export type ResponseCallback<T> = (statusCode: number, body: T, headers?: FunctionHeader) => void
export type FunctionCallbackHandler<T> = (context?: FunctionContext, callback?: ResponseCallback<T>) => void
export type FunctionResponseHandler<T> = (context?: FunctionContext) => Promise<FunctionResponse<T>>
export type FunctionSocketHandler = (ws: WsServer, clients: Set<WsClient>) => void

export type FunctionHandler<T> = FunctionResponseHandler<T> | FunctionCallbackHandler<T> | FunctionSocketHandler
