## Migrating from 4.x to 5.x

We had to make an emergency breaking change to namespace our svg `id` attributes.
Now, all `id`s are prefixed with `icon--`.

Whether you're using **bluemix-icons.svg** or **sprite.svg**, you can update your `<use xlink:href>` to use the new prefix.

```html
<svg class="icon">
  <use
    xlink:href="/path_to_static-assets/bluemix-icons.svg#icon--icon_name"
  ></use>
</svg>
```

Since this breaking change was made so suddently, we will continue to support sprite.svg and its respective legacy icons for this version.
