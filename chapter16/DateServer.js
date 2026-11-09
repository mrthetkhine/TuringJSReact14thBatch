const net = require("net");

let server = net.createServer();
server.listen(3000, () => console.log('Server running at 3000'));
server.on('connection', (socket) => {
    console.log('connnected ');
    socket.on('data', (data) => {
        console.log('data from client',data.toString());
        socket.write(data.toString().toUpperCase()+new Date().toString());
        socket.end();
    });
});