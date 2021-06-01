<?php

require('conexion.php');
$query = "SELECT nombre, precio_venta AS precio FROM producto 
          GROUP BY nombre ORDER BY precio DESC LIMIT 10";
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

