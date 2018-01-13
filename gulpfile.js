const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile sass
gulp.task('sass', function() {
  return gulp.src(['src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

//Watch & serve
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './src',
    notify: false
  });

  gulp.watch(['src/js/*.js'], browserSync.reload);
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

//Default
gulp.task('default', ['serve']);
