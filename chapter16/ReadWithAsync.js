const fs = require('node:fs/promises');
//console.log('fs ',fs);
async function readFile()
{
    let data = await fs.readFile('./hello.js','utf8');
    console.log(data);
}
readFile();
console.log('end');