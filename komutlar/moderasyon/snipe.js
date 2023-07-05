module.exports = {
  name: "snipe",
  code:`
$author[Snipe Bilgileri;$userAvatar[$getServerVar[snipe3]]]
$thumbnail[$userAvatar[$getServerVar[snipe3]]
$description[**
__Silinen Mesaj:__ \`$getServerVar[snipe1]\`

__Mesajın Silindiği Kanal:__ <#$getServerVar[snipe2]>

__Mesajı Silen Kişi:__ \`$username[$getServerVar[snipe3]]\` | <@$getServerVar[snipe3]>


__Mesajın Sildiği Tarih__
\`$getServerVar[snipe4]\`
**
]
$footer[$getServerVar[footer]]
$color[FFF100]
$onlyIf[$getServerVar[snipe3]!=;Snipe geçmişi bulunmamakta]
$onlyPerms[admin;Bu komutu sadece \`Yönetici\` yetkisine sahip kişiler kullanabilir]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
`
}