'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

// SVG Config
var config= {
  mode: {
    defs: { // Activate the defs mode
      render: {
        css: true, // CSS output
        scss: true,
        prefix: "svg--%s",
      },
      bust: true, // Cache busting
      example: true // Build a page
    },
    css: { // Activate the CSS mode
      render: {
        css: true,
        scss: true,
        prefix: "svg--%s",
      },
      bust: true,
      example: true
    }
  }
};


gulp.task('sprite', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./sprites'));
});
