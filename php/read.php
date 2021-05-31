<?php

require('conexion.php');
$query = "SELECT nombre, cantidad_en_stock AS cant FROM producto 
          GROUP BY nombre  LIMIT 10";
$result = mysqli_query($conexion, $query);
$names = [];
$stock = [];


while ($rows = mysqli_fetch_array($result)) {
    $names[] = $rows[0];
    $stock[] = $rows[1];
}

$response = [
    "names" => $names,
    "stock" => $stock
];

echo json_encode($response);
