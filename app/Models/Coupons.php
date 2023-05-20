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
    /*[
      "name"       => "SANJUANDICEQUESI",
      "hash"       => '$2a$12$ppS4ZePXaMNnnby/5o39sOhLfvi55w8A/8SaGuT6eO/oA79fYmkAu',
      "percentage" => 20,
      "begin"      => "16-06-2022",
      "end"        => "19-06-2022"
    ],*/
    [
      "name"       => "TRIBUPACIENTES",
      "hash"       => '$2a$12$V.uc1eMSyoI3vGcaJCZtGeydF9BPkmPfQ/312cprpEbBCr2yNs1Tu',
      "percentage" => 15,
      "begin"      => "08-12-2022",
      "end"        => "01-01-2024"
    ],
    [
      "name"       => "TRIBUDESAFIO",
      "hash"       => '$2a$12$rxziDLEVqVlaHk3Kl9Ddau5d08CymXs8wK.Kd00.wB5yPIGwkkzmu',
      "percentage" => 20,
      "begin"      => "15-01-2023",
      "end"        => "01-01-2024"
    ],
    [
      "name"       => "KETO30",
      "hash"       => '$2a$12$5LRscAXayic77noMS0cHLufKt8lDBz8XOPlEWOODmt0r.x2tLmSGu',
      "percentage" => 20,
      "begin"      => "20-05-2023",
      "end"        => "05-06-2023"
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
