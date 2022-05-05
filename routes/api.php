<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CouponsController;

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

Route::get('/getPresentationVideoMp4', function () {
    $response = response()->file(public_path('videos/presentation.mp4'), [
        'Content-Type' => 'video/mp4'
    ]);

    return $response;
});

Route::get('/getPresentationVideoWebM', function () {
    $response = response()->file(public_path('videos/presentation.webm'), [
        'Content-Type' => 'video/webm'
    ]);

    return $response;
});

Route::get('/getPresentationVideoOgg', function () {
    $response = response()->file(public_path('videos/presentation.ogg'), [
        'Content-Type' => 'video/ogg'
    ]);

    return $response;
});

Route::get('/date', function () {
    $date = date_create('now', new DateTimeZone("America/Asuncion"));
    return new JsonResponse([
        $date
    ]);
});

Route::get('/validateCoupon/{coupon}', [CouponsController::class, 'validator']);

/*Route::get('/validateCoupon/{coupon}', function ($coupon) {
    $coupons = [
        [
            "value"     => "KETOAYUNOFF",
            "percetage" => "20",
            "validUpTo" => "17-04-2022"
        ]
    ];

    $existsCoupon = $coupons[0]["value"] == strtoupper($coupon) ? true : false;
    // Verificamos si el cupón existe
    if ($existsCoupon) {

        $actualDate = date_create('now', new DateTimeZone("America/Asuncion"));
        $couponExpireDate = date_create($coupons[0]["validUpTo"], new DateTimeZone("America/Asuncion"));
        $dateDiff = (int) date_diff($actualDate, $couponExpireDate)->format("%R%d");
        // Verificamos si el cupón ha expirado
        if ($dateDiff < 0) {
            return new JsonResponse([
                "coupon" => [
                    "exists"    => true,
                    "expired" => true
                ]
            ], Response::HTTP_OK);
        } else {
            // El cupón existe y no ha expirado
            return new JsonResponse([
                "coupon" => [
                    "exists"    => true,
                    "expired" => false
                ]
            ], Response::HTTP_OK);
        }
    } else {
        return new JsonResponse([
            "coupon" => [
                "exists"    => false,
                "expired" => false
            ]
        ], Response::HTTP_OK);
    }
});*/