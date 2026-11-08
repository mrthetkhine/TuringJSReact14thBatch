const fs = require('fs');
//console.log('fs ',fs);
fs.readFile('./hello.js','utf8',function(err,data){
    if(!err)
    {
        console.log(data.toString());
    }
});
console.log('end');