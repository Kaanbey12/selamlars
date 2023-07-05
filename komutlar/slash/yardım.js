module.exports = {
  type: "interaction",
  prototype: "slash",
  name: "yardım",
  code: `
  $reply
  $title[1;$author[1;Disbuard;https://cdn.discordapp.com/avatars/1118249554102456381/11723d5d9ec24ed9fcd37ec0d92a9f52.webp?size=4096;https://cdn.discordapp.com/avatars/1118249554102456381/11723d5d9ec24ed9fcd37ec0d92a9f52.webp?size=4096[$clientID]]
<:icons_shine2:1118630794466955404> Disbuard | Yardım Menüsü.]
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
$addSelectMenu[1;help;Disbuard | Kategori Seç!;1;1;false;Disbuard | Menü:Menüyü Gösterir.:0:false:<:icons_generalinfo:1118635252399747184>;Disbuard | Yetkili:Yetkili, Komutlarını Gösterir.:1:false:<:icons_colorstaff:1111927717269610606>;Disbuard | Kullanıcı:Kullanıcı, Komutlarını Gösterir.:2:false:<:icons_Person:1111927287546400768>;Disbuard | Owner:Yapımcı, Komutlarını Gösterir.:3:false:<:Blurple2:1114448609006592121>]
$image[1;https://media.discordapp.net/attachments/1115538473265401866/1118859541602381886/20230615_140752.jpg]
$color[1;#2b2d31]
  $onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`
}