const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let openapi;
openapi = JSON.stringify(yaml.load(fs.readFileSync(path.resolve(__dirname, 'openapi.yaml'), 'utf8')));
console.log(typeof openapi);
fs.writeFileSync(path.resolve(__dirname, './src/api.json'), openapi);

openapi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './src/api.json'), 'utf-8'));