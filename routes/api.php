<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getPresentationVideoMp4', function() {
    $response = response()->file(public_path('videos/presentation.mp4'),[
        'Content-Type' => 'video/mp4'
    ]);
    
    return $response;
});

Route::get('/getPresentationVideoWebM', function() {
    $response = response()->file(public_path('videos/presentation.webm'),[
        'Content-Type' => 'video/webm'
    ]);
    
    return $response;
});