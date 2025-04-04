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
                    <li><a id="_index" class="lang" key="HOME">HOME</a></li>
                    <li><a id="_rules" class="lang" key="RULES">RULES</a></li>
                    <li><a id="_comment" class="lang" key="LEAVE_COMMENT">LEAVE A COMMENT</a></li>
                    <li><a id="zh-tw" class="translate">中</a></li>
                    <li><a id="en-gb" class="translate">Eng</a></li>
                    <li><a id="jp" class="translate">あ</a></li>
                </ul>
            </div>
        </nav>
        <h1 class="lang" key="rules_GO">Rules of GO</h1>

    </section>

    <div class="row">
        <div class="aboutGO-col">
            <img src="https://www.asahi.com/culture/gallery/masudalegend/images/masuda20.jpg">
            <h3 class="lang" key="h1_rules_Of_GO1">Rules Of GO</h3>
            <p class="lang" key="rules_Of_GO1">The two players, Black and White, take turns placing stones of their colour on the intersections of the board, one stone at a time. The usual board size is a 19×19 grid, but for beginners or for playing quick games, the smaller board sizes of 13×13 and 9×9 are also popular. The board is empty to begin with. Black plays first unless given a handicap of two or more stones, in which case White plays first. The players may choose any unoccupied intersection to play on except for those forbidden by the ko and suicide rules (see below). Once played, a stone can never be moved and can be taken off the board only if it is captured. A player may pass their turn, declining to place a stone, though this is usually only done at the end of the game when both players believe nothing more can be accomplished with further play. When both players pass consecutively, the game ends and is then scored.
            </p>
                <img src="FarmworkersplayGo.jpg">
            </div>

        <div class="aboutGO-col">
            <img src="https://health-mahjong.com/wp-content/uploads/2017/04/igo-sample3.png" style="height: 450px;">
            <h3 class="lang" key="h1_rules_Of_GO2">2 Eyes</h3>
            <p class="lang" key="rules_Of_GO2">Early in the game, when the board is mostly empty, stones that are threatened with capture can try to save themselves by extending out and increasing their liberties. However, as the game goes on and more and more spaces get filled, groups start to surround each other. But not all groups that are surrounded can be captured. A group that surrounds at least two separate eyes can never be captured, because both eyes cannot be filled at the same time.</p>
            <img src="https://yasashiigo.com/images/basic/basic_3/3_1_img03.jpg">
        </div>

        <div class="aboutGO-col">
            <h3 class="lang" key="h1_rules_Of_GO3">Hideyuki Fujisawa</h3>
            <p class="lang" key="rules_Of_GO3">Hideyuki Fujisawa was born in Yokohama, Japan. He was one of the best players during his era. One of the "Three Crows" along with Yamabe Toshiro and Keizo Suzuki (and later Takeo Kajiwara). Even though he was known more for his controversial acts, such as having a bad drinking habit, the most important thing that shone through about Fujisawa was his Go skill. Besides Go, he was known to gamble and was a successful real estate dealer. He was also known for his calligraphy and had several exhibits of his works. He also stated in his autobiography, although he did not mind being called Shuko, he preferred to be called Hideyuki.
                He is the father of Kazunari Fujisawa, an 8-dan Go professional, and the grandfather of Rina Fujisawa, a 3-dan Go professional who has won multiple female titles.
                Fujisawa turned pro in 1940 and reached 9 dan in 1963. He won his first major title in 1962, the Meijin. He then won two Asahi Pro Best Ten titles in 1965 and 1968. He won his second major title, the Oza, which he held for three consecutive years from 1967 to 1969. The same year that he lost the Oza, he won the NHK Cup. He didn't win the NHK Cup again until 1981. The Meijin title was Fujisawa's again when he won it in 1970. He then went on a dry streak of titles. By 1976, he won his first title since the Meijin in 1970, the Tengen.</p>
                <img src="https://assets.st-note.com/production/uploads/images/44709260/rectangle_large_type_2_8bb273642d2f084e0247a2d2b7287d02.jpg?width=650">
        </div>

        <div class="aboutGO-col">
            <h3 class="lang" key="h1_rules_Of_GO4">Hideyuki Fujisawa</h3>
            <iframe width="500" height="420" height="650" src="https://www.youtube.com/embed/DkgscuoL1Js">
            </iframe>
        </div>

            <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
          


</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
<script src="Language.js"></script>
</html>