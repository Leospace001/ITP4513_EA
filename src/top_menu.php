<?php 
if (!isset($_SESSION) || session_id() == "" || session_status() === PHP_SESSION_NONE)
session_start() 
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Registration and login in PHP</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="topmenu">
            <div class="menubar">
                
                
                <?php if (isset($_SESSION['name'])){ ?>
                    <a href="index.php">Create Message</a>
                    <a href="messagebox.php">Message Center</a>
                    <?php if ($_SESSION["isAdmin"] == 1) {?>
                        <a href="admin.php">Admin Page</a>
                        <?php } ?>
                    <div class="user">
                        <span>Welcome <?= $_SESSION['name']?$_SESSION['name']:'Guest';?> </span>
                        <a href="logout.php">Logout</a>
                    </div>
                  
               <?php }  ?>
                
                
            </div>
        </div>
    
