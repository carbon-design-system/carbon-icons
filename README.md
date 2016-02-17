# Bluemix Icons

Icons for Bluemix. [SEE REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/build/symbol/sprite.symbol.html)

## Developing in this Repo

### Bower

Create a `.bowerrc` file that points to private bower registry:

```
{ "registry": "http://x1showcase.emmlabs.ibm.com:5678/" }
```

## Adding Icons

Please submit a Pull Request to add icons.

1. Fork this repo
2. Clone it to your local system
3. Add icons in the proper folder (you may add your own) within the `svg/` folder
4. In your terminal run `npm install`
5. Run `gulp` to rebuild the sprite
6. Submit a pull request and rejoice! :tada:

## Usage

**Recommended:**

Install [bluemix-components](https://github.ibm.com/Bluemix/bluemix-components).
This will automatically install **bluemix-icons** as a peer dependency in your project's bower_components.

**Bluemix icons Only:**

```
bower install bluemix-icons --save-dev
```

*The main file here is `sprite.svg`, which contains an SVG sprite (every SVG included in a single file within a `<defs>` tag inside of a `<symbol>`). We're using the [SVG <use>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) to access them*

The icons are their original color by default. (see [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/build/symbol/sprite.symbol.html)) but can be edited using CSS.

HTML:
```html
<svg>
  <use xlink:href="https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg#service--add-filled"></use>
</svg>
```

In this usage, you style the SVG in CSS. Make sure to give it a width and height (default is 100% of parent). Some icons are colored while others are black by default. You can edit the fill to change this. See the [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/build/symbol/sprite.symbol.html) for a guide with what `xlink:href` to use.

To edit these icons in CSS, *add your own class* to the `<svg>`. For example:

```html
<svg class="icon--add">
  <use xlink:href="{link to sprite folder}/sprite.svg#service--add-filled"></use>
</svg>
```

Sass:
```scss
.icon--add {
  fill: #cc6699; // additional styling
}
```

You may style interactions, etc. For any questions, email Una Kravets at unakravets@us.ibm.com

## IE 9-11 Polyfill

External SVG is supported in every browser where inline SVG is supported, except for Internet Explorer. To fix this, there is a simple polyfill available called [svgxuse](https://github.com/Keyamoon/svgxuse). Simply include the script from svgxuse or integrate it into your build system:

```
npm install --save svgxuse
```

```
<script defer src="node_modules/svgxuse/svgxuse.js"></script>
```
