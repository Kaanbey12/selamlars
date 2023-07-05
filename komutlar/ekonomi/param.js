module.exports = [{
  name: "param",
  aliases: ["bal","cüzdan"],
  code:`
 $title[1;👛 **Bakiye**]
 $thumbnail[1;$userAvatar[$get[a]]]
 $addField[1;💱 **Döviz:**;
**💵 Dolar:** **\`$getUserVar[dolars;$mentioned[1;yes]]\`**
**💶 Euro:** **\`$getUserVar[euros;$mentioned[1;yes]]\`**
**💷 Sterlin:** **\`$getUserVar[sterlins;$mentioned[1;yes]]\`**;yes]
 $addField[1;**🏦 Banka:**;**\`$numberseparator[$truncate[$getUserVar[banka;$get[a]]];.] ₺\`**;yes]
 $addField[1;**👛 Cüzdan:**;**\`$numberseparator[$truncate[$getUserVar[param;$get[a]]];.] ₺\`**;yes]
 $color[1;$getServerVar[color]]
 $footer[1;$getServerVar[footer]]
 $addTimesTamp[1]
 $let[a;$mentioned[1;yes]]
  `
}]