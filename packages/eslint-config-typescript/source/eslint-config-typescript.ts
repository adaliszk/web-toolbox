export default {
    extends: [
        'plugin:@eslint-config-typescript/eslint-recommended',
        'plugin:@eslint-config-typescript/recommended',
        'eslint:recommended',
        'standard'
    ],
    ignorePatterns: [
        '**/node_modules/*',
        '**/temp/*',
        '**/dist/*'
    ],
    rules: {
        'indent': [
            'error',
            4
        ],
        'brace-style': [
            'error',
            'allman'
        ],
        'object-curly-newline': [
            'warn',
            {
                'ImportDeclaration': {
                    'consistent': true,
                    'minProperties': 6
                },
                'ObjectPattern': {
                    'multiline': true,
                    'consistent': true,
                    'minProperties': 2
                },
                'ObjectExpression': {
                    'multiline': true,
                    'consistent': true,
                    'minProperties': 4
                },
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 4
                }
            }
        ],
        'padding-line-between-statements': [
            'warn',
            {
                'prev': 'class',
                'blankLine': 'always',
                'next': 'block-like'
            }
        ],
        'function-call-argument-newline': [
            'warn',
            'consistent'
        ],
        '@typescript-eslint/no-explicit-any': [
            'off'
        ],
        '@typescript-eslint/no-inferrable-types': [
            'off'
        ]
    }
}
