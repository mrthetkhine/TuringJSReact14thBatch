console.log('lib loaded');
function api()
{
    console.log('api called');
}
function delay(ms)
{
    let now = new Date().getTime();
    while(new Date().getTime() < now + ms);
}
//delay(3000);
var item= 100;