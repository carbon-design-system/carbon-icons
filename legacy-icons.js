const fs = require('fs');
const getJSON = require('./gulp-tasks/scripts/getJSON');
const formatJS = require('./gulp-tasks/scripts/formatJS');

const _json = getJSON(fs.readFileSync('./sprite.svg', { 'encoding': 'utf8' }));
const LEGACY_ICONS = formatJS(_json, {
  json: false,
  legacy: true,
});

module.exports = LEGACY_ICONS;