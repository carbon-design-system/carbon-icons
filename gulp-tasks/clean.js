const gulp = require('gulp');
const del = require('del');

// Clean folders and files
const clean = () => {
  return del([
    '!dist/server.js',
    'dist',
    'index.html',
    'carbon-icons.{json,svg,js}',
  ]);
};

module.exports = clean;
