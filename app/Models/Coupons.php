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
   */
  private $coupons = [
    [
      "name"       => "FLASHSALEDULCES",
      "hash"       => "$2y$08$23ZrfghBvigreWGRy3ZpOuIRevdHcVWjf5Md60MFWbqW6fFlsE.0.",
      "percentage" => 20,
      "begin"      => "29-04-2022",
      "end"        => "03-05-2022"
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
