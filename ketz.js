var moji = new String("ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヲンヴ");
var color = [];
color[0] = '\u001b[0m\u001b[1;30m';
color[1] = '\u001b[0m\u001b[1;31m';
color[2] = '\u001b[0m\u001b[1;32m';
color[3] = '\u001b[0m\u001b[1;33m';
color[4] = '\u001b[0m\u001b[1;34m';
color[5] = '\u001b[0m\u001b[1;35m';
color[6] = '\u001b[0m\u001b[1;36m';
color[7] = '\u001b[0m\u001b[1;37m';
var reset = '\u001b[0m';
var a = Math.floor(Math.random() * moji.length);
var b;

process.stdout.write(moji[a]+ color[Math.floor(Math.random() * color.length)]);
for (b = Math.floor(Math.random() * moji.length); !(moji[a] == "ケ" && moji[b] == "ツ");) {
    a = b;
    b = Math.floor(Math.random() * moji.length);
    process.stdout.write(moji[a] + color[Math.floor(Math.random() * color.length)]);
}
console.log(moji[b] + color[Math.floor(Math.random() * color.length)]);
