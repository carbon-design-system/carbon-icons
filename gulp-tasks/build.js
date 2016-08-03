const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;


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
    },
    css: { // Activate the CSS mode
      render: {
        css: true,
        scss: true
      },
      prefix: ".svg--%s",
      bust: false, // Cache busting
      example: true
    }
  }
};

// Build svg sprite
const build = () => {

  gulp.src([
    'svg/**/*.svg',
    '!svg/runtime/*.svg', // hardcoded colors
  ])
  .pipe(rsp.remove({
    properties: ['fill', rsp.PROPS_STROKE]
  }))
  .pipe(svgo({
    plugins: [{
      removeTitle: true
    }]
  }))
  .pipe(svgSprite(config))
  .pipe(gulp.dest('./build'));
}

module.exports = build;
