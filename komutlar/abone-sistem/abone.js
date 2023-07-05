module.exports = {
name:"abone",
aliases:"a",
code:`
<@$mentioned[1]> **Artık abone rolün var, Kodlara ve altyapılara erişebilirsin.**
$giveRoles[$guildID;$message[1];$getServerVar[arol]]
$onlyIf[$message[1]!=; Bir id girmelisin]
$onlyIf[$getServerVar[arol]!=;⚠️ Abone sistemi ayarlanmamış]
$onlyIf[$getServerVar[ayetkili]!=;⚠️ Abone sistemi ayarlanmamış]
$suppressErrors

`
} 