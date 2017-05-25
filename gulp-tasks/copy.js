const gulp = require('gulp');
const rename = require('gulp-rename');

function copySvg() {
  return gulp
    .src('dist/sprites/symbol/**/*.svg')
    .pipe(
      rename(function(path) {
        if (path.extname === '.svg') {
          path.basename = 'carbon-icons';
          path.dirname = '.';
        }
      })
    )
    .pipe(gulp.dest('dist'));
}

function copyHtml() {
  return gulp
    .src('dist/sprites/symbol/**/*.{html,css}')
    .pipe(
      rename(function(path) {
        if (path.extname === '.html') {
          path.basename = 'index';
        }
      })
    )
    .pipe(gulp.dest('dist'));
}

const copy = () => {
  copySvg();
  copyHtml();
};

module.exports = copy;
