module.exports = {
    entry: ['./src/bem.js'],

    output: {
        filename: 'bem.js',
        path: __dirname + '/dist/',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        root: [
            __dirname + '/src/',
        ]
    }
};
