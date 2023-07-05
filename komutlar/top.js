module.exports = [{
  name: "panel",
  code: `
$thumbnail[1;$userAvatar[$clientID]] 
$description[1;**⌠ Top ⌡**

 **Aşağıdaki menüden istediğiniz sıralamayı kendi bilgilerinizi seçebilirsin.**]
$color[1;$getVar[color]]
$footer[1;$username;$userAvatar]
$addSelectMenu[1;top_$authorID;Seçenekler;1;1;no;Mesaj sıralaması:Sıran - $getLeaderboardInfo[mesajs;$authorID;user;top]# Mesaj Sayın - $getUserVar[mesajs]:mesaj:no:<:chat_yunusli:949979955121520670>]
$addButton[2;Kullanıcı Bilgileri;2;kullanıcıtop_$authorID;no;<:uye_yunusli:934792156156145715>]
$suppressErrors[{newEmbed:{description:<:carpi_yunusli:950808351581810718> **Bir neden dolayı embed gönderemiyorum.**}{color:$getVar[color]}}]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[;{newEmbed:{thumbnail:$userAvatar[$clientID]}{description:
 **Aşağıdaki menüden istediğiniz sıralamayı kendi bilgilerinizi seçebilirsin.**}}{color:$getVar[color]}{footer:$username:$userAvatar};{actionRow:{selectMenu:top_$authorID:Seçenekler:1:1:false:
{selectMenuOptions:Mesaj sıralaması:mesaj:Sıran - $getLeaderboardInfo[mesajs;$authorID;user;top]# Mesaj Sayın - $getUserVar[mesajs]:true:<:chat_yunusli:949979955121520670>}}}
{actionRow:{button:Kullanıcı Sıralaması:2:kullanıcıtop_$authorID:no:<:uye_yunusli:934792156156145715>}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:<:carpi_yunusli:950808351581810718> **Bu mesaj <@$advancedTextSplit[$interactionData[customId];_;2]> kişisine ait.**}{color:$getVar[color]}}", "ephemeral":true,"options":{"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==topgeri;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[;{newEmbed:{thumbnail:$userAvatar[$clientID]}{description:**⌠ Kullanıcı Bilgisi ⌡**

<:chat_yunusli:949979955121520670> **Mesaj sıralaması:** ⮯
**Mesaj sayısı:** \`$getUserVar[mesajs]\`
**Mesaj sırası:** **$getLeaderboardInfo[mesajs;$authorID;user;top]#**
}{color:$getVar[color]}{footer:$username:$userAvatar}};{actionRow:{button::2:topgeri_$authorID:no:<:sol_yunusli:1045345483301863434>}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:<:carpi_yunusli:950808351581810718> **Bu mesaj <@$advancedTextSplit[$interactionData[customId];_;2]> kişisine ait.**}{color:$getVar[color]}}", "ephemeral":true,"options":{"interaction" : true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==kullanıcıtop;]
$suppressErrors
`
},{
type: 'interaction',
prototype: "selectMenu", 
code: `$interactionReply[;{newEmbed:{thumbnail:$userAvatar[$clientID]}{color:$getVar[color]}{footer:$username:$userAvatar}{description:
**⌠ Mesaj Sıralaması ⌡**

<:uye_yunusli:934792156156145715> **Sıran:** $getLeaderboardInfo[mesajs;$authorID;user;top]#

**---İlk 10---**

<$userLeaderboard[$guildID;mesajs;asc;**{top}** - **{username}** - **{value}**;10]}};{actionRow:{button::2:topgeri_$authorID:no:<:sol_yunusli:1045345483301863434>}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:<:carpi_yunusli:950808351581810718> **Bu mesaj <@$advancedTextSplit[$interactionData[customId];_;2]> kişisine ait.**}{color:$getVar[color]}}", "ephemeral":true,"options":{"interaction" : true}}]
$onlyIf[$interactionData[customId]==top_$interactionData[author.id];]	
$onlyIf[$interactionData[values[0]]==mesaj;]
`
},{
  name: "$alwaysExecute",
  code:`
$setUserVar[mesajs;$sum[$getUserVar[mesajs];1]]
`
}]