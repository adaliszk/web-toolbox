const rules = {}

// Use <></> fragments
rules['react/jsx-fragments'] = ['error', 'syntax']

// Use 4-spaces for indentation
rules['react/jsx-indent'] = ['warn', 4, { indentLogicalExpressions: true }]

// Do not nest too much for each individual template
rules['react/jsx-max-depth'] = ['warn', { max: 4 }]

// Close components when possible
rules['react/self-closing-comp'] = ['error', { component: true, html: true }]

// Always wrap the properties into curly braces, but leave the contents of the components as is
rules['react/jsx-curly-brace-presence'] = ['error', { props: 'never', children: 'never' }]

/**
 * Extend react configuration with my Typescript config
 */
module.exports = {
    extends: ['plugin:react/recommended', '@adaliszk/typescript'],
    plugins: ['react'],
    parserOptions: { project: ['./tsconfig.json'] },
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
    rules,
}
