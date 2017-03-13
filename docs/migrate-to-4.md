## Migrating from `3.x` to `4.x`

### Dropping support for Bower

Please use `npm` from now on. See [install](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/docs/install.md#install) docs for more details.

### Using alternative names for icons

For some icons, you we intentionally duplcated icons so that you can use different names to access them.
As long as the the filenames are unique across sprite.svg and bluemix-icons.svg, this should work. Running `npm test` ensures that all names are unique.

| Original Name | Alternative Name |
|---------------|------------------|
| dashboard     | console |
| api           | apis |
| financial     | finance |
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
