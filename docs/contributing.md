# Contributing

These are contributing guidelines for adding Bluemix UI icons.
For internal service logo icons and everything else, use [Master Icon List](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List) on release blueprints.

### Submitting Pull Requests

* **Do not commit built files**
  * These are files created when running `npm run build`
  * Committing built files results in unintended merge conflicts
* **Keep your branch up to date with `master` branch**

### Naming SVG files

We use the following naming convention for SVG filenames:

* `name`: icon name (ex. `add.svg`)
* `name--outline`: icon with an outline (ex. `add--outline.svg`)
* `name--glyph`: icon that is a glyph (ex. `add--glyph`)
* `name--modifier`: when an icon does not use `outline` or `glyph`, use an appropriate modifier (ex. `copy--code`)

#### Adding SVGs

1. Fork this repo
2. Clone the fork to your computer
3. Add icons to [svg]() folder
4. **Optional**: Open terminal to your forked repo Run `npm install` to make use of dev environment
5. Submit a pull request

When submitting pull requests to bluemix-icons, simply add icons to [svg]() folder, not in the svg subfolders. Do not run `gulp` or `npm` tasks.

* Icons directly added to svg folder are **current** set of icons as of version [3.0.0]() and newer.
* Icons in any subfolders, like [taxonomy]() or [common](), are **legacy icons**.

#### Prepping SVG XML code

All SVG icons are optimized through [SVGO]() and other build steps to prepare icons for use via external SVG sprite files (sprite.svg and bluemix-icons.svg).

For example, here's how XML code for [add--glyph.svg]() can look:

```xml
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 L8,0 Z M12,9 L9,9 L9,12 L7,12 L7,9 L4,9 L4,7 L7,7 L7,4 L9,4 L9,7 L12,7 L12,9 L12,9 Z" id="Shape" stroke="none" fill="#000000" fill-rule="evenodd"></path>
</svg>
```

The XML code **must have** the following attributes:
* `width` and `height`
* `viewBox`
* `fill-rule="evenodd"`

But it must **not have** the following nodes:
* `<g>`
* `<style>`

#### About SVGO and Gulp API

SVGO is used with various other gulp tasks to format external SVG sprite files.
These should only be used when submitting pull requests that `bump` the repo to new versions.

<!--| gulp | gulp --flags | npm | description|
|-----|-----|-----|-----|
| `gulp clean` | | `npm run prebuild` | Deletes built folders, see [clean.js]() for details. |
| `gulp build` | `--legacy` | `npm run build` and `npm run build:legacy` | Removes `fill` attribute and all `stroke` attributes with [remove-svg-properties](). Then adds `fill-rule="evenodd"` to `<svg>` wrapping node with [gulp-dom](). Then optimizes SVG with [gulp-svgo](). Finally, creates SVG sprite with [gulp-svg-sprite](). |
| `gulp copy` | `--legacy` | `npm run build` and `npm run build:legacy` | Copies source code to generate SVG sprites and HTML files |
| `gulp xml2json` |`--legacy` | `npm run build` and `npm run build:legacy` | Converts and formats XML from SVG icons to JSON creating all distributed JSON files |-->

* **gulp clean**
  - `npm run prebuild`
    - Deletes built folders, see [clean.js]() for details.
* **gulp build** (args: --legacy)
  - `npm run build` and `npm run build:legacy`
    - Removes `fill` attribute and all `stroke` attributes with [remove-svg-properties](). 
    - Adds `fill-rule="evenodd"` to `<svg>` wrapping node with [gulp-dom]()
    - Optimizes SVG with [gulp-svgo](). 
    - Creates SVG sprite with [gulp-svg-sprite]().
* **gulp copy** (args: --legacy)
  - `npm run build` and `npm run build:legacy`
    - Copies source code to generate SVG sprites and HTML files
* **gulp xml2json** (args: --legacy)
  - `npm run build` and `npm run build:legacy`
    - Converts and formats XML from SVG icons to JSON creating all distributed JSON files