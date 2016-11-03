'use strict';
/*
  Requires
*/
const parseString = require('xml2js').parseString;
const fs = require('fs');


/*
  parseSync()
  * Parses XML "syncronously"
  * Returns JSON
*/
const parseSync = (xml) => {
  let error = null;
  let json = null;

  parseString(xml, (innerError, innerJSON) => {
    error = innerError;
    json = innerJSON;
  });

  if (error) throw error;
  return json;
}

/*
  formatJSON()
  * Formats JSON and returns JSON string
*/
const formatJSON = (rawJSON, bluemix) => {
  // iconMeta - returns new JSON Array of icon Objects
  const iconMeta = (rawJSON.svg.symbol).map(symbol => {

    // Split `id` key into an Array - [{{tags}}, '--', {{name}}]
    const splitId = symbol.$.id.split('--');

    let width = symbol.$.viewBox.split(' ')[2];
    let height = symbol.$.viewBox.split(' ')[3];

    // For each "symbol.svg.symbol", create new Objects with these keys/values
    const data = {
      id: symbol.$.id,
      name: bluemix ? symbol.$.id : splitId[1],
      tags: bluemix ? symbol.$.id : splitId[0],
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

    console.log(data);

    return data;
  });

  return JSON.stringify(iconMeta);
}


/*
  writeJSON()
  * Converts XML to JSON
  * Creates new JSON Array of icon objects
  * Returns JSON string
*/
const writeJSON = (options) => {
  if (options.svgFile) {
    const xml = fs.readFileSync(`./${options.svgFile}`, { 'encoding': 'utf8' });
    const result = parseSync(xml);
    fs.writeFile(`./${options.newFileName}`, formatJSON(result, options.bluemix));
  }
}


const xml2json = (cb) => {
  writeJSON({
    svgFile: 'sprite.svg',
    newFileName: 'icons.json',
    bluemix: false,
  });
  writeJSON({
    svgFile: 'bluemix-icons.svg',
    newFileName: 'bluemix-icons.json',
    bluemix: true,
  });
  cb();
};

module.exports = xml2json;
