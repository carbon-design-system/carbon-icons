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

  const iconMeta = rawJSON.map(symbol => {
    const name = symbol.$.id.split("icon--").join("");
    const viewBox = symbol.$.viewBox || "";
    const width = parseInt(symbol.$.viewBox.split(" ")[2]) || "";
    const height = parseInt(symbol.$.viewBox.split(" ")[3]) || "";
    const paths = symbol.path.map(path => path.$.d);
    const pathsXML = paths
      .map(pathData => `<path d='${pathData}'></path>`)
      .join("");

    const data = {
      id: `icon--${name}`,
      name,
      width,
      height,
      viewBox,
      url: `https://unpkg.com/carbon-icons/dist/svg/${name}.svg`,
      paths,
      svgString: `<svg viewBox='${viewBox}' width='${width}' height='${height}' fill-rule='evenodd'><title>${name}</title>${pathsXML}</svg>`
    };

    return data;
  });

  return this.options.json ? JSON.stringify(iconMeta, null, 2) : iconMeta;
};

module.exports = formatJS;
