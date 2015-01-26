
var gulp = require('gulp');

var wiredep     = require('wiredep').stream;
var browserSync = require('browser-sync');

var srcDir = __dirname + '/src/';

gulp.task('wiredep',function(){
  return gulp.src(srcDir + '_*/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest(srcDir));
});

gulp.task('pages', function(){
  
});

gulp.task('dev', function(){
  browserSync({ server: { baseDir: srcDir }});
});