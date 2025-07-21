const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('example.txt');
const output = fs.createWriteStream('example.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);