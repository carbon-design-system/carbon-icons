# Bluemix Icons

[![Build Status](https://travis.innovate.ibm.com/Bluemix/bluemix-icons.svg?token=PscWax4p1FECdA5aCxvd&branch=master)](https://travis.innovate.ibm.com/Bluemix/bluemix-icons)

- Icons for Bluemix. [SEE REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)
- Internal Services: icons can be found and managed in [Master Icon List](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List) on release blueprints.

## Documentation

* [Install](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/install.md)
* [Usage](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/usage.md)
* [Contributing](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/contributing.md)

## :exclamation: About `2.x` => `3.x`

> Refer to updated documentation for migrating to the newest `3.x` release of bluemix-icons.
Below you'll find important touch points on what major changes may affect your use of `3.x`.

The change to `3.x` is a result of a full consolidation of all icon libraries for Bluemix (bluemix-icons and design-kit).
Major changes were made so that we only include essential icons that are in use across the Bluemix product. This version update was also needed to allow the team to **redraw** and **resize** icons to align with design standards.

**Updated Main Files**:

Bluemix Icons now ships with two main SVG files and two main JSON files.

| filename | description | supported versions|
|-----|--------|---------------|
|bluemix-icons.svg| Contains current icons (consolidated subset of legacy icons used in Bluemix) | `3.x` and newer|
|bluemix-icons.json| JSON file created from bluemix-icons.svg, used in `Icon` React Component in [bluemix-components-react](https://github.ibm.com/Bluemix/bluemix-components-react) | `3.x` and newer|
|sprite.svg| SVG sprite contains legacy icons | `1.x`, `2.x` and `3.x`|
|icons.json| legacy JSON file created from sprite.svg | `1.x`, `2.x` and `3.x`|

**Sizing**: New icons have been resized to meet design requirements (`24px` or `16px`).

**Padding**: Internal padding has been removed from all icons.

**Redrawn Icons**: Some icons have been redrawn due to sizing or other issues with previous icon designs.
A full list of redrawn icons and affected HTML files is listed in the [release notes](https://github.ibm.com/Bluemix/bluemix-icons/releases/tag/3.0.0).

**New Icons**: All new icons can be found in the [svg]() folder but not in any svg subfolder.

**Legacy Icons**: Any icons in an svg subfolder are legacy icons. Consider legacy icons to be deprecated. We will support the use of these icons until the release of `4.x`.

**Service Icons**: All icons for internal services that require hardcoded colors will be maintained and updated in the [Master Icon List in Release Blueprints](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List). This is temporary  measure.


## Troubleshooting and Development Use

**PLEASE READ THIS SECTION**

The CDN running this sprite is located at `https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg`

SVG <use xlink:href="" /> actually can't reference an SVG file on a different domain right now due to CORS (cross-origin scripting security violations).

This means an app running at `localhost:3000` can't use the sprite on `dev-console.stage1.ng.bluemix...` without the **svgxuse library**. This does not only add SVG/use support for IE 9/10/11, but it also (and more usefully) does a check for if a use element is missing content (which it would if the request is cross-origin), and if it is empty the script requests the SVG file with an old-fashioned XMLHttpRequest (this can go cross-origin, assuming the SVG has an appropriate CORS header) and finds the appropriate #hash to populate the `<use>` element.

This won't be a big issue for production services as they will eventually be running on the same domain as the sprite (no CORS issues), or use the common header JS, which includes the svgxuse library already.

But if you're doing something locally or not using the common header, you either have to:

1. include svgxuse yourself to allow a cross-origin request to the CDN
2. bring in a local copy of the sprite sheet to serve on the same domain (or locally) and reference that sprite instead of the CDN
