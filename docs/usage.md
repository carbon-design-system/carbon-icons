# Using Bluemix Icons

There are two main files that contain different sets of external SVG sprite files: 

- sprite.svg: legacy icons
- bluemix-icons.svg: current icons - a subset of icons that are all used throughout Bluemix product. 

SVG sprite is every SVG included in a single file within a `<defs>` tag inside of a `<symbol>`.
We're using the [ `<use>` and `xlink:href`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) to access them via polyfill.


## Install & Polyfill (required)

Using bluemix-icons relies on the use of [external svg content](https://css-tricks.com/svg-sprites-use-better-icon-fonts/##Browser+Support) via `<use>` and `xlink:href`.
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

## Using Icons

**Static assets:**

You can use **sprite.svg** or **bluemix-icons.svg** by serving it as a static asset (like an image file) and use it with the following HTML: 

```html
<!-- From static assets  -->
<svg>
  <use xlink:href="path/to/static-assets/img/sprite.svg#common--arrows"></use>
</svg>
```

**Bluemix.Common:**

Bluemix.Common provides an endpoint to access their currently installed version of bluemix-icons. Using the icons in your HTML will look like this.

```html
<!-- From Bluemix.Common -->
<svg>
  <use xlink:href="https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg#common--arrows"></use>
</svg>
```

> Important notes about Bluemix.Common: 
- If you need more control over how the polyfill is invoked, use bluemix-icons locally as a static asset.
- The older `svgxuse` polyfill is used in [Bluemix.Common](https://github.ibm.com/Bluemix/Bluemix.Common). This will be updated to [svg4everybody]() before Jan. 2017. 
- The polyfill acts directly on the `window` object, so it shouldn't need to be re-imported if you are using the header JavaScript from Bluemix.Common.

### Styling Icons

SVG icons are styled with CSS. 

Some icons are colored while others are black by default. You can edit the fill to change this. See the [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/) for a guide with what `xlink:href` to use.

To edit these icons in CSS, *add your own class* to the `<svg>`. For example:

SCSS:
```scss
.icon--add {
  fill: #cc6699; // additional styling
}
```

HTML:
```html
<svg class="icon--add">
  <use xlink:href="path/to/sprite.svg#service--add-filled"></use>
</svg>
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
