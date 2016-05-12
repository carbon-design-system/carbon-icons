# Contributing

## Requirements
* Export SVGs from **Sketch** or **Illustrator** 
* Make sure SVGs are exported at `32px`.
* Export clean SVG code where possible

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
