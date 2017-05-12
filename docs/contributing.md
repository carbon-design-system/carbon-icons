# Contributing

These are contributing guidelines for adding Bluemix UI icons.

> For internal service logo icons and everything else, make a pull request to [service-icons-temp repo](https://github.ibm.com/bthan/service-icons-temp), follow [contributing guidelines](https://github.ibm.com/bthan/service-icons-temp/blob/master/CONTRIBUTING.md).

### Naming SVG files

We use the following naming convention for SVG filenames:

* `name`: icon name (ex. `add.svg`)
* `name--outline`: icon with an outline (ex. `add--outline.svg`)
* `name--glyph`: icon that is a glyph (ex. `add--glyph`)
* `name--modifier`: if none of the above names work for your icon, use whatever modifier name you like.

### Submitting new SVG icons

Make a pull request. Add new icons to [**src/svg**]() folder.

### Prepping SVG XML code

Icons should be able to be modified with CSS to change its __color__ (`fill`) and __size__ (`width`, `height`).  

Run SVG XML code through [SVGOMG](https://jakearchibald.github.io/svgomg/).
Inspect the code and make sure that your XML doesn't include the following:

- `<style>` tags
- `<g>` tags
- `class` attribtues
- `stroke` attributes
- `stroke-width` attributes

### Testing SVGs

1. `npm run build` to build new SVG sprite files.
2. `npm test` to run unit tests
3. `npm start` and go to [localhost:3000](http://localhost:3000/), make sure added icons are rendering correctly
4. Optional: Go to [localhost:3000/test](http://localhost:3000/test) and test styling of icon manually using CSS.

Unit tests are run against built SVG sprite files (carbon-icons.svg).

