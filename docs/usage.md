# Using Bluemix Icons

The main file here is `sprite.svg`, which contains an SVG sprite.
SVG sprite is every SVG included in a single file within a `<defs>` tag inside of a `<symbol>`.
We're using the [SVG <use>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) to access them

In your HTML, use an icon from `sprite.svg` by referencing it with a relative path or a path to your static assets.

```html
<!-- From bower_components -->
<svg>
  <use xlink:href="bower_components/bluemix-icons/sprite.svg#common--arrows"></use>
</svg>

<!-- From static assets  -->
<svg>
  <use xlink:href="/img/sprite.svg#common--arrows"></use>
</svg>
```


## Polyfill (required)

Using bluemix-icons relies on the use of [external svg]() via `<use>` and `xlink:href`.
For browser-compatibility, we require the use of the [svg4everybody](https://github.com/jonathantneal/svg4everybody#svg-for-everybody) polyfill.

Install `svg4everybody` and invoke it manually

```sh
npm install --save svg4everybody
```

```html
<!--index.html-->
<body>
  ...
  <script src="path/to/svg4everybody.js"></script>
  <script>svg4everybody({ polyfill: true }); // run it now or whenever you are ready</script>
</body>
```

Or you can `import` or `require` it into your main JavaScript file and bundle it with `Webpack`:

```js
// bundle.js
const svg4everybody = require('svg4everybody');
svg4everybody({ polyfill: true }); // run it now or whenever you are ready
```

```html
<!--index.html-->
<body>
  ...
  <script src="path_to_bundle.js">
</body>
```

**Note**: The icons use original color by default, which should be `black`. (see [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)) but can be edited using CSS.

## Local Usage

*Write stuff here about local usage*


## Usage from Bluemix-Common

> **Polyfill:** The `svgxuse` polyfill is already set-up for you on [Bluemix.Common](https://github.ibm.com/Bluemix/Bluemix.Common) -- it acts directly on the `window` object, so it shouldn't need to be re-imported if you are using the header JavaScript from Bluemix.Common.

The following URL will give you access to the `sprite.svg`: `https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg`.

**Note**: `Bluemix.Common` will be slower to update and slower to render compared to using a local version of `sprite.svg`.
```html
<!-- From Bluemix.Common -->
<svg>
  <use xlink:href="https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg#common--arrows"></use>
</svg>
```

### Styling Icons

You style the SVG in CSS. Make sure to give it a `width` and `height` (default is 100% of parent). Some icons are colored while others are black by default. You can edit the fill to change this. See the [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/) for a guide with what `xlink:href` to use.

To edit these icons in CSS, *add your own class* to the `<svg>`. For example:

HTML:

```html
<svg class="icon--add">
  <use xlink:href="{link to sprite folder}/sprite.svg#service--add-filled"></use>
</svg>
```

SCSS:
```scss
.icon--add {
  fill: #cc6699; // additional styling
}
```

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
