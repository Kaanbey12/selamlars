module.exports = [{
  name: "piyasa",
  aliases: ["dolar","euro","sterlin","ekonomi"],
  code:`
$image[1;$jsonRequest[https://doviz-api.kaanbey1.repl.co/resim;img]]
$color[1;$getVar[color]]
$footer[1;Herşey,çok pahalı]
$onlyIf[$getGlobalUserVar[beta]!=no;<:carpi:1111927283993804860> **Üzgünüm, sen beta kullanıcısı değilsin**]

`
}]