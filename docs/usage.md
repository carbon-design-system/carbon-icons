## Usage

### Inline SVG (recommended)

> We recommend inlining SVG when possible since it's a best practice. Overall, this is the simplest way for using SVG in your HTML documents.

Production-ready SVG files are available in the [dist](https://github.com/carbon-design-system/carbon-icons/tree/master/dist) folder, which have been optimized with SVGO.

Note that SVG files in dist folder only include most current icons reflected in [carbon-icons.svg](https://raw.githubusercontent.com/carbon-design-system/carbon-icons/master/dist/carbon-icons.svg) and [carbon-design-system website](http://carbondesignsystem.com/style/iconography/library).

### Using SVG sprite

> __Requirements__: 
> - `svgxuse` polyfill
> - Serve carbon-icons.svg as a static asset
> - Use carbon-icons.svg from same origin to avoid CORS issues.

### Using SVG sprite from static assets (recommended)

Use the SVG sprite (__carbon-icons.svg__) by serving it as a static asset. Note that the use of [external svg content](https://css-tricks.com/svg-sprites-use-better-icon-fonts/##Browser+Support) via `<use>` and `xlink:href` is only compatible when using [svgxuse](https://github.com/Keyamoon/svgxuse) polyfill (`npm i svgxuse -D`).

**server.js (`express`)**
```js
const express = require('express');
const app = express();

app.use(express.static('node_modules'));

...
```
**index.html**
```html
...
<body>
  ...
  <svg>
    <title>Add new users to your account</title>
    <use xlink:href="/carbon-icons/carbon-icons.svg#icon--add--glyph"></use>
  </svg>
  ...
  <script src="/svgxuse/svgxuse.js" defer></script>
</body>
```

### CSS overrides

You can override how an SVG icon looks using CSS.

```html
<svg class="icon">
  <use xlink:href="/carbon-icons/carbon-icons.svg#icon--add--glyph"></use>
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

| filename | description | supported versions|
|-----|--------|---------------|
|carbon-icons.svg| Contains current icons (consolidated subset of legacy icons intended for use on Bluemix) | `3.x` and newer|
|carbon-icons.json| JSON file created from carbon-icons.svg, used on [carbon-design-system website](http://carbondesignsystem.com/style/iconography/library) | `3.x` and newer|
|carbon-icons.js| JS module created from carbon-icons.svg, used in `Icon` React Component in [bluemix-components-react](https://github.ibm.com/Bluemix/bluemix-components-react) (React repo is for IBMers only for now) | `3.x` and newer|



### Accessibility

For screen reader accessibility, use `<title>` element.

```html
<svg class="icon">
  <title>Add a new service</title>
  <use xlink:href="/carbon-icons/carbon-icons.svg#icon--add--glyph"></use>
</svg>
```

* The `<title>` element describes the SVG and what it's used for. Make this as detailed as possible for screen-readers and overall accessibility.
