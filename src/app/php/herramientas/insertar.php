<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents("php://input"); // se comenta para hacer pruebas

$params = json_decode($json); // se comenta para hacer pruebas

require("../conexion.php");

//$ins = "insert into usuarios(nombre, apellido, rol, telefono, contraseña) values ('prueba','prueba' ,'prueba' ,'prueba' ,'prueba')"; // se descomenta para hacer la prueba

$ins ="insert into herramientas(nombre, descripcion, canntidad_disponible, cantidad_total, precio, fo.proveedor, fo.categoria) values('$params->nombre', '$params->descripcion', '$params->anntidad_disponible', '$params->antidad_total', '$params->precio', '$params->foproveedor','$params->focategoria')";
mysqli_query($conexion, $ins) or die('no inserto'); //se comenta para hacer pruebas


class Result {}

$response = new Result();
$response->resultado = 'ok';
$response->mensaje = 'datos grabados';

header('Content-Type: aplication/json');
echo json_encode($response);

?>