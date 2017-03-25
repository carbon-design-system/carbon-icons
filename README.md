# Carbon Icons

- Icons for Carbon. [SEE REFERENCE PAGE]()

## :books: Documentation

* [Install](https://github.com/carbon-design-system/carbon-icons/blob/master/docs/install.md)
* [Usage](https://github.com/carbon-design-system/carbon-icons/blob/master/docs/usage.md)
* [Contributing](https://github.com/carbon-design-system/carbon-icons/blob/master/docs/contributing.md)
* [Migration Guides]()

## Troubleshooting and Development Use

**PLEASE READ THIS SECTION**

SVG <use xlink:href="" /> actually can't reference an SVG file on a different domain right now due to CORS (cross-origin scripting security violations).

This means an app running at `localhost:3000` can't use the sprite on `dev-console.stage1.ng.bluemix...` without the **svgxuse library**. This does not only add SVG/use support for IE 9/10/11, but it also (and more usefully) does a check for if a `use` element is missing content (which it would if the request is cross-origin), and if it is empty the script requests the SVG file with an old-fashioned XMLHttpRequest (this can go cross-origin, assuming the SVG has an appropriate CORS header) and finds the appropriate #hash to populate the `<use>` element.

This won't be a big issue for production services as they will eventually be running on the same domain as the sprite (no CORS issues), or use the common header JS, which includes the svgxuse library already.

With all that said, 
it is highly recommended to use SVG sprite files locally.
