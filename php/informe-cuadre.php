<?php

$db_host = 'win2008';
$db_name = 'bdconta25';
$db_user = 'root';
$db_pwd = '1234567891.123';
// $date = date('ymd');

$conexion = mysqli_connect($db_host, $db_user, $db_pwd, $db_name) or die("Fallo");
$query = "CALL SP_CUADRE_BANCOS_FINAL('110505', 0, '210612', '210612')";
$result = mysqli_query($conexion, $query);
$docref = [];
$date = [];
$debito = [];
$credito = [];
$client = [];
$fuente = [];
$comment = [];
$facfis = [];

while ($rows = mysqli_fetch_array($result)) {
    $docref[] = $rows['DOCREF'];
    $date[] = $rows['FECDOC'];
    $debito[] = $rows['DEBITO']; 
    $credito[] = $rows['CREDITO']; 
    $client[] = $rows['COMENT'];
    $fuente[] = $rows['NOMFUE'];
    $comment[] = $rows['COMEN1'];
    $facfis[] = $rows['FACFIS']; 
}
$response = [
    "docref" => $docref,
    "date" => $date,
    "debito" => $debito,
    "credito" => $credito,
    "client" => $client,
    "fuente" => $fuente,
    "comment" => $comment,
    "facfis" => $facfis
];
echo json_encode($response['fuente']);
