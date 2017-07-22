const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9000 });
const clients = [];

wss.on('connection', function connection(client) {
    console.log("有人连接");

    clients.num = clients.length;
    clients.push(client);

    client.on('message', function(message) {
        for (var i = 0; i < clients.length; i++) {
            if (clients[i]) {
                clients[i].send(message)
            }
        }
    });

    client.on('close', function() {
        console.log("有人离开");
        clients[clients.num] = null;
    });

    client.on("error", function() {
        console.log("出错");
        clients[client.num] = null;
    })

});