## Usage

### Inline SVG (recommended)

> We recommend inlining SVG when possible since it's a best practice. Overall, this is the simplest way for using SVG in your HTML documents.

Production-ready SVG files are available in the [dist](https://github.com/carbon-design-system/carbon-icons/tree/master/dist) folder, which have been optimized with SVGO.

Note that SVG files in dist folder only include most current icons reflected in [carbon-icons.svg](https://raw.githubusercontent.com/carbon-design-system/carbon-icons/master/dist/carbon-icons.svg) and [carbon-design-system website](http://carbondesignsystem.com/style/iconography/library).

### Using SVG sprite

> **Requirements**:
>
> - `svgxuse` polyfill
> - Serve carbon-icons.svg as a static asset
> - Use wfp-icons.svg from same origin to avoid CORS issues.

### Using SVG sprite from static assets (recommended)

Install carbon-icons and svgxuse so you can use carbon-icons.svg and svgxuse.js.

```sh
npm i @wfp/icons svgxuse
```

Use the SVG sprite (**carbon-icons.svg**) by serving it as a static asset.
Note that the use of [external svg content](https://css-tricks.com/svg-sprites-use-better-icon-fonts/##Browser+Support) via `<use>` and `xlink:href` is only compatible when using [svgxuse.js](https://github.com/Keyamoon/svgxuse) polyfill.

Move the carbon-icons.svg and svgxuse.js files from node_modules to a folder where you will serve your static assets from. They will be located in node_modules/carbon-icons and node_modules/svgxuse respectively.

> svgxuse is also available via CDN at [https://unpkg.com/svgxuse@1.2.4/svgxuse.js](https://unpkg.com/svgxuse@1.2.4/svgxuse.js)

**server.js (`express`)**

```js
const express = require('express');
const app = express();

// static assets are served from a folder named dist
app.use(express.static('dist'));

...
```

**index.html**

```html
...
<body>
  ...
  <svg>
    <title>Add new users to your account</title>
    <use xlink:href="/carbon-icons.svg#icon--add--glyph"></use>
  </svg>
  ...
  <script src="/svgxuse.js" defer></script>
</body>
```

You can do a simple copy and paste, setup an automated task to move the files out of node_modules or do whatever is the best fit for your project.

### CSS overrides

You can override how an SVG icon looks using CSS.

```html
<svg class="icon">
  <use xlink:href="/carbon-icons.svg#icon--add--glyph"></use>
</svg>
```

```css
.icon {
  width: 24px;
  height: 24px;
  fill: red;
}
```

All icons in the library are standarized so that they do not include `stroke` or internal spacing (`padding`).

### Main files

| filename          | description                                                                                                                                                                                            | supported versions |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| carbon-icons.svg  | Contains current icons (consolidated subset of legacy icons intended for use on Bluemix)                                                                                                               | `3.x` and newer    |
| carbon-icons.json | JSON file created from carbon-icons.svg, used on [carbon-design-system website](http://carbondesignsystem.com/style/iconography/library)                                                               | `3.x` and newer    |
| carbon-icons.js   | JS module created from carbon-icons.svg, used in `Icon` React Component in [bluemix-components-react](https://github.ibm.com/Bluemix/bluemix-components-react) (React repo is for IBMers only for now) | `3.x` and newer    |

### Accessibility

For screen reader accessibility, use `<title>` element.

```html
<svg class="icon">
  <title>Add a new service</title>
  <use xlink:href="/carbon-icons.svg#icon--add--glyph"></use>
</svg>
```

- The `<title>` element describes the SVG and what it's used for. Make this as detailed as possible for screen-readers and overall accessibility.
