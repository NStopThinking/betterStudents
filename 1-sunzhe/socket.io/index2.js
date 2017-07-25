/**
 * Created by Administrator on 2017/7/22.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(3000);
function SocketIo() {
    this.app = app;
    //this.http = http;
    this.io = io;
}
Object.assign(SocketIo.prototype, {
    init: function () {
        this.app.get('/', this.ruteFun.bind(this));
        this.io.on('connection', this.connecFun.bind(this));
        //this.http.listen(3000, this.listenFun.bind(this));
    },
    ruteFun: function (req, res) {
        res.sendFile(__dirname + '/index.html');
    },
    connecFun: function (socket) {
        console.log('a user connected');
        socket.on('chat message', this.sendMessage.bind(this));
    },
    sendMessage: function (msg) {
        if (msg) {
            this.io.emit('chat message', msg);
        }
    },
    listenFun: function () {
        console.log('listening on *:3000');
    }
});
new SocketIo().init();