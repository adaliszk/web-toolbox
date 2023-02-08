/**
 * Extend react configuration with my Typescript config
 */
module.exports = {
    extends: [
        'plugin:react/recommended',
        '@adaliszk/typescript',
    ],
    plugins: [
        'react',
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    settings: {
        react: { version: 'detect' },
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            'Hyperlink',
            {
                name: 'Link',
                linkAttribute: 'to',
            },
        ],
    },
}
