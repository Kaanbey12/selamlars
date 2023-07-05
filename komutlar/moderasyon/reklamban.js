module.exports = [{
    name: "reklam-ban aç",
    code: `
<@!$authorID> Reklam Ban Sistemi Açık Durumuna Getirildi!

$setServerVar[rban;açık]

$onlyPerms[admin;Bu Komutu Kullanmak için YÖNETİCİ Olmalısın!]
    `
},{
    name: "reklam-ban kapat",
    code: `
<@!$authorID> Reklam Ban Sistemi Kapalı Durumuna Getirildi!

$resetServerVar[rban]

$onlyPerms[admin;Bu Komutu Kullanmak için YÖNETİCİ Olmalısın!]
`
},{
    name: "$alwaysExecute",
    code: `
$deleteIn[7s]

$sendDM[$serverName Reklam Yaptığın İçin Sınırsız Ban Yedin!;$authorID;no]
<@!$authorID> **Reklam yaptığı İçin Sonsuza Kada Ban Yedi!**
$ban[$guildID;$authorID;0;Reklam, yaptı ban yedi]
$suppressErrors
$deleteCommand

$onlyif[$checkContains[$message;http;://;.com;.gg;www.]!=false; ]
$onlyIf[$getServerVar[rban]!=kapalı; ]
`
}]