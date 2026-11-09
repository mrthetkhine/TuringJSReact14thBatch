const net = require("net");
const fs = require("fs/promises");
const path = require('node:path');
let server = net.createServer();
server.listen(3000, () => console.log('Server running at 3000'));
server.on('connection', (socket) => {
    console.log('connnected ');
    socket.on('data', (data) => {
        
        let rawRequest = data.toString();
        //console.log('data from client',rawRequest);
        let lines = rawRequest.split('\r\n');
        const statusLine = lines[0];
        let statusLineParts = statusLine.split(' ');
        let url = statusLineParts[1];

        console.log('status line ',statusLine);
        console.log('url ',url);

        processRequest(socket,url);
        
    });
});
async function processRequest(socket,url)
{
    if(url=='/')
    {
        url = "index.html";
    }
    try
    {
        let filename = "./WebRoot/"+url;
        let contentType=getContentType(filename);
        let data = await fs.readFile(filename,'utf8');
        //console.log('data ',data);
        let httpResponse ="HTTP/1.1 200 OK\r\n" +
            "Content-Type: "+contentType+"\r\n" +
            "\r\n" +
            data;
            socket.write(httpResponse);
            
            socket.end();
    }
    catch(e)
    {
        console.log('error ',e);
        if (e.code === 'ENOENT') {
            let httpResponse ="HTTP/1.1 404 Not Found\r\n" +
            "Content-Type: text/html\r\n" +
            "\r\n" +
            "<h1>404 Not Found</h1>";
            socket.write(httpResponse);
        }
        
        
        socket.end();
    }
    
}
function getContentType(filename)
{
    const config = {
        css:'text/css',
        html:'text/html',
        htm:'text/html',
        js:'text/javascript',
        png:'image/png',
        jpg:'image/jpeg',
        gif:'image/gif'
    }
    let ext = path.extname(filename).substring(1);
    console.log('ext ',ext);
    let contentType = config[ext] || 'text/html';
    //console.log('contentType ',contentType);
    return contentType;
}