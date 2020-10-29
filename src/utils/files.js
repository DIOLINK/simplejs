//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const directoryPath = path.join('challenge');

export const listFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};
