//创建一个APP实例
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	//跟render渲染一样
	//__dirname是指当前文件
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

//给每个人，包括自己
io.emit('some event', { for: 'everyone' });


// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.on('disconnect', function(){
// 	    console.log('user disconnected');
// 	});
// });


//给每个人，除了自己
// io.on('connection', function(socket){
// 	socket.broadcast.emit('hi');
// });



http.listen(5000, function(){
	console.log('listening on *:5000');
});