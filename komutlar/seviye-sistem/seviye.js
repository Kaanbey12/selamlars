module.exports = {
  name:"$alwaysExecute",
  $if: "v4",
  code:`
$if[$getUserVar[mexp]>=$getUserVar[lexp]]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[mexp;0]
$setUserVar[lexp;$sum[$getUserVar[lexp];200]]
$title[1;🎉 Seviye Atladın!]
$description[1;<@$authorID> tebrikler seviye atladınız. Yeni seviyen \`$sum[$getUserVar[level];1]\` oldu.]
$thumbnail[1;$authorAvatar]
$color[1;e0ffff]
$addReactions[🥳]
$else
$if[$checkContains[$toLowercase[$noMentionMessage];oç;piç;oruspu]==true]
$setUserVar[mexp;$sub[$getUserVar[mexp;$random[15;30]]]
$setUserVar[kufurlumesajlar;$sum[$getUserVar[kufurlumesajlar];1]]
$else
$if[$checkContains[$toLowercase[$noMentionMessage];amk;mk;göt]==true]
$setUserVar[mexp;$sub[$getUserVar[mexp];$random[7;15]]]
$setUserVar[kufurlumesajlar;$sum[$getUserVar[kufurlumesajlar];1]]
$else
$setUserVar[mexp;$sum[$getUserVar[mexp];$random[3;5]]]
$cooldown[3s;]
$setUserVar[toplammesaj;$sum[$getUserVar[toplammesaj];1]]
$endif
$endif
$endif
`
}