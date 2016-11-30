const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;
const dom = require('gulp-dom');
const gutil = require('gulp-util');

let legacy = false;

if (gutil.env.legacy === true) {
  legacy = true;
}


// SVG Config
const config = {
  mode: {
    symbol: { // Activate the defs mode
      render: {
        css: true, // CSS output
        scss: true
      },
      prefix: ".svg--%s",
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

const build = () => {
  gulp.src(legacy ? src.legacy : src.current)
    .pipe(rsp.remove({
      properties: ['fill', rsp.PROPS_STROKE]
    }))
    .pipe(dom(function() {
      this.querySelector('svg').setAttribute('fill-rule', 'evenodd');
      return this.querySelector('body').innerHTML
    }, false))
    .pipe(svgo({
      plugins: [{
        removeTitle: true
      }]
    }))
    .pipe(svgSprite(config))
    .pipe(gulp.dest(legacy ? dest.legacy : dest.current));
}

module.exports = build;
