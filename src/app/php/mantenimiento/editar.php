<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$pamas = json_decode($json);

require("../conexion.php");

$editar = "UPDATE mantenimiento SET fecha='$params->fecha', descripcion='$params->descripcion', costo='$params->costo', fo.herramientas='$params->foherramientas', WHERE id_mantenimiento=$params->id_usuarios";
mysql_query($conexion, $editar) or die('no edito');

class Result {}
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);