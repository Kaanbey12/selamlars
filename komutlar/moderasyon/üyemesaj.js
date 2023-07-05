module.exports = [{
  name: "üyetemizle",
  aliases: ["üye-temizle","üye-sil","üyesil"],
  code:`
  $deleteIn[10s]
  <@$mentioned[1]> adlı kullanıcının **$message[2]** kadar mesajını temizledim.
  $clear[$message[2];$mentioned[1]]
  $deleteCommand
  $onlyIf[$message[2]<101;**__100__** mesajdan fazlasını silemem.]
  $onlyIf[$message[2]>2;En az **__2__** mesaj silebilirim.]
  $onlyIf[$isNumber[$message[2]]!=false;**$message[2]** bir sayı değil.]
  $onlyIf[$message[2]!=;Lütfen sileceğim miktarı belirt.]
  $onlyIf[$mentioned[1;no]!=undefined;Birini etiketle.]
  `},{
    name: "sil",
    aliases: ["clear","temizle"],
    code:`
 $deleteIn[10s]
**$message[1]** kadar mesaj temizledim.
  $clear[$message[1];$mentioned[1]]
  $deleteCommand
  $onlyIf[$message[1]<101;**__100__** mesajdan fazlasını silemem.]
  $onlyIf[$message[1]>2;En az **__2__** mesaj silebilirim.]
  $onlyIf[$isNumber[$message[1]]!=false;**$message[1]** bir sayı değil.]
  $onlyIf[$message[1]!=;Lütfen sileceğim miktarı belirt.]
    `
  
  }]