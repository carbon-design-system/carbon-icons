const fs = require('fs');
const getJSON = require('./scripts/getJSON');
const formatJS = require('./scripts/formatJS');

const _json = getJSON(fs.readFileSync('./sprite.svg', { 'encoding': 'utf8' }));
const LEGACY_ICONS = formatJS(_json, {
  json: false,
  legacy: true,
});

module.exports = LEGACY_ICONS;