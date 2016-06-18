var moji = new String("ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヲンヴ");
var a = Math.floor(Math.random() * moji.length);
var b;
process.stdout.write(moji[a]);
for (b = Math.floor(Math.random() * moji.length); !(moji[a] == "ケ" && moji[b] == "ツ");) {
    a = b;
    b = Math.floor(Math.random() * moji.length);
    process.stdout.write(moji[a]);
}
process.stdout.write(moji[b]);
