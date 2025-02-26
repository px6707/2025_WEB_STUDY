const gulp = require('gulp')
const minify = require('gulp-minify')

gulp.task('build', () => {
    console.log('build start')
  gulp.src('src/**/*.js')
    .pipe(minify())  
    .pipe(gulp.dest('dist'))
})

