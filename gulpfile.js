
var gulp = require('gulp');

var wiredep = require('wiredep').stream;

gulp.task('wiredep',function(){
  return gulp.src('src/_*/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('src/'));
});
