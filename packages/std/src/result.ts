import type { Err, Ok, Result as PlainResult } from "option-t/PlainResult";
import { unwrapErr, unwrapOk, unwrapOrForResult } from "option-t/PlainResult";

type ResultHelpers<T, E> = {
    unwrap(): T;
    unwrapOr(defaultValue: T | undefined): T | undefined;
    unwrapErr(): E | undefined;
    isOk(): boolean;
    isErr(): boolean;
};

/**
 * Custom Result type that is more aligned with Rust's Result type by
 * having a few helper functions to unwrap the value or error.
 *
 * Under the hood, it is using the `option-t` library,
 * and is fully compatible with it.
 */
export type Result<T, E> = PlainResult<T, E> & ResultHelpers<T, E>;

/**
 * Creates an OK result with a few helper actions to unwrap the value
 */
export function createOk<T = unknown>(val: T): Ok<T> & ResultHelpers<T, undefined> {
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

/**
 * Creates an ERR result with a few helper actions to unwrap the error
 */
export function createErr<T = unknown, E = Error>(err: E): Err<E> & ResultHelpers<T, E> {
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
