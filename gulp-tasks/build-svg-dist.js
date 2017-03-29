const gulp = require('gulp');
const svgBuild = require('./shared/build');

const buildSvgDist = () => {
  svgBuild('src/svg/*.svg')
    .pipe(gulp.dest('dist/svg'));
}

module.exports = buildSvgDist;
