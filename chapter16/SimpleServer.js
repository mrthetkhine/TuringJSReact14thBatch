const http = require('node:http');

const server = new http.Server();
server.on('request',(request,response)=>{
    console.log('request header ',request.headers);
    console.log('request url ',request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello World</h1>');
});
server.listen(3000, () => console.log('Server running at http://localhost:3000'));