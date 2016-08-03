# Bluemix Icons

[![Build Status](https://travis.innovate.ibm.com/Bluemix/bluemix-icons.svg?token=PscWax4p1FECdA5aCxvd&branch=master)](https://travis.innovate.ibm.com/Bluemix/bluemix-icons)

- Icons for Bluemix. [SEE REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)
- You can also find other icons in [Master Icon List](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List) on release blueprints.

## Documentation

* [Install](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/install.md)
* [Usage](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/usage.md)
* [Contributing](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/contributing.md)

## Troubleshooting and Development Use

**PLEASE READ THIS SECTION**

The CDN running this sprite is located at `https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg`

SVG <use xlink:href="" /> actually can't reference an SVG file on a different domain right now due to CORS (cross-origin scripting security violations).

This means an app running at `localhost:3000` can't use the sprite on `dev-console.stage1.ng.bluemix...` without the **svgxuse library**. This does not only add SVG/use support for IE 9/10/11, but it also (and more usefully) does a check for if a use element is missing content (which it would if the request is cross-origin), and if it is empty the script requests the SVG file with an old-fashioned XMLHttpRequest (this can go cross-origin, assuming the SVG has an appropriate CORS header) and finds the appropriate #hash to populate the `<use>` element.

This won't be a big issue for production services as they will eventually be running on the same domain as the sprite (no CORS issues), or use the common header JS, which includes the svgxuse library already.

But if you're doing something locally or not using the common header, you either have to:

1. include svgxuse yourself to allow a cross-origin request to the CDN
2. bring in a local copy of the sprite sheet to serve on the same domain (or locally) and reference that sprite instead of the CDN
