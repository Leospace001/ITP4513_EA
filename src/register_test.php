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
            <form>
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
                

                <div class="or">test</div>

                <label for="name">Name</label>
                <input type="text" placeholder="Enter name" name="name" required />


                <label for="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label for="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required />


                <label for="password">Confirm Password</label>
                <input type="password" placeholder="Enter Password" name="password" required />


                <button type="submit" class="login-btn">Register</button>
                <div class="links">
                    <a href="login_test.php">Already Registered? to Login </a>
                    
                </div>
            </form>
        </div>
    </main>
</body>
</html>
