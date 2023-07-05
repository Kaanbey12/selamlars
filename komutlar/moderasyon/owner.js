module.exports = {
  name: "owner",
  $if: "v4",
  aliases:["kurucu"],
  code: `

$color[ff0000]
$description[**$serverName[$guildID] adlı sunucunun sahibi <@$ownerID> adlı kullanıcıdır**]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`
}