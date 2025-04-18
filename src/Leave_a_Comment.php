<?php
// session_start();
// if(empty( $_SESSION['name'])){
//     header("location:login.php");
// }
// >>>>>function is call login system<<<
// include "top_menu.php";  >>>>>php Login system betton <<<

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="style2.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin="" />
<body>
    <section class="sub-header">
        <nav>
            <a href="index.html"><img src="Logo.png"></a>
            <div class="nav-links">
                <div class="container" onclick="toggleClose(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                  </div>
                <ul>
                    <li><a href="/login.php" id="_index" class="lang" key="LOGIN">Login</a></li>
                    <li><a href="/home_page.php" id="_index" class="lang" key="HOME">HOME</a></li>
                    <li><a href="/Rules_of_GO.php" id="_rules" class="lang" key="RULES">RULES</a></li>
                    <li><a href="/Leave_a_Comment.php" class="lang" key="LEAVE_COMMENT">LEAVE A COMMENT</a></li>
                    <li><a id="zh-tw" class="translate">中</a></li>
                    <li><a id="en-gb" class="translate">Eng</a></li>
                    <li><a id="jp" class="translate">あ</a></li>
                </ul>
            </div>
        </nav>
        <h1 class="lang" key="comment_h1">Your comment is our source of advancement</h1>
    </section>
    <div class="row">
    <div class="comment-box">
        <form id="newform">
            <p class="lang" key="comment_p">Leave a comment</p>
            <label class="lang" key="comment_l1" for="gender">Mr/Ms.:</label>
  <select id="_gender" name="_gender">
    <option class="lang" key="comment_l2" value="Mr">Mr</option>
    <option class="lang" key="comment_l3" value="Ms.">Ms</option>
  </select>
  <br>
            <label for="name" class="lang" key="comment_l4">Your name</label>
            <input type="text" name="" id="_name" required="required">

            <label for="email" class="lang" key="comment_l5">Your email</label>
            <input type="email" name="" id="_email" required="required">

            <label for="phone" class="lang" key="comment_l6">Your phone</label>
            <input type="text" name="" id="_phone" required="required" pattern="^[0-9]{8}" />

            <label for="experience" class="lang" key="comment_l7">Your experience in playing GO</label>
            <select id="experience" name="experience">
                <option value="firstTime" class="lang" key="comment_l8">This is the first time to play GO</option>
              <option value="3-5 years" class="lang" key="comment_l9">3-5 years</option>
              <option value="More than 5 years" class="lang" key="comment_l10">More than 5 years</option>
            </select>
			<br>
            <label for="comment" class="lang" key="comment_l11">Leave a comment</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            
            <input type="submit" id="submit" value="Submit">
            <p id="success"></p>
        
        </form>
    </div>
        <div class="comment-box">
        <h1 class="lang" key="comment_l13">Better visit us at 3 King Ling Road, Tseung Kwan O, Hong Kong</h1>
        <p></p>
        <div id="map" style="height:450px"></div>
    </div>
</div>
        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

</body>
<script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossorigin=""></script>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
<script src="Language.js"></script>
</html>