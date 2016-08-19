var webpackConfig = require('./webpack.config.js');


// Add istanbul-instrumenter to webpack configuration
webpackConfig.module.loaders.push(
    {
        test: /\.js$/,
        exclude: /(node_modules|test)/,
        loader: 'babel-istanbul-loader'
    }
);


// The main configuration
var configuration = function(config) {
    config.set({
        frameworks: [
            'jasmine-jquery',
            'jasmine-ajax',
            'jasmine'
        ],

        files: [
            'test/*.spec.js',
        ],

        preprocessors: {
            'test/*.spec.js': [
                'webpack'
            ],
        },

        coverageReporter: {
            dir: 'build/reports/coverage',
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        reporters: ['spec', 'coverage'],

        browsers: ['Chrome', 'Firefox'],
    });
}


module.exports = configuration;
