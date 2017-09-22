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

