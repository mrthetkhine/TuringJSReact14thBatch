const fs = require('fs');
console.log('start');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if(!err){
        console.log('file read done ',data.toString().length);
        
    }
    
});
console.log('end');