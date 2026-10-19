const fs = require('fs/promises');
console.log('start');
fs.readFile('data.txt', 'utf8')
   .then(data=>{
        console.log('filename ',data)
        return data;
    })
   .then(fileName=>fs.readFile(fileName))
   .then(data=>console.log('Content ',data.toString())) 
console.log('end');