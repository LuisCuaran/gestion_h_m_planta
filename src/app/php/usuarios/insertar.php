<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");

//$json = file_get_contents("php://input");

//$params = json_decode($json);

require("../conexion.php");

$ins = "insert into usuarios(nombre, apellido, rol, telefono, contraseña) values ('prueba','prueba' ,'prueba' ,'prueba' ,'prueba')";

//$ins ="insert into usuarios(nombre, apellido, rol, telefono, contraseña) values("$params->nombre", "$params->apellido", "$params->rol", "$params->telefono", "$params->contraseña")";
mysqli_query($conexion, $ins) or die('no inserto');


class Result {}

$response = new Result();
$response->resultado = 'ok';
$response->mensaje = 'datos grabados';

header('Content-Type: aplication/json');
echo json_encode($response);

?>


