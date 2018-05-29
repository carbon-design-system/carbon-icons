const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgBuild = require('./shared/build');

// SVG Config
const config = {
  shape: {
    id: {
      generator: 'icon--%s',
    },
  },
  mode: {
    symbol: {
      // Activate the defs mode
      bust: false, // Cache busting
      example: true, // Build a page
    },
  },
};

const buildSprite = () => {
  svgBuild('src/svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./dist/sprites'));
};

module.exports = buildSprite;
