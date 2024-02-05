<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "gestion_h_m_planta";

    $conexion = mysqli_connect($servidor, $usuario, $clave) or die ("no se conecto a mysql");
    mysqli_select_db($conexion, $bd) or die("no se encontro la base de datos");