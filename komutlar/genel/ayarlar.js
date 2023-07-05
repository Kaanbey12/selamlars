module.exports = [
  {
    name: "ayarlar",
    aliases: ["settings"],
    code:`
$title[1;<:tada:1106686424247447652> Kategoriyi seçmelisin.]
$color[1;$getVar[color]]
$addSelectMenu[1;ayarlar_$authorID;Kategoriyi seç;1;1;no;Sunucu ayarları::ayarlar:no:<:world:1106688773716185131>]
`
  },{
    type: "interaction",
    $if: "v4",
    prototype: "selectMenu",
    code:`
$interactionUpdate[;{newEmbed:{title:<:Blurple4:1114448614421438504> Sunucu ayarları}{thumbnail:$replaceText[$serverIcon;undefined;$authorAvatar]}{color:$getVar[color]}{footer:$getVar[footerz]:$userAvatar}{description:<:icons_edit:1118631094623944774> **| Ayarlamalı selam sistemi:** $get[saas]
<:icons_edit:1118631094623944774> **| Ayarlamalı küfür sistemi:** $get[kengel]
<:icons_edit:1118631094623944774> **| Ayarlamalı Reklam ban sistemi:** $get[rban]
<:icons_edit:1118631094623944774> **| Abone Sistemi Yetkili:** <@&$get[ayetkili]>
<:icons_edit:1118631094623944774> **| Abone Sistemi Yetkili:** <@&$get[arol]>
}}]
$let[saas;$replaceText[$replaceText[$getServerVar[saas];kapalı;<:carpi:1111927283993804860>];açık;<:icons_Correct:1111927286304886855>]]
$let[kengel;$replaceText[$replaceText[$getServerVar[kengel];kapalı;<:carpi:1111927283993804860>];açık;<:icons_Correct:1111927286304886855>]]
$let[ayetkili;$replaceText[$replaceText[$getServerVar[ayetkili];kapalı;<:carpi:1111927283993804860>];açık;<:icons_Correct:1111927286304886855>]]
$let[arol;$replaceText[$replaceText[$getServerVar[arol];kapalı;<:carpi:1111927283993804860>];açık;<:icons_Correct:1111927286304886855>]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"<:x_:1106565137202163845> | **This embed is not yours.**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$interactionData[customId]_$interactionData[values[0]]==ayarlar_$interactionData[author.id]_ayarlar;]	
`
  }
]