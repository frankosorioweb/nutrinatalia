<?php

namespace App\Http\Controllers;

use DateTime;
use DateTimeZone;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Response as FacadesResponse;
use Illuminate\Support\Facades\Storage;

class DownloadExtraController extends Controller
{
  public function index(Request $request)
  {
    $this->verify_save_lead($request);

    return new JsonResponse([
      "msg" => "Datos guardados correctamente",
    ]);
  }

  private function verify_save_lead($request)
  {
    if( !$this->exists_lead($request) ) {
      $this->save_lead($request);
    }
  }

  private function exists_lead(Request $request) {
    $db_extra_lead = $this->get_extra_db_file();
    $exists = false;

    $email = $request->post('email');
    $file = $request->post('file');

    $csvArray = array_map('str_getcsv', file($db_extra_lead));
    foreach ($csvArray as $lead) {
      /* lead[1] = email
         lead[4] = file */
      if( strtolower($lead[1]) === strtolower($email) ) {
        $exists = true;
        break;
      }
    }
    
    return $exists;
  }

  private function get_extra_db_file() {
    return Storage::path("extras/downloads-db.csv");
  }
  
  private function save_lead(Request $request) {
    $db_extra_lead = $this->get_extra_db_file();
  
    $email = $request->post('email');
    $names = $request->post('names');
    $whatsapp = $request->post('whatsapp');
    // $file = $request->post('file');

    $out = fopen($db_extra_lead, 'a');
    fputcsv($out, array($this->getDatetimeNow(), $email, $names, $whatsapp));
    fclose($out);
  }

  private function getDatetimeNow()
  {
    $tz_object = new DateTimeZone('America/Asuncion');

    $datetime = new DateTime();
    $datetime->setTimezone($tz_object);
    return $datetime->format('Y\-m\-d\ h:i:s');
  }

  public function download(Request $request)
  {
    $file_name = $request->get('file');
    $headers = [
      'Content-Type' => 'application/pdf',
    ];

    $file = Storage::path("extras/$file_name");
    return response()->download($file, $file_name, $headers);
  }

  public function downloadCsv(Request $request) {
    $verify_token = '$2a$12$yFs7ti/qqv4yIO6MEWJoCeUr.zAu6KRuFcBbNQiIhOTGAj4g2ODJe';
    $token_param = $request->get('token', '');

    if( $verify_token == $token_param ) {
      $file = $this->get_extra_db_file();
      $headers = array(
        'Content-Type: application/csv',
      );

      //'downloads-extras-db.csv'
      return FacadesResponse::download($file, null, $headers);
    } else {
      return new JsonResponse([
        "msg" => "Acceso denegado"
      ],  Response::HTTP_UNAUTHORIZED);
    }
  }
}
