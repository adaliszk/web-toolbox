module.exports = {
    extends: [
        '@adaliszk/typescript',
        'plugin:qwik/recommended',
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
}
