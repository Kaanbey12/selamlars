module.exports = {
  name: "sa-as",
  code: `
$description[1;<@$authorID> **Sa-As** Sistemi **Aktif** Duruma Getirilsinmi?]
$color[1;ffffff]

$addbutton[1;Kapat;danger;DarkLonSaAsKapat;$replaceText[$getServerVar[saas];kapalı;yes];<:icons_Correct:1111927286304886855>]
$addbutton[1;Aç;success;DarkLonSaAsAç;$replaceText[$getServerVar[saas];açık;yes];<:carpi:1111927283993804860>]
$deleteIn[4s]
$onlyIf[$hasPerms[$guildID;$authorID;managemessages]!=false;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **Mesajları Yönet** İznine Sahip Kişiler Kullanabilir!}{color:ff0000}}]
`}