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

Install [bluemix-components](https://github.ibm.com/Bluemix/bluemix-components) since it bundles all the things you need to build UIs for Bluemix:
- bluemix-colors
- bluemix-typography

**Bluemix icons Only:**

```
bower install bluemix-icons --save-dev
```

*The main file here is `sprite.svg`, which contains an SVG sprite (every SVG included in a single file within a `<defs>` tag inside of a `<symbol>`). We're using the [SVG <use>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) to access them*

The icons are their original color by default. (see [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/build/symbol/sprite.symbol.html)) but can be edited using CSS.

HTML:
```html
<svg viewBox="0 0 32 32">
  <use xlink:href="#service--add-filled"></use>
</shapes>
```

In this usage, there must be a viewBox (what you have in the ViewBox *does NOT matter* as long as the last two numbers are identical for square icons). Use "0 0 1 1" and you should be fine. See the [REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/build/symbol/sprite.symbol.html) for a guide with what `xlink:href` to use.

All of the icons are black by default and take the size of their parent elements. You can edit height and width, or let it stay at 100%.

To edit these icons in CSS, *add your own class* to the `<svg>`. For example:

```html
<svg viewBox="0 0 32 32" class="icon--add">
  <use xlink:href="#service--add-filled"></use>
</shapes>
```

Sass:
```scss
.icon--add {
  @extend .svg-common--add; // extenting the icon class
  fill: #cc6699; // additional styling
}
```

You may style interactions, etc. For any questions, email Una Kravets at unakravets@us.ibm.com