//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const directoryPath = path.format({ dir: '../../../CodeWars' });

const ListFiles = () => {
  return fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
      console.log(file);
    });
    return files;
  });
};

export default ListFiles;
