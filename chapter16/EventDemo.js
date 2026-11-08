const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on('task_complete',(data)=>{
    console.log('Run fire',data);
});

function run()
{
    console.log('Run');
    setTimeout(()=>{
        myEmitter.emit('task_complete',{
            value:"result"
        });
    },3000);
    
}
run();
console.log('end');