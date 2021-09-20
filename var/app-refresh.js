import { execSync } from 'child_process';

execSync('composer -n install', { stdio: 'inherit' });
execSync('php artisan view:clear', { stdio: 'inherit' });
execSync('php artisan config:clear', { stdio: 'inherit' });
execSync('php artisan cache:clear', { stdio: 'inherit' });
execSync('composer -n dump-autoload');
execSync('php artisan config:cache', { stdio: 'inherit' });
// execSync('php artisan view:cache', { stdio: 'inherit' });
execSync('php artisan queue:restart', { stdio: 'inherit' });
