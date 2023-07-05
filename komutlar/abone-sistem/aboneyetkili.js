module.exports = {
name:"abone-yetkili",
code:`
✅ | **Abone yetkilisi \`$roleName[$mentionedRoles[1]]\` olarak ayarlandı.**
$setServerVar[ayetkili;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketlemelisin]
$onlyPerms[admin;⚠️ Bunun için **\`Yönetici\`** iznin olmalı]
$suppressErrors


`
}   