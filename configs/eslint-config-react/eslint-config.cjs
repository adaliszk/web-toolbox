const rules = {}

// Use shorthand fragments but only when needed
rules['react/jsx-fragments'] = ['error', 'syntax']
rules['react/jsx-no-useless-fragment'] = ['warn', { allowExpressions: true }]

// Use 4-spaces for indentation and align properties
rules['react/jsx-indent'] = ['warn', 4, { indentLogicalExpressions: true }]
rules['react/jsx-indent-props'] = ['warn', 'first']

// Do not nest too much for each individual template
rules['react/jsx-max-depth'] = ['warn', { max: 4 }]

// Close components when possible
rules['react/self-closing-comp'] = ['error', { component: true, html: true }]

// Always wrap the properties into curly braces, but leave the contents of the components as is
rules['react/jsx-curly-brace-presence'] = ['error', { props: 'always', children: 'never' }]

// Wrap JSX within a parenthesis for most places
rules['react/jsx-wrap-multilines'] = [
    'error',
    {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        prop: 'parens-new-line',
    },
]

// Ignore the need for importing React everywhere
rules['react/react-in-jsx-scope'] = ['off']

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
