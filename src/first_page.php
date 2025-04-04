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
    <title>Let's play GO</title>
	<link rel="icon" type="image/x-icon" href="739-7396751_-chi-logo-hd.png">
	<title class="lang" key="TITLE"></title>
</head>
<link rel="stylesheet" href="style2.css">
<body>
    <section class="header">
        <nav>
            <a href="first_page.php"><img src="Logo.png"></a>
            <div class="nav-links">
                <div class="container" onclick="toggleClose(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                  </div>
                <ul>
                    <li><a href="/login.php" id="_index" class="lang" key="LOGIN">Login</a></li>
                    <li><a id="_rules" class="lang" key="RULES">RULES</a></li>
                    <li><a id="_comment" class="lang" key="LEAVE_COMMENT">LEAVE A COMMENT</a></li>
                    <li><a id="zh-tw" class="translate">中</a></li>
                    <li><a id="en-gb" class="translate">Eng</a></li>
                    <li><a id="jp" class="translate">あ</a></li>
                </ul>
            </div>
        </nav>
        <div class="text-box">
            <h1 class="lang" key="h1">Let's start learning to play GO.</h1>
            <p class="lang" key="p1">Without any prerequisite knowledge you can feel the joy of playing GO.</p>
            <button key="buttonlang" class="lang" onclick="scrollWin()">Get more details by clicking in</button>
        </div>
    </section>

    <section class="aboutGO">
        <h1 class="lang" key="about_GO">What is GO</h1>
        <p class="lang" key="detailsOf_GO">The word Go is a short form of the Japanese word igo (囲碁; いご), 
            which derives from earlier wigo (ゐご), in turn from Middle Chinese ɦʉi gi (圍棋, Mandarin: wéiqí, lit. 'encirclement board game' or 'board game of surrounding'). In English, the name Go when used for the game is often capitalized to differentiate it from the common word go. 
            In events sponsored by the Ing Chang-ki Foundation, it is spelled goe.
            The Korean word baduk derives from the Middle Korean word Badok, the origin of which is controversial; the more plausible etymologies include the suffix dok added to Ba to mean 'flat and wide board', or the joining of Bat, meaning 'field', and Dok, meaning 'stone'. Less plausible etymologies include a derivation of Badukdok, referring to the playing pieces of the game, or a derivation from Chinese páizi (排子), meaning 'to arrange pieces'.</p>
    </section>

    <div class="row">
        <div class="aboutGO-col">
            <h3 class="lang" key="h1_Of_GO1">History of GO</h3>
            <p class="lang" key="content_Of_GO1">The earliest written reference to the game is generally recognized as the historical annal Zuo Zhuan (c.4th century BCE), referring to a historical event of 548 BCE. It is also mentioned in Book XVII of the Analects of Confucius and in two books written by Mencius (c. 3rd century BCE). In all of these works, the game is referred to as yì (弈). Today, in China, it is known as weiqi (simplified Chinese: 围棋; traditional Chinese: 圍棋; pinyin: wéiqí; Wade–Giles: wei ch'i), lit. 'encirclement board game'.
                Go was originally played on a 17×17 line grid, but a 19×19 grid became standard by the time of the Tang Dynasty (618–907 CE). Legends trace the origin of the game to the mythical Chinese emperor Yao (2337–2258 BCE), who was said to have had his counselor Shun design it for his unruly son, Danzhu, to favorably influence him. Other theories suggest that the game was derived from Chinese tribal warlords and generals, who used pieces of stone to map out attacking positions.
                In China, Go was considered one of the four cultivated arts of the Chinese scholar gentleman, along with calligraphy, painting and playing the musical instrument guqin[83] In ancient times the rules of go were passed on verbally, rather than being written down.</p>
                <img src="5e322a9ae82c14e626cf9f494ab17be0-600x573.jpg">
        </div>

        <div class="aboutGO-col">
            <img src="20201208-OYT8I50088-1.jpg" style="height: 450px;">
            <h3 class="lang" key="h1_Of_GO2">Become cultures in Korea and Japan</h3>
            <p class="lang" key="content_Of_GO2">Go was introduced to Korea sometime between the 5th and 7th centuries CE, and was popular among the higher classes. In Korea, the game is called baduk (hangul: 바둑), and a variant of the game called Sunjang baduk was developed by the 16th century. Sunjang baduk became the main variant played in Korea until the end of the 19th century, when the current version was reintroduced from Japan.
                The game reached Japan in the 7th century CE—where it is called go (碁) or igo (囲碁). It became popular at the Japanese imperial court in the 8th century, and among the general public by the 13th century. The game was further formalized in the 15th century. In 1603, Tokugawa Ieyasu re-established Japan's unified national government. In the same year, he assigned the then-best player in Japan, a Buddhist monk named Nikkai (né Kanō Yosaburo, 1559), to the post of Godokoro (Minister of Go).
                Nikkai took the name Hon'inbō Sansa and founded the Hon'inbō Go school. Several competing schools were founded soon after. These officially recognized and subsidized Go schools greatly developed the level of play and introduced the dan/kyu style system of ranking players. Players from the four schools (Hon'inbō, Yasui, Inoue and Hayashi) competed in the annual castle games, played in the presence of the shōgun.</p>
            <img src="https://pbs.twimg.com/media/FhRcqyOVIAIMlwu?format=jpg&name=large" style="height:450px; width:650px;">
        </div>

        <div class="aboutGO-col">
            <h3 class="lang" key="h1_Of_GO3">Internationalization</h3>
            <p class="lang" key="content_Of_GO3">Despite its widespread popularity in East Asia, Go has been slow to spread to the rest of the world. Although there are some mentions of the game in western literature from the 16th century forward, Go did not start to become popular in the West until the end of the 19th century, when German scientist Oskar Korschelt wrote a treatise on the game. By the early 20th century, Go had spread throughout the German and Austro-Hungarian empires. In 1905, Edward Lasker learned the game while in Berlin. When he moved to New York, Lasker founded the New York Go Club together with (amongst others) Arthur Smith, who had learned of the game in Japan while touring the East and had published the book The Game of Go in 1908. Lasker's book Go and Go-moku (1934) helped spread the game throughout the U.S. and in 1935, the American Go Association was formed. Two years later, in 1937, the German Go Association was founded.
                World War II put a stop to most Go activity, since it was a popular game in Japan, but after the war, Go continued to spread. For most of the 20th century, the Japan Go Association (Nihon Ki-in) played a leading role in spreading Go outside East Asia by publishing the English-language magazine Go Review in the 1960s, establishing Go centers in the U.S., Europe and South America, and often sending professional teachers on tour to Western nations. Internationally, the game had been commonly known since the start of the twentieth century by its shortened Japanese name, and terms for common Go concepts are derived from their Japanese pronunciation.
                In 1996, NASA astronaut Daniel Barry and Japanese astronaut Koichi Wakata became the first people to play Go in space. They used a special Go set, which was named Go Space, designed by Wai-Cheung Willson Chow. Both astronauts were awarded honorary dan ranks by the Nihon Ki-in.
                As of December 2015, the International Go Federation has 75 member countries, with 67 member countries outside East Asia. Chinese cultural centres across the world are promoting Go, and cooperating with local Go associations, for example the seminars held by the Chinese cultural centre in Tel Aviv, Israel together with the Israeli Go association.</p>
                <img src="3BPVN2RQNVPXZLBCMY3SFQZH4I.jpg">
        </div>
               
        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
<script src="Language.js"></script>
</html>