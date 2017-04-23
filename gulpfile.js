var gulp = require("gulp"),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./dist/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe((autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'iOS 7'])))
    .pipe(gulp.dest('./app/css'));
});

gulp.task("watch", ['sass'], function(){
	gulp.watch('./dist/sass/**/*.scss', ['sass']);

});