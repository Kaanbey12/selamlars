module.exports = {
  name: "kullanıcı-bilgi",
  aliases: ["kb"],
  code: `
$thumbnail[1;$userAvatar]
$author[1;Kullanıcı Bilgileri]
$description[1;
İsim:
**$username[$mentioned[1]]**

Etiket
**#$discriminator[$mentioned[1]]**

ID:
**$mentioned[1]**

Hesabın Oluşturulma Tarihi:
**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1];time];and;Ve;1];seconds;Saniye;1];second;Saniye;1];minutes;Dakika;1];minute;Dakika;1];hours;Saat;1];hour;Saat;1];days;Gün;1];day;Gün;1];weeks;Hafta;1];week;Hafta;1];months;Ay;1];month;Ay;1];years;Yıl;1];year;Yıl;1]**

Bot mu?
**$replaceText[$replaceText[$isbot[$mentioned[1]];false;Hayır];true;Evet]**

Roller:
**$userRoles[$mentioned[1];$guildID;mention;-]**

En Yüksek Rol:
**$highestRole[$mentioned[1];$guildID;mention;-]**

En Düşük Rol:
<@&$lowestRole[$mentioned[1];$guildID;mention;-]>

Renk:
**$getRoleColor[$highestRole[$mentioned[1];$guildID]]**


]
$color[1;RANDOM]
$footer[1;$username kullandı.]
$addTimestamp[1]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`

}