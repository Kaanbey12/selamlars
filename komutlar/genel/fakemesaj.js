module.exports ={
  name: "fake", 
  code:`
$sendWebhookMessage[$splitText[1];$splitText[2];{"content":"$nomentionmessage"}]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1]];$userAvatar[$mentioned[1]];/];/]
$onlyIf[$nomentionmessage!=;Lütfen sahte mesaj oluşturmak için bir mesaj giriniz.]
$onlyIf[$isMentioned[$mentioned[1]]!=false;Sahte mesaj attırmak istediğin kullanıcıyı etiketle.]
$onlyBotPerms[managewebhooks;Botun webhook'ları yönetme yetkisi yok.]
$deletecommand 
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`
}