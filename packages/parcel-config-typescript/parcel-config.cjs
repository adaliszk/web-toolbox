module.exports = {
    extends: '@parcel/config-default',
    transformers: {
        '*\\.css': [
            'parcel-transformer-ts-css-modules'
        ]
    }
}
