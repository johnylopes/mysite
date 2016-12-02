var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
	return gulp.src('./sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
	gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/*").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'watch', 'browser-sync']);
