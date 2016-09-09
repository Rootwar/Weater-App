'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

//Tasks

gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', function() {
  return gulp.src([
    'app/js/models/*.js',
    'app/js/collections/*.js',
    'app/js/routers/*.js',
    'app/js/views/*.js',
    'app/js/weather.js'
  ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    browser: "google chrome"
  })
});

//Watchs
gulp.task('watch', ['browserSync', 'sass', 'scripts'], function (){
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/*.html', browserSync.reload);
});
