'use strict';

// REQUIRES
const { readFile, writeFile } = require('fs');
const { promisify } = require('bluebird');
const readFilePromisified = promisify(readFile);
const writeFilePromisified = promisify(writeFile);

// SCRIPTS
const getJSON = require('./shared/getJSON');
const formatJS = require('./shared/formatJS');

/**
 * @param {string} s A hyphnated string.
 * @returns {string} The camelcase string from the given hyphnated string, e.g. `fooBar` from `foo-bar`.
 * @private
 */
function camelCaseFromHyphnated(s) {
  return s.replace(/\-+([A-z])/g, (match, token) => token.toUpperCase());
}

module.exports = () =>
  readFilePromisified(`./dist/carbon-icons.svg`, { encoding: 'utf8' })
    .then(xml => getJSON(xml))
    .then(result => {
      const formatted = formatJS(result, { json: false });
      const stringified = JSON.stringify(formatted, null, 2);
      return Promise.all([
        writeFilePromisified(`./dist/carbon-icons.json`, stringified),
        writeFilePromisified(
          `./dist/carbon-icons.js`,
          `(function(global, factory) {
        typeof define === 'function' && define.amd ? define(factory) :
        typeof module === 'object' && module.exports ? (module.exports = factory()) :
        (global.CarbonIcons = factory());
      })(this, function () {
        var icons = ${stringified};
        function camelCaseFromHyphnated(s) {
          return s.replace(/\-+([A-z])/g, function (match, token) { return token.toUpperCase(); });
        }
        icons.forEach(function (item, i) {
          icons[camelCaseFromHyphnated(item.id)] = icons[i];
        });
        return icons;
      });`
        ),
        writeFilePromisified(
          `./dist/carbon-icons-list.js`,
          formatted
            .map(
              item =>
                `export var ${camelCaseFromHyphnated(
                  item.id
                )} = ${JSON.stringify(item, null, 2)};`
            )
            .join('\n\n')
        ),
        writeFilePromisified(
          `./dist/carbon-icons.es.js`,
          `export * from './carbon-icons-list';
        import * as icons from './carbon-icons-list';
        export default (function () { return Object.keys(icons).map(function (key) { return icons[key]; }); })();`
        ),
      ]);
    });
