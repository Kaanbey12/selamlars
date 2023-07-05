module.exports = [{
  name: "günlük",
  code:`     
  💲 **Günlüğünü Almak İçin Butona Tıkla**
  $addButton[1;Günlüğünü Al;3;günlük_$authorID;no;💲]
  $cooldown[24h;:x: \`%time%\` Sonra Günlüğün Yenilenicek]
  `
},{
  type: "interaction",
  prototype: "button",
  code:` $setUserVar[param;$sum[$getUserVar[param];$get[param]]]
  $interactionUpdate[💸 Günlüğünü Aldın Ödülün Bu \`$get[para]\`]
  $let[para;$random[1000;1500]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$authorID;{"content": ":x: Bu Günlük Sana Ait Değil","ephemeral": true,"options": {"interaction":true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==günlük;]
  `
}]