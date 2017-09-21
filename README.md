psd2pngl
==================

Image convertor, PSD to PNG, for node.js


## usage

    $ npm install psd2pngl --save

```javascript

var psd2png = require('psd2pngl')
  , fs = require('fs')
;

fs.readFile('./psd.psd', function (err, buffer) {
    if (!!err) throw err;

    var pngbuffer = psd2png(buffer);

    fs.writeFileSync('./image.png', pngbuffer);

});

