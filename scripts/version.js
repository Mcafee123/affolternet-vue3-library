"use strict";

const path = require('path');
const fs = require('fs');

const packagePath = path.resolve(__dirname, '..', './package.json');

function save(json) {
  const content = JSON.stringify(json, null, 1);
  fs.writeFile(packagePath, content, 'utf-8', (error) => {
    if (error) {
      console.log(error);
      process.exit();
    }
  });
}


fs.readFile(packagePath, 'utf-8', (error, content) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  var json = JSON.parse(content);
  if (json.version) {
    const parts = json.version.split('.');
    if (parts.length === 3) {
      const last = parts.length -1;
      const patch = parseInt(parts[last]);
      if (!isNaN(patch)) {
        parts[last] = (patch + 1).toString();
        json.version = parts.join('.');
        console.log(json.version);
        save(json);
      }
    }
  }
});