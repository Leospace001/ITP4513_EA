<?php

include "cfg/dbconnect.php";

if ($_SERVER['REQUEST_METHOD'] != 'GET') {
    header("HTTP/1.0 405 Method Not Allowed"); 
    echo "Method Not Allowed";
    exit(); }

$conn = dbconnect();

function getUser(){
    global $conn;
    $myArray = array();
    $sql = "SELECT id,name,email,isActive,isAdmin,create_at FROM users;";
    $result = mysqli_query($conn,$sql);
    while ($row = mysqli_fetch_assoc($result)){
        $myArray[] = $row;
    }
    //var_dump($row);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($myArray);
    
}

getUser();


?>