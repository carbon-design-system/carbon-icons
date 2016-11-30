'use strict';

// REQUIRES
const fs = require('fs');
const gutil = require('gulp-util');

// SCRIPTS
const getJSON = require('../scripts/getJSON');
const formatJS = require('../scripts/formatJS');

const jsonLegacy = () => {
  const xml = fs.readFileSync(`./sprite.svg`, { 'encoding': 'utf8' });
  const result = getJSON(xml);
  fs.writeFile(`./icons.json`, formatJS(result, {json: true, legacy: true }));
  fs.writeFile(`./legacy-icons.js`, `module.exports = ${ formatJS(result, {json: true, legacy: true }) };`);
};

const json = () => {
  const xml = fs.readFileSync(`./bluemix-icons.svg`, { 'encoding': 'utf8' });
  const result = getJSON(xml);
  fs.writeFile(`./bluemix-icons.json`, formatJS(result, {json: true, legacy: false }));
  fs.writeFile(`./bluemix-icons.js`, `module.exports = ${ formatJS(result, {json: true, legacy: false }) };`);
};

module.exports = (gutil.env.legacy === true) ? jsonLegacy : json;
