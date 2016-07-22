// Create sprite.svg HTML page

const gulp = require('gulp');
const rename = require('gulp-rename');

const copy = () => {
  gulp.src('build/symbol/**/*.{html,css,svg}')
    .pipe(rename(function (path) {
      if (path.extname === '.html') {
        path.basename = 'index';
      }

      if (path.extname === '.svg') {
        path.basename = 'sprite';
        path.dirname = '.'
      }
    }))
    .pipe(gulp.dest('.'));
}

module.exports = copy;
