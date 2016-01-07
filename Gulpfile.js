'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var concat = require('gulp-concat');
var svg = require('gulp-image-data-uri');
var svgSprite = require('gulp-svg-sprite');

gulp.task('icons', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svg({
      customClass: function(className) {
        var customClass = 'icon--' + className;
        return customClass;
      },

    template: {
        file: 'node_modules/gulp-image-data-uri/template.css'
    }
    } ))
    .pipe(concat('_icons.scss'))
    .pipe(gulp.dest('.'));
});

// SVG Config
var config                  = {
  mode                : {
    defs             : {     // Activate the «css» mode
    render      : {
      css     : true,  // Activate CSS output (with default options)
      scss     : true,
    },
    bust    : true,                   // Cache busting (mode dependent default value)
    example: true
    }
  }
};


gulp.task('sprite', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./sprites'));
});
