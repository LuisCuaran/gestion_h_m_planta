<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");


require("../conexion.php");

$del = "DELETE FROM inventario WHERE id_inventario=".$_GET['id'];

mysqli_query($conexion,$del) or die("no elimino");

class Result {}

$response = new Result();
$response->resultado= 'OK';
$response->mensaje = ' borrado';

header('Content-Type: application/json');
echo json_encode($response);

?>