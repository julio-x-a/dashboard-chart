<?php

require('conexEsys.php');
$query = "SELECT * FROM vi_saldos";
$result = mysqli_query($conexion, $query);
$response[] = 