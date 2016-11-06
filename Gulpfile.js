/* Requires */
const gulp = require('gulp');
const clean = require('./gulp-tasks/clean');
const xml2json = require('./gulp-tasks/xml2json');
const build = require('./gulp-tasks/build');
const copy = require('./gulp-tasks/copy');

/* Tasks */
gulp.task('clean', clean); // Clean folders and files
gulp.task('build', build) // Build task for svg sprites: bluemix-icons.svg (default), sprite.svg (--legacy)
gulp.task('xml2json', xml2json);
gulp.task('copy', copy);   // Create & copy sprite.svg spriteSVGIndex.html to root directory
gulp.task('default', function() {
  console.log('\nUse `npm run build` instead.\n');
});

