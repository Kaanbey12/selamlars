module.exports = {
  name:"şikayet",
  code:`
$channelSendMessage[$channelID;{newEmbed:{description:Şikayetiniz Başarıyla Bot Sahibine İletildi.}{color:FFD700}}]
$argsCheck[3;Botla İlgili Şikayetinizi En Az 3 Kelime İle Anlatınız]
$dm[1006333961410183320]
$author[1;Sahip Şikayet Var]
$description[1;$thumbnail[1;$authorAvatar]
Kullanan Kişi <@$authorID> | $authorID | $username#$discriminator[$authorID]

Kullanan Sunucu: $serverName[$guildID]

Kullanılma Sebebi $message[1] $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] $message[21] $message[22] $message[23] $message[24] $message[25] $message[26] $message[27] $message[28] $message[29] $message[30] 


[Buraya Tıkla Ve Git]($createServerInvite[$guildID])]
$image[1;$serverIcon]
`
}
