# Bluemix Icons

[![Build Status](https://travis.innovate.ibm.com/Bluemix/bluemix-icons.svg?token=PscWax4p1FECdA5aCxvd&branch=master)](https://travis.innovate.ibm.com/Bluemix/bluemix-icons)

Icons for Bluemix. [SEE REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)

## Getting Started

*The main file here is `sprite.svg`, which contains an SVG sprite (every SVG included in a single file within a `<defs>` tag inside of a `<symbol>`). We're using the [SVG <use>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) to access them*

There are two ways to use `sprite.svg`:

* [Local Usage](#local-usage)
* [Usage from Bluemix.Common](#usage-from-bluemix-common)

## Local Usage

> **Polyfill:** A simple polyfill is used called [svgxuse](https://github.com/Keyamoon/svgxuse) to enable the use of `sprite.svg`.

> Install `svgxuse` and include it as an external script.

> ```
npm install --save svgxuse
```

>```html
<!--index.html-->
<body>
  ...
  <script src="./node_modules/svgxuse/svgxuse.min.js">
</body>
```

> Or you can `import` or `require` it into your main JavaScript file:

> ```js
// bundle.js
import 'svgxuse';
```

>```html
<!--index.html-->
<body>
  ...
  <script src="path_to_bundle.js">
</body>
```

#### Install `bluemix-icons`

Use bower (recommended):
```
bower install bluemix-icons --save
```

Or **download** a `.zip` or `.tar.gz` file from the [latest releases here.](https://github.ibm.com/Bluemix/bluemix-icons/releases)

#### Use `sprite.svg`

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

**Note**: The icons are their original color by default. (see [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)) but can be edited using CSS.

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

## Troubleshooting and Development Use

**PLEASE READ THIS SECTION**

The CDN running this sprite is located at `https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg`

SVG <use xlink:href="" /> actually can't reference an SVG file on a different domain right now due to CORS (cross-origin scripting security violations).

This means an app running at `localhost:3000` can't use the sprite on `dev-console.stage1.ng.bluemix...` without the **svgxuse library**. This does not only add SVG/use support for IE 9/10/11, but it also (and more usefully) does a check for if a use element is missing content (which it would if the request is cross-origin), and if it is empty the script requests the SVG file with an old-fashioned XMLHttpRequest (this can go cross-origin, assuming the SVG has an appropriate CORS header) and finds the appropriate #hash to populate the `<use>` element.

This won't be a big issue for production services as they will eventually be running on the same domain as the sprite (no CORS issues), or use the common header JS, which includes the svgxuse library already.

But if you're doing something locally or not using the common header, you either have to:

1. include svgxuse yourself to allow a cross-origin request to the CDN
2. bring in a local copy of the sprite sheet to serve on the same domain (or locally) and reference that sprite instead of the CDN
