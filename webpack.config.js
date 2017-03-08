var paths = require('./build/paths');
var webpack = require('webpack');


module.exports = {
    entry: './src/' + paths.packageName,

    output: {
        filename: paths.packageName,
        libraryTarget: 'umd',
        path: __dirname + '/' + paths.output,
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

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
