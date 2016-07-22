/* Requires */
const gulp = require('gulp');
const copy = require('./gulp-tasks/copy');
const build = require('./gulp-tasks/build');
const clean = require('./gulp-tasks/clean');
const xml2json = require('./gulp-tasks/xml2json');

/* Tasks */
gulp.task('copy', copy);   // Create sprite.svg HTML page
gulp.task('build', build);  // Build SVG Sprite
gulp.task('clean', clean); // Clean folders and files
gulp.task('xml2json', xml2json);

gulp.task('default', function() {
  console.log('\nUse `npm run build` instead.\n');
});
