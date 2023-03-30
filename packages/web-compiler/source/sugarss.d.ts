// noinspection BadExpressionStatementJS

declare module 'sugarss' {
    export const stringify: (ast: unknown) => string
    export const parse: (css: string) => string
}
