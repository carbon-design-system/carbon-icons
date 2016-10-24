# Install

The following are guidelines for installing and using bluemix-icons.

#### NPM (recommended)

Set up sinopia: This is the internal npm registry for Bluemix. Set up your repo to install icons from this registry to use bluemix-icons.

Create an **.npmrc** file (you can create this in the root of your project folder or on your computer's **~** directory).

```sh
$ touch .npmrc
```

Next, write the following into your **.npmrc** file:

```
//dev-console-npm.stage1.ng.bluemix.net/:_authToken="u6vjQywpRv51/eKBiRcAFA=="
@console:registry=https://dev-console-npm.stage1.ng.bluemix.net/
```

If you haven't done so already, create a **package.json** for your project:

```sh
$ npm init
```

Finally, install bluemix-icons with `npm`.


```sh
npm install --save @console/bluemix-icons
```


#### Bower
```sh
bower install bluemix-icons --save
```

#### Download 
You can also **download** a `.zip` or `.tar.gz` file from the [latest releases here.](https://github.ibm.com/Bluemix/bluemix-icons/releases)

# Polyfill

Using `bluemix-icons` relies on the use of [external svg content](https://css-tricks.com/svg-sprites-use-better-icon-fonts/##Browser+Support) via `<use>` and `xlink:href`.
For browser-compatibility, we require the use of the [svg4everybody](https://github.com/jonathantneal/svg4everybody#svg-for-everybody) polyfill.

Install `svg4everybody` and invoke it manually

```sh
npm install --save svg4everybody
```

```html
<!--index.html-->
<body>
  ...
  <script src="path/to/svg4everybody.js"></script>
  <script>svg4everybody({ polyfill: true }); // run it now or whenever you are ready</script>
</body>
```

Or you can `import` or `require` it into your main JavaScript file and bundle it with `Webpack`:

```js
// bundle.js
const svg4everybody = require('svg4everybody');
svg4everybody({ polyfill: true }); // run it now or whenever you are ready
```

```html
<!--index.html-->
<body>
  ...
  <script src="path_to_bundle.js"></script>
</body>
```

## Inline SVG

If you opt to inline SVG, be aware of the drawbacks:

- No caching
- Manual lookup and download of individual SVG icons
- Will fall out of sync with future updates to `bluemix-icons`

If you're using [bluemix-components-react](), SVG icons are inlined by default via `Icon` component and will still stay in-sync with future versions of blueix-icons.

> Next, see [usage](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/usage.md) for documentation on using bluemix-icons.
