#!/bin/env node

const fs = require('fs');
const path = require('path');

const main = async () => {
  !fs.existsSync(path.resolve('./.env') && fs.copyFileSync(path.resolve('./.env.example'), path.resolve('./.env')));

  fs.existsSync(path.resolve('../pocket/env.json')) &&
    fs.copyFileSync(path.resolve('../pocket/env.json'), path.resolve('./node_modules/@app/omni/env.json'));

  fs.rmdirSync(path.resolve('./node_modules/@app/omni/certs'), { recursive: true });
  fs.mkdirSync(path.resolve('./node_modules/@app/omni/certs'));
  fs.readdirSync(path.resolve('../pocket/certs')).map((item) => {
    const fullpath = path.resolve('../pocket/certs', item);
    if (fs.lstatSync(fullpath).isDirectory() || item.charAt(0) === '.') {
      return;
    }
    fs.copyFileSync(fullpath, path.resolve('./node_modules/@app/omni/certs', item));
  });
};

main();
