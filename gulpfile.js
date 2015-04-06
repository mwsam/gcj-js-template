'use strict';

var path = require('path');

var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('default', function () {
  return gulp.src(['index.js', 'package.json'])
    .pipe(zip(path.basename(__dirname) + '.zip'))
    .pipe(gulp.dest('.'));
});
