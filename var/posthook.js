#!/bin/env node

const fs = require('fs');
const path = require('path');

const main = async () => {
  !fs.existsSync(path.resolve('./.env') && fs.copyFileSync(path.resolve('./.env.example'), path.resolve('./.env')));
};

main();
