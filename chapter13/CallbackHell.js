const fs = require('fs');
console.log('start');
fs.readFile('data.txt', 'utf8', (err, data) => {
    if(!err){
        let fileName = data.toString();
        console.log('fileName ',fileName);
        fs.readFile(fileName, 'utf8', (err, data2)=>{
            if(!err){
                console.log('Filecontent '+data2.toString());
            }
            
        });
    }
    
});
console.log('end');