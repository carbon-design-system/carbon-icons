const fs = require('fs');
const chalk = require('chalk');

const spriteSvg = fs.readFileSync(`${__dirname}/../sprite.svg`).toString('utf8');
const bluemixIconsSvg = fs.readFileSync(`${__dirname}/../bluemix-icons.svg`).toString('utf8');
const iconJson = require('../icons.json');
const legacyIconsJs = require('../legacy-icons.js');

const name = (svg) => {
  return svg.getAttribute('id');
}

const warning = (svgName, message) => {
  console.log(chalk.yellow(`
    ${svgName}.svg:
    * ${message}
  `));
}

describe('both SVG files', () => {
  const bothSvg = spriteSvg + bluemixIconsSvg;
  document.body.innerHTML = bothSvg;
  const symbols = [...document.querySelectorAll('symbol')];

  it('should not have duplicate IDs when both svg files are used', () => {
    const sortedList = symbols.map(symbol => {
      return symbol.getAttribute('id');
    }).sort();

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
  })
})

describe('sprite.svg', () => {
  document.body.innerHTML = spriteSvg;
  const symbols = [...document.querySelectorAll('symbol')];

  it('should have fill-rule', () => {
    symbols.forEach(symbol => {
      if (!symbol.hasAttribute('fill-rule')) {
        warning(name(symbol), 'fill-rule is missing');
      }
      expect(symbol.hasAttribute('fill-rule')).toBe(true);
    });
  });

  it('should have [fill-rule="evenodd"]', () => {
    symbols.forEach(symbol => {
      if (symbol.getAttribute('fill-rule') !== 'evenodd') {
        warning(
          name(symbol),
          `fill-rule is: ${symbol.getAttribute('fill-rule')}\n\t...should be evenodd`);
      }
      expect(symbol.getAttribute('fill-rule')).toEqual('evenodd');
    });
  });

  it('should not have duplicate id attributes', () => {
    const sortedList = symbols.map(symbol => {
      return symbol.getAttribute('id');
    }).sort();

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

describe('icons.json', () => {
  it('should have an id', () => {
    iconJson.forEach(object => {
      expect(object.id).not.toEqual('');
    })
  })

  it('should have a name', () => {
    iconJson.forEach(object => {
      expect(object.name).not.toEqual('');
    })
  })

  it('should have width greater than 0', () => {
    iconJson.forEach(object => {
      expect(object.width).not.toEqual('');
      expect(Number(object.width)).toBeGreaterThan(0);
    })
  })

  it('should have height greater than 0', () => {
    iconJson.forEach(object => {
      expect(object.width).not.toEqual('');
      expect(Number(object.width)).toBeGreaterThan(0);
    })
  })

  it('should have tags', () => {
    iconJson.forEach(object => {
      expect(object.tags).not.toEqual('');
    });
  })

  it('should have a viewBox', () => {
    iconJson.forEach(object => {
      expect(object.viewBox).not.toEqual('');
    })
  })

  it('should have empty styles', () => {
    iconJson.forEach(object => {
      expect(object.styles.toString()).toEqual('');
    });
  })

  it('each svgData object should have a value', () => {
    iconJson.forEach(object => {
      let dataCount = 0;
      dataCount += object.svgData.circles.length;
      dataCount += object.svgData.ellipses.length;
      dataCount += object.svgData.paths.length;
      dataCount += object.svgData.polygons.length;
      dataCount += object.svgData.polylines.length;
      dataCount += object.svgData.rects.length;
      expect(dataCount).toBeGreaterThan(0);
    });
  });

  it('should not have duplicate name values', () => {
    const sortedList = iconJson.map(object => {
      return object.name;
    }).sort();

    let results = [];

    sortedList.forEach((name, index) => {
      if (sortedList[index] === sortedList[index + 1]) {
        results.push(sortedList[index]);
      }
    });

    if (results.length > 0) {
      console.log(chalk.yellow(`duplicate names: [${results}]`));
    }
    expect(results.length).toEqual(0);
  })
});

describe('legacy-icons.js', () => {
  it('should be an object', () => {
    expect(typeof(legacyIconsJs)).toBe('object');
  });

  it('should have length greater than 0', () => {
    expect(legacyIconsJs.length).toBeGreaterThan(0);
  });
});
