# :rocket: next-inline-svg

[![License](https://img.shields.io/npm/l/@svgr/core.svg)](https://github.com/smooth-code/svgr/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/next-inline-svg/latest.svg)](https://www.npmjs.com/package/next-svgr)

[`SVGR`](https://react-svgr.com/docs/next/) takes a raw SVG and transforms it into a ready-to-use `React component`.

## Installation

```bash
npm i next-inline-svg -D
# or with yarn
yarn add next-inline-svg -D
```

Then, import the library in your `next.config.js` file.

```js
const withSvgr = require("next-inline-svg")();

// Example with options:
const withSvgr = require("next-inline-svg")({
  titleProp: true,
  icon: true,
  svgProps: {
    height: "auto",
  },
});
```

## Options

The plugins supports all available options of svgr webpack loader. Check out the [svgr documentation](https://react-svgr.com/docs/options/) for the full list of options.

## Usage

You can now start importing your SVG files as if they were components:

```js
import MyIcon from "./myicon.svg";

export default () => (
  <div>
    <MyIcon />
  </div>
);
```


## Sample `next.config.js`

```js
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withInlineSvg = require("next-inline-svg")();

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withInlineSvg]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...nextConfig })
}
```
