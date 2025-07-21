const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('example.txt.gz');
const output = fs.createWriteStream('example_unzipped.txt');

input.pipe(zlib.createGunzip()).pipe(output);