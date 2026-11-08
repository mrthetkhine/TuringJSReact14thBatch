const path = require('node:path');
const notes = './EventDemo.js';
console.log('dirname ' ,path.dirname(notes)); 
console.log('base',path.basename(notes)) 
console.log('extname',  path.extname(notes)); 