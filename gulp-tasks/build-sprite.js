const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const gutil = require('gulp-util');
const svgBuild = require('./shared/build');

// SVG Config
const config = {
  shape: {
    id: {
      generator: "icon--%s"
    }
  },
  mode: {
    symbol: { // Activate the defs mode
      bust: false, // Cache busting
      example: true // Build a page
    }
  }
};

const src = {
  current: 'svg/*.svg',
}

const dest = {
  current: './sprites',
};

const buildSprite = () => {
  svgBuild(src.current)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(dest.current));
}

module.exports = buildSprite;
