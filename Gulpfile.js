/* Requires */
const gulp = require('gulp');
const clean = require('./gulp-tasks/clean');
const buildData = require('./gulp-tasks/build-data');
const buildSprite = require('./gulp-tasks/build-sprite');
const buildSvgDist = require('./gulp-tasks/build-svg-dist');
const copy = require('./gulp-tasks/copy');

/* Tasks */
gulp.task('clean', clean); // Clean folders and files
gulp.task('build:data', buildData);
gulp.task('build:svgSprite', buildSprite);
gulp.task('build:svgDist', buildSvgDist);
gulp.task('copy', copy);
gulp.task('build', ['build:svgSprite', 'build:svgDist']);

gulp.task('default', function() {
  console.log('\nUse `npm run build` instead.\n');
});
