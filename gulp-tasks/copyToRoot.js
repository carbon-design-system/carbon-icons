// Copy icons.svg and index.html to root directory

const gulp = require('gulp');
const rename = require('gulp-rename');

const copyToRoot = () => {
  gulp.src('sprites/symbol/**/*.{html,css,svg}')
    .pipe(rename(function (path) {
      if (path.extname === '.html') {
        path.basename = 'index';
      }

      if (path.extname === '.svg') {
        path.basename = 'bluemix-icons';
        path.dirname = '.'
      }
    }))
    .pipe(gulp.dest('.'));
}

module.exports = copyToRoot;
