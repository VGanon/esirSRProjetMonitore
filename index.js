var express = require('express');
var app = express();

var http = require ('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('.'));
app.get('/',function(req, res){
	res.sendFile('./index.html' , { root : __dirname});
});

io.on('connection',function(socket){
	console.log('a user is connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});