<?php
require('conexEsys.php');

// *---- Conexión por procedimientos -----*/
$query = "SELECT * FROM vi_saldos";
$result = mysqli_query($conexion, $query);
$saldos = [];
while ($rows = mysqli_fetch_array($result)) {
    $saldos['saldoCaja'] = $rows[0];
    $saldos['saldoCartProv'] = $rows[1];
    $saldos['saldoCart'] = $rows[2];
    $saldos['saldoInv'] = $rows[3];
    $saldos['cantidadInv'] = $rows[4];
    $saldos['egresos'] = $rows[5];
}
// $response = [
//     "saldos" => $saldos
// ];
echo json_encode($saldos);

