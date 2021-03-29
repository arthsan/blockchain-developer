fs = require('fs');

imgReadBuffer = fs.readFileSync('./test-pattern.jpg');

imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

var imgHexDecode = new Buffer(imgHexEncode, 'hex');

fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);