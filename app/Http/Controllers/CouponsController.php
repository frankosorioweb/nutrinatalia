<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupons;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CouponsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function validator(Request $request, $coupon)
    {
        $couponModel = new Coupons();

        // 1. Verificamos si el cupón introducido existe
        $exists = $couponModel->exists($coupon);
        if( !$exists ) return $this->getResponse(FALSE, FALSE);

        // 2. Verificamos que nos encontramos en la fecha de activación del cupón y si el mismo no ha expirado
        $couponData = $couponModel->isStartedAndNotExpired($coupon);
        if( !$couponData[0] ) return $this->getResponse(TRUE, FALSE);
        
        // 3. Cupón OK
        return $this->getResponse(TRUE, TRUE, $couponData[1]);
    }

    private function getResponse($exists, $valid, $hash = null) {
        return new JsonResponse([
            "coupon" => [
                "exists" => $exists,
                "valid"  => $valid,
                "hash"   => $hash
            ]
        ], Response::HTTP_OK);
    }
}
