<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");


require("../conexion.php");

$del = "DELETE FROM herramientas WHERE id_herramientas=".$_GET['id'];

mysqli_query($conexion,$del) or die("no elimino");

class Result {}

$response = new Result();
$response->resultado= 'OK';
$response->mensaje = 'herramienta borrada';

header('Content-Type: application/json');
echo json_encode($response);

?>