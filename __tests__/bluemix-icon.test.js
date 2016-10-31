const fs = require('fs');
const chalk = require('chalk');

const bluemixIconsSvg = fs.readFileSync(`${__dirname}/../bluemix-icons.svg`).toString('utf8');
const bluemixIconsJson = require('../bluemix-icons.json');
// const spriteSvg = fs.readFileSync(`${__dirname}/../sprite.svg`).toString('utf8');

const name = (svg) => {
  return svg.getAttribute('id');
}

const warning = (svgName, message) => {
  console.log(chalk.yellow(`
    ${svgName}.svg:
    * ${message}
  `));
}

describe('bluemix-icons.svg', () => {
  document.body.innerHTML = bluemixIconsSvg;
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

describe('bluemix-icons.json', () => {
  it('should have an id', () => {
    bluemixIconsJson.forEach(object => {
      expect(object.id).not.toEqual('');
    })
  })

  it('should have a name', () => {
    bluemixIconsJson.forEach(object => {
      expect(object.name).not.toEqual('');
    })
  })

  it('should have tags', () => {
    bluemixIconsJson.forEach(object => {
      expect(object.tags).not.toEqual('');
    });
  })

  it('should have empty styles', () => {
    bluemixIconsJson.forEach(object => {
      expect(object.styles).toEqual('');
    });
  })

  it('should have a viewBox', () => {
    bluemixIconsJson.forEach(object => {
      expect(object.viewBox).not.toEqual('');
    })
  })

  it('each svgData object should have a value', () => {
    bluemixIconsJson.forEach(object => {
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
})