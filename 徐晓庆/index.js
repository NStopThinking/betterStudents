var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('有人连接');
  socket.on('message', function(msg){
	io.emit('return', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    