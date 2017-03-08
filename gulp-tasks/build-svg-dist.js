const gulp = require('gulp');
const svgBuild = require('./shared/build');

const buildSvgDist = () => {
  svgBuild('svg/*.svg')
    .pipe(gulp.dest('dist'));
}

module.exports = buildSvgDist;
