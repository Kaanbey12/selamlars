module.exports = {
  name:"yardım",
  code:`
  $reply
  $onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]
  $title[1;$author[1;Alıenea;https://media.discordapp.net/attachments/1101862543548502046/1121143972291690576/images_1.jpg?width=253&height=253[$clientID]]
<:icons_shine2:1118630794466955404> Alıenea | Yardım Menüsü.]
  $description[1;**» Bilgilendirme / Destek / <:icons_colorstaff:1111927717269610606>** 
  > **Tüyo**: **__Komutları kullanmak için aşağıdaki seçmeli menüyü kullanabilirsiniz.__**

**• Yenilikler <:icons_wumpus:1118638064697356419>**
\`\`\`\
$getVar[yenilik]
\`\`\`\

**• Duyurular <:icons_announce:1111927557596643328>**
\`\`\`\
$getVar[duyuru]
\`\`\`\



  ]
              $addButton[2;Owner: † Lyrøxn#1998;secondary;helloBustsston;yes;<:Blurple1:1114448607014289458>]
$addSelectMenu[1;help;Alıenea | Kategori Seç!;1;1;false;Alıenea | Menü:Menüyü Gösterir.:0:false:<:icons_generalinfo:1118635252399747184>;Alıenea | Yetkili:Yetkili, Komutlarını Gösterir.:1:false:<:icons_colorstaff:1111927717269610606>;Alıenea | Kullanıcı:Kullanıcı, Komutlarını Gösterir.:2:false:<:icons_Person:1111927287546400768>;Alıenea | Owner:Yapımcı, Komutlarını Gösterir.:3:false:<:Blurple2:1114448609006592121>]
$image[1;https://media.discordapp.net/attachments/1119229042542006323/1121143051486761041/20230621_212156.jpg?width=1080&height=607]
$color[1;#2b2d31]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]
  `}