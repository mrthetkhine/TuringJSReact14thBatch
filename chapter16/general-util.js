const os = require("os");

console.log('process cwd',process.cwd());
//console.log('process env ',process.env);
console.log('process execPath ',process.execPath);
console.log('userid ',process.getuid());
console.log('processid ',process.pid);
console.log('process uptime ',process.uptime());

console.log('os architecture ',os.arch());
console.log('os cpus ',os.cpus().length);
console.log('os homedir ',os.homedir());
//console.log('networks ',os.networkInterfaces());
console.log('os userInfo ',os.userInfo());
console.log('cwd ',process.cwd());
console.log('__filename ',__filename);
console.log('__dirname ',__dirname);