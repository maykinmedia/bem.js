var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
    tests: 'test/**/*.spec.js',
    source: appRoot + '**/*.js',
    output: 'dist/',
    packageName: pkg.name
};
