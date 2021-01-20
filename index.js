var qr = require('node-qr-image');
var fs = require('fs');
var QR_Srting = "https://www.youtube.com/";
 
var qr_png = qr.image(QR_Srting, { type: 'png', ec_level: 'H', size: 400 ||400 , margin:0 });
qr_png.pipe(fs.createWriteStream('demoQR.png'));