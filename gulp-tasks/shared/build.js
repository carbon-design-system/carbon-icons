const gulp = require('gulp');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;
const dom = require('gulp-dom');

const svgBuild = (src) => {
  return gulp.src(src)
    .pipe(rsp.remove({
      properties: ['fill', rsp.PROPS_STROKE]
    }))
    .pipe(dom(function() {
      this.querySelector('svg').setAttribute('fill-rule', 'evenodd');
      return this.querySelector('body').innerHTML
    }, false))
    .pipe(svgo({
      plugins: [{
        removeTitle: true,
      }]
    }));
}

module.exports = svgBuild;
