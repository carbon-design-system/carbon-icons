/**
 * formatJS(rawJSON)
 * Formats JSON and returns JSON string
 * @param rawJSON: requires return result from getJSON()
 */

const formatJS = (rawJSON, options = {}) => {
  this.options = Object.assign({
    json: true,
    legacy: false,
  }, options);

  const json = this.options.json;
  const legacy = this.options.legacy;

  // iconMeta - returns new JSON Array of icon Objects
  const iconMeta = (rawJSON).map(symbol => {
    // Split `id` key into an Array - [{{tags}}, '--', {{name}}]
    const splitId = symbol.$.id.split('--');

    let width = symbol.$.viewBox.split(' ')[2];
    let height = symbol.$.viewBox.split(' ')[3];

    // For each "symbol.svg.symbol", create new Objects with these keys/values
    const data = {
      id: symbol.$.id,
      name: legacy ? splitId[1] : symbol.$.id,
      tags: legacy ? splitId[0] : symbol.$.id,
      styles: symbol.style ? symbol.style : "",
      viewBox: symbol.$.viewBox || "",
      width: width || "",
      height: height || "",
      svgData: {
        circles: symbol.circle ? symbol.circle.map(attrValue => attrValue.$) : "",
        ellipses: symbol.ellipse ? symbol.ellipse.map(attrValue => attrValue.$) : "",
        paths: symbol.path ? symbol.path.map(attrValue => attrValue.$) : "",
        polygons: symbol.polygon ? symbol.polygon.map(attrValue => attrValue.$) : "",
        polylines: symbol.polyline ? symbol.polyline.map(attrValue => attrValue.$) : "",
        rects: symbol.rect ? symbol.rect.map(attrValue => attrValue.$) : "",
      }
    };

    return data;
  });

  return (json) ? JSON.stringify(iconMeta, null, 2) : iconMeta;
}

module.exports = formatJS;
