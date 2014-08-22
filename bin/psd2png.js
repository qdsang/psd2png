#! /usr/bin/env node

/*

psd2png ./psd.psd

*/

var psd2png = require('../index.js')
  , fs = require('fs')
  , path = require('path')
;

var intputPath = process.argv[2];
var outputPath = './';

if (!intputPath) {
	console.log(' eg: psd2png ./psd.psd');
	process.exit();
}

var basename = path.basename(intputPath, path.extname(intputPath));
var outputFile = path.join(outputPath, basename + '.png');

fs.readFile(intputPath, function (err, buffer) {
    if (!!err) throw err;

    var pngbuffer = psd2png(buffer);
    fs.writeFileSync(outputFile, pngbuffer);

    console.log('complete : '+outputFile+'!');
});
