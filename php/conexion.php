<?php

$db_host = 'localhost';
$db_name = 'jardineria';
$db_user = 'root';
$db_pwd = '';

//*---- Conexión por procedimientos -----*/

$conexion = mysqli_connect($db_host, $db_user, $db_pwd, $db_name) or die("Fallo");
