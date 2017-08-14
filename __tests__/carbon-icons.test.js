const fs = require("fs");
const chalk = require("chalk");

const carbonIconsSvg = fs
  .readFileSync(`${__dirname}/../dist/carbon-icons.svg`)
  .toString("utf8");
const carbonIconsJson = require("../dist/carbon-icons.json");
const carbonIconsJs = require("../dist/carbon-icons.js");

const name = svg => {
  return svg.getAttribute("id");
};

const warning = (svgName, message) => {
  console.log(
    chalk.yellow(`
    ${svgName}.svg:
    * ${message}
  `)
  );
};

describe("carbon-icons.svg", () => {
  document.body.innerHTML = carbonIconsSvg;
  const symbols = [...document.querySelectorAll("symbol")];

  it("should have fill-rule", () => {
    symbols.forEach(symbol => {
      if (!symbol.hasAttribute("fill-rule")) {
        warning(name(symbol), "fill-rule is missing");
      }
      expect(symbol.hasAttribute("fill-rule")).toBe(true);
    });
  });

  it("should not have circle attrs (cx, cy, r)", () => {
    symbols.forEach(symbol => {
      expect(symbol.hasAttribute("cx")).toBe(false);
      expect(symbol.hasAttribute("cy")).toBe(false);
      expect(symbol.hasAttribute("r")).toBe(false);
    });
  });

  it('should have [fill-rule="evenodd"]', () => {
    symbols.forEach(symbol => {
      if (symbol.getAttribute("fill-rule") !== "evenodd") {
        warning(
          name(symbol),
          `fill-rule is: ${symbol.getAttribute(
            "fill-rule"
          )}\n\t...should be evenodd`
        );
      }
      expect(symbol.getAttribute("fill-rule")).toEqual("evenodd");
    });
  });

  it("should not have duplicate id attributes", () => {
    const sortedList = symbols
      .map(symbol => {
        return symbol.getAttribute("id");
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

describe("carbon-icons.json", () => {
  it("should have an id", () => {
    carbonIconsJson.forEach(object => {
      expect(object.id).not.toEqual("");
    });
  });

  it("should have width greater than 0", () => {
    carbonIconsJson.forEach(object => {
      expect(object.width).not.toEqual("");
      expect(Number(object.width)).toBeGreaterThan(0);
    });
  });

  it("should have height greater than 0", () => {
    carbonIconsJson.forEach(object => {
      expect(object.width).not.toEqual("");
      expect(Number(object.width)).toBeGreaterThan(0);
    });
  });

  it("should have a name", () => {
    carbonIconsJson.forEach(object => {
      expect(object.name).not.toEqual("");
    });
  });

  it("should have a viewBox", () => {
    carbonIconsJson.forEach(object => {
      expect(object.viewBox).not.toEqual("");
    });
  });

  it("each svgData object should have a path value", () => {
    carbonIconsJson.forEach(object => {
      let dataCount = 0;
      dataCount += object.paths.length;
      expect(dataCount).toBeGreaterThan(0);
    });
  });
});

describe("carbon-icons.js", () => {
  it("should be an object", () => {
    expect(typeof carbonIconsJs).toBe("object");
  });

  it("should have length greater than 0", () => {
    expect(carbonIconsJs.length).toBeGreaterThan(0);
  });
});
