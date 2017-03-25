const gulp = require('gulp');
const del = require('del');

// Clean folders and files
const clean = () => {
  return del([
    'dist',
    'index.html',
    'sprites',
    'carbon-icons.{json,svg,js}',
  ]);
}

module.exports = clean;
