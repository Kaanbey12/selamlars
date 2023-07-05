module.exports = [{
  name: "şirket-ara",
  aliases: ["şirket-bul","şb"],
  if: "v4",
  code:`  
$author[1;Şirket Bulundu!]
$thumbnail[1;$userAvatar[$get[sahip]]]
$description[1;
**Şirket İsmi:** *\`$message\`*

**Şirket Sahibi:** <@$get[sahip]>

**Şirket Kategori:** *\`$get[kategori]\`*

**Şirket Değeri:** *\`$get[değer] ₺\`*

**Şirket Bankasındaki Para:** *\`$get[para] ₺\`*
]
$color[1;$getServerVar[color]]
 $footer[1;$getServerVar[footer]]
 $addTimesTamp[1]
  $onlyIf[$get[şirket]!=false;:x: | **Bu şirket bulunamadı!**]
  $let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.has("$message")

  ;yes]]

  $let[sahip;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$message")

  ;yes]]
  $let[kategori;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$messagetür")

  ;yes]]
  $let[değer;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$messagedeğer")

  ;yes];null;0]]
  $let[para;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$messagepara")

  ;yes];null;0]]
  $onlyIf[$message!=;:x: | **Şirket ismi girmelisin!**]
`
},{
  name: "şirket-aç",
  code:`
  $setUserVar[param;$sub[$getUserVar[param];50000]]
$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.set("$messageSlice[1]","$authorID")

  ;no]
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.set("$authorID","$messageSlice[1]")

  ;no]
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.set("$messageSlice[1]tür","$noMentionMessage[1]")

  ;no]
✅ | **Şirketin açıldı** \`$messageSlice[1]\` 
$onlyIf[$get[a]!=true;:x: | **Böyle bir şirket senden önce davranılıp kurulmuş!**]
$let[a;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.has("$messageSlice[1]") 


  ;yes]]
$onlyIf[$messageSlice[1]!=;:x: | **Şirket ismini belirt!**]
$onlyIf[$checkContains[$toLowercase[$noMentionMessage[1]];inşaat;teknoloji;site;uygulama;oyun]!=false;:x: | **Şirket türü belirtilmemiş, Şirket türleri:**
\`inşaat
teknoloji
site
uygulama
oyun
\`]
$onlyIf[$getUserVar[param]>=50000;:x: | **Üzgüm şirket açmak için \`$sub[50000;$getUserVar[param]]\` paraya ihtiyacın var!**]
$onlyIf[$get[şirket]!=true;:x: | **Bir şirketin bulunmakta!**]
$let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.has("$authorID") 


  ;yes]]
`
},{
  name: "şirketlerim",
  aliases: ["şirketim"],
  code:`

  🏭 **Sana ait şirket: \`$get[şirket]\`**
  $addButton[1;Şirketini Yönet;3;syönet_$authorID;$replaceText[$replaceText[$checkContains[$get[şirket];Bulunmamakta];true;yes];false;no];🔘]
  $let[şirket;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID") 


  ;yes];null;Bulunmamakta]]
  `
},{
  type: "interaction",
  prototype: "button",
  code:`
  $interactionUpdate[;{newEmbed:{author:Admin Panel - Şirket} {thumbnail:$userAvatar[$clientID]}{description:
**Şirket İsmi:** \`$get[şirket]\`

**Şirket Sahibi:** <@$authorID>

**Şirket Kategori:** \`$get[kategori]\`

**Şirket Değeri:** \`$get[değer] ₺\`
}{color:$getServerVar[color]}{footer:$getServerVar[footer]}};{actionRow:{button:İsimi Değiş:4:sdeğişi_$authorID:no:🏷}{button:Banka:4:sbanka_$authorID:no:🏦}{button::2:syenile_$authorID;all:no:🔃}}]
  $let[kategori;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]tür")

  ;yes]]
  $let[değer;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]değer")

  ;yes];null;0]]
  $let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID")

  ;yes]]
  
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==syönet;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
  $interactionUpdate[;{newEmbed:{author:Admin Panel - Şirket} {thumbnail:$userAvatar[$clientID]}{description:
**Şirket İsmi:** \`$get[şirket]\`

**Şirket Sahibi:** <@$authorID>

**Şirket Kategori:** \`$get[kategori]\`

**Şirket Değeri:** \`$get[değer] ₺\`
}{color:$getServerVar[color]}{footer:$getServerVar[footer]}};{actionRow:{button:İsimi Değiş:4:sdeğişi_$authorID:no:🏷}{button:Banka:4:sbanka_$authorID:no:🏦}{button::2:syenile_$authorID:no:🔃}}]
  $let[kategori;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]tür")

  ;yes]]
  $let[değer;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]değer")

  ;yes];null;0]]
  $let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID")

  ;yes]]
  
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==syenile;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
  $setUserVar[sdeğişi;evet]
  $interactionReply[🏷 **Şirketinin Yeni İsmini Gir**]
  $onlyIf[$getUserVar[sdeğişi]!=evet;{"content": "**Bastın Ya Kardeş Daha Ne Basion**", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sdeğişi;]
  `
},{
  name: "$alwaysExecute",
  $if: "v4",
  code:`
  $if[$getUserVar[sdeğişi]==hayır]
  $else
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.set("$message","$authorID")

  ;no]
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.set("$authorID","$message")

  ;no]
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.set("$messagetür","$get[tür]")

  ;no]
  $deletecommand
  $deleteIn[5s]
  🏷 **Şirketinin yeni ismini \`$message\` olarak değiştirildi.**
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.delete("$get[eşirket]tür")

  ;no]
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.delete("$get[eşirket]")

  ;no]
  $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.delete("$authorID")

  ;no]
  $onlyIf[$get[eşirket]!=$message;:x: | **Şirketinin ismi eskisiyle aynı olamaz**]
  $setUserVar[sdeğişi;hayır]
  $let[tür;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[eşirket]tür")

  ;yes]]
  $let[eşirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID")

  ;yes]]

  $endif
  `
},{
  type: "interaction",
  prototype: "button",
  code:`
  $interactionUpdate[;{newEmbed:{author:Admin Panel - Şirket - Banka} {thumbnail:$userAvatar[$clientID]}{description:
  **Bankadaki Para:** \`$get[banka] ₺\`
}{color:$getServerVar[color]}{footer:$getServerVar[footer]}};{actionRow:{button:Para Çek:4:spçek_$authorID:$get[banka1]}{button::2:sgeri_$authorID:no:⬅}}]
  $let[banka;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]para")

  ;yes];null;0]]
   $let[banka1;$replaceText[$replaceText[$checkContains[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]para")

  ;yes];null];false;no];true;yes]]
  $let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID")

  ;yes]]
  
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sbanka;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
  $interactionUpdate[;{newEmbed:{author:Admin Panel - Şirket} {thumbnail:$userAvatar[$clientID]}{description:
**Şirket İsmi:** \`$get[şirket]\`

**Şirket Sahibi:** <@$authorID>

**Şirket Kategori:** \`$get[kategori]\`

**Şirket Değeri:** \`$get[değer] ₺\`
}{color:$getServerVar[color]}{footer:$getServerVar[footer]}};{actionRow:{button:İsimi Değiş:4:sdeğişi_$authorID:no:🏷}{button:Banka:4:sbanka_$authorID:no:🏦}{button::2:syenile_$authorID:no:🔃}}]
  $let[kategori;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]tür")

  ;yes]]
  $let[değer;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]değer")

  ;yes];null;0]]
  $let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID")

  ;yes]]
  
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sgeri;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
  $setUserVar[şpçek;evet]
  $interactionReply[🏦 **Şirketten ne kadar para çekeceksin?**]
  $onlyIf[$getUserVar[şpçek]!=evet;{"content": "**Bastın Ya Kardeş Daha Ne Basion**", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==spçek;]
  `
},{
  name: "$alwaysExecute",
  $if: "v4",
  code:`
 $djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.subtract("$get[şirket]para","$message")

  ;no]
  $setUserVar[param;$sum[$getUserVar[param];$message]]
  ✅ **Şirketinin Banka Hesabından \`$message\` Para Çekildi**
  $onlyIf[$get[banka]>=$message;:x: **Şirketi borça mı sokcan?**]
  $onlyIf[$message>=1;:x: **En az \`1\` para çekebilirsin**]
  $onlyIf[$isNumber[$message]!=false;:x: **Bir sayı girdinden emin ol**]
  $onlyIf[$get[banka]!=0;:x: **Çok üzgünüm ama senin bankandaki para galiba eskimiş**]
  $setUserVar[şpçek;hayır]
  $let[banka;$replaceText[$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$get[şirket]para")

  ;yes];null;0]]
  $let[şirket;$djsEval[
  const discord = require("discord.js");
  const { Database } = require("ervel.db")
  const db = new Database("./şirket.json") 

  db.get("$authorID")

  ;yes]]
  $setUserVar[şpçek;hayır]
$onlyIf[$getUserVar[şpçek]!=hayır;]
`
}]