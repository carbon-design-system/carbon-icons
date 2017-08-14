/**
 * formatJS(rawJSON)
 * Formats JSON and returns JSON string
 * @param rawJSON: requires return result from getJSON()
 */

const formatJS = (rawJSON, options = {}) => {
  this.options = Object.assign(
    {
      json: true
    },
    options
  );

  // iconMeta - returns new JSON Array of icon Objects
  const iconMeta = rawJSON.map(symbol => {
    // For each "symbol.svg.symbol", create new Objects with these keys/values
    // console.log(JSON.stringify(symbol.path.map(path => path.$.d), null, 2));
    // console.log(JSON.stringify(symbol, null, 2));

    const name = symbol.$.id.split("icon--").join("");
    const viewBox = symbol.$.viewBox || "";
    const width = parseInt(symbol.$.viewBox.split(" ")[2]) || "";
    const height = parseInt(symbol.$.viewBox.split(" ")[3]) || "";
    const paths = symbol.path.map(path => path.$.d);
    const pathsXML = paths
      .map(pathData => `<path d='${pathData}'></path>`)
      .join("");

    const data = {
      name,
      viewBox,
      width,
      height,
      url: `https://unpkg.com/carbon-icons/dist/svg/${name}.svg`,
      paths,
      svgString: `<svg viewBox='${viewBox}' width='${width}' height='${height}' fill-rule='evenodd'><title>${name}</title>${pathsXML}</svg>`
    };

    return data;
  });

  return this.options.json ? JSON.stringify(iconMeta, null, 2) : iconMeta;
};

module.exports = formatJS;
