module.exports = [{
  name:"help",
  code:`
$addSelectMenu[1;help;Alıenea | Kategori Seç!;1;1;false;Moderasyon:Moderasyon menüsünü açmak için tıkla.:0:false:🙃;Ayarlamalı:Ayarlamalı menüsünü açmak için tıkla.:1:false:🙃;Genel:Genel menüsünü açmak için tıkla.:2:false:🙃]
  `
},{
    name:"help",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed:{author:Alıenea | Ana Menü.:$authorAvatar}{description:
\`\`\`\$getVar[anamenü]\`\`\`\}{color:WHITE}};;;all;yes]
   
$onlyIf[$interactionData[values[0]]==0;]
    `
    },{
    name:"help",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed:{author:Yetkili-Moderasyon Komutları:$authorAvatar}{description:
\`\`\`\$getVar[moderasyon]\`\`\`\}{color:WHITE}};;;all;yes]
  
$onlyIf[$interactionData[values[0]]==1;]
    `
    },
              {
    name:"help",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed:{author:YAPIMCI KOMUTLARI:$authorAvatar}{description:
\`\`\`\$getVar[yapımcı]\`\`\`\}{color:WHITE}};;;all;yes]
  
$onlyIf[$interactionData[values[0]]==3;]
    `
    },    
                  {
      name:"help",
      type:"interaction",
      prototype:"selectMenu",
      code:`
     $interactionReply[;{newEmbed:{author:Genel:$authorAvatar}{description:
KOMUTLARINIZI GİRİN}{color:WHITE}};;;all;yes]
    
$onlyIf[$interactionData[values[0]]==2;]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]
    `
    }]    