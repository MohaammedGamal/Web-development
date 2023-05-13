const fs = require("fs");
const os = require("os")
fs.copyFileSync("file.txt", "fileCopied.txt");
console.log(os.freemem());
const superheroes = require('superheroes');
console.log(superheroes.random());