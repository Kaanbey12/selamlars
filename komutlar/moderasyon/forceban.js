module.exports = {
    name: "force-ban",
    code: `
$ban[$guildID;$message;0;Banned]
$thumbnail[$userAvatar[$message]]
$onlyIf[$isNumber[$guildID;$message]==true;{description:**❌ | <@$authorID>, bir ID girmelisiniz! ID rakamlardan oluşur.**}{color:RED}]
$onlyIf[$isBanned[$guildID;$message]==false;❌ | **<@$authorID>, girdiğiniz ID'li kullanıcı bu sunucudan zaten banlanmış!**]
$onlyPerms[ban;{description:**❌ | <@$authorID>, \`Kullanıcıları Yasakla\` iznin olmadığı için bu komutu kullanmazsın!**}{color:RED}]
$onlyBotPerms[ban;{description:**❌ | <@$authorID>, \`Kullanıcıları Yasakla\` iznim olmadığı için bu komutu çalıştıramam!**}{color:RED}]
$title[$userTag[$authorID]]
$color[GREEN]
$description[**✅ | $message ID'li kullanıcı banlandı!**]
$cooldown[10s;]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`
}