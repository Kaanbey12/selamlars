module.exports = [{
  name: "maaş",
  $if: "v4",
  code:` $if[$checkContains[$authorID;1006333961410183320]==true]
$setMessageVar[kişi2;$mentioned[1;yes];$get[id]]
$setMessageVar[maaş;$noMentionMessage[1];$get[id]]
$let[id;$sendMessage[{"content": "**<@$authorID> \`$userTag[$mentioned[1;yes]]\` Adlı Kullanıcıya \`$noMentionMessage\` Maaş Vermekten Emin Misin?**", "components": "{actionRow:{button:Evet:3:mkabul_$authorID:no:✅}{button:Hayır:4:mhayır_$authorID:no:✖}}"};yes]]  $onlyIf[$noMentionMessage>=100;:x: **En Az \`100\` Maaş Verebilirsin**]
 $onlyIf[$isNumber[$noMentionMessage]!=false;:x: **Bir \`Sayı\` Girdinden Emin Ol**]
$else
$setMessageVar[kişi2;$mentioned[1;yes];$get[id]]
$setMessageVar[maaş;$noMentionMessage[1];$get[id]]
$let[id;$sendMessage[{"content": "**<@$authorID> \`$userTag[$mentioned[1;yes]]\` Adlı Kullanıcıya \`$noMentionMessage\` Maaş Vermekten Emin Misin?**", "components": "{actionRow:{button:Evet:3:mkabul_$authorID:no:✅}{button:Hayır:4:mhayır_$authorID:no:✖}}"};yes]]  $onlyIf[$noMentionMessage>=100;:x: **En Az \`100\` Maaş Verebilirsin**]
 $onlyIf[$isNumber[$noMentionMessage]!=false;:x: **Bir \`Sayı\` Girdinden Emin Ol**]
$onlyPerms[admin;Yetersiz Yetki]

 $endif
  `
},{
  type: "interaction",
  prototype: "button",
  code:`
  $setUserVar[param;$sum[$getUserVar[param;$get[id2]];$get[para]];$get[id2]]
$interactionUpdate[**Çok Bonkörsün <@$authorID> <@$get[id2]> Kişiye \`$get[para]\` Maaş Verdin**]
$let[id2;$getMessageVar[kişi2]]
$let[para;$getMessageVar[maaş]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "**Bu Maaş Komutunu Sen Yönetmiyorsun**", "ephemeral" : true,"options" : {"interaction" : true}}]$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mkabul;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
$interactionUpdate[**:x: Reddedildi**]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "**Bu Maaş Komutunu Sen Yönetmiyorsun**", "ephemeral" : true,"options" : {"interaction" : true}}]$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mhayır;]
`
}]