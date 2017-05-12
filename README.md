# Bluemix Icons

[![Build Status](https://travis-ci.org/carbon-design-system/carbon-icons.svg?branch=master)](https://travis-ci.org/carbon-design-system/carbon-icons)

- Icons for Bluemix. [SEE REFERENCE PAGE](https://pages.github.ibm.com/Bluemix/bluemix-icons/)
- Internal Services: icons can be found and managed in [Master Icon List](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List) on release blueprints.

## :books: Documentation

* [Install](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/install.md)
* [Usage](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/usage.md)
* [Contributing](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/contributing.md)

## Deprecated

- launch.svg and launch--glyph.svg are deprecated and will be redrawn for v6

## Migrating from 4.x to 5.x

We had to make an emergency breaking change to namespace our svg `id` attributes.
Now, all `id`s are prefixed with `icon--`. 

Whether you're using __bluemix-icons.svg__ or __sprite.svg__, you can update your `<use xlink:href>` to use the new prefix.

```html
<svg class="icon">
  <use xlink:href="/path_to_static-assets/bluemix-icons.svg#icon--icon_name"></use>
</svg>
```

Since this breaking change was made so suddently, we will continue to support sprite.svg and its respective legacy icons for this version.
