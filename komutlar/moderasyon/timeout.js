module.exports = { 
    name:"timeout",
    aliases: ['TIMEOUT','time out','mute'], 
    code: `
    $channelSendMessage[$channelID;{newEmbed:{author:$username[$mentioned[1]]#$discriminator[$mentioned[1]] - Susturması Kaldırıldı:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> Adlı Kullanıcının Susturması Kaldırıldı! \n**__Daha Önceden Susturulmasının Nedeni:__**\n\`\`\`\n$getUserVar[timeoutnedeni;$mentioned[1]] \n\`\`\`}{color:ffffff}{timestamp}}]
    $wait[$noMentionMessage[1]]

    $setUserVar[timeoutnedeni;$noMentionMessage;$mentioned[1]]
    $timeOutMember[$guildID;$mentioned[1];$noMentionMessage[1];no;$noMentionMessage]
    
    $channelSendMessage[$channelID;{newEmbed:{author:$username[$mentioned[1]]#$discriminator[$mentioned[1]] - Susturuldu!:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> / \`$usertag[$mentioned[1]]\` Adlı Kullanıcı <@$authorID> Tarafından Susturuldu!
    **__Sebebi__**
    \`\`\`\n $noMentionMessage \n\`\`\`}{color:ff0000}{timestamp}}]
    $onlyIf[$checkContains[$toLowercase[$message];$]!=true;{newEmbed:{description::exclamation: <@$authorID> Lütfen Mesajınızdaki \`$\` İşaretini Kaldırın! (Bu Sadece Geliştiriciler İçindir!)}{delete:5s}{color:ff0000}}]
    $onlyIf[$noMentionMessage[3]!=;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Sebep** Girin! (2 kelime)}{color:ff0000}}]
    $onlyIf[$noMentionMessage[1]!=;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Süre** Girin! \`$getVar[prefix]timeout 10s deneme\` \n \n> Argümanlar\ns -> Saniye (second)\nm -> Dakika(minutes) \nh -> Saat(hours)\nd -> Gün(day)}{color:ff0000}}]
    $onlyIf[$checkContains[$toLowercase[$noMentionMessage[1]];1;2;3;4;5;6;7;8;9;0]!=false;{newEmbed:{description::exclamation: <@$authorID> Lütfen **1 Numaralı** Mesajınızda Bir Susturma Süresi Girin! \n\`$getVar[prefix]timeout 10s deneme\` \n\n> Argümanlar \ns -> Saniye (second)\nm -> Dakika(minutes) \nh -> Saat(hours)\nd -> Gün(day)}{color:ff0000}}]
    $onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Kullanıcı** Etiketleyin!}{color:ff0000}}]
    $onlyIf[$hasPerms[$guildID;$authorID;admin]!=false;{newEmbed:{description::exclamation: <@$authorID> Bu Komut Sadece **YONETICI** İznine Sahip Kullanıcılar İçin!}{color:ff0000}}]
`}