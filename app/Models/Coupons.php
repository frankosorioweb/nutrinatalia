<?php

namespace App\Models;

use DateTime;
use DateTimeZone;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;

class Coupons extends Model
{
  /**
   * El nombre de los cupones debe ir en mayúsculas para que los métodos de este modelo funcionen correctamente
   * end: Es la fecha de expiración, a partir de esta fecha el cupón deja de funcionar
   */
  private $coupons = [
    [
      "name"       => "OFFTRIBUPANES",
      "hash"       => '$2a$12$pfRyfpxH79P4zwzxXUC.huOkvHn17CEATlrf1R9X41KWaVPn62Z.a',
      "percentage" => 20,
      "begin"      => "09-05-2022",
      "end"        => "15-05-2022"
    ],
  ];

  public function getAll()
  {
    return $this->coupons;
  }

  /**
   * 
   */
  public function exists($search) {
    $exists = FALSE;
    for ($i=0; $i < count($this->coupons) ; $i++) { 
      if( strtolower($this->coupons[$i]['name']) === strtolower($search) ) {
        $exists = TRUE;
        break;
      }
    }
    
    return $exists;
  }

  /**
   * 
   */
  public function isStartedAndNotExpired($coupon) {
    $dateTimeZone = new DateTimeZone("America/Asuncion");

    $couponIndex = array_search(strtoupper($coupon), array_column($this->coupons, 'name'));
    $couponData = $this->coupons[$couponIndex];

    $now   = (new \DateTime('now', $dateTimeZone))->getTimestamp();
    $begin = (new \DateTime($couponData['begin'], $dateTimeZone))->getTimestamp();
    $end   = (new \DateTime($couponData['end'], $dateTimeZone))->getTimestamp();

    $isBetween = FALSE;

    if( $now >= $begin && $now < $end ) {
      $isBetween = TRUE;
    }

    return [$isBetween, $couponData['hash']];
  }
}
