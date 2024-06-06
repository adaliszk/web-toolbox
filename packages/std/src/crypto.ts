import { createHash } from "node:crypto";
import { type ULIDLike, type ULID, createULIDLike, createULID } from "./types";
import { type Result, createErr } from "./result";
import { ulid as generateULID } from "ulid";
import { z } from "zod";

/**
 * Parses an MD5 hash out of the provided input
 */
export function md5(str: string): string {
    return createHash("md5").update(str).digest("hex").toString();
}

/**
 * Parses an ULID-like string from the provided input or generates a valid ULID if none is provided
 * The lexical nature of ULID is lost when using an input string; however, this is useful for
 * generating ULID-like strings from other sources to keep the visual similarity of ULIDs.
 */
export function ulid(hash?: string): Result<ULID | ULIDLike, TypeError> {
    if (!(z.string().min(26).safeParse(hash).success)) {
        return createErr(new TypeError("The provided hash input needs to be at least 26 characters!"));
    }
    return hash ? createULIDLike(hash.slice(-26)) : createULID(generateULID());
}
