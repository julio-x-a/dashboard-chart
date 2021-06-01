<?php

$db_host = 'localhost';
$db_name = 'jardineria';
$db_user = 'root';
$db_pwd = '';

// $db_host = 'win2008';
// $db_name = 'bdconta25';
// $db_user = 'root';
// $db_pwd = '1234567891.123';

//*---- Conexión por procedimientos -----*/

$conexion = mysqli_connect($db_host, $db_user, $db_pwd, $db_name) or die("Fallo");
