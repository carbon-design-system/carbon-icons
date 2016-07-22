const gulp = require('gulp');
const del = require('del');

// Clean folders and files
const clean = () => {
  return del(['build', 'index.html', 'sprite.{css,svg}']);
}

module.exports = clean;
