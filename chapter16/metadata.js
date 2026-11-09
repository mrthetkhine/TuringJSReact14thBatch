const fs = require("fs");
let file = __filename;

let stats = fs.statSync(file);
console.dir(stats);

console.log('isFile ',stats.isFile());
console.log('isDriectory ',stats.isDirectory());

fs.mkdirSync("dist/lib", { recursive: true });