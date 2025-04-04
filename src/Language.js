let mybutton = document.getElementById("myBtn");

const arrLang = {
    "en-gb": {
	"TITLE":"Let's play GO",
      "Login": "Login",
      "RULES": "RULES OF GO",
    "LEAVE_COMMENT": "LEAVE A COMMENT",
	  "h1":"Let's start learning to play GO.",
	  "p1":"Without any prerequisite knowledge you can feel the joy of playing GO.",
	  "buttonlang":"Find more by scrolling down",
	  "about_GO":"What is GO",
	  "detailsOf_GO":(`The word Go is a short form of the Japanese word igo (囲碁; いご), which derives from earlier wigo (ゐご), in turn from Middle Chinese ɦʉi gi (圍棋, Mandarin: wéiqí, lit. 'encirclement board game' or 'board game of surrounding'). In English, the name Go when used for the game is often capitalized to differentiate it from the common word go. In events sponsored by the Ing Chang-ki Foundation, it is spelled goe. The Korean word baduk derives from the Middle Korean word Badok, the origin of which is controversial; the more plausible etymologies include the suffix dok added to Ba to mean 'flat and wide board', or the joining of Bat, meaning 'field', and Dok, meaning 'stone'. Less plausible etymologies include a derivation of Badukdok, referring to the playing pieces of the game, or a derivation from Chinese páizi (排子), meaning 'to arrange pieces'.`),
	  "h1_Of_GO1":(`History of GO`),
	  "content_Of_GO1":(`The earliest written reference to the game is generally recognized as the historical annal Zuo Zhuan (c.4th century BCE), referring to a historical event of 548 BCE. It is also mentioned in Book XVII of the Analects of Confucius and in two books written by Mencius (c. 3rd century BCE). In all of these works, the game is referred to as yì (弈). Today, in China, it is known as weiqi (simplified Chinese: 围棋; traditional Chinese: 圍棋; pinyin: wéiqí; Wade–Giles: wei ch'i), lit. 'encirclement board game'. Go was originally played on a 17×17 line grid, but a 19×19 grid became standard by the time of the Tang Dynasty (618–907 CE). Legends trace the origin of the game to the mythical Chinese emperor Yao (2337–2258 BCE), who was said to have had his counselor Shun design it for his unruly son, Danzhu, to favorably influence him. Other theories suggest that the game was derived from Chinese tribal warlords and generals, who used pieces of stone to map out attacking positions. In China, Go was considered one of the four cultivated arts of the Chinese scholar gentleman, along with calligraphy, painting and playing the musical instrument guqin[83] In ancient times the rules of go were passed on verbally, rather than being written down.`),
	  "h1_Of_GO2":(`Become cultures in Korea and Japan`),
	  "content_Of_GO2":(`Go was introduced to Korea sometime between the 5th and 7th centuries CE, and was popular among the higher classes. In Korea, the game is called baduk (hangul: 바둑), and a variant of the game called Sunjang baduk was developed by the 16th century. Sunjang baduk became the main variant played in Korea until the end of the 19th century, when the current version was reintroduced from Japan. The game reached Japan in the 7th century CE—where it is called go (碁) or igo (囲碁). It became popular at the Japanese imperial court in the 8th century, and among the general public by the 13th century. The game was further formalized in the 15th century. In 1603, Tokugawa Ieyasu re-established Japan's unified national government. In the same year, he assigned the then-best player in Japan, a Buddhist monk named Nikkai (né Kanō Yosaburo, 1559), to the post of Godokoro (Minister of Go). Nikkai took the name Hon'inbō Sansa and founded the Hon'inbō Go school. Several competing schools were founded soon after. These officially recognized and subsidized Go schools greatly developed the level of play and introduced the dan/kyu style system of ranking players. Players from the four schools (Hon'inbō, Yasui, Inoue and Hayashi) competed in the annual castle games, played in the presence of the shōgun.`),
    "h1_Of_GO3":(`Internationalization`),
	  "content_Of_GO3":(`Despite its widespread popularity in East Asia, Go has been slow to spread to the rest of the world. Although there are some mentions of the game in western literature from the 16th century forward, Go did not start to become popular in the West until the end of the 19th century, when German scientist Oskar Korschelt wrote a treatise on the game. By the early 20th century, Go had spread throughout the German and Austro-Hungarian empires. In 1905, Edward Lasker learned the game while in Berlin. When he moved to New York, Lasker founded the New York Go Club together with (amongst others) Arthur Smith, who had learned of the game in Japan while touring the East and had published the book The Game of Go in 1908. Lasker's book Go and Go-moku (1934) helped spread the game throughout the U.S. and in 1935, the American Go Association was formed. Two years later, in 1937, the German Go Association was founded. World War II put a stop to most Go activity, since it was a popular game in Japan, but after the war, Go continued to spread. For most of the 20th century, the Japan Go Association (Nihon Ki-in) played a leading role in spreading Go outside East Asia by publishing the English-language magazine Go Review in the 1960s, establishing Go centers in the U.S., Europe and South America, and often sending professional teachers on tour to Western nations. Internationally, the game had been commonly known since the start of the twentieth century by its shortened Japanese name, and terms for common Go concepts are derived from their Japanese pronunciation. In 1996, NASA astronaut Daniel Barry and Japanese astronaut Koichi Wakata became the first people to play Go in space. They used a special Go set, which was named Go Space, designed by Wai-Cheung Willson Chow. Both astronauts were awarded honorary dan ranks by the Nihon Ki-in. As of December 2015, the International Go Federation has 75 member countries, with 67 member countries outside East Asia. Chinese cultural centres across the world are promoting Go, and cooperating with local Go associations, for example the seminars held by the Chinese cultural centre in Tel Aviv, Israel together with the Israeli Go association.`),
    "rules_GO":(`Rules of GO`),
    "h1_rules_Of_GO1":(`Rules Of GO`),
    "rules_Of_GO1":(`The two players, Black and White, take turns placing stones of their colour on the intersections of the board, one stone at a time. The usual board size is a 19×19 grid, but for beginners or for playing quick games, the smaller board sizes of 13×13 and 9×9 are also popular. The board is empty to begin with. Black plays first unless given a handicap of two or more stones, in which case White plays first. The players may choose any unoccupied intersection to play on except for those forbidden by the ko and suicide rules (see below). Once played, a stone can never be moved and can be taken off the board only if it is captured. A player may pass their turn, declining to place a stone, though this is usually only done at the end of the game when both players believe nothing more can be accomplished with further play. When both players pass consecutively, the game ends and is then scored.`),
    "h1_rules_Of_GO2":(`2 Eyes`),
    "rules_Of_GO2":(` Early in the game, when the board is mostly empty, stones that are threatened with capture can try to save themselves by extending out and increasing their liberties. However, as the game goes on and more and more spaces get filled, groups start to surround each other. But not all groups that are surrounded can be captured. A group that surrounds at least two separate eyes can never be captured, because both eyes cannot be filled at the same time.`),
    "h1_rules_Of_GO3":(`Hideyuki Fujisawa`),
    "rules_Of_GO3":(`Hideyuki Fujisawa was born in Yokohama, Japan. He was one of the best players during his era. One of the "Three Crows" along with Yamabe Toshiro and Keizo Suzuki (and later Takeo Kajiwara). Even though he was known more for his controversial acts, such as having a bad drinking habit, the most important thing that shone through about Fujisawa was his Go skill. Besides Go, he was known to gamble and was a successful real estate dealer. He was also known for his calligraphy and had several exhibits of his works. He also stated in his autobiography, although he did not mind being called Shuko, he preferred to be called Hideyuki.
    He is the father of Kazunari Fujisawa, an 8-dan Go professional, and the grandfather of Rina Fujisawa, a 3-dan Go professional who has won multiple female titles.
    Fujisawa turned pro in 1940 and reached 9 dan in 1963. He won his first major title in 1962, the Meijin. He then won two Asahi Pro Best Ten titles in 1965 and 1968. He won his second major title, the Oza, which he held for three consecutive years from 1967 to 1969. The same year that he lost the Oza, he won the NHK Cup. He didn't win the NHK Cup again until 1981. The Meijin title was Fujisawa's again when he won it in 1970. He then went on a dry streak of titles. By 1976, he won his first title since the Meijin in 1970, the Tengen.`),
    "comment_h1":(`Your comment is our source of advancement`),
    "comment_p":(`Leave a comment`),
    "comment_l1":(`Mr / Ms.:`),
"comment_l2":(`Mr`),
"comment_l3":(`Ms`),
"comment_l4":(`Name`),
"comment_l5":(`Email`),
"comment_l6":(`Contact no.`),
"comment_l7":(`Your experience in playing GO`),
"comment_l8":(`This is the first time to play GO`),
"comment_l9":(`3-5 years`),
"comment_l10":(`More than 5 years`),
"comment_l11":(`Leave something you want to share`),
"comment_l12":(`Submit`),
"comment_l13":(`Visit us (Nihon Ki-in Tokyo HQ) at7-2 Gobanchō,Chiyoda City, Tokyo 102-0076 Japan`),
     },

    "zh-tw": {
		"TITLE":"圍棋樂",
      "Login": "登入",
      "RULES": "圍棋規則",
      "LEAVE_COMMENT": "留言",
	  "h1":"一起享受圍棋的樂趣",
	  "p1":"雖然圍棋的形式多變，也不礙大家感受當中的棋道",
	  "buttonlang":"更多資訊，請向下瀏覽",
	  "about_GO":"關於圍棋",
	  "detailsOf_GO":(`圍棋棋盤標準正方形，由縱橫各19秒條線垂直、均勻相交而成，構成一幅對稱、簡潔而又完美的幾何圖形。如果你久久凝視棋盤，會產生一種渾然一體，茫然無際的感覺。如仰視浩瀚蒼天，如俯瞰寥廓大地。中國圍棋大師吳清源考證說：圍棋其實是古人一種觀天工具。棋盤代表星空，棋子代表星星。
	  次看棋子顏色。圍棋棋子在性質上是無差別的一種，在顏色上則分為黑、白兩類。自古以來，人們形容圍棋是黑白世界。圍棋二看色的區分。圍棋的黑白二色，主要是受了中國古代陰陽學說的影響。按古人觀點，“陰陽者，天地之大理也”。月為陰，日為陽；女為陰，男為陽；寒為陰，
暑為陽，如此等等，構成了萬事萬物，并由此迴圈往復，生生息息。圍棋的黑白二字即象征著陰陽二級，由此而在代表天地的四方八面的棋盤上展現盈縮、進退、攻守的各種變化。
　再看棋子的形狀，其形為圓，乃封閉之形，象征著宇宙物質的基本形。宇宙中大至星體，小至基本粒子，皆為圓形或近似圓形，神
秘莫測的飛碟，其狀亦如圍棋子一粒。`),
	"h1_Of_GO1":(`圍棋的起源`),
	"content_Of_GO1":(`圍棋是漢民族古早文化中的瑰寶，它體現了漢民族對智慧的追求，古人常以“琴棋書畫”論及一個人的才華和修養，其中的“棋”指的就是圍棋。古代的圍棋被人們形象地比喻為黑白世界的圍棋，是我國古人所喜愛的娛樂競技活動，同時也是人類歷史上最悠久的一種棋戲。由于它將科學、藝術和競技三者融為一體，有著發展智力，培養意志品質和機動靈活的策略戰術思想意識的特點，因而，幾千年來長盛不衰， 并逐漸地發展成了一種國際性的文化競技活動。
　　圍棋，在我國古代稱為弈，在整個古代棋類中可以說是棋之鼻祖，相傳已有4000多年的歷史。據《世本》所言，圍棋為堯所造。晉張華在《博物志》中亦說：“舜以子商均愚，故作圍棋以教之。”舜是傳說人物，造圍棋之說不可信，但它反映了圍棋起源之早。
　　近代，圍棋在日本蓬勃發展，中國的圍棋逐漸被日本趕超，清朝后期，中國棋手和日本棋手之間已經有一定的差距。新中國成立后，陳毅元帥也是一個圍棋愛好者，大力發展中國的圍棋事業，新一代的圍棋國手在新中國成長起來。代表人物有陳祖德、聶衛平、馬曉春、常昊等。80年代中后期，聶衛平在中日擂臺賽中創造了八場不敗的記錄，取得了前三屆中日擂臺賽的勝利，也在神州大地掀起了新的圍棋學習的熱潮。現在，圍棋主要呈現中、韓、日三國鼎立的局面。日本由于固步自封，在世界大賽中戰績不佳，因此現在多呈現中、韓對抗的局面。`),
	"h1_Of_GO2":(`傳入日本`),
	"content_Of_GO2":(`在鎌倉時代、室町時代圍棋特別受公家、僧侶等知識階級所愛好，甚至也開始擴散至武士以及老百姓。同時生產出不同的樣式棋盤和棋石。同伴之間也開始互相比試，就算出身不明的，只要有能力也會被稱為「碁打ち」「上手」。
到戰國時代，被視作為戰爭的模擬演示而大受歡迎，開始盛行。除了武田信玄外，許多的戰國武將也愛好了圍棋。
安土桃山時代和江戶時代是以大名，大商人作為核心活躍的時代。1578年，織田信長在上京的時候，聽聞年輕的日蓮宗僧侶日海為圍棋的名家高手因而接見，與其下棋後因其棋藝高超，便稱日海為「名人」，而名人這詞便成為天下第一的意思。因為當時沒有任何文獻記載，此事被後世質疑為杜撰。因為日海死後入所住持的寂光寺七塔頭之一「本因坊」，所以後來被稱為本因坊算砂。
這個時代以前，對局在開始之前會以雙方棋力差距作出讓子（即下手先將若干棋石放在棋盤上），發展成完全沒有讓子開始，所以圍棋佈局（定石）的概念也是從算砂的時代起開始。
算砂是織田信長、豐臣秀吉、德川家康的圍棋老師，而算砂均讓他們三人置五子。如果以現代來看，算砂為職業棋士之最高級別，信長他們也可能有相當於業餘水平四、五段的棋力。
除了被信長認可而得到名人的稱號，在秀吉時期更被重用而得到更大的扶持，秀吉討伐了在本能寺之變殺害信長的明智光秀，在1585年任關白，等治安恢復後，召回算砂。在1585年及1588年，秀吉舉行的全國大會御前比賽，算砂都獲得優勝。
到家康開創的江戶幕府時代，成為將軍的家康更設立名人碁所（めいじんごどころ），並指派算砂管轄圍棋界。(算砂也管轄將棋所)
從戰國到江戶，是日本的圍棋的水準飛躍的時代，並且留下讓來日本之朝鮮人李礿三子而勝利的記錄。以現代來看的話，讓三子相當於職業最高段位和業餘最高段位的差別。`),
  "h1_Of_GO3":(`國際化`),
	  "content_Of_GO3":(`圍棋於19世紀晚期開始成規模的傳入歐洲。在此進程中的第一大站是德國。
    日本為圍棋在全世界的推廣用力最早、最多，以致西文中的圍棋術語多來自日語。1980年代以降，中國、韓國也大力參與推廣圍棋。
    1996年，美國太空人丹巴利（Daniel T. Barry）博士與日本太空人若田光一博士在穿梭機奮進號上進行首次太空圍棋對弈，他們使用一套特別設計的太空圍棋棋具，由Wai-Cheung Willson Chow所造。兩位對弈太空人因此得到日本棋院授予的榮譽段位。
    圍棋運動現已遍佈世界各地，唯日本、韓國、中國大陸和台灣最為興盛；西方國家已漸熱；東南亞正在發展中。
    泰國因「泰國圍棋之父」蔡緒鋒的大力推廣，使泰國自1993年成立協會開始至今，學棋人口達超過百萬人眾。
    新加坡圍棋協會在新加坡設立了兩個棋所，提供圍棋教學的服務，當中更有一些從中國大陸、台灣特聘而來的職業棋士。
    馬來西亞圍棋在發展之中，在西馬吉隆坡有一圍棋協會，常參與新馬泰圍棋交誼賽。除了吉隆坡外，西馬霹靂州怡保在2011年也成立了一間怡保圍棋棋院,目前極力推廣着圍棋教育。推廣期間，怡保圍棋棋院在霹靂州各地舉辦了各個賽事及圍棋推廣講座，其中怡保圍棋棋院與馬來西亞圍棋協會在2015年舉辦了一個馬來西亞有史以來最大型的圍棋比賽--第一屆亞洲圍棋錦標賽-富達杯。在東馬有妙手圍棋在各地推廣兒童圍棋教育。
    汶萊圍棋仍有待發展，目前還沒有建立圍棋協會，有一群熱愛圍棋分子，學棋者多數是大學生及少年，兒童圍棋市場仍小[來源請求]。  
    印尼有許多人開始愛上圍棋，然而目前苦無英文圍棋教材的翻譯不便，使之圍棋教育暫時滯止難前，目前已有改善，學棋人口漸漸增加。`),
    "rules_GO":(`圍棋規則`),
    "h1_rules_Of_GO1":(`圍棋規則`),
    "rules_Of_GO1":(`一直以來，圍棋其實並沒有一套完美且完善的規則，現今所使用的規則，大
    多是口耳相傳下所制定出來的。在近數十年大大小小的對局中，也因為一些極重
    要的比賽中出現了少見的爭議盤面，使得規則也加入了一些特別的判例。現在全
    世界的圍棋規則並不統一，大致有中國數子法、應式計點制、日韓的比目法三種
    。儘管各家的規則不同，但基本的大原則卻無異，圍棋的基本規則只需
    一句話即可道盡：「黑棋先行，輪流下子，氣盡提取，同形禁現，子空皆地，地
    多者勝。」`),
    "h1_rules_Of_GO2":(`兩眼成活`),
    "rules_Of_GO2":(`在圍棋中，眼是某一方的棋子在棋盤上所圍成的一個或多個相連空白交叉點。
    就棋盤中央附近的一個交叉點而言，一個完整的眼除了最近4個相鄰點須為同一方棋子佔有外，對角4個相鄰點至少要有3個亦為同一方棋子佔有外，始為「真眼」；否則易被對方破壞，而稱之為「假眼」。就棋盤邊線上的一個交叉點而言，最近及對角共5個相鄰點須為同一方棋子佔有才是真眼；而就棋盤角落的點而言，最近及對角共3個相鄰點須為同一方棋子佔有才是真眼。
        一群相連的棋子如果僅圍出一個真眼，並非絕對安全。對方只要在外面團團圍住，次一手下在「眼位」即可使這些棋子沒有任何「氣」而遭提子。如果一群相連的棋子能圍出至少兩個真眼，那麼對方因無法一次同時下在兩個眼位，使得這群棋子不可能被提子，因而形成「活棋」。
    若干連接的棋子包圍住一個以上的目，術語叫做「馬眼」。`),
    "h1_rules_Of_GO3":(`藤澤秀行`),
    "rules_Of_GO3":(`藤澤秀行（原名藤澤保，1925年6月14日－2009年5月8日），日本著名圍棋棋手，日本棋界傳奇人物，其棋風豪爽，布局尤為精巧被稱為「前五十手天下第一」，1950年代至1960年代與「剃刀」坂田榮男齊名。獲得冠軍稱號23個，包括棋聖戰六連霸，受封名譽棋聖。
    藤澤個性豪爽，擁有眾多的棋迷。以自己起名「秀行」、自己頒發「段位證書」等故事為傳奇。他以私生活放蕩成名，酗酒、賭博和縱慾，三次罹患癌症。1992年，藤澤以67歲高齡衛冕王座戰 (日本圍棋)成功，成為史上年齡最大的圍棋錦標獲得者。
    藤澤終身為圍棋國際化而奮鬥，對中國大陸圍棋發展做出了巨大的貢獻。從1981年起，14次帶領「秀行軍團」訪華，中國著名的棋手聶衛平、馬曉春到常昊等皆受其影響。在中國的棋壇，藤澤秀行之名可謂家喻戶曉。
    藤澤秀行以剛正不阿，仗義灑脫受到棋迷的喜愛。但私生活也荒誕無比，酗酒常常出洋相；賭博導致傾家蕩產；風流事不斷。但不管如何，藤澤秀行對圍棋的熱愛和其對圍棋推廣做出的貢獻是不可抹滅的。
起名「秀行」：事實上，傳統的圍棋界的約定：「秀」字是本因坊才允許使用的名字。當時的藤澤保名氣不大，卻擅自改名「秀行」，引起了許多圍棋前輩的不滿。
自己製作段位證書：藤澤因日本棋院發給業餘棋手的段位證書太貴，自己製作並發放業餘段位證書。此舉使藤澤名聲斐然。
酗酒：1981年第五屆NHK杯決勝戰，藤澤醉醺醺的與對手高木祥一對戰，雖然藤澤連棋子都無法擺正，卻贏得了勝利，因此得名「怪傑」。大體上，藤澤每天都飲酒，但據說喝得不多，尤其1983年胃癌手術後喝一點就醉了。藤澤酒醉時有亂講女性性器官俗名的壞毛病，甚至與鄧小平會面時也喝得酩酊大醉，「中文的『陰道』怎麼講啊？」等胡言亂語，執傲的糾纏，在場人員不得不中止會面。
泥醉名人：首屆名人戰，由十三位棋手以循環賽方式決出首屆名人。最後一場循環賽的陣容是藤澤秀行對橋本昌二、吳清源對坂田榮男，其中藤澤秀行九勝二負獨居排頭，吳清源與坂田榮男則以八勝三負緊追在後；假設藤澤勝出，那麼無疑將成為名人。藤澤最終輸給橋本，要和另一場的勝方加賽決定名人歸屬；藤澤覺得自己無望，失望之餘就和好友上酒館喝得爛醉。結果吳清源和坂田榮男竟下成和棋，依規則雖要算是持白的吳清源獲勝，但只是「半勝」；換句話說，不及九勝的藤澤。結果藤澤就在爛醉之中意外成為了名人，故稱「泥醉名人」。
女性關係：藤澤生性風流，曾在情人家裡待了3年沒回過家。據說後來有事必須回去時，連回家的路都不會走，只好打電話找妻子帶路。將棋棋士米長邦雄的太太曾向藤澤太太抱怨「我先生一周5天不回家」，藤澤太太回答「我家的3年沒回家」。
賭博與債務：據藤澤的回憶錄自己介紹，光賭博就輸了快十億日元。2棋聖冠軍獎金兩千五百萬日元，藤澤不到一年就輸光了。藤澤從來不掩飾自己對金錢的渴望，對於最高獎金的棋聖戰衝勁十足，共獲得6次，獨享名譽棋聖的稱號。因此被稱為圍棋界的「借錢王」。因為賭債，秀行一生家徒四壁，就連他所住的房子也是以他的兒子名義置下的；如果以他的名字購買，那麼早已被法院拍賣。3他連霸六屆棋聖的巨額獎金仍不足以填補巨額債務的零頭。在一次飛往中國的飛機上，他曾說：「多麼希望現在飛機掉進大海啊。」
三次癌症折磨：秀行先是因為酗酒患胃癌，好不容易撿條命，又發現有淋巴癌，好不容易捱過這道鬼門關，年近八旬時卻又檢查出了前列腺癌，一生遭受三次癌症折磨。然而，無論遭受怎樣的病魔折磨，藤澤秀行從未放棄過圍棋，他在圍棋上的毅力也並未因病魔的摧殘而受到影響。
67歲的王座：1991年，他在日本第39期王座戰五番棋決戰中，3比1挑戰羽根泰正王座成功，創66歲奪冠紀錄。次年他接受小林光一挑戰，在先失一局的情況下，仍然豪氣滿懷地宣稱：「輸了第一局後，我對戰勝他更有信心了！」結果，藤澤秀行3比2技壓小林光一，衛冕王座成功，同時再創67歲奪冠紀錄。至今，該紀錄還由他保持著。此時的藤澤秀行不僅年邁，而且患有胃癌和淋巴癌，胃被切去3/4。這樣的情況還能獲勝，不得不成為圍棋界的傳奇。
此外，藤澤在圍棋界的趣談不計其數。常常鬧得其它棋手尷尬，但在日本，幾乎所有的棋手都對藤澤秀行表示尊敬。`),
"comment_h1":(`希望您可以分享對圍棋的看法`),
"comment_p":(`留言`),
"comment_l1":(`先生 / 小姐:`),
"comment_l2":(`先生`),
"comment_l3":(`小姐`),
"comment_l4":(`姓名`),
"comment_l5":(`電郵`),
"comment_l6":(`聯絡電話`),
"comment_l7":(`對弈經驗`),
"comment_l8":(`目前從未參與任何對局`),
"comment_l9":(`大約 3年-5年`),
"comment_l10":(`超過 5年`),
"comment_l11":(`若然有什麼想分享的事情，請在下欄留言`),
"comment_l12":(`提交`),
"comment_l13":(`日本棋院東京本院 東京都千代田区五番町7-2,與聯絡我們`),
    },

    "jp": {
		"TITLE":"囲碁を楽しもう",
        "Login": "ログイン",
        "RULES": "囲碁のルール",
        "LEAVE_COMMENT": "コメント",
		"h1":"囲碁を楽しもう",
		"p1":"囲碁は誰とでも打てる",
		"buttonlang":"詳しくはこちら",
		"about_GO":"囲碁について",
		"detailsOf_GO":(`囲碁のはじまりは、四千年くらい前、中国からといわれています。
碁盤は宇宙、碁石は星のかわりで、天文や暦、易（占い）に使われたともいわれています。
また、紀元前770〜前221年ころの春秋戦国時代には戦略、政治、人生のシミュレーションゲームとして広まったといわれています。
中国では古くから、王様になるためのたしなみとして「琴棋書画」を子どもに習わせたようです。
「琴」は音楽、「棋」は囲碁、「書」は書道、「画」は絵のことで、立派な王様になるには囲碁の勉強も必要だったのですね。
みなさん三国志を知っていますね。当時の英雄たちも囲碁を楽しみました。蜀の武将 関羽は戦いでケガをしたとき、囲碁をしながら医者に傷の手術をうけたという話があります。（＝三国志演義）`),
		"h1_Of_GO1":(`囲碁の歴史`),
		"content_Of_GO1":(`囲碁の実際の起源は不詳だが、中国で占星術の一法が変化・洗練されて今の形となったのではないかと伝えられている。考古学的な考証では、2002年に中国陝西省の考古学者が、前漢の景帝陽陵で、前漢時代(206 BC - 24 AD)のものと思われる陶製碁盤の断片を発見した。中国の考古学者の調査によれば、この碁盤は皇帝の陵墓から出土したとはいえ、皇族が使用したものではなく、陵墓の墓守達の遊戯のために使用されていたものと推定されている。初期の碁石は、唐宋期のものが残っている。伝説では、堯が息子の丹朱が賢くないのを見て、囲碁を発明し、教えたという。晋代の張華は「博物志」で、「堯造圍棋，以教子丹朱」と「舜以子商均愚，故作圍棋以教之」と記載する。“夏人烏曹作賭博圍棋。”（『潛確類書』）と、夏の時代に発明されたとする伝説もあった。もちろんこれは寓話であり事実ではない。
紀元前には囲碁のことを「弈」（えき）と呼んでおり、「棋」は六博という別のゲームの駒を意味していた。後漢にはいると六博がすたれて、「棋」は弾棋を意味するようになったが、弾棋もすたれると、ようやく囲碁のことを「棋」というようになった。
春秋時代、孔子は囲碁について触れ、「飽食終日，無所用心，難矣哉！不有博弈者乎，為之，猶賢乎已！」（一日中何もしないよりは六博や碁でもやっていた方がましだ）と述べている（論語・陽貨）。
『孟子』や『春秋左氏伝』にも「弈」（囲碁）に関する記載がある。
先秦時代の囲碁のルールは明らかでない。`),
		"h1_Of_GO2":(`日本伝来`),
		"content_Of_GO2":(`日本には遣唐使に加わった吉備真備が伝えたとされる。しかし大宝律令の中に碁に関する項目があること、隋書倭国伝に「好棋博、握槊、樗蒲之戯（囲碁、握槊、樗蒲（さいころ）の競技を好む）」との記載があるから、実際にはさらに以前から伝わっていたと思われる。奈良時代には盛んに打たれていた様で、正倉院に碁盤「木画紫檀棊局（もくがしたんのききょく）」が収められている。平安時代には貴族のたしなみとして好まれ、「枕草子」「源氏物語」などこの時代の代表的な文学作品にもしばしば碁の描写が登場する。現在伝えられている日本最古の棋譜と呼ばれる物は1252年に日蓮がその弟子吉祥丸（後の日朗）と打ったという棋譜であるが、おそらくは後世の偽作である。
愛好者の広まり
室町時代に入ると、それまで公家、僧侶階級に愛好されていた囲碁は武家や庶民にも広がり、同時に碁盤と碁石を使った様々な数とり遊びも生み出されて広まった。有力者は「碁打ち」「上手」と呼ばれる半専業の者を抱えて、競わせるようになり、その中には同朋衆や、出自不明の者も少なくなかった。戦国時代に入ると、戦のシミュレーションとして大いに好まれ、隆盛を迎える。武田信玄他、多くの戦国武将が碁を好んだという記録が残っている。
この時期に群を抜いた第一人者として登場したのが日海（後の本因坊算砂）である。この時代には、それまでは対局する両者が碁盤上にあらかじめいくつかの石を置いて対局していたものを、盤上にまったく石の無い状態から打ち始める方式への移行もあった。このため布石の概念も算砂の時代から生まれたといえる。
算砂は織田信長・豊臣秀吉・徳川家康の囲碁の師であり、三人共に算砂に五子置いていたと言う。算砂を現在のトッププロとすれば、信長たちは現在のアマチュア4、5段ということになる。その腕を信長に認められた算砂は名人の称号を名乗ることを許され、更に秀吉にも重用されて扶持を貰うようになり、家康が将軍となった後は名人碁所（めいじんごどころ）として碁界を統括することを命ぜられた。（算砂は将棋所も受けている）。
戦国から江戸にかけては日本の碁のレベルが飛躍した時代であり、来日していた朝鮮人の李礿（礿は示編に勺）に三子を置かせて勝利したという記録が残っている。三子という数字は現代でいえばトッププロとアマチュア県代表クラスの差である。`),
"h1_Of_GO3":(`世界への広がり`),
		"content_Of_GO3":(`事前置石のない自由布石は16世紀の日本に端を発するもので、それ以前に伝播した国においては事前置石のルールが受け継がれていた。中国・韓国では、20世紀になって日本碁界との接触を機に自由布石が普及し始めた。中韓以外では、近代普及以前に囲碁が伝わった地域としてチベットがあり、1959年にシッキム王国の皇子が来日した際、17路式の囲碁（密芒）用具を持参して日本のプロと打ったという記録がある。
    欧米にルールが正しく紹介されたのは、技師として来日し村瀬秀甫に碁を学んだドイツ人、オスカー・コルシェルト（英語版）が帰国して1860年に東洋研究の学術誌に発表した記事が最初である。コルシェルトは1880年に欧州言語（ドイツ語）で初となる本格的な囲碁の本を出版した。1908年にはこの本を元に英語で最初の囲碁の本がアーサー・スミスという人物によって書かれた。この経緯から欧米では今も囲碁用語の多くに日本語がそのまま使われている。コルシェルトの記事を読んだチェスプレイヤー、エドワード・ラスカーも来日を目指したが第1次世界大戦の混乱もあって果たせず、米国にわたって1934年には英語で2番目となる囲碁の本を執筆、翌1935年にはアメリカ囲碁協会が設立された。1937年にはドイツにも囲碁協会が設立された。また東アジアから諸外国への移民も囲碁の広がりに貢献した。
    戦後になると岩本薫、福田正義をはじめとする日本人の努力もあって囲碁は東アジア以外にも普及し始め、1957年にはヨーロッパ囲碁連盟が結成されてヨーロッパ碁コングレスが毎年開かれるようになった。後にはさらにヨーロッパ青少年囲碁選手権やヨーロッパ・ペア碁選手権などさまざまな大会が開催されるようになった。1961年には日本棋院で英語の囲碁雑誌『Monthly Go Review』が創刊されている。1979年には世界アマチュア囲碁選手権戦がスタート、1982年には29か国が集まって国際囲碁連盟が設立され、加盟国は2018年時点で77か国を数えている。
    1978年には関西棋院でマンフレッド・ヴィンマー（オーストリア出身）、日本棋院でジェームズ・カーウィン（アメリカ合衆国出身）がプロとなったのを皮切りに、欧米出身で日本や韓国のプロ棋士となる者もしだいに増え、国際普及の大きな力となった。2000年には日本棋院所属のマイケル・レドモンド（アメリカ出身）が東アジア以外の出身者として初めて九段に進んだ。
さらにインターネットの普及によりネット碁を通じてどこにいても強い相手と戦える環境が整うと各国選手の実力も上がり、2002年には南米アルゼンチンのアマチュア、フェルナンド・アギラールが国際公式戦で日本のプロ九段を連破した。アマチュアの世界ではさらに拡大の傾向を見せており、アメリカで20万人・ロシアで10万人・ドイツで5万人の競技人口がいると推定される。同時に欧米独自のプロ化の流れも進んで、アメリカ囲碁協会[16]では2011年から韓国棋院と協力する形でプロ制度が発足、2014年にはヨーロッパ囲碁連盟でも独自にプロ制度がスタートした。`),
"rules_GO":(`囲碁の規則`),
"h1_rules_Of_GO1":(`囲碁の規則`),
"rules_Of_GO1":(`囲碁で遊ぶ際に必要な道具は碁盤（ごばん）と黒と白の碁石（ごいし）だけです。正式な碁盤は１９路盤と呼ばれ縦と横にそれぞれ１９本の線があります。他にも４，５，６，７，９，１３路盤と種類があり、ルール等は大きさが変わっても全く変わりません。
下の図で盤面には９個の黒丸●があり星（ほし）といい。中央にある星を天元（てんげん）といいます。`),
"h1_rules_Of_GO2":(`セキ`),
"rules_Of_GO2":(`ほとんどの場合、石が生きるのは二眼を持つことによってですが、それ以外のケースが無いわけではありません
次の図を見てください。の黒石との白石は、まだ眼を持っているとは言えません。二眼を持って生きるためにはそれぞれの相手の石を取ってしまわないといけませんが、そのためには真ん中のを埋めていく必要があります。ところが、2つあるの内どちらか1つに打った後に、続けて残りのもう1つを相手に打たれると自分の石が取られてしまいます。これは黒も白も同じで、お互いに取りにいきたいけれども取りにいけない形になっています。こういう形を「セキ」と呼び、の黒石との白石は両方とも「相手が取ろうとしても取れない石」ですので、それぞれ「生き」となります`),
"h1_rules_Of_GO3":(`藤沢秀行`),
"rules_Of_GO3":(`藤沢 秀行（ふじさわ ひでゆき、ふじさわ しゅうこう、1925年6月14日 - 2009年5月8日）は、日本の囲碁棋
士。本名：「藤沢 保（たもつ）」。棋聖戦6連覇、史上最年長タイトル保持者などに輝いた、昭和を代表する棋士の1人。
年上の甥に藤沢朋斎九段、子（五男）に藤沢一就八段、孫に藤沢里菜五段。
正しい名前の読み方は「ひでゆき」だが、生涯を通じて「しゅうこう」と呼ばれ続けた。
棋風は豪放磊落であり、厚みの働きを最もよく知ると言われた。ポカ（うっかりミス）で好局を落とすことも多かったが、「異常感覚」とも称される鋭い着想を見せ、「華麗・秀行」とも呼ばれた。「序盤50手までなら日本一」とされ、序盤中盤の局後検討で結論がでない場合は「秀行（しゅうこう）先生に聞こう」というのが、かつての日本棋院での決まり文句だった。
盤上での活躍の一方、盤外では酒、ギャンブル、借金、女性関係など破天荒な生活でも有名であった。癌の手術以前はアルコール依存症の禁断症状と戦いながらの対局を重ねていた。こうした「最後の無頼派」とでも称すべき藤沢の人柄を愛する者は多く、政財界に多くの支持者を抱えるほか、日中韓の若手棋士からも非常に尊敬されている。`),
"comment_h1":(`ご意見募集`),
"comment_p":(`コメント`),
"comment_l1":(`性別 `),
"comment_l2":(`男`),
"comment_l3":(`女`),
"comment_l4":(`氏名`),
"comment_l5":(`E-メール`),
"comment_l6":(`電話番号`),
"comment_l7":(`囲碁対局経験`),
"comment_l8":(`対局したことがない`),
"comment_l9":(`3年から5年までの経験ある`),
"comment_l10":(`5年以上の経験ある`),
"comment_l11":(`何か教えたいことあったらここに`),
"comment_l12":(`提出`),
"comment_l13":(`所在地: 日本棋院会館,東京都千代田区五番町7-2`),

	
    }

  };
   
  var lang = "en-gb";
  //Check for localStorage support
  // if('localStorage' in window){  
     // var usrLang = localStorage.getItem('uiLang');
     // if(usrLang) {
         // lang = usrLang
     // }
  //}
  console.log(lang);
  
  			$(".lang").each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr("key")]);
            });
  
  
             $(".translate").click(function() {
            var lang = $(this).attr("id");
            window.location.hash=lang
			$(".lang").each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr("key")]);
            });
			
			
			 });
  
  		    $("#_index").on("click",function(){
				var lang = window.location.hash
				window.location.href = `index.html${lang}`;            
          })
		  
		  $("#_rules").on("click",function(){
				var lang = window.location.hash
				window.location.href = `rules.html${lang}`; 
          })

       $("#_comment").on("click",function(){
            var lang = window.location.hash
            window.location.href = `comment.html${lang}`; 
              })



window.onscroll = function() {scrollFunction()};

const scrollFunction=()=> {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


const topFunction=()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const scrollWin=()=> {
    window.scrollBy(0, 900);
  }

  var map = L.map('map').setView([35.690398511792026, 139.73653191844093], 19);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker();
var marker1 = L.marker([35.690398511792026, 139.73653191844093],{id:5}).bindPopup("Don't hesitate over visiting us").addTo(map);

  $("#newform").submit(function submitForm(e){ 
    e.preventDefault();
   
    const name = $("#_name").val();
    const email = $("#_email").val();
    const gender = $("#_gender").val();
    const experience = $("#experience").val();
    console.log(experience);

    switch (experience){
      case "firstTime":
    alert(`Thank you ${gender} ${name}, for leaving a comment to us, GO is open to everyone even though you have not been playing any GO, the way to learn is not that difficult.`)
    marker1.openPopup()
    break;
    
    case"3-5 years":
    alert(`Thank you ${gender} ${name}, for leaving a comment to us, if you are interested in learning more about GO, we recommend you to join our discussion session`)
    break; 

    case"More than 5 years":
    alert(`Thank you ${gender} ${name}, for leaving a comment to us, you might be playing a lot GO games, what about attending in a sharing session to discuss more with out teammates?`)
    break; 
  }
    
    })








