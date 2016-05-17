'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var rsp = require('remove-svg-properties').stream;
var del = require('del');
var deploy = require('gulp-gh-pages');

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

gulp.task('clean', () => {
  return del(['build', 'index.html', 'sprite.{css,svg}']);
});

gulp.task('build', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./build'));
});

gulp.task('sprite-page', function() {
  return gulp.src('build/symbol/*.{html,css}')
    .pipe(rename(function (path) {
      if (path.extname === '.html') {
        path.basename = 'index';
      }
    }))
    .pipe(gulp.dest('.'));
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

// gulp.task('deploy', function() {
//   return gulp.src('./*.{html,svg,css}')
//     .pipe(deploy());
// });

gulp.task('default', function() {
  console.warn(
  `\n[ WARNING ]:
  Use "npm run build".
  This is to ensure gulp tasks run in order.\n`);
});
