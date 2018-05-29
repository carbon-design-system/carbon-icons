'use strict';

const chalk = require('chalk');
const fs = require('fs');

const carbonIconsSvg = fs
  .readFileSync(`${__dirname}/../dist/carbon-icons.svg`)
  .toString('utf8');

const warning = (svgName, message) => {
  console.log(
    chalk.yellow(`
    ${svgName}.svg:
    * ${message}
  `)
  );
};

const name = svg => {
  return svg.getAttribute('id');
};

describe('carbon-icons.svg', () => {
  document.body.innerHTML = carbonIconsSvg;
  const symbols = [...document.querySelectorAll('symbol')];

  it('should have fill-rule', () => {
    symbols.forEach(symbol => {
      if (!symbol.hasAttribute('fill-rule')) {
        warning(name(symbol), 'fill-rule is missing');
      }
      expect(symbol.hasAttribute('fill-rule')).toBe(true);
    });
  });

  it('should not have circle attrs (cx, cy, r)', () => {
    symbols.forEach(symbol => {
      expect(symbol.hasAttribute('cx')).toBe(false);
      expect(symbol.hasAttribute('cy')).toBe(false);
      expect(symbol.hasAttribute('r')).toBe(false);
    });
  });

  it('should have [fill-rule="evenodd"]', () => {
    symbols.forEach(symbol => {
      if (symbol.getAttribute('fill-rule') !== 'evenodd') {
        warning(
          name(symbol),
          `fill-rule is: ${symbol.getAttribute('fill-rule')}\n\t...should be evenodd`
        );
      }
      expect(symbol.getAttribute('fill-rule')).toEqual('evenodd');
    });
  });

  it('should not have duplicate id attributes', () => {
    const sortedList = symbols
      .map(symbol => {
        return symbol.getAttribute('id');
      })
      .sort();

    let results = [];

    sortedList.forEach((id, index) => {
      if (sortedList[index] === sortedList[index + 1]) {
        results.push(sortedList[index]);
      }
    });

    if (results.length > 0) {
      console.log(chalk.yellow(`duplicate IDs: [${results}]`));
    }
    expect(results.length).toEqual(0);
  });
});
