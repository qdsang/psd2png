psd2png
==================

Image convertor, PSD to PNG, for node.js


## usage

    $ npm install psd2png --save

```javascript

var psd2png = require('psd2png')
  , fs = require('fs')
;

fs.readFile('./psd.psd', function (err, buffer) {
    if (!!err) throw err;

    var pngbuffer = psd2png(buffer);

    fs.writeFileSync('./image.png', pngbuffer);

});


```

Stats
-----

[![NPM](https://nodei.co/npm/psd2png.png?downloads=true&stars=true)](https://nodei.co/npm/psd2png/)
[![NPM](https://nodei.co/npm-dl/psd2png.png)](https://nodei.co/npm/psd2png/)

