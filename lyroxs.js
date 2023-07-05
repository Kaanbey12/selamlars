const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: "MTExODI0OTU1NDEwMjQ1NjM4MQ.GnGzl2.gWlxqpONl5Vli5VzviRd3il2K3NO2BQUURldlA", 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onGuildLeave()
bot.onGuildJoin()
 bot.onVoiceStateUpdate()
 bot.onChannelDelete()
 bot.onInteractionCreate()

////////// Durum \\\\\\\\\\
bot.status({
  text: "$serverCount Sunucu | $allMembersCount Kişi | a!yardım",//buraya durum yazısı
type:"LISTENING",
status:"dnd",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
prefix:"a!",
  saas:"kapalı",
   color: "2d2d2e",
  hello:"",
  anamenü:"",
        kural: "hayır",
 afk: "hayır",
  beta:"no",
  ksebep:"",
afksebep: "",
   prekod: "0",
  prekodm: "0",
   psorumlusu:"",
  footer:"Alıenea Canary",
    footerz:"Not:<@&> Ayarlanmamış demektir.",

  kl:"false",

  psorumlusuu:"hayır",
      kengel: "kapalı",
  ptext:"",
  ptextt:"hayır",
  pkanal:"",
  pkanall:"hayır",
  plog:"",
  plogg:"hayır",
  Oys:"",
  snipe1: "",
snipe2: "",
snipe3: "",
snipe4: "",
  partner:"kapalı",
  ps:"no",
    girissayi: "",
  giriskisi: "",
    agc: "kapalı",
  pre: "yok",
    afketiketsayı: "0",
  duyuru:"",
  yapımcı:"",
  yenilik:"",
    tick_e: "false",
  ayetkili: "",
arol: "",
    tick: "false",
    rban: "kapalı",
  timeoutnedeni:"",
      mesajs: "0",
  lexp: "100",
  tag: "0",
  ekonomimesajid:"1125891016680026153",
  tepki: "0",
  kişi: "",
  isim: "",
  kullanan: "",
  kayıtbilgi:"",
  sicil:"",
  id: "",
  jail: "",
  jailkişi: "",
  sebeb: "asdas",
  mexp: "0",
  banka:"",
  level: "0",
  toplammesaj: "0",
  kufurlumesajlar:"0",
  para:"0",
  gunms:"1653512400",
  rcezali:"",
  kgun:"0",
  sgun:"1",
  khata:"1125891016680026153",

 moderasyon: "", //available (id), (name), (discriminator), (timestamp)
 susturmasüre: "",
 susturmakisi: "",
 voicetimedelete: "0", //milisecond
 voiceactive: "false"

})

//////////// Komutlar \\\\\\\\\\


bot.command({
name:"i",
aliases:"gecikme",
description:"Botun pingini gösterir.",
code:`
$author[1;$serverName[$guildID];$serverIcon]
$description[1;$addField[1;> Server Icon;[Click here]($serverIcon);yes]
$addField[1;> <:icons_Person:1111927287546400768> Members;\`$membersCount\`;yes]
$addField[1;> <:icons_djoin:1111927867819950111> Roles;\`$roleCount\`;yes]  
$addField[1;> <:icons_djoin:1111927867819950111> Emojis;\`$emojiCount[$guildID]\`;yes]
$addField[1;> <:icons_djoin:1111927867819950111> Voice Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_VOICE").size;yes]\`;yes]
$addField[1;> <:icons_djoin:1111927867819950111> Text Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;yes]\`
;yes]
$addField[1;> <:icons_edit:1111927999982477322> Server ID;\`$guildID\`;yes]
$addField[1;> <:icons_edit:1111927999982477322> Creation date;\`$creationDate[$guildID;date]\`;yes]
$addField[1;> <:Green5:1114448655089418312> Owner;<@!$ownerID>;yes]
  $addButton[1;Refresh;danger;refresh;no;🔄]
  $addButton[1;Member  $numberSeparator[$membersCount;.];success;helloButton;yes;<:Green10:1114448666724401202>]
    $addButton[1;Roles $roleCount;success;helloButston;yes;<:Green15:1114448699087659099>]
        $addButton[1;Owner: † Lyrøxn#1998;secondary;helloBustsston;yes;<:Blurple1:1114448607014289458>]
        

  $addSelectMenu[2;helpCustomID;This placeholder won't show up cause we have selected default field as yes;1;1;yes;A Option:Description of A option:helpValue0:no:👋;All members $numberSeparator[$allMembersCount;.]::helpValue1:yes]

  $addSelectMenu[3;helpCustsomID;This placeholder won't show up cause we have selected default field as yes;1;1;yes;A Option:Description of A option:helpVaslue0:no:👋;All emoji $numberSeparator[$allChannelsCount;.]
::helpVsalue1:yes]

$color[1;#2d2d2e]
]
$addTimestamp[1]
$footer[1;Requested by $userTag]`
})




bot.interactionCommand({
  name: "refresh",
  prototype: 'button',
  code: `
$deletecommand
$suppressErrors
$editMessage[$messageID;$author[1;$serverName[$guildID];$serverIcon]
$addField[1;> <:icons_Person:1111927287546400768> Members;\`$membersCount\`;yes]
$addField[1;> <:icons_djoin:1111927867819950111> Roles;\`$roleCount\`;yes]  
$addField[1;> <:icons_djoin:1111927867819950111> Emojis;\`$emojiCount[$guildID]\`;yes]
$addField[1;> <:icons_djoin:1111927867819950111> Voice Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_VOICE").size;yes]\`;yes]
$addField[1;> <:icons_djoin:1111927867819950111> Text Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;yes]\`
;yes]
$addField[1;> <:icons_edit:1111927999982477322> Server ID;\`$guildID\`;yes]
$addField[1;> <:icons_edit:1111927999982477322> Creation date;\`$creationDate[$guildID;date]\`;yes]
$addField[1;> <:Green5:1114448655089418312> Owner;<@!$ownerID>;yes]
  $addButton[1;Refresh;danger;refresh;no;🔄]
  $addButton[1;Member  $membersCount;success;helloButton;yes;<:Green10:1114448666724401202>]
    $addButton[1;Roles $roleCount;success;helloButston;yes;<:Green15:1114448699087659099>]
        $addButton[1;Owner: † Lyrøxn#1998;secondary;helloBustsston;yes;<:Blurple1:1114448607014289458>]
        $color[1;#2d2d2e]

`
});

bot.command({
name: "yenilik-ekle",
code: `
$onlyForIDs[942155951396503572;:x: You can't run this command]
$setVar[yenilik;$message]` //This value will be the same for all users in all servers
})

bot.command({
name: "duyuru-ekle",
code: `
$onlyForIDs[942155951396503572;:x: You can't run this command]
$setVar[duyuru;$message]` //This value will be the same for all users in all servers
})



bot.guildJoinCommand({
channel: "1116779526488330311",
code: `
$title[1;BİR SUNUCUYA EKLENDİM]
  $description[1;

**• Sunucu ismi <:icons_wumpus:1118638064697356419>**
\`\`\`\
$serverName
\`\`\`\

**• Sunucu Kimliği <:icons_announce:1111927557596643328>**
\`\`\`\
$guildID
\`\`\`\

**• Sunucudaki Üye sayısı <:icons_wumpus:1118638064697356419>**
\`\`\`\
$membersCount
\`\`\`\

`
})

bot.guildLeaveCommand({
channel: "1116779526488330311",
code: `
$title[1;BİR SUNUCUDAN ATILDIM]
  $description[1;

**• Sunucu ismi <:icons_wumpus:1118638064697356419>**
\`\`\`\
$serverName
\`\`\`\

**• Sunucu Kimliği <:icons_announce:1111927557596643328>**
\`\`\`\
$guildID
\`\`\`\

**• Sunucudaki Üye sayısı <:icons_wumpus:1118638064697356419>**
\`\`\`\
$membersCount
\`\`\`\


  ]
$addButton[1;Owner: † Lyrøxn#1998;secondary;helloBustsston;yes;<:Blurple1:1114448607014289458>]
$color[1;#2b2d31]


`
})

bot.command({
name: "ana-ekle",
code: `
$onlyForIDs[1006333961410183320;:x: You can't run this command]
$setVar[anamenü;$message]` //This value will be the same for all users in all servers
})

bot.command({
name: "mod-ekle",
code: `
$onlyForIDs[1006333961410183320;:x: You can't run this command]
$setVar[moderasyon;$message]` //This value will be the same for all users in all servers
})

bot.command({
name: "owner-ekle",
code: `
$onlyForIDs[1006333961410183320;:x: You can't run this command]
$setVar[yapımcı;$message]` //This value will be the same for all users in all servers
})

bot.command({
name: "replacetext",
code: `$replaceText[$membersCount;Bye;Goodbye]`
})
// Returns: Hi Goodbye



bot.guildJoinCommand({
  name: "$alwaysExecute",
  code: `
$description[
<@$ownerID> Beni Davet Ettiğin İçin Teşşekürler.

Eğer Bana Gelen En son Güncellemeleri Görmek için [Destek Sunucum](https://discord.gg/altyapi) gelmeyi Unutmayın.
]
$color[#9269ff]
$dm[$ownerID]
$footer[PixelMoon]
`
})

bot.command({
name: "evs",
code: `
$eval[$message]
`
})


process.on('unhandledRejection', (reason, p) => {
  console.log('[hataAyıklayıcı] :: İşlenmeyen Reddetme/Yakalama');
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log('[hataAyıklayıcı] :: Yakalanmayan İstisna/Yakalama');
  console.log(err, origin);
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('[hataAyıklayıcı] :: Yakalanmayan İstisna/Yakalama (MONİTÖR)');
  console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log('[hataAyıklayıcı] :: Çoklu Çözümler');
});


bot.command({
name: "create",
code: `Channel ID: $createChannel[$guildID;selam;voice;no]` //Makes a text channel named "new"
})

bot.command({
name:"<@1118249554102456381>",
code:`
$reply
$title[1;✏️ Bana, seslendin sanırım]
$description[1;<a:1028038868534038628:1110685040855228506> **Hey $username bana seslendin sanırım. Prefixim a!**
<:995790780675412018:1114258169686925454> **Pingim $ping**
<:icons_shine2:1118630794466955404> **Toplam komut sayısı $commandsCount**
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧
**__Bilgilerim__**
<a:hawliboi:1119338258673967184> > **Toplam Kullanıcı sayısı $allMembersCount**
<a:hawliboi:1119338258673967184> > **Toplam Sunucu sayısı $serverCount**
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧
**__Destek ekibi__**
<:icons_wumpus:1118638064697356419> **⚚𝕷𝖞𝖗𝖔𝖝𝖓#3513** [Profiline Git](https://discord.com/users/1006333961410183320)
<:icons_wumpus:1118638064697356419> **⚚vαlєntìα** [Profiline Git](https://discord.com/users/281790651040006144)
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧
**__Destek sunucusu__**
<:icons_invite:1111928203448164373> **Hey sen desteğe mi ihtiyacın var** [Destek, sunucuma katıl](https://discord.gg/altyapi)
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧
]
$addSelectMenu[1;help;Alıenea | Kategori Seç!;1;1;false;Alıenea | Menü:Menüyü Gösterir.:0:false:<:icons_generalinfo:1118635252399747184>;Alıenea | Yetkili:Yetkili, Komutlarını Gösterir.:1:false:<:icons_colorstaff:1111927717269610606>;Alıenea | Kullanıcı:Kullanıcı, Komutlarını Gösterir.:2:false:<:icons_Person:1111927287546400768>;Alıenea | Owner:Yapımcı, Komutlarını Gösterir.:3:false:<:Blurple2:1114448609006592121>]
$color[#2b2d31]

`,
nonPrefixed: true
})

bot.command({
name: "çalış",
code: `
💸・Çalıştın Ve $numberSeparator[$random[500;3000];.] Para Kazandın
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[500;3000]];$authorID]
$numberSeparator[$random[500;3000];.]
`
})

bot.variables({
param:"0",
banka:"0",
}) 

bot.command({
name: "beta",
code: `
$onlyForIDs[1006333961410183320;**Üzgünüm bu komutu kullanamazsın**]
$setGlobalUserVar[beta;yes;$message]
$description[1;<@$message> <:icons_Correct:1111927286304886855> İsimli kullanıcı artık beta kullanıcısı.]
$color[1;0x00FFED]

`
})










bot.command({
name: "uyar",
code: `
$sendDM[$message[2];$message[1];no]
`
})

bot.command({
name: "perm",
code: `
$onlyForRoles[1125326365357506571:You can't run this command]
  $giveRole[$guildID;$message[1];1119887297060556831]
`
})


//sa-as sistemi
//aç
bot.interactionCommand({
  name: "DarkLonSaAsAç",
  prototype: "button",
  $if: "v4",
  code: `
$setServerVar[saas;açık]
$interactionReply[;{newEmbed:{description:Sistem Başarı İle **Aktif** Hale Getirildi!}{delete:3}{color:GREEN}};};;all;yes]

$if[$getServerVar[saas]==açık]
$interactionReply[;{newEmbed:{description::exclamation: <@$authorID> Bu Sunucuda Sistem Zaten **Aktif** Durumda!}{delete:3}{color:ff0000}};};;all;yes]
$endif

$if[$hasPerms[$guildID;$authorID;managemessages]==false]
$interactionReply[;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **Mesajları Yönet** İznine Sahip Kişiler Kullanabilir!}{color:ff0000}};};;;yes]
$endif
  `
  })


//kapat
bot.interactionCommand({
  name: "DarkLonSaAsKapat",
  prototype: "button",
  $if: "v4",
  code: `
$setServerVar[saas;kapalı]
$interactionReply[;{newEmbed:{description:Sistem Başarı İle **Devre Dışı** Duruma Getirildi!}{delete:3}{color:RED}};};;all;yes]

$if[$getServerVar[saas]==kapalı]
$interactionReply[;{newEmbed:{description::exclamation: <@$authorID> Bu Sunucuda Sistem Zaten **Devre Dışı** Durumda!}{delete:3}{color:ff0000}};};;all;yes]
$endif

$if[$hasPerms[$guildID;$authorID;managemessages]==false]
$interactionReply[;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **Mesajları Yönet** İznine Sahip Kişiler Kullanabilir!}{color:ff0000}};};;all;yes]
$endif
`
  })
bot.command({
  name:"$alwaysExecute",
  code:`

$onlyIf[$message!=sa;<:wumpus_gift:1125360446245974057> <@$authorID> **AleykümSelam Hoş Geldin.**]
$onlyIf[$getServerVar[saas]!=kapalı;]

  `,
})

bot.loopCommand({
code: `
$editMessage[1125361922091524116;Her 90 Saniye İçinde Yeni Bir Avatar Açılır.{newEmbed:{author:$username[$randomUserID] - Avatarı:$userAvatar[$randomUserID]}{description:[İndirmek İçin Tıkla!]($userAvatar[$randomUserID])}{footer:$randomUserID}{image:$userAvatar[$randomUserID]}};1125117282687914136]
`,
channel: "1125117282687914136",
executeOnStartup: true,
every: 900000 //kaç saniyede bir loop uygulansın?
})


bot.variables({
  param: "0",
  banka: "0",
  klasiky: "hayır",
  dolar: "25.99",
  dolars: "0",
  sdolar: "24.99",
    şpçek: "hayır",
  category:"",//Kategori ID
ticket:"",//Elleme
number:"0",//Elleme
staff:"",//Yetkili rolü ID
user:"",//Elleme,
  ticketmesaj: "",
  ticketlog: "",
  euro: "28.28 ",
  euros: "0",
  seuro: "1.68",
  sterlin: "2.78",
    kişi: "",
  kişi2: "",
  yüzükev: "",
  maaş: "",
  iphonex: "hayır",
  samsunga20: "hayır",
  iş: "hayır",
  işsüre:"",
  sterlins: "0",
    maaş: "",
  ssterlin: "2.67",
  döviz: "",
  sdeğişi: "hayır",
  thesapa: "hayır",
  tweeta: "hayır",
  tlike: "0",
  tdlike: "0",
  tbaşlık: "",
  taçıklama: "",
  tresim: "",
  tpp: ""
})

bot.loopCommand({
code: `
$setUserVar[dolar;$sum[$getUserVar[dolar;$clientID];$replaceText[$replaceText[$get[dolar];a;+];b;-]$get[oran]];$clientID]
$setUserVar[euro;$sum[$getUserVar[euro;$clientID];$replaceText[$replaceText[$get[euro];a;+];b;-]$get[oran]];$clientID]
$setUserVar[sterlin;$sum[$getUserVar[euro;$clientID];$replaceText[$replaceText[$get[euro];a;+];b;-]$get[oran]];$clientID]
$setUserVar[sdolar;$sum[$getUserVar[sdolar;$clientID];$replaceText[$replaceText[$get[dolar];a;+];b;-]$get[oran]];$clientID]
$setUserVar[seuro;$sum[$getUserVar[seuro;$clientID];$replaceText[$replaceText[$get[euro];a;+];b;-]$get[oran]];$clientID]
$setUserVar[ssterlin;$sum[$getUserVar[seuro;$clientID];$replaceText[$replaceText[$get[euro];a;+];b;-]$get[oran]];$clientID]
$editMessage[$getServerVar[ekonomimesajid];{newEmbed:{author:Döviz Kuru:$userAvatar[$clientID]}{description:
💵 **Dolar:** [\` $sum[$getUserVar[dolar;$clientID];$replaceText[$replaceText[$get[dolar];a;+];b;-]$get[oran]] \`] $replaceText[$replaceText[$get[dolar];a;🔺];b;🔻]

💶 **Euro:** [\` $sum[$getUserVar[euro;$clientID];$replaceText[$replaceText[$get[euro];a;+];b;-]$get[oran]] \`] $replaceText[$replaceText[$get[euro];a;🔺];b;🔻]

💷 **Sterlin:** [\` $sum[$getUserVar[sterlin;$clientID];$replaceText[$replaceText[$get[sterlin];c;+];b;-]$get[oran]] \`] $replaceText[$replaceText[$get[sterlin];c;🔺];b;🔻]
}{color:$getServerVar[color]}{footer:$getServerVar[footer]}}]
$let[dolar;$randomText[a;b]]
$let[euro;$randomText[b;a]]
$let[sterlin;$randomText[b;c]]
$let[oran;$randomText[0.01;0.02;0.03]]
`,
channel: "1125890473899343892",
executeOnStartup: false,
every: 1000
})

