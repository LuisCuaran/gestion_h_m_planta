<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents("php://input");
$params = json_decode($json);

require("../conexion.php");

// Prevenir inyección SQL utilizando sentencias preparadas
$ins = "INSERT INTO usuarios(nombre, apellido, rol, usuario, clave) VALUES (?, ?, ?, ?, ?)";
$stmt = mysqli_prepare($conexion, $ins);

// Verificar si la preparación de la sentencia fue exitosa
if ($stmt) {
    // Vincular parámetros y ejecutar la sentencia
    mysqli_stmt_bind_param($stmt, 'sssss', $params->nombre, $params->apellido, $params->rol, $params->usuario, $params->clave);
    $resultado = mysqli_stmt_execute($stmt);

    // Verificar si la ejecución fue exitosa
    if ($resultado) {
        class Result {}
        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje = 'Datos grabados';

        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        // Manejar el caso en que la ejecución no fue exitosa
        class Result {}
        $response = new Result();
        $response->resultado = 'Error';
        $response->mensaje = 'No se pudieron grabar los datos';

        header('Content-Type: application/json');
        echo json_encode($response);
    }

    // Cerrar la sentencia preparada
    mysqli_stmt_close($stmt);
} else {
    // Manejar el caso en que la preparación de la sentencia falló
    class Result {}
    $response = new Result();
    $response->resultado = 'Error';
    $response->mensaje = 'No se pudo preparar la sentencia SQL';

    header('Content-Type: application/json');
    echo json_encode($response);
}

// Cerrar la conexión
mysqli_close($conexion);
?>



