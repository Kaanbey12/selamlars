module.exports = [{
  name: "pay",
  aliases: ["paylaş"],
  $if: "v4",
  code:`
$setMessageVar[kişi2;$mentioned[1;yes];$get[id]]
$setMessageVar[maaş;$noMentionMessage;$get[id]]
$let[id;$sendMessage[{"content": "**<@$authorID> \`$userTag[$mentioned[1;yes]]\` Adlı kullanıcıya \`$noMentionMessage\` para vermekten emin misin?**", "components": "{actionRow:{button:Evet:3:pkabul_$authorID:no:✅}{button:Hayır:4:phayır_$authorID:no:✖}}"};yes]]  
$onlyIf[$getUserVar[param]>=$noMentionMessage;:x: | **Paran yokki atasın!**]
 $onlyIf[$isNumber[$noMentionMessage]!=false;:x: | **Bir \`sayı\` girdinden emin ol!**]
 $onlyIf[$mentioned[1;yes]!=$authorID;:x: | **Kendine para veremezsin!**]
  `
},{
  type: "interaction",
  prototype: "button",
  code:`
 $setUserVar[param;$sub[$getUserVar[param;$authorID];$get[para]];$authorID] $setUserVar[param;$sum[$getUserVar[param;$get[id2]];$get[para]];$get[id2]]
$interactionUpdate[**Çok bonkörsün <@$authorID> <@$get[id2]> kişiye \`$get[para]\` para verdin.**]
$let[id2;$getMessageVar[kişi2]]
$let[para;$getMessageVar[maaş]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "**Bu pay komutunu sen yönetmiyorsun!**", "ephemeral" : true,"options" : {"interaction" : true}}]$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==pkabul;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
$interactionUpdate[**:x: | Reddedildi**]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "**Bu pay komutunu sen yönetmiyorsun!**", "ephemeral" : true,"options" : {"interaction" : true}}]$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==phayır;]
`
}]