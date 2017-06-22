const gulp = require('gulp');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;
const dom = require('gulp-dom');
const xmlEdit = require('gulp-edit-xml');
const toPath = require('svg-points').toPath;

const svgBuild = src => {
  return gulp
    .src(src)
    .pipe(
      rsp.remove({
        properties: ['fill', rsp.PROPS_STROKE],
      })
    )
    .pipe(
      dom(function() {
        this.querySelector('svg').setAttribute('fill-rule', 'evenodd');
        return this.querySelector('body').innerHTML;
      }, false)
    )
    .pipe(
      svgo({
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: [{ removeTitle: true }],
      })
    )
    .pipe(
      xmlEdit(xml => {
        if (xml.svg.circle !== undefined) {
          let circles = xml.svg.circle.map(obj => Object.assign(obj.$, { type: 'circle' }));

          circles.map(circle => {
            console.log(toPath(circle));
            return toPath(circle);
          });
        }
        return xml;
      })
    );
};

module.exports = svgBuild;
