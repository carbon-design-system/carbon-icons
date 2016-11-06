// Create sprite.svg HTML page

const gulp = require('gulp');
const rename = require('gulp-rename');
const gutil = require('gulp-util');

let legacy = false;

const src = {
  legacy: 'build/symbol/**/*.{html,css,svg}',
  current: 'sprites/symbol/**/*.{html,css,svg}',
}

const copy = () => {
  if (gutil.env.legacy === true) {
    legacy = true;
    console.log('[>>> [LEGACY] Copy: moving SVG and HTML files to root]');
  } else {
    console.log('[>>> Copy: moving SVG and HTML files to root]');
  }

  gulp.src(legacy ? src.legacy : src.current)
    .pipe(rename(function (path) {
      if (path.extname === '.html') {
        path.basename = legacy ? 'spriteSVGIndex' : 'index';
      }

      if (path.extname === '.svg') {
        path.basename = legacy ? 'sprite' : 'bluemix-icons';
        path.dirname = '.'
      }
    }))
    .pipe(gulp.dest('.'));
}

module.exports = copy;
