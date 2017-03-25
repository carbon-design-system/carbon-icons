'use strict';

// REQUIRES
const fs = require('fs');

// SCRIPTS
const getJSON = require('./shared/getJSON');
const formatJS = require('./shared/formatJS');

const json = () => {
  const xml = fs.readFileSync(`./carbon-icons.svg`, { 'encoding': 'utf8' });
  const result = getJSON(xml);
  fs.writeFile(`./carbon-icons.json`, formatJS(result, {json: true }));
  fs.writeFile(`./carbon-icons.js`, `module.exports = ${ formatJS(result, {json: true }) };`);
};

module.exports = json;
