<?php

include "cfg/dbconnect.php";


if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Method Not Allowed";
    exit(); }

$name = $_POST;
header('Content-Type: application/json; charset=utf-8');
date_default_timezone_set("UTC");
$name["create_at"] = date("Y-m-d H:i:s", time());

$conn = dbconnect();
$isActive = $name['isActive'];
$userId = $name['userId'];
$sql = "UPDATE `users` SET `isActive` = $isActive WHERE `id` = $userId ";
//var_dump($sql);
mysqli_query($conn,$sql);

echo json_encode($sql);



// Converts it into a PHP object
// $data = json_decode($json);

// echo ($data);
?>