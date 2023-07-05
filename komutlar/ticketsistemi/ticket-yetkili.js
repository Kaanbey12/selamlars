module.exports = {
name:"ticket-yetkili",
code:`
✅ | **Ticket yetkilisi \`$roleName[$mentionedRoles[1]]\` olarak ayarlandı.**
$setServerVar[staff;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketlemelisin]
$onlyPerms[admin;⚠️ Bunun için **\`Yönetici\`** iznin olmalı]
$suppressErrors


`
}   