import type { NonFalsy } from "./types";
import type { Result } from "./result";

/**
 * Choose a random element from the array.
 * Inspired by Python's random.choice.
 */
export function chooseItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Pick a random amount of elements from the array.
 */
export function pickItems<T>(array: T[], amount = 1): T[] {
    const pickAmount = Math.min(amount, array.length);
    const available = new Set<number>([...array.keys()]);
    const picked = new Set<T>();

    for (let i = 0; i < pickAmount; i++) {
        const index = chooseItem(Array.from(available));
        available.delete(index);
        picked.add(array[index]);
    }

    return Array.from(picked);
}

/**
 * Sort the array by the specified key.
 */
export function sortByKey<T>(array: T[], key: keyof T): T[] {
    return array.toSorted((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

/**
 * Filter out all the elements that are falsy.
 */
export function filterNonFalsy<T>(array: T[]): NonFalsy<T>[] {
    return array.filter(Boolean);
}

/**
 * Filter out all the elements that are NOT OK results.
 */
export function filterOk<T, E extends Result<T, Error>>(array: E[]): E[] {
    return array.filter((result) => result.isOk());
}

/**
 * Capitalize the first letter of the string
 */
export function toCapitalize<T extends string>(str: T): Capitalize<T> {
    return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}

/**
 * Describes a string type that got all of its words capitalized.
 * Neat for type inference.
 */
export type CapitalizeWords<T extends string> = T extends `${infer First} ${infer Rest}`
    ? `${Capitalize<First>} ${CapitalizeWords<Rest>}`
    : Capitalize<T>;

/**
 * Capitalize all words within the string
 */
export function toCapitalizeWords<T extends string>(str: T): CapitalizeWords<T> {
    return str.split(" ").map(toCapitalize).join(" ") as CapitalizeWords<T>;
}
