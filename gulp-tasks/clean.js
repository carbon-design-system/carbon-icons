const gulp = require('gulp');
const del = require('del');

// Clean folders and files
const clean = () => {
  return del([
    'dist', 'build', 'index.html', 'sprite.{css,svg}', 'icons.json', `legacy-icons.js`,
    'sprites', 'spriteSVGIndex.html', 'bluemix-icons.{json,svg,js}'
  ]);
}

module.exports = clean;
