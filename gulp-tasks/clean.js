const gulp = require('gulp');
const del = require('del');

// Clean folders and files
const clean = () => {
  return del([
    'build', 'index.html', 'sprite.{css,svg}', 'icons.json',
    'sprites', 'spriteSVGIndex.html', 'bluemix-icons.{json,svg}'
  ]);
}

module.exports = clean;
