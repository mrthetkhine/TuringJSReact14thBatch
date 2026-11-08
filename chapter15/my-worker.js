console.log('worker loaded');
function delay(ms)
{
    let now = new Date().getTime();
    while(new Date().getTime() < now + ms);
}
onmessage=(e)=>{
    console.log('Message received in worker',e.data.value);
    delay(5000);
    postMessage('Hello from worker');
};