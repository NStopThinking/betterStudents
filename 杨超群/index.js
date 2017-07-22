var express = require('express');  //引入express
var app     = express();			//创建express实例
var http = require('http').Server(app);		//创建http服务
var io = require('socket.io')(http);    //包装成socket.io服务器


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');  //拿到文件发送出去
});


io.on('connection', function(socket){    //服务器兼听到connection就输出  a user
  console.log('a user connected');
  socket.on('chat message', function(msg){
  	//往每个用户客户端发chat message事件
 	 io.emit('chat message', msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});