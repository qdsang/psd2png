psd2png
==================

Image convertor, PSD to PNG, for node.js

## 说明

psd 目前只支持RGB颜色模式哦！
不然爆以下错误概不负责，请自行调整（PhotoShop menu -> 图像 -> 模式 -> RGB 颜色）
```
[ERROR] parser.psd: Object #<Image> has no method 'combineCmykChannel'
```
或者
```
[ERROR] parser.psd: Object #<Image> has no method 'combineGreyscaleChannel'
```



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
