<?php
session_start();
if(empty( $_SESSION['name'])){
    header("location:login.php");
}

if(!($_SESSION["isAdmin"] == 1)){
    header("location:index.php");
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
<body>
    <form method="POST" id="adminForm">
        <h1>User Management</h1>
        <div>
            <label for="">Username</label>
            <select name="userId" id="username"></select>
        </div>
        
        <div>
            <label for="isActive">Is Active: </label>
                <input type="radio" name="isActive" id="isActiveYes" value=1>
                <span>Yes</span>
                <input type="radio" name="isActive" id="isActiveNo" value=0>
                <span>No</span>
            </select>
        </div>

        <div>
            <label for="isActive">Is Admin: </label>
                <input type="radio" name="isAdmin" id="isAdminYes" value=1>
                <span>Yes</span>
                <input type="radio" name="isAdmin" id="isAdminNo" value=0>
                <span>No</span>
            </select>
        </div>

        <div>
            <input type="submit" value="Submit">
        </div>

    </form>
</body>

<script>
var userList = document.getElementById('username');

callUserInfo()


function callUserInfo(){
    userList.length = 0;

    fetch("user.php",
            {
                method: "get"
            }).then((response) => {
                if (response.ok === true) {
                    return response.json()
                }               
            })
            .then(data => {
                data.forEach(i=>{
                    var optionElement = document.createElement("option");
                    optionElement.value = i["id"];
                    optionElement.text = i["name"];
                    optionElement.setAttribute("isActive", i["isActive"]);
                    optionElement.setAttribute("isAdmin", i["isAdmin"]);
                    userList.appendChild(optionElement);
                });                     
    })
}


    userList.onchange = function () {
        var isActive = userList.options[userList.selectedIndex].getAttribute("isActive");
        var isAdmin = userList.options[userList.selectedIndex].getAttribute("isAdmin");
        if(isActive == 1){
            document.getElementById("isActiveYes").checked = true;
        }
        if(isActive == 0){
            document.getElementById("isActiveNo").checked = true;
        }

        if(isAdmin == 1){
            document.getElementById("isAdminYes").checked = true;
        }

        if(isAdmin == 0){
            document.getElementById("isAdminNo").checked = true;
        }
};

var form = document.getElementById("adminForm");
form.addEventListener("submit",function(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const formJson = Object.fromEntries(data.entries());
        console.log(formJson);

        fetch("usercontrol.php",
            {
                body: data,
                method: "post"
            }).then((response) => {
                if (response.ok === true) {
                    alert("Message was submitted successfully");
                    form.reset();
                    callUserInfo();
                    return response.json()
                } 
                
            })
            .then(data => {
                    console.log(data);
    })
    });



</script>

</html>