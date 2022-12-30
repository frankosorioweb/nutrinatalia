<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CouponsController;
use App\Http\Controllers\DownloadExtraController;

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

/** DOWNLOAD EXTRA **/
Route::get('/downloadExtraLeads', [DownloadExtraController::class, 'downloadCsv']);
Route::get('/downloadExtra', [DownloadExtraController::class, 'download']);
Route::post('/downloadExtra', [DownloadExtraController::class, 'index']);

/* ----- ----- PAGOPAR API ----- ----- */

/*Route::post('/pagopar/respuesta', function (Request $request) {
    $body = json_decode($request->getContent(), TRUE);
    $response = $body["resultado"];
    Log::info('Ejecución de la api /pagopar/respuesta', $response);

    return new JsonResponse($response);
});

Route::get('/pagopar/consulta', function (Request $request) {
    $api = "https://api.pagopar.com/api/pedidos/1.1/traer";
    $token_privado = 'ebe650b80d50cfccbab027de6115375e';

    $hash_pedido = '15d8ea4314489c2f6e8998a853e5430284cfcb2f1f6e9bf8cd42f39932fbb3ce';
    $token_publico = '13c957bcd627fcc6512e2e2820aa2349';
    $token = sha1("${token_privado}CONSULTA");

    $body = json_decode($request->getContent(), TRUE);

    $sendBody = [
        'hash_pedido' => $hash_pedido,
        'token' => $token,
        'token_publico' => $token_publico
    ];

    return new JsonResponse($sendBody);
});

Route::get('/pagopar/iniciar-transaccion', function (Request $request) {
    $pedido = [
        'token'     => '<token>',
        'comprador' => [
            'ruc'                  => '',
            'email'                => 'fernandogoetz@gmail.com',
            'ciudad'               => null,
            'nombre'               => 'Rudolph Goetz',
            'telefono'             => '0972200046',
            'direccion'            => '',
            'documento'            => '4247903',
            'coordenadas'          => '',
            'razon_social'         => 'Rudolph Goetz',
            'tipo_documento'       => 'CI',
            'direccion_referencia' => null
        ],
        'public_key'  => env('PAGOPAR_COMERCIO_TOKEN_PUBLICO'),
        'monto_total' => 100000,
        "tipo_pedido" => "VENTA-COMERCIO",
        "compras_items" => [
            [
                "ciudad" => "1",
                "nombre" => "Ticket virtual a evento Ejemplo 2017",
                "cantidad" => 1,
                "categoria" => "909",
                "public_key" => env('PAGOPAR_COMERCIO_TOKEN_PUBLICO'),
                "url_imagen" => "http =>//www.example.com/d7/wordpress/wp-content/uploads/2017/10/ticket.png",
                "descripcion" => "Ticket virtual a evento Ejemplo 2017",
                "id_producto" => 895,
                "precio_total" => 100000,
                "vendedor_telefono" => "",
                "vendedor_direccion" => "",
                "vendedor_direccion_referencia" => "",
                "vendedor_direccion_coordenadas" => ""
            ]
        ],
        "fecha_maxima_pago" => "2018-01-04 14:14:48",
        "id_pedido_comercio" => '1',
        "descripcion_resumen" => ""
    ];
    $pedido['token'] = sha1(env('PAGOPAR_COMERCIO_TOKEN_PRIVADO') . $pedido['id_pedido_comercio'] . strval(floatval($pedido['monto_total'])));

    return new JsonResponse([
        'pedido' => $pedido,
    ]);
});*/

/* ----- ----- FIN PAGOPAR API ----- ----- */