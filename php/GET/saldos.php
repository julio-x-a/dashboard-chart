<?php

$db_host = 'win2008';
$db_name = 'bdconta25';
$db_user = 'root';
$db_pwd = '1234567891.123';

// *---- Conexión por procedimientos -----*/

$conexion = mysqli_connect($db_host, $db_user, $db_pwd, $db_name) or die("Fallo");
$query = "SELECT * FROM vi_saldos";
$result = mysqli_query($conexion, $query);
$saldos = [];
while ($rows = mysqli_fetch_array($result)) {
    $saldos = $rows;
}
// $response = [
//     "saldos" => $saldos,
// ];
echo json_encode($saldos);

