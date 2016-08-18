var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var paths = require('../paths');


/**
 * Build the project
 */
gulp.task('build', ['clean'], function () {
    return gulp.src(paths.source)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat(paths.packageName))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.output));
});
