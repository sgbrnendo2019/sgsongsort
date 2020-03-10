// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "SAKURA GAKUIN",
  "GRADUATE SONGS",
  "MINI PATI",
  "SLEEPIECE",
  "LOGICA",
  "BABYMETAL",
  "TWINKLESTARS",
  "KOUBAIBU",
  "PASTEL WIND",
  "OTHERS"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "FLY AWAY", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Hello! IVY", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Chime", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Yume ni Mukatte", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "message", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Verishuvi", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "FRIENDS", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Otomegokoro", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Pictogram", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "See you...", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Tabidachi no Hi ni", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "WONDERFUL JOURNEY", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Sleep Wonder", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "My Graduation Toss", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Marshmallow Iro no Kimi to", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Makeru! Seishun Hizakozou", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Hana*Hana", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Ganbare!!", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "I-J-I", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Mikansei Silhouette", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Jump Up ~Chiisana Yuki~", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Animarhythm", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Heart no Hoshi", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Gokigen! Mr. Tropicalories", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Aogeba Toutoshi", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Sayonara, Namida", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Kimi ni Todoke", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Mathematica!", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2015.jpg"],
  [1, "Yakusoku no Mirai", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2015.jpg"],
  [1, "Kirameki no Kakera", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2015.jpg"],
  [1, "Melodic Solfege", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2016.jpg"],
  [1, "Identity", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2016.jpg"],
  [1, "My Road", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2017.jpg"],
  [1, "Magic Melody", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2017.jpg"],
  [1, "Futari Kotoba", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2017.jpg"],
  [1, "Nee", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2017.jpg"],
  [1, "Carry on", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2018.jpg"],
  [1, "Fairy tale", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2018.jpg"],
  [1, "Aoharu Hakusho", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2019.jpg"],
  [1, "Merry Xmas to you", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2019.jpg"],
  [1, "Monochrome", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2019.jpg"],

  [1, "Song for Smiling", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "Mezase! Super Lady", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "School days", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "Pumpkin Parade", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "Sakura Hyakunin Isshu", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "Planet Episode 008", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "Capsule Scope", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],
  [1, "Day Dream Believer", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], "sg.png"],

  [1, "3.a.m", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Sakurairo no Avenue", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "FRIENDS Unplugged", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Takaramono", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Michishirube", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2015.jpg"],
  [1, "Yubikiri", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2016.jpg"],
  [1, "Mirai Tokei", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2017.jpg"],
  [1, "Clover", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2018.jpg"],
  [1, "Crossroad", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2019.jpg"],

  [1, "Happy Birthday (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Princess a la mode (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Yokubari Fille (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Miracle Pattyful Hamburger (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Shanari Hannari Dorayaki Hime (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Hirari! Kira Kira Yami Yami Museum (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Jakapara Goo Goo Omurice (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2015.jpg"],
  [1, "Davada Salad de C'est bon Avenue (Mini Pati)", [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "sgsong/sg2016.jpg"],
  
  [1, "Medaka no Kyoudai (Sleepiece)", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Hashire Shoujiki Mono (Sleepiece)", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Suimin Fusoku (Sleepiece)", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Ningentteina (Sleepiece)", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], "sg.png"],
  
  [1, "Science Girl Silence Boy (Logica)", [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Delta (Logica)", [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  [1, "Welcome to My Computer (Logica)", [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], "sgsong/sg2013.jpg"],
  [1, "Yume wo Hodoku Riron (Logica)", [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], "sg.png"],
  [1, "IMA ELEMENT (Logica)", [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], "sg.png"],

  [1, "Doki Doki MORNING (Babymetal)", [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Ii ne! (Vega Mix Version) (Babymetal)", [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Headbanger!! (Babymetal)", [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], "sgsong/sg2012.jpg"],
  
  [1, "Dear Mr.Socrates (Twinklestars)", [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], "sgsong/sg2010.jpg"],
  [1, "Please! Please! Please! (Twinklestars)", [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Rapicamu (Twinklestars)", [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], "sgsong/sg2011.jpg"],
  [1, "Tenshi to Akuma (Twinklestars)", [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], "sg.png"],
  
  [1, "Peace de Check! (Koubaibu)", [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], "sgsong/sg2014.jpg"],
  [1, "Akindo Soul (Koubaibu)", [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], "sgsong/sg2017.jpg"],

  [1, "Scoreboard ni Love ga Aru (Pastel Wind)", [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], "sgsong/sg2012.jpg"],
  [1, "Yosoijo no Smash (Pastel Wind)", [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], "sgsong/sg2013.jpg"],

  [1, "Brand New Day (Scoopers)", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], "sgsong/sg2010.jpg"],
  [1, "C'est la vie (Trico Dolls)", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], "sgsong/sg2018.jpg"],
  [1, "Spin in the Wind (Wrestling Club)", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], "sgsong/sg2010.jpg"],

];
