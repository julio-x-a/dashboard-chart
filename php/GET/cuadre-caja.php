<?php

require('conexEsys.php');
$date = date('ymd');
$query = "CALL SP_CUADRE_BANCOS_FINAL('110505', 0, $date, $date)";
$result = mysqli_query($conexion, $query);
$row = [];
$response = [];

while ($rows = mysqli_fetch_array($result)) {
    $row['docref'] = $rows[0];
    $row['fecdoc'] = $rows[2];
    $row['deb'] = $rows[5]; 
    $row['cred'] = $rows[6]; 
    // $row['client'] = $rows[9];
    $row['nomfue'] = $rows[10];
    // $row['coment'] = $rows[11];
    $row['facfis'] = $rows[12]; 
    $response[] = $row;
}

echo json_encode($response);

