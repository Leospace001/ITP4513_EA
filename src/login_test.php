<?php
session_start();
include "cfg/dbconnect.php";
$email = $pwd = "";
$email_err = $pwd_err = "";
$error = false; 
$err_msg = "";

$conn = dbconnect();


if (isset($_POST['submit'])){
    $email = trim($_POST['email']);
    $pwd = trim($_POST['pwd']);

    if (isset($_POST['remember']))
        $remember = $_POST['remember'];
   
    // validate fields

    if ($email == ""){
        $email_err = "Email is mandatory";
        $error = true;
    }

    if ($pwd == ""){
        $pwd_err = "Password is mandatory";
        $error = true;
    }


     // all validations passed
     if (!$error){

        $sql = "select * from users where email = ?";
        try{
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($result->num_rows >0){
                $row = $result->fetch_assoc();
                $stored_pwd = $row['password'];
                $isActive = $row['isActive'];
                if (password_verify($pwd, $stored_pwd) && $row['isActive'] == 1){
                    // login successful
                    if (isset($_POST['remember'])){
                       
                        setcookie("remember_email", $email, time()+3600);
                        setcookie("remember", $remember, time()+3600);
                    }
                    else{
                        setcookie("remember_email", $email, time() - 3600);
                        //setcookie("remember", $remember, time() - 365*24*3600);
                    }
                    $_SESSION['name'] = $row['name'];
                    $_SESSION['user_id'] = $row['id'];
                    $_SESSION['isAdmin'] = $row['isAdmin'];
                    header("location:index.php");
                }else if (password_verify($pwd, $stored_pwd) && $row['isActive'] == 0){
                    $error_msg = "Account is locked";
                }
                else{
                    $error_msg = "Incorrect Password";
                }

            }
            else {
                $error_msg = "Email id not registered";
            }

          
        }
        catch(Exception $e){
            $error_msg = $e->getMessage();
        }

    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>signin form page</title>
    <link rel="stylesheet" href="./style11.css">
    <script src="test.js"></script>
</head>

<body>

    <div id="particles-js" class="snow"></div>

    <main>
        <div class="left-side"></div>

        <div class="right-side">
            <form action="" method="post">
                <!-- 暫時無需要用到 google&apple login -->
                <!-- <div class="btn-group">
                    <button class="btn">
                        <img class="logo"
                            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d1c98974-c62d-4071-8bd2-ab859fc5f4e9"
                            alt="" />
                        <span>Sign in with Google</span>
                    </button>
                    <button class="btn">
                        <img class="logo"
                            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/59c1561b-8152-4d05-b617-0680a7629a0e"
                            alt="" />
                        <span>Sign in with Apple</span>
                    </button>
                </div> -->
                <?php
             $display_email = isset($_COOKIE['remember_email']) ? $_COOKIE['remember_email'] : $email;

             $checked = !empty($remember) ? "checked" : (isset($_COOKIE['remember']) ? "checked" : "");
            ?>

                <div class="or">Login</div>
                
                <label for="email">Email</label>
                <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
                value="<?=$display_email?>"
            />
            <div class="input-err text-danger"><?= $email_err?></div>
                <label for="password">Password</label>
                <input
                type="password"
                class="form-control"
                name="pwd"
                id="pwd"
                placeholder="Enter password"
            />
            <div class="input-err text-danger"><?= $pwd_err?></div>

                <button type="submit" class="login-btn">Sign in</button>
                <div class="links">
                    <a href="register_test.php">Click to register</a>
                </div>
            </form>
        </div>
    </main>
</body>
</html>
