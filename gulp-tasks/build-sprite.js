const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const gutil = require('gulp-util');
const svgBuild = require('./shared/build');

let legacy = false;

if (gutil.env.legacy === true) {
  legacy = true;
}

// SVG Config
const config = {
  shape: {
    id: {
      generator: legacy ? "%s" : "icon--%s"
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
  legacy: [
    './svg/**/*.svg',
    '!./svg/*.svg',
    '!./svg/runtime/*.svg',
  ],
  current: 'svg/*.svg',
}

const dest = {
  legacy: './build',
  current: './sprites',
};

const buildSprite = () => {
  svgBuild(legacy ? src.legacy : src.current)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(legacy ? dest.legacy : dest.current));
}

module.exports = buildSprite;
