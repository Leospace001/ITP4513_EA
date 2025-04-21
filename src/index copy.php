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
    <title>HIHIHI</title>
</head>
<body
    style="background-image: 
    linear-gradient(rgba(4,9,30,0.7),
    rgba(4,9,30,0.7)), url('XXXXX.png');
    background-size: cover;
    background-position: center;
    ckground-repeat: no-repeat;margin: 0;">> 

    <form id="messageForm">
        <h1>Create new message</h1>

        <div style="display: none;">
            <input type="text" name="create_by" id="" value=<?php echo $_SESSION['user_id']?>>
        </div>

        <div>
            <label for="">Subject</label>
            <br>
            <input type="text" name="subject" id="">
        </div>

        <div>
            <label for="">Message</label>
            <br>
            <textarea name="content" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
            <input type="submit" value="submit">
        </div>
    </form>


</body>
<script>
    var form = document.getElementById("messageForm");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const formJson = Object.fromEntries(data.entries());
        fetch("postmessage.php",
            {
                body: data,
                method: "post"
            }).then((response) => {
                if (response.ok === true) {
                    alert("Message was submitted successfully");
                    form.reset();
                    return response.json()
                } 
                
            })
            .then(data => {
                    console.log(data);
    })
    })
    
</script>

    
</html>