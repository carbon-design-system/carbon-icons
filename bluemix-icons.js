const fs = require('fs');
const getJSON = require('./gulp-tasks/scripts/getJSON');
const formatJS = require('./gulp-tasks/scripts/formatJS');

const _json = getJSON(fs.readFileSync('./bluemix-icons.svg', { 'encoding': 'utf8' }));
const BLUEMIX_ICONS = formatJS(_json, {
  json: false,
  legacy: false,
});

module.exports = BLUEMIX_ICONS;