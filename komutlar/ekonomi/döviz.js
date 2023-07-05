module.exports = [{
  name: "kur",
  aliases: ["döviz-kuru","piyasa","döviz-değerleri","döviz"],
  code:`
$author[1;💱 Döviz Kurları;$userAvatar[$clientID]]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;
💵 **Dolar:**
**Alım Fiyatı: \`$getUserVar[dolar;$clientID] ₺\`
Satış Fiyatı: \`$getUserVar[sdolar;$clientID] ₺\`**

💶 **Euro:** 
**Alım Fiyatı: \`$getUserVar[euro;$clientID] ₺\`
Satış Fiyatı: \`$getUserVar[seuro;$clientID] ₺\`**

💷 **Sterlin:**
**Alım Fiyatı: \`$getUserVar[sterlin;$clientID] ₺\`
Satış Fiyatı: \`$getUserVar[ssterlin;$clientID] ₺\`**]
$color[1;$getServerVar[color]]
$footer[1;$getServerVar[footer]]
$addButton[2;Sterlin;1;sterlins_$authorID;no;]
$addButton[2;Euro;3;euros_$authorID;no;]
$addButton[2;Dolar;4;dolars_$authorID;no;]
$addButton[2;Döviz Sat;2;dövizs;yes;]
$addButton[1;Sterlin;1;sterlina_$authorID;no;]
$addButton[1;Euro;3;euroa_$authorID;no;]
$addButton[1;Dolar;4;dolara_$authorID;no;]
$addButton[1;Döviz Al;2;döviza;yes;]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
$setUserVar[döviz;$advancedTextSplit[$interactionData[customId];_;1]]
$interactionModal[Bilgileri Doldur!;döviz;
    {actionRow:
      {textInput:$get[a]:1:döviz:yes:Örn. 100:1:30:}
    }]
    $let[a;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$advancedTextSplit[$interactionData[customId];_;1];sterlins;Ne Kadar Sterlin Satıcaksın?];euros;Ne Kadar Euro Satacaksın?];dolars;Ne Kadar Dolar Satıcaksın?];sterlina;Ne Kadar Sterlin Satın Alıcaksın?];euroa;Ne Kadar Dolar Satın Alıcaksın?];dolara;Ne Kadar Dolar Satın Alıcaksın?]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Bu Menü <@$advancedTextSplit[$interactionData[customId];_;2]> Kişisine Ait", "ephemeral" : true,"options" : {"interaction" : true}}]
$onlyIf[$checkContains[$advancedTextSplit[$interactionData[customId];_;1];sterlins;euros;dolars;sterlina;dolara;euroa]!=false;]
`
},{
  name: "ananndasıdonas",
  $if: "v4",
  code:`
$if[$checkContains[$toLowercase[$message];iptal;İptal;Kapat;kapat;almicam;kapasana]==true]
✅ ** | Komut başarılı şekilde iptal edildi.**
$setUserVar[döviza;]
$else
$setUserVar[$get[döviz];$get[fark];$clientID]
$setUserVar[param;$sub[$getUserVar[param];$math[$message*$getUserVar[$get[döviz];$clientID]]]]
$setUserVar[$get[döviz]s;$sum[$getUserVar[$get[döviz]s];$message]]
$replaceText[$replaceText[$replaceText[$get[döviz];dolar;💵];euro;💶];sterlin;💷] **| $nickname Adlı karakteri $message tane $get[döviz] satın aldı.**
$onlyIf[$math[$message*$getUserVar[$get[döviz];$clientID]]<=$getUserVar[param];❌ **| Paran yetmiyor eksik olan para: \`$sub[$math[$message*$getUserVar[$get[döviz];$clientID]];$getUserVar[param]]\`**]
$onlyIf[$getUserVar[param]!=0;❌ **| Dövizin yetmiyor eksik olan para: \`$math[$message*$getUserVar[$get[döviz];$clientID]]\`**]
$let[fark;$sub[$getUserVar[$get[döviz];$clientID];$math[$message*0.00000008]]]
$onlyIf[5<=$message;❌ **| 5'ten küçük alım satım yapamazsın!**]
$onlyIf[$isNumber[$message]!=false;❌ **| Bir sayı girdinden emin ol!**]
$setUserVar[döviza;]
$let[döviz;$getUserVar[döviza]]
$endif
$onlyIf[$getUserVar[döviza]!=;]
`
},{
  name: "$alwaydasdasdasdasdExecute",
  $if: "v4",
  code:`
$if[$message==iptal]
✅ **| Komut başarılı şekilde iptal edildi.**
$setUserVar[dövizs;]
$else
$setUserVar[$get[döviz];$get[fark];$clientID]
$setUserVar[s$get[döviz];$get[farkk];$clientID]
$setUserVar[param;$sum[$getUserVar[param];$math[$message*$getUserVar[s$get[döviz];$clientID]]]]
$setUserVar[$get[döviz]s;$sub[$getUserVar[$get[döviz]s];$message]]
$replaceText[$replaceText[$replaceText[$get[döviz];dolar;💵];euro;💶];sterlin;💷] **| $nickname Adlı karakteri $message tane $get[döviz] bozduldu.**
$onlyIf[$message<=$getUserVar[$get[döviz]s];❌ **Dövizin yetmiyor eksik olan dövizin: \`$sub[$message;$getUserVar[$get[döviz]s]]\`**]
$onlyIf[$getUserVar[$get[döviz]s]!=0;❌ **Dövizin yetmiyor eksik olan döviz: \`$message\`**]
$let[fark;$sub[$getUserVar[$get[döviz];$clientID];$math[$message*0.00000012]]]
$let[farkk;$sub[$getUserVar[s$get[döviz];$clientID];$math[$message*0.00000012]]]
$onlyIf[5<=$message;❌ **| 5'ten küçük alım satım yapamazsın!**]
$onlyIf[$isNumber[$message]!=false;❌ **| Bir sayı girdinden emin ol!**]
$setUserVar[dövizs;]
$let[döviz;$getUserVar[dövizs]]
$endif
$onlyIf[$getUserVar[dövizs]!=;]
`
},{
  name: "döviz",
  prototype: 'modal',
  type: "interaction",
  code: `
   $resetUserVar[döviz]
  $let[fark;$sub[$getUserVar[$get[a];$clientID];$math[$textInputValue[döviz]*0.00000012]]]
$let[farkk;$sub[$getUserVar[s$get[a];$clientID];$math[$textInputValue[döviz]*0.00000012]]]
  $onlyIf[$textInputValue[döviz]>=5;{"content": "**❌ | 5'ten küçük alım satım yapamazsın!**", "ephemeral" : true,"options" : {"interaction" : true}}] 
 $onlyIf[$isNumber[$textInputValue[döviz]]!=false;{"content": "**❌ | Bir sayı girdinden emin ol!****", "ephemeral" : true,"options" : {"interaction" : true}}] 
 $let[a;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[döviz];sterlins;sterlin];dolars;dolar];sterlina;sterlin];euroa;euro];dolara;dolar];euros;euro]]
  `
}]