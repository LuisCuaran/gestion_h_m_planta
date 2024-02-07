<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$pamas = json_decode($json);

require("../conexion.php");

$editar = "UPDATE herramientas SET nombre='$params->nombre', descripcion='$params->descripcion', cantidad_disponible='$params->cantidad_disponible', cantidad_total='$params->cantidad_total', fecha_compra='$params->fecha_compra', precio='$params->precio , fo.proveedor='$params->foproveedor', fo.categoria='$params->focategoria' hacer baken' WHERE id_herramientas=$params->id_herramientas";
mysql_query($conexion, $editar) or die('no edito');

class Result {}
$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);