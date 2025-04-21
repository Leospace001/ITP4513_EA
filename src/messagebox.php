<?php
session_start();
if(empty( $_SESSION['name'])){
    header("location:login.php");
}
include "top_menu.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="https://cdn.datatables.net/2.0.5/css/dataTables.dataTables.css" />
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>  
<script src="https://cdn.datatables.net/2.0.5/js/dataTables.js"></script>

<body style="background-color: #d9d9d9;">

    <table id="myTable">
        <thead>
            <tr>
                <td>Subject</td>
                <td>Message</td>
                <td>Create At</td>
                <td>Create By</td>
            </tr>
        </thead>
    </table>
</body>
<script>
    $(document).ready(function(){
        $('#myTable').DataTable({
            "ajax": {
                "url": "http://localhost/message.php",
                "type": "GET",
                "dataSrc": /*function(response) {
                    var data = {"data":response};
                    console.log(data);
                    return (JSON.stringify(response));
                },*/"" 
            },
            columnDefs: [
                    {
                            "defaultContent": "-",
                            "targets": 0,
                            "data":"subject"
                    },
                    {
                            "defaultContent": "-",
                            "targets": 1,
                            "data":"message"
                    },
                    {
                            "defaultContent": "-",
                            "targets": 2,
                            "data":"create_at"
                    },
                    {
                            "defaultContent": "-",
                            "targets": 3,
                            "data":"name"
                    }
                
                ],
            // "columns:":[
            //     { "data": "subject" },
            //     { "data": "message" },
            //     { "data": "create_at" },
            // ]

        });
});
    
 
</script>
</html>