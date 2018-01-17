var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var harp = require('harp');

gulp.task('serve', function () {
    harp.server('.', {
        port: 9000
    }, function () {
        browserSync.init({
            proxy: "localhost:9000"
        });
    });
});

gulp.task('watch', function () {
    gulp.watch("**/*.ejs", browserSync.reload);
    gulp.watch("**/*.json", browserSync.reload);

});

gulp.task('default', ['serve', 'watch']);