"use strict"
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
gulp.task('watch', ['browserSync'], function() {
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/components/**/*.js', browserSync.reload);
    gulp.watch('app/components/**/*.html', browserSync.reload);
    gulp.watch('app/components/*.js', browserSync.reload);
    gulp.watch('app/services/*.js', browserSync.reload);
    gulp.watch('app/libs/*.js', browserSync.reload);

});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});
