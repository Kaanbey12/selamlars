module.exports = {
name:"abone-rol",
code:`
✅ | **Abone rolü \`$roleName[$mentionedRoles[1]]\` olarak ayarlandı.**
$setServerVar[arol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketlemelisin]
$suppressErrors

$onlyPerms[admin;⚠️ Bunun için **\`Yönetici\`** iznin olmalı]
`
} 