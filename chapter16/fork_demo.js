const child_process = require("child_process");
let child = child_process.fork(`${__dirname}/child.js`);
child.send('hello');
child.on("message", message => {
    console.log('response from child ',message);
    child.disconnect();
});