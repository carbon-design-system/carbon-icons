'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var rsp = require('remove-svg-properties').stream;

// SVG Config
var config= {
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


gulp.task('sprite-page', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./build'));
});

// renames a sprite shortcut for redundancy
// removing fills and namespaces
gulp.task('sprite-shortcut', function() {
  return gulp.src('build/symbol/svg/sprite.symbol.svg')
    .pipe(rename('sprite.svg'))
    .pipe(rsp.remove({
        properties: [rsp.PROPS_FILL],
        namespaces: ['i', 'sketch', 'inkscape']
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['sprite-page', 'sprite-shortcut']);
