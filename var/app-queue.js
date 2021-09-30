#!/usr/bin/env node

const { exec } = require('child_process');

const runSchedule = () => exec('php artisan schedule:run >> ./output.log 2>&1');
setInterval(() => runSchedule(), 60000);
runSchedule();

exec('php artisan queue:work --timeout=0 >> ./output.log 2>&1');
exec('php artisan queue:work --timeout=0 >> ./output.log 2>&1');
exec('php artisan queue:work --timeout=0 >> ./output.log 2>&1');
exec('php artisan queue:work --timeout=0 >> ./output.log 2>&1');
