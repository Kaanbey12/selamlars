module.exports = [{
  name:"ticket",
  code:`
  $addButton[1;Ticket Aç!;2;ticketaç;no;🎫]
  Aşağıdaki butona basarak ticket açabilirsiniz.
  `
  },{
    name:"ticketaç",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[🎫 Ticket'ınız açıldı! <#$get[ticket]>;;;;all;yes]
    $addButton[1;Ticket'ı Kapat!;4;ticketkapat;no;🗑️]
    Aşağıdaki butona basarak ticket'ı kapatabilirsiniz.
    $useChannel[$get[ticket]]
    $setUserVar[ticket;$get[ticket]]
    $setChannelVar[user;$authorID;$get[ticket]]
    $let[ticket;$newTicket[・ticket・$getServerVar[number];<@$authorID><@&$getServerVar[staff]>{delete:5s};$getServerVar[category];yes;hata]]
    $setServerVar[number;$sum[$getServerVar[number];1]]
    `
    },{
      name:"ticketkapat",
      type:"interaction",
      prototype:"button",
      code:`
      $sendDM[**$serverName** sunucusunda açmış olduğun ticket \`$userTag\` adlı yetkili tarafından kapatıldı.;$get[user]]
      $setUserVar[ticket;;$get[user]]
      $closeTicket[]
$useChannel[$getServerVar[ticketlog]]
$createFile[$getChannelVar[ticketmesaj;$getUserVar[ticket]];$getServerVar[number]-ticket.txt]]      
$wait[7s]
      $let[user;$getChannelVar[user]]
   
      $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[staff]]==true;{"content":"Yalnızca <@&$getServerVar[staff]> rolündeki yetkililer ticket kapatabilir.", "ephemeral": true,"options":{"interaction": true}}]
      `
      }]
