<?php

function dbconnect(){
$server = "mysql";
$uid = "root";
$pwd = "secret";
$dbname = "test";
$conn = new mysqli($server, $uid, $pwd, $dbname);

if ($conn->connect_error)
    die("DB connection failed ".$conn->connect_error);
else
    return $conn;

}
