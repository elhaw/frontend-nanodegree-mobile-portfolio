
 

let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let uglify = require("gulp-uglify");
let minifyCss = require("gulp-minify-css")
gulp.task('minify-js', function () {
    gulp.src('src/js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')); 
});
gulp.task('minify-js-views', function () {
   gulp.src('src/views/js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js')); 
});


gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
gulp.task('minify-html-views', function() {
  return gulp.src('src/views/pizza.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
});
gulp.task('minify-css', function () {
    gulp.src('src/css/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});
gulp.task('minify-css-views', function () {
    gulp.src('src/views/css/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/views/css'));
});
