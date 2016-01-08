'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');

// SVG Config
var config= {
  mode: {
    defs: { // Activate the defs mode
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


gulp.task('sprite-page', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./build'));
});

gulp.task('sprite-shortcut', function() {
  return gulp.src('build/defs/svg/sprite.defs.svg')
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['sprite-page', 'sprite-shortcut']);
