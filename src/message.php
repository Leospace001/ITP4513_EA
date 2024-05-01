<?php 
include "cfg/dbconnect.php";


if ($_SERVER['REQUEST_METHOD'] != 'GET') {
    header("HTTP/1.0 405 Method Not Allowed"); 
    exit(); }


$conn = dbconnect();

function saveMessage(){

}

function getMessage(){
    global $conn;
    $myArray = array();
    $sql = "SELECT m.*,u.name FROM `message` m INNER JOIN `users` u
            ON m.create_by = u.id;";
    $result = mysqli_query($conn,$sql);
    while ($row = mysqli_fetch_assoc($result)){
        $myArray[] = $row;
    }
    //var_dump($row);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($myArray);
    
}

getMessage();
?>