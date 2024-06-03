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
export const createUUID = parseCustomString("uuid", z.string().uuid());
export type UUID = CustomString<"uuid">;

/**
 * Check a regular string type against the format of UUID-Like string that only mimics the format
 * This means that the uniqueness has to be maintained by you!
 */
export const createUUIDLike = parseCustomString("uuid", z.string().regex(UUID_PATTERN));
export type UUIDLike = CustomString<"uuid">;

/**
 * Check a regular string type against the format of ULID string
 */
export const createULID = parseCustomString("ulid", z.string().ulid());
export type ULID = CustomString<"ulid">;

/**
 * Check a regular string type against the format of ULID-Like string that only mimics the format.
 * This means that the lexical and uniqueness has to be maintained by you!
 */
export const createULIDLike = parseCustomString("ulid-like", z.string().regex(ULID_PATTERN));
export type ULIDLike = CustomString<"ulid-like">;
