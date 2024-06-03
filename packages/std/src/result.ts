import type { Err, Ok, Result as PlainResult } from "option-t/PlainResult";
import { unwrapErr, unwrapOk, unwrapOrForResult } from "option-t/PlainResult";

export type ResultHelpers<T, E> = {
    unwrap(): T;
    unwrapOr(defaultValue: T | undefined): T | undefined;
    unwrapErr(): E | undefined;
    isOk(): boolean;
    isErr(): boolean;
};

export type Result<T, E> = PlainResult<T, E> & ResultHelpers<T, E>;

export function createOk<T = undefined>(val: T): Ok<T> & ResultHelpers<T, undefined> {
    const result: Ok<T> = {
        ok: true,
        err: null,
        val,
    };
    return {
        ...result,
        isOk: () => true,
        isErr: () => false,
        unwrapOr: <D extends T>(defaultValue: D) => unwrapOrForResult(result, defaultValue),
        unwrapErr: () => undefined,
        unwrap: () => unwrapOk(result),
    };
}

export function createErr<T = undefined, E = Error>(err: E): Err<E> & ResultHelpers<T, E> {
    const result: Err<E> = {
        ok: false,
        val: null,
        err,
    };
    return {
        ...result,
        isOk: () => false,
        isErr: () => true,
        unwrapOr: <D extends T>(defaultValue: D) =>
            unwrapOrForResult(result, defaultValue) as Required<D>,
        unwrapErr: () => err,
        unwrap: () => {
            throw unwrapErr(result);
        },
    };
}
