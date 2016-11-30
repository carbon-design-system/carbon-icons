/* Requires */
const gulp = require('gulp');
const clean = require('./gulp-tasks/clean');
const buildJSON = require('./gulp-tasks/build-json');
const buildSVG = require('./gulp-tasks/build-svg');
const copy = require('./gulp-tasks/copy');

/* Tasks */
gulp.task('clean', clean); // Clean folders and files
gulp.task('build:json', buildJSON);
gulp.task('build:svg', buildSVG);
gulp.task('copy', copy);

gulp.task('default', function() {
  console.log('\nUse `npm run build` instead.\n');
});

