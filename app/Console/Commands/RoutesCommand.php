<?php namespace App\Console\Commands;

use Illuminate\Console\Command;
use Route;

class RoutesCommand extends Command
{
    protected $signature = 'routes';

    public function handle()
    {
        $uris = [];
        foreach (Route::getRoutes() as $route) {
            $uris[] = '/' . $route->uri();
        }
        echo json_encode($uris);
    }
}
