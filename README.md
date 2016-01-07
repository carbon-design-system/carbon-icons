# Bluemix Icons

Icons for Bluemix.

## Install

### Bower

Create a `.bowerrc` file that points to private bower registry:

```
{ "registry": "http://x1showcase.emmlabs.ibm.com:5678/" }
```

**Recommended:**

Install [bluemix-components](https://github.ibm.com/Bluemix/bluemix-components) since it bundles all the things you need to build UIs for Bluemix:
- bluemix-colors
- bluemix-typography

**Bluemix icons Only:**

```
bower install bluemix-icons --save-dev
```


Import `bluemix-icons` to your main `scss` file.
The import path will depend on where your `scss` files are located in
```
/bower_components/bluemix-icons/bower-dist/_bluemix-icons.scss
```

`@import 'path/to/bluemix-icons/bluemix-icons';`

## Usage

In order to change the color of an icon, you *must* be using the *defs* version and target the `<use>` property. For example, if you want an "add" button, your Sass (or CSS) would look like:

CSS:
```css
.svg-common--add {
  @extend %svg-common;
  background-position: 37.06896551724138% 81.99121522693997%;
  fill: #cc6699;
}
```

Sass:
```sass
.icon--add {
  @extend .svg-common--add;
  fill: #cc6699;
}