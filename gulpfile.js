var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps=require('gulp-sourcemaps');
var input='sass/**/*.scss';
var output='css/';

gulp.task('sass', function() {
  return gulp.src(input)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error',sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(output));
  });


  gulp.task('watch' , ['sass'] , function(){
  gulp.watch('sass/**/*.scss' , ['sass']);
  })
