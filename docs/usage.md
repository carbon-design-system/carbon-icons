# Usage

The following guidelines are for developers who are using [bluemix-icons](https://github.ibm.com/Bluemix/bluemix-icons).

Design usage guidelines for iconography can be found in the [design-kit wiki](https://github.ibm.com/Bluemix/design-kit/wiki/Iconography---Usage).

## Basic Usage with HTML and CSS

All icons pull from a single SVG file ([bluemix-icons.svg]()).
These external files are built with [svg-sprite]() using **symbol** mode, which enables us to reference an icon with `<use xlink:href>` XML syntax. One of the main benefits of **symbol** mode is that you can omit the `viewBox` attribute on every `<use>` element.

But, all icons should be used at `24px` or `16px` sizes, which means you need to always declare `width` and `height` using CSS or the respective attributes.

**HTML only**: Add `width` and `height` attributes to ensure icon is sized at `24px`.

```html
<svg width="24px" height="24px">
  <use xlink:href="#add--glyph">
</svg>
```

**With CSS**: You can use CSS to size your icons and add other styles like color.
```css
svg {
  width: 24px;
  height: 24px;
  fill: red;
}
```
```html
<svg>
  <use xlink:href="#add--glyph">
</svg>
```

**Note**: The icons use original color by default, which should be `black`. (see [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)). CSS is your main way for adding color to icons.

## Using SVG file from Static Assets

Use **sprite.svg** or **bluemix-icons.svg** by serving it as a static asset (like an image file) and use it with the following HTML. 

```html
<!-- From static assets  -->
<svg>
  <use xlink:href="path/to/static-assets/img/sprite.svg#common--arrows"></use>
</svg>
```

## Using SVG file from Bluemix.Common

[Bluemix.Common](https://github.ibm.com/Bluemix/Bluemix.Common) provides an endpoint to access their currently installed version of bluemix-icons. Using the icons in your HTML will look like this.

```html
<!-- From Bluemix.Common -->
<svg>
  <use xlink:href="https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg#common--arrows"></use>
</svg>
```

> Important notes about Bluemix.Common:
- If you need more control over how the polyfill is invoked, use bluemix-icons locally as a static asset.
- The polyfill acts directly on the `window` object, so it shouldn't need to be re-imported if you are using the header JavaScript from Bluemix.Common.

## Main files

Bluemix Icons ships with two main SVG files that contain different sets of external SVG sprite files:

| filename | description | supported versions|
|-----|--------|---------------|
|bluemix-icons.svg| Contains current icons (consolidated subset of legacy icons used in Bluemix) | `3.x` and newer|
|bluemix-icons.json| JSON file created from bluemix-icons.svg, used in `Icon` React Component in [bluemix-components-react](https://github.ibm.com/Bluemix/bluemix-components-react) | `3.x` and newer|
|sprite.svg| SVG sprite contains legacy icons | `1.x`, `2.x` and `3.x`|
|icons.json| legacy JSON file created from sprite.svg | `1.x`, `2.x` and `3.x`|

> Note: sprite.svg and bluemix-icons.svg must be used with [polyfill]().


### Accessibility

For screen reader accessibility, use `<title>` element and `aria-labelledby` attribute.

```html
<svg class="icon--add" aria-labelledby="add">
  <title id="add">Add a new service</title>
  <use xlink:href="https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg#common--add"></use>
</svg>
```
* The `aria-labelledby` attribute will reference the `id` attribute in the the `<title>` element.
Make sure that you do not duplicate this `id`.
* The `<title>`element will be read by the screen reader to the user so it should describe it's purpose.
