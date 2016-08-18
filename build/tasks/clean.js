var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');


/**
 * Clean output
 */
gulp.task('clean', function() {
    return gulp.src([paths.output])
        .pipe(vinylPaths(del));
});
