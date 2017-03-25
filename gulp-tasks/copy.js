const gulp = require('gulp');
const rename = require('gulp-rename');
const gutil = require('gulp-util');

const src = {
  current: 'sprites/symbol/**/*.{html,css,svg}',
}

const copy = () => {
  gulp.src(src.current)
    .pipe(rename(function (path) {
      if (path.extname === '.html') {
        path.basename = 'index';
      }

      if (path.extname === '.svg') {
        path.basename = 'carbon-icons';
        path.dirname = '.'
      }
    }))
    .pipe(gulp.dest('.'));
}

module.exports = copy;
