module.exports = {
name:"ticket-cat",
aliases: ["tick-katogori"], 
  $if: "v4",
  code:`
$setServerVar[category;$mentionedChannels[1]]
<:icons_Correct:1111927286304886855> | Ticket log <#$mentionedChannels[1;yes]> kanalı ayarlandı.
$deleteIn[7s]
$onlyIf[$getServerVar[category]!=yok;<:carpi:1111927283993804860> | Komutları kullanmak için bir kanal etiketlemeniz gerekiyor {delete:7s}]
$onlyPerms[admin;<:carpi:1111927283993804860> | Bu işlem için Yönetici iznine sahip olmalısın{delete:7s}]


`}
