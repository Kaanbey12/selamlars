module.exports = [{
name:"kullanıcıpanel",
code:`
$author[1;$serverName;$serverICon]
$description[1;
*Aşağıdaki butonlarla etkileşime girerek sunucumuzdaki durumunuz hakkında bilgi edinebilirsiniz.*

\`I\` Sunucuya giriş tarihinizi gösterir.
\`II\` Eski isimlerinizi ve kayıt bilgilerinizi gösterir.
\`III\` Sicilinizi gösterir.
\`IV\` Üzerinizdeki rolleri gösterir.
\`V\` Hesap bilgilerinizi gösterir.
\`VI\` Kayıtsıza atar.]
$color[1;6F65F3]
$addButton[2;VI;2;VI;no]
$addButton[2;V;2;V;no]
$addButton[2;IV;2;IV;no]
$addButton[1;III;2;III;no]
$addButton[1;II;2;II;no]
$addButton[1;I;2;I;no]

$onlyForIDs[1006333961410183320;sen kurucu deilsin]
`
},{
  name:"I",
  type:"interaction",
  prototype:"button",
  code:`
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Sunucuya giriş tarihin:** <t:$truncate[$divide[$memberJoinedDate[$authorID;$guildID;ms];1000]]:f>} 
{color:6F65F3}};;;all;yes]
`
},{
   name:"II",
  $if:"v4",
  type:"interaction",
  prototype:"button",
  code:`
$if[$getUserVar[kayıtbilgi]==]
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Eski kayıtların ve isimlerin:** Database'de geçmiş kayıt bilginiz bulunmuyor.} 
{color:6F65F3}};;;all;yes]
$else
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Eski kayıtların ve isimlerin:** $getUserVar[kayıtbilgi]} 
{color:6F65F3}};;;all;yes]
$endif
`
},{
   name:"III",
  $if:"v4",
  type:"interaction",
  prototype:"button",
  code:`
  $if[$getUserVar[sicil]==]
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Siciliniz:** Database'de sicilinize dair herhangi bir şey bulunamadı.} 
{color:6F65F3}};;;all;yes]
$else
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Eski kayıtların ve isimlerin:** $getUserVar[sicil]} 
{color:6F65F3}};;;all;yes]
$endif
`
},{
  name:"IV",
  $if:"v4",
  type:"interaction",
  prototype:"button",
  code:` 
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Üzerindeki Roller:** $userRoles[$authorID;$guildID;mention;,]} 
{color:6F65F3}};;;all;yes]
`
},{
name:"V",
  $if:"v4",
  type:"interaction",
  prototype:"button",
  code:`
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
**Hesap Bilgilerin** 

Kullanıcı Adın Etiketin: $userTag

İD'in: $authorID

Hesap Oluşturma Tarihi: <t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:f>}{color:6F65F3}};;;all;yes]
`
  },{
name:"VI",
  $if:"v4",
  type:"interaction",
  prototype:"button",
  code:`
$suppressErrors[  ]
$setRoles[$guildID;$authorID;990219743103422484]
$interactionReply[;{newEmbed: {author:$serverName:$serverICon} {description:
Başarıyla kayıtsıza atıldın.} 
{color:6F65F3}};;;all;yes]
$suppressErrors[  ]
`
}]