#!/bin/bash

const { execSync } = require('child_process');
const fs = require('fs');

const main = async () => {
  if (process.platform !== 'linux' || !fs.existsSync('/etc/supervisor/conf.d')) {
    console.warn('skipping supervisor restart...');
    return;
  }
  execSync('supervisorctl reread', { stdio: 'inherit' });
  execSync('supervisorctl update', { stdio: 'inherit' });
  execSync('supervisorctl stop phpworker:*', { stdio: 'inherit' });
  execSync('supervisorctl start phpworker:*', { stdio: 'inherit' });
};
main();
