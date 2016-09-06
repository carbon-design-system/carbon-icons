# Contributing

Prepping icons for contribution involves a few steps:
* In Sketch or Illustrator: Verifying designs and styles
* In code: Moving `fill-rule` properties 

## Design Requirements

**TL;DR**: 

* When possible, do not include internal padding.
* Export SVGs from **Sketch** or **Illustrator**
* Double check source code

> Always convert paths and other shapes to outline. We want our SVG code to render with `fill` attributes -- not `stroke`

### Background, Alignment and Shapes

In your preferred design software, ensure the following things.

* Background: 100% Transparent
* Artboard Alignment: Centered
* Convert paths and other shapes to outline so that SVG code will resolve to use `fill` attributes &mdash; not `stroke` attributes.

### Internal Padding

Icons should fit exactly within the dimensions of its artboard.

![no internal padding example 2](https://media.github.ibm.com/user/76/files/2fab2d40-7433-11e6-8b3d-3af78f3d0833)

Do not include internal padding or whitespace.
For example, the icon shown below correctly sits along the top, left and bottom dimensions of its artboard.
But the red circle indicates where there is some internal padding. 

![no internal padding example 1](https://media.github.ibm.com/user/76/files/882e21d0-7437-11e6-8576-e70d6f2685a8)

> **Exceptions**: Internal padding is only acceptable when an icon does not land *exactly* on the edge of a pixel &mdash; instead, it lands in the middle of a pixel causing unwanted aliasing when the icon renders. This makes icons look fuzzy when they should look sharp.
In these situations, consult with a visual designer to redraw the icon. 
Otherwise, export the icon with minimal internal padding **vertically** or **horizontally**. 

Here's an example of an icon with vertical padding:
![vertical padding example](https://media.github.ibm.com/user/76/files/2f51c1b0-7433-11e6-803f-cce2f36344e7)

### Width, Height and ViewBox

The `width`, `height` and `viewBox` attributes are required to ensure proper rendering of SVG icons.

```xml
<svg width="32px" height="32px" viewBox="0 0 32 32">
  ...    
</svg>
```

Keep in mind that icons can be resized with CSS regardless of the initial values of these attributes.
In other words, your icons artboard can be based on the actual dimensions of your icon. 

### Small Icons 

![no internal padding example 2](https://media.github.ibm.com/user/76/files/2fab2d40-7433-11e6-8b3d-3af78f3d0833)

Small icons are an exception (`24px` or `16px`). Icons designed and drawn at large sizes can contain a lot of tiny details that can become difficult for users to interpret at small sizes.
In these situations, the icon may need to be redrawn or a new smaller version of the icon should be created. 
Consult with the original icon designer, a visual designer or get in contact with members of the Design Systems team for assistance.

## Code Requirements

Most of the XML nodes and attributes are automatically kept or removed based on our SVGO configuration.
But there are a small number of tasks that require manual code editing of the SVL XML.

### Manual Editing

* Move `fill-rule="evenodd"` to the parent `<svg>` node.
* Remove `<g>` nodes so that paths and shapes are direct children of the parent `<svg>` node.

### JSON and XML

Bluemix Icons performs a build step before publishing to the private registries.
This build step (`npm run build`) will create two distributables:

- icons.json: JSON metadata used for React Icon component and Design System Website
- sprite.svg: SVG spritesheet used with vanilla Bluemix Components.

Do not check these files into your pull request.
Build locally and examine both files.

For **sprite.svg**:

Make sure that the attributes are represented in the react `Icon` component and sprite.svg


For **icons.json**:

Make sure there's no empty `svgData`.


## Adding Icons
Please submit a Pull Request to add icons.

1. Fork this repo
2. Clone it to your local system
3. Add icons in the proper folder (you may add your own) within the `svg/` folder
4. In your terminal run `npm install`
5. Run `npm run build` to rebuild the `sprite.svg`
6. Submit a pull request and rejoice! :tada:
7. **Optional**: Contact Brian Han (bthan@us.ibm.com) and let him know you have a pull request for him to review.

> Bluemix Icons is registered to a Private Bower Registry.

> A `.bowerrc` config file points to the correct registry:

> ```json
{
  "registry": "http://9.37.228.216:5678/",
  "timeout": 300000
}
```
