module.exports = {
  name: "banlist",
  aliases: ['ban-list', 'yasak-list'],
  code: `
$title[**Banlılar!**]
$description[
\`\`\`fix
$replaceText[$djsEval[message.guild.fetchBans() .then(x => x.map(member => member.user.tag + " " + "~" + " " +member.user.id).join("n01n01n01n01n01n01n01n01n"));yes];n01n01n01n01n01n01n01n01n;
;-1]\`\`\`]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`
} 