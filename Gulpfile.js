/* Requires */
const gulp = require('gulp');
const clean = require('./gulp-tasks/clean');
const buildIconsSvg = require('./gulp-tasks/buildIconsSvg');
const copyToRoot = require('./gulp-tasks/copyToRoot');
const xml2json = require('./gulp-tasks/xml2json');

/* Deprecated */
const build = require('./gulp-tasks/build');
const copy = require('./gulp-tasks/copy');

/* Tasks */
gulp.task('clean', clean); // Clean folders and files
gulp.task('buildIconsSvg', buildIconsSvg);  // Build new SVG Sprite (icons.svg)
gulp.task('copyToRoot', copyToRoot); // Create & copy icons.svg and index.html to root directory
gulp.task('xml2json', xml2json);
gulp.task('default', function() {
  console.log('\nUse `npm run build` instead.\n');
});

/* Deprecated */
gulp.task('build', build);  // Build old SVG Sprite (sprite.svg)
gulp.task('copy', copy);   // Create & copy sprite.svg spriteSVGIndex.html to root directory

