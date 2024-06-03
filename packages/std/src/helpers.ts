import "@total-typescript/ts-reset/filter-boolean";

type NonFalsy<T> = T extends false | 0 | "" | null | undefined | 0n ? never : T;

declare global {
    interface Array<T> {
        choose(this: T[]): T;
        pick(this: T[], amount: number): T[];
        sortBy<T>(this: T[], key: keyof T): T[];
        filterOk<T>(this: T[]): NonFalsy<T>[];
    }
    interface String {
        toCapitalize(this: string): Capitalize<string>;
        toCapitalizeWords(this: string): string;
    }
}

/**
 * Choose a random element from the array.
 * Inspired by Python's random.choice.
 */
Array.prototype.choose = function choose<T>(this: T[]) {
    return this[Math.floor(Math.random() * this.length)];
};

/**
 * Pick a random amount of elements from the array.
 */
Array.prototype.pick = function pick<T>(this: T[], amount: number) {
    const pickAmount = Math.min(amount, this.length);
    const available = new Set<number>([...this.keys()]);
    const picked = new Set<T>();

    for (let i = 0; i < pickAmount; i++) {
        const index = Array.from(available).choose();
        available.delete(index);
        picked.add(this[index]);
    }

    return Array.from(picked);
};

/**
 * Sort the array by the specified key.
 */
Array.prototype.sortBy = function sortBy<T>(this: T[], key: keyof T) {
    return this.toSorted((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
};

/**
 * Filter out all the elements that are not Ok.
 */
Array.prototype.filterOk = function filterOk<T>(this: T[]) {
    return this.filter(Boolean);
};

/**
 * Capitalize the first letter of the string
 */
String.prototype.toCapitalize = function toCapitalize(this) {
    return (this.charAt(0).toUpperCase() + this.slice(1)) as Capitalize<typeof this>;
};

/**
 * Capitalize all words within the string
 */
String.prototype.toCapitalizeWords = function toCapitalizeWords(this) {
    return this.split(" ")
        .map((str) => str.toCapitalize())
        .join(" ");
};
