# Migrating to `3.x`

## :skull: Deprecated in `3.x`

> All **subfolders** in [svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg) are **deprecated**.
> Please use svg icons that are directly located in [svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg) unless they're listed below.

| Filename                                                                                          | Notes                                                                                                                                  |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| :x: [copy.svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg/copy.svg)             | :white_check_mark: Replaced by [copy--new.svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg/copy--new.svg)             |
| :x: [copy--code.svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg/copy.svg)       | :white_check_mark: Replaced by [copy--new.svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg/copy--new.svg)             |
| :x: [containers.svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg/containers.svg) | :white_check_mark: Replaced by [containers--new.svg](https://github.ibm.com/Bluemix/bluemix-icons/blob/master/svg/containers--new.svg) |

## :exclamation: About `2.x` => `3.x`

> Refer to updated documentation for migrating to the newest `3.x` release of bluemix-icons.
> Below you'll find important touch points on what major changes may affect your use of `3.x`.

The change to `3.x` is a result of a full consolidation of all icon libraries for Bluemix (bluemix-icons and design-kit).
Major changes were made so that we only include essential icons that are in use across the Bluemix product. This version update was also needed to allow the team to **redraw** and **resize** icons to align with design standards.

**Updated Main Files**:

Bluemix Icons now ships with two main SVG files and two main JSON files.

| filename           | description                                                                                                                                                     | supported versions     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| bluemix-icons.svg  | Contains current icons (consolidated subset of legacy icons used in Bluemix)                                                                                    | `3.x` and newer        |
| bluemix-icons.json | JSON file created from bluemix-icons.svg, used in `Icon` React Component in [bluemix-components-react](https://github.ibm.com/Bluemix/bluemix-components-react) | `3.x` and newer        |
| sprite.svg         | SVG sprite contains legacy icons                                                                                                                                | `1.x`, `2.x` and `3.x` |
| icons.json         | legacy JSON file created from sprite.svg                                                                                                                        | `1.x`, `2.x` and `3.x` |

- **Sizing**: New icons have been resized to meet design requirements (`24px` or `16px`).

- **Padding**: Internal padding has been removed from all icons.

- **Redrawn Icons**: Some icons have been redrawn due to sizing or other issues with previous icon designs.
  A full list of redrawn icons and affected HTML files is listed in the [release notes](https://github.ibm.com/Bluemix/bluemix-icons/releases/tag/3.0.0).

- **New Icons**: All new icons can be found in the [svg]() folder but not in any svg subfolder.

- **Legacy Icons**: Any icons in an svg subfolder are legacy icons. Consider legacy icons to be deprecated. We will support the use of these icons until the release of `4.x`.

- **Service Icons**: All icons for internal services that require hardcoded colors will be maintained and updated in the [Master Icon List in Release Blueprints](https://releaseblueprints.ibm.com/display/CLOUDOE/Master+Icon+List). This is temporary measure.
