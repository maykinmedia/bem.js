var gulp = require('gulp');
var jshint = require('gulp-jshint');
var paths = require('../paths');


/**
 * Lint sources and tests
 */
gulp.task('lint', function() {
    return gulp.src([paths.source, paths.tests])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
