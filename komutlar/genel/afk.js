module.exports = [{
  name: "afk",
  kategori: "Kullanıcı",
  code:`
$setGlobalUserVar[afk;evet]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]
$setGlobalUserVar[afksebep;$noMentionMessage]
$description[1;<:icons_Correct:1111927286304886855> **Başarıyla afk oldun.** 
**Sebebi:** \`$noMentionMessage\`]
$color[1;$getVar[color]]
$footer[1;$username;$userAvatar]
$onlyIf[$noMentionMessage!=;{newEmbed:{description:<:carpi:1111927283993804860> **Bir sebep belirt.**}{color:$getVar[color]}}]
$onlyIf[$getGlobalUserVar[afk]!=evet;]
$suppressErrors[{newEmbed:{description:<:carpi:1111927283993804860> **Bir neden dolayı mesaj gönderemiyorum.**}{color:$getVar[color]}}]
`
},{
  name: "$alwaysExecute",
  code:`
$resetGlobalUserVar[afk]
$resetGlobalUserVar[afksebep]
$resetGlobalUserVar[afketiketsayı]
$thumbnail[1;$userAvatar]
$description[1;<a:1028038868534038628:1110685040855228506> **Hoşgeldin $username seni bekliyordum. Seni afklıktan çıkardım.**]
$description[2;<:995790780675412018:1114258169686925454> **Seni toplam \`$getGlobalUserVar[afketiketsayı]\` kişi seni etiketledi.**]
$color[1;$getVar[color]]
$color[2;$getVar[color]]
$footer[2;$username;$userAvatar]
$onlyIf[$getGlobalUserVar[afk]!=hayır;]
`
},{
  name: "$alwaysExecute",
  code:`
$setGlobalUserVar[afketiketsayı;$sum[$getGlobalUserVar[afketiketsayı;$mentioned[1;no]];1];$mentioned[1;no]]
$description[1;<a:1028038868534038628:1110685040855228506> **Hey! $username[$mentioned[1;no]] \`$getGlobalUserVar[afksebep;$mentioned[1;yes]]\` sebebinden afk mesajlara cevap veremez.**]
$color[1;$getVar[color]]
$footer[1;$username;$userAvatar]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]!=hayır;]
$onlyIf[$authorID!=$mentioned[1;no];]
$onlyIf[$mentioned[1;no]!=undefined;]  
`
}]