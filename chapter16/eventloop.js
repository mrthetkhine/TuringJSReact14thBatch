const EventEmitter = require("events");
const myEmitter = new EventEmitter();


myEmitter.on('task_complete',(data)=>{
    console.log('Run task_complete',data);
});

myEmitter.emit('task_complete','hello');

setTimeout(()=>console.log('first fire'),0);
console.log('Start');
setTimeout(()=>console.log('fire'),100);

setImmediate(() => {
  console.log('start immediate');
});
process.nextTick(() => {
  console.log('Next tick');
});