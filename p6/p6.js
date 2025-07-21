const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

unlinkAsync('niv.txt')
  .then(() => {
    console.log('File deleted successfully');
  })
  .catch((err) => {
    console.error('Error deleting file:', err);
  });
