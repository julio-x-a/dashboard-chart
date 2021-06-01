<?php

require('conexion.php');
$query = "SELECT * FROM vi_saldos";
$result = mysqli_query($conexion, $query);
$saldos = mysqli_fetch_array($result);

echo json_encode($saldos);

