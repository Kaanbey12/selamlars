module.exports = [{
  type: "interaction",
  prototype: "slash",
  name: "şikayet",
  code: `
$interactionModal[Disbuard  Öneri Formu;botoneriModal;
    {actionRow:
      {textInput:Şikayetiniz Nedir?:1:botoneriInput:yes:Şikayetinizi Giriniz:5:60}
    }
   ]
`
},{
  type: "interaction",
  name: "botoneriModal",
  prototype: "modal",
  code: `
  $onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]
$interactionReply[Şikayetin Başarılı Bir Şekilde Gönderildi;;;;everyone;yes]

$useChannel[1117211166951866398]
$description[<@$authorID> Şikayeti
$guildID 
**» Öneri?**
\`$textInputValue[botoneriInput]\`
]
`}]
