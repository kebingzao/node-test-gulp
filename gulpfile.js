'use strict';

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
gulp.task('lint', function() {
    return gulp.src(['add.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});