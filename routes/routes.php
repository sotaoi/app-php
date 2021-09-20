<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['api', 'auth:api']], function() {
    Route::get('/p-api/user', function (Request $request) {
        return $request->user();
    });
});

Route::group([], function() {
    Route::get('/gg', function () {
        return 'gg';
    });

    Route::get('/ff', function () {
        return 'ff';
    });
});
