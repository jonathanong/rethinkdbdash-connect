# RethinkDB Connect

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

An easy way to connect to rethinkdb via rethinkdbdash.

## Example

```js
const r = require('rethinkdbdash-connect')({
  url: process.env.RETHINKDB_URL, // URL of the server
  ca: process.env.RETHINKDB_CA, // CA for SSL
})
```

[npm-image]: https://img.shields.io/npm/v/rethinkdbdash-connect.svg?style=flat-square
[npm-url]: https://npmjs.org/package/rethinkdbdash-connect
[travis-image]: https://img.shields.io/travis/jonathanong/rethinkdbdash-connect/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/rethinkdbdash-connect
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/rethinkdbdash-connect/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/rethinkdbdash-connect
[david-image]: http://img.shields.io/david/jonathanong/rethinkdbdash-connect.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/rethinkdbdash-connect
[license-image]: http://img.shields.io/npm/l/rethinkdbdash-connect.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/rethinkdbdash-connect.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/rethinkdbdash-connect
