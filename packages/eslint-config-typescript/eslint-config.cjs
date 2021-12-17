// region Configuration

const currentParser = '@typescript-eslint/parser'

const pluginList = [
    '@typescript-eslint',
]

const extendsList = [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'standard',
]

const ignorePatternList = [
    '**/node_modules/*',
    '**/temp/*',
    '**/dist/*',
]

// endregion

// region Rules

const ruleMap = {}

// Use 4 spaces for better readability by having more space between the attention lines,
// and having less space before wrapping thus forcing a cleaner code
ruleMap['indent'] = ['error', 4]

// Use Allman-style for better readability by separating statements and declarations from the logic body
ruleMap['brace-style'] = ['error', 'allman']
ruleMap['function-call-argument-newline'] = ['warn', 'consistent']

// Be consistent with Curly braces, and once there is too much in one line, then break it to multiline
ruleMap['object-curly-newline'] = [
    'warn',
    {
        ObjectPattern: { consistent: true, multiline: true, minProperties: 3 },
        ObjectExpression: { consistent: true, multiline: true, minProperties: 4 },
        ImportDeclaration: { consistent: true, minProperties: 6 },
        ExportDeclaration: { consistent: true, multiline: true, minProperties: 4 },
    },
]

// Have 2 empty lines between top level blocks just like in PEP8
ruleMap['padding-line-between-statements'] = [
    'warn',
    { blankLine: 'always', prev: 'class', next: 'block-like' },
    { blankLine: 'always', prev: 'export', next: 'block-like' },
    { blankLine: 'always', prev: 'cjs-export', next: 'block-like' },
    { blankLine: 'always', prev: 'block', next: 'block-like' },
]

ruleMap['no-multiple-empty-lines'] = [
    'warn',
    { max: 2 },
]

// Always use dangling comma when multiple is used
ruleMap['comma-dangle'] = [
    'warn',
    {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        functions: 'always-multiline',
        imports: 'never',
        exports: 'never',
    },
]

// When using Reflection solutions the types do need to be defined even if they could be inferred
ruleMap['@typescript-eslint/no-inferrable-types'] = ['off']

// endregion

module.exports = {
    parser: currentParser,
    plugins: pluginList,
    extends: extendsList,
    ignorePatterns: ignorePatternList,
    rules: ruleMap,
}
