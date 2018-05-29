# Contributing

These are contributing guidelines for adding Bluemix UI icons.

> For internal service logo icons, you will need to rely on your service broker. Talk to your engineering team for further steps.

### Naming SVG files

We use the following naming convention for SVG filenames:

- `name`: icon name (ex. `add.svg`)
- `name--outline`: icon with an outline (ex. `add--outline.svg`)
- `name--glyph`: icon that is a glyph (ex. `add--glyph`)
- `name--modifier`: if none of the above names work for your icon, use whatever modifier name you like.

### Submitting new SVG icons

Make a pull request and add new icons to [**src/svg**](https://github.com/carbon-design-system/carbon-icons/tree/master/src/svg) folder.
You can also create a new issue with your SVG code; copy and paste it into your created issue. A Carbon team member will submit it for you. You can get SVG code using Sketch.

![sketch](https://user-images.githubusercontent.com/4185382/30172200-bc48bb9a-93b9-11e7-96d6-e968e88cfd79.png)

### Prepping SVG XML code

Icons should be able to be modified with CSS to change its **color** (`fill`) and **size** (`width`, `height`).

Run SVG XML code through [SVGOMG](https://jakearchibald.github.io/svgomg/).
Inspect the code and make sure that your XML doesn't include the following:

- `<style>` tags
- `<g>` tags
- `class` attribtues
- `stroke` attributes
- `stroke-width` attributes

### Testing SVGs

1.  `npm run build` to build new SVG sprite files.
2.  `npm test` to run unit tests
3.  `npm start` and go to [localhost:3000](http://localhost:3000/), make sure added icons are rendering correctly
4.  Optional: Go to [localhost:3000/test](http://localhost:3000/test) and test styling of icon manually using CSS.

Unit tests are run against built SVG sprite files (carbon-icons.svg).
