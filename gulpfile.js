
//プラグイン
var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var sass      = require('gulp-sass');
var plumber   = require('gulp-plumber');

//パス
var path = {
  js: ['js/*.js'],
  css: ['css/*.css']
}

//CSS圧縮
gulp.task('minify-css', function() {
  return gulp.src("*.css")
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'));
});

// scssの監視
gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', ['sass']);
});

// SCSSのコンパイル
gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default',['watch']);
