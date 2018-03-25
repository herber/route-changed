<h1 align="center">Route-changed</h1>

<p align="center"><a href="https://travis-ci.org/herber/route-changed"><img src="https://travis-ci.org/herber/route-changed.svg?branch=master" alt="Build Status" /></a></p>

<p align="center">🛤️🛣️ A better way to listen for url changes.<p>

## Install

```
$ npm install route-changed
```

## Usage

```js
const routeChanged = require('route-changed');

routeChanged((url) => {
  // The url changed
  console.log(url);
});
```

## API

### routeChanged(cb, url)

#### cb

Type: `function`

Will be executed when the url changes.

#### url

Type: `function`

An optional function that should return a url-`String`.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
