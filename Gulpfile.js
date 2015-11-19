'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var concat = require('gulp-concat');
var svg = require('gulp-image-data-uri');

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
