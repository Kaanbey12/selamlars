module.exports = [{
  name: "küfür-engel",
  kategori: "Ayarlamalı",
  $if: "v4",
  code:`
$if[$message[1]==aç]
<:icons_Correct:1111927286304886855>**Küfür engel açıldı.**
$setServerVar[kengel;açık]
$endif
$if[$message[1]==kapat]
<:icons_Correct:1111927286304886855> **Küfür engel kapatıldı.**
$resetServerVar[kengel]
$endif
$onlyIf[$checkContains[$message;aç;kapat]!=false;{newEmbed:{description:<:carpi:1111927283993804860> **Hatalı kullanım! Doğru kullanım: Y+küfür-engel aç|kapat.**}{color:$getVar[color]}}]
$onlyPerms[admin;{newEmbed:{description:<:carpi:1111927283993804860> **Bu komutu sadece \`Yönetici\` yetkisine sahip kişiler kullanabilir.**}{color:$getVar[color]}}]
`
},{
  name: "$alwaysExecute",
  code:`
$deleteIn[7s]
$description[1;<:wumpus_gift:1125360446245974057> **Bu sunucuda küfür etmek yasak <@$authorID>.**]
$deletecommand
$color[1;$getVar[color]]
$onlyIf[$checkContains[$message;amq;amk;aq;sg;siktir git;siktir;amına;amına koyim;a.m.k;ananıskm;ananı skm;skm;yarrak;daşşak;yarra;yarraa;yarraaa;yarraak;yarraak;yarram;yarraam;yarraam]!=false;]
$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
$onlyIf[$getServerVar[kengel]!=kapalı;]
`
}]