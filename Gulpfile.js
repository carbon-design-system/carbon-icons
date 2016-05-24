'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var svgo = require('gulp-svgo');

// SVG Config
var config = {
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

// Clean folders and files
gulp.task('clean', () => {
  return del(['build', 'index.html', 'sprite.{css,svg}']);
});

// Build svg sprite
gulp.task('build', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgo())
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./build'));
});

// Create sprite.svg HTML page
gulp.task('rename-move', function() {
  return gulp.src('build/symbol/**/*.{html,css,svg}')
    .pipe(rename(function (path) {
      if (path.extname === '.html') {
        path.basename = 'index';
      }

      if (path.extname === '.svg') {
        path.basename = 'sprite';
        path.dirname = '.'
      }
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
  console.log('\nUse `npm run build` instead.\n');
});
