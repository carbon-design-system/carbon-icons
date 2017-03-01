# Contributing

These are contributing guidelines for adding Bluemix UI icons.
For internal service logo icons and everything else, use [Master Icon List](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List) on release blueprints.

### Naming SVG files

We use the following naming convention for SVG filenames:

* `name`: icon name (ex. `add.svg`)
* `name--outline`: icon with an outline (ex. `add--outline.svg`)
* `name--glyph`: icon that is a glyph (ex. `add--glyph`)
* `name--new`: new icon that replaces a deprecated icon, see [README](https://github.ibm.com/Bluemix/bluemix-icons#skull-deprecated-in-3x)
* `name--modifier`: if none of the above names work for your icon, use whatever modifier name you like.



### Prepping SVG XML code

It's the goal of this library to make sure icons can be modified with CSS to change it's __color__ (`fill`) and __size__ (`width`, `height`).  

Run SVG XML code through [SVGOMG](https://jakearchibald.github.io/svgomg/).
Inspect the code and make sure that your XML doesn't include the following:

- `<style>` tags
- `<g>` tags
- `class` attribtues
- `stroke` attributes
- `stroke-width` attributes

### Submitting new SVGs

1. Fork the [bluemix-icons](https://github.ibm.com/Bluemix/bluemix-icons) repo
2. Close the fork.
3. Add new SVG file(s) to [svg](https://github.ibm.com/Bluemix/bluemix-icons/tree/master/svg) folder. SVG subfolders are deprecated as of version `3.0.0`.
4. Submit a pull request
5. Do not commit built files (files created from `npm run build` script).

### Testing SVGs

1. `npm run build` to build new SVG sprite files.
2. `npm test` to run unit tests
3. `npm start` and go to [localhost:3000](http://localhost:3000/), make sure added icons are rendering correctly
4. Optional: Go to [localhost:3000/test](http://localhost:3000/test) and test styling of icon manually using CSS.

Unit tests are run against built SVG sprite files (bluemix-icons.svg and sprite.svg). 
Do not commit built files to pull requests.

