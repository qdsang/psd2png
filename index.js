
'use strict';

var PSD = require('psd');

function psd2png(buffer) {

    //var psd = PSD.fromFile(file.realpath);
    var psd = new PSD(buffer);
    
    psd.parse();

    var png = psd.image.toPng();

    var pngjs_require = './node_modules/psd/node_modules/pngjs/lib/';
    var constants = require(pngjs_require + 'constants');
    var Filter = require(pngjs_require + 'filter');
    var Zlib = require('./node_modules/zlibjs/bin/node-zlib.js');
    var packer = png._packer;

    packer.pack2 = function(data, width, height) {
        var datas = [];
        // Signature
        datas.push(new Buffer(constants.PNG_SIGNATURE));
        datas.push(this._packIHDR(width, height));

        // filter pixel data
        var filter = new Filter(width, height, 4, data, this._options);
        var data = filter.filter();

        var compressed = new Zlib.deflateSync(data);


        datas.push(this._packIDAT(compressed));
        datas.push(this._packIEND());

        var len = 0;
        for (var i = 0; i < datas.length; i++) {
            len += datas[i].length;
        }

        return Buffer.concat(datas, len);
    };

    var pngbuffer = packer.pack2(png.data, png.width, png.height);

    return pngbuffer;
}

module.exports = psd2png;
