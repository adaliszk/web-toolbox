// noinspection JSUnusedGlobalSymbols

import { type ZodSchema, z } from "zod";
import { type Result, createErr, createOk } from "./result";

export const UUID_PATTERN = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i;
export const ULID_PATTERN = /^[0-9a-z]{26}$/i;

/**
 * Supported Custom String formats
 */
export type CustomStringTypes = "ulid" | "ulid-like" | "uuid" | "uuid-like";

/**
 * The stringifiable representation of the custom string that can be type-checked easily
 */
export type CustomString<K extends CustomStringTypes> = string & {
    __type: K;
};

/**
 * Helper type to annotate the parser functions
 */
export type CustomStringParser<T extends CustomStringTypes> = (raw: string) => Result<CustomString<T>, TypeError>;

/**
 * Generate a string parser that runs Zod and wraps the output into a Result object
 */
export function parseCustomString<T extends CustomStringTypes>(
    variant: T,
    schema: ZodSchema,
): (raw: string) => Result<CustomString<T>, TypeError> {
    return (raw: string) => {
        const parsed = schema.safeParse(raw);
        if (parsed.error) {
            return createErr(new TypeError(`"${raw}" is not a valid "${variant}" format!`));
        }

        const value = parsed.data;
        if (value.prototype !== undefined) {
            value.prototype.__type = variant;
        }

        return createOk(parsed.data);
    };
}

/**
 * Check a regular string type against the format of UUID string
 */
export const createUUID: CustomStringParser<"uuid"> = parseCustomString("uuid", z.string().uuid());
export type UUID = CustomString<"uuid">;

/**
 * Check a regular string type against the format of UUID-Like string that only mimics the format
 * This means that the uniqueness has to be maintained by you!
 */
export const createUUIDLike: CustomStringParser<"uuid-like"> = parseCustomString("uuid-like", z.string().regex(UUID_PATTERN));
export type UUIDLike = CustomString<"uuid">;

/**
 * Check a regular string type against the format of ULID string
 */
export const createULID: CustomStringParser<"ulid"> = parseCustomString("ulid", z.string().ulid());
export type ULID = CustomString<"ulid">;

/**
 * Check a regular string type against the format of ULID-Like string that only mimics the format.
 * This means that the lexical and uniqueness has to be maintained by you!
 */
export const createULIDLike: CustomStringParser<"ulid-like"> = parseCustomString("ulid-like", z.string().regex(ULID_PATTERN));
export type ULIDLike = CustomString<"ulid-like">;

/**
 * Type helper to ensure that a type is at least one of the given keys.
 *
 * ```typescript
 * import type { RequireAtLeastOne } from "@adaliszk/std";
 *
 * type Foo = RequireAtLeastOne<{ a?: string; b?: number; c?: boolean }>;
 * //   ^? Foo requires at least one of the keys "a", "b", or "c" to be defined
 * ```
 */
export type RequiredAtLeastOne<T, Keys extends keyof T = keyof T> = Keys extends keyof T
    ? { [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<T, K>> }
    : never;

/**
 * Type helper to bypass `any` declaration in user-land code where the inference
 * will overwrite the TYPE and thus require the user to explicitly type it.
 *
 * ```typescript
 * import type { RequireGeneric } from "@adaliszk/std";
 *
 * // Library-land
 * type Foo<T extends RequireGeneric<string> = { bar: T };
 * type Bar = Foo<any>;
 *
 * // User-land
 * const bar: Bar<string> = { bar: "baz" };
 * //            ^? Generic is required because it can never be undefined
 * ```
 */
export type RequireGeneric<TYPE> = TYPE extends undefined ? never : TYPE;

/**
 * Type helper filter out all falsy values
 * Ported from https://github.com/total-typescript/ts-reset
 */
export type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n
    ? never
    : T;

/**
 * Type helper to declare that a type cannot be undefined but anything else is allowed
 */
export type NotUndefined<T> = T extends undefined ? never : T;
