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


## Polyfill

Using bluemix-icons locally or from Bluemix.Common requires a simple polyfill called
[svgxuse](https://github.com/Keyamoon/svgxuse).

Install `svgxuse` and include it as an external script.

```
npm install --save svgxuse
```

```html
<!--index.html-->
<body>
  ...
  <script src="./node_modules/svgxuse/svgxuse.min.js">
</body>
```

Or you can `import` or `require` it into your main JavaScript file:

```js
// bundle.js
import 'svgxuse';
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
