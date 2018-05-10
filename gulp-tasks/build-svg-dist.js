const gulp = require('gulp');
const svgBuild = require('./shared/build');
const dom = require('gulp-dom');

const buildSvgDist = () => {
  svgBuild('src/svg/*.svg')
    .pipe(
      dom(function() {
        this.querySelector('svg').removeAttribute('xmlns');
        return this.querySelector('body').innerHTML;
      }, false)
    )
    .pipe(gulp.dest('dist/svg'));
};

module.exports = buildSvgDist;
