# Bluemix Icons

[![Build Status](https://travis.innovate.ibm.com/Bluemix/bluemix-icons.svg?token=PscWax4p1FECdA5aCxvd&branch=master)](https://travis.innovate.ibm.com/Bluemix/bluemix-icons)

- Icons for Bluemix. [SEE REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)
- Internal Services: icons can be found and managed in [Master Icon List](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List) on release blueprints.

## :books: Documentation

* [Install](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/install.md)
* [Usage](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/usage.md)
* [Contributing](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/contributing.md)

## Migrating from `3.x` to `4.x`

### Dropping support for Bower

Please use `npm` from now on. See [install](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/install.md#install) docs for more details.

### Using alternative names for icons

For some icons, you we intentionally duplcated icons so that you can use different names to access them.
As long as the the filenames are unique across sprite.svg and bluemix-icons.svg, this should work. Running `npm test` ensures that all names are unique.

| Original Name | Alternative Name |
|---------------|------------------|
| cloud-foundry | cf-apps          |
| open-whisk    | whisk            |
| applications  | apps |
| start         | play |
| start--glyph  | play--glyph |
| start--outline|play--outline |

### Name changes

Deprecated icons have been removed and their replacement icons have inherited the original names:

__Removed__

- copy.svg (replaced with a new copy.svg)
- copy--code.svg (removed)
- containers.svg (replaced with a new containers.svg)
- stop.svg (is renamed stop--outline.svg, actual stop.svg has been added)

> All __subfolders__ in [svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg) are __deprecated__. 
> Please use svg icons that are directly located in [svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg) unless they're listed below.

## Troubleshooting and Development Use

**PLEASE READ THIS SECTION**

The CDN running this sprite is located at `https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg`

SVG <use xlink:href="" /> actually can't reference an SVG file on a different domain right now due to CORS (cross-origin scripting security violations).

This means an app running at `localhost:3000` can't use the sprite on `dev-console.stage1.ng.bluemix...` without the **svgxuse library**. This does not only add SVG/use support for IE 9/10/11, but it also (and more usefully) does a check for if a use element is missing content (which it would if the request is cross-origin), and if it is empty the script requests the SVG file with an old-fashioned XMLHttpRequest (this can go cross-origin, assuming the SVG has an appropriate CORS header) and finds the appropriate #hash to populate the `<use>` element.

This won't be a big issue for production services as they will eventually be running on the same domain as the sprite (no CORS issues), or use the common header JS, which includes the svgxuse library already.

But if you're doing something locally or not using the common header, you either have to:

1. include svgxuse yourself to allow a cross-origin request to the CDN
2. bring in a local copy of the sprite sheet to serve on the same domain (or locally) and reference that sprite instead of the CDN
