<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$pamas = json_decode($json);

require("../conexion.php");

$editar = "UPDATE usuarios SET ubicacion='$params->ubicacion', fecha_entrada='$params->fecha_entrada',fecha_salida ='$params->fecha_salida', observaciones='$params->observaciones', fo.herramientas='$params->foherramientas' WHERE id_inventario=$params->id_inventario";
mysql_query($conexion, $editar) or die('no edito');

class Result {}
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);