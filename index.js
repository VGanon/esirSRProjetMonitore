var express = require('express');
var http = require ('http');
var app = express();
var server = module.exports = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static('.'));
app.get('/',function(req, res){
	res.sendFile('./index.html' , { root : __dirname});
});

io.sockets.on('connection',function(socket){	
	socket.broadcast.emit('message', 'Un autre client vient de se connecter !');
    // Quand le serveur reçoit un signal de type "message" du client    
    socket.on('message', function (message) {
		console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
    }); 
	
	socket.on('petit_nouveau', function(pseudo) {
		socket.pseudo = pseudo;
    });

});

server.listen(8080, function(){
  console.log('listening on *:8080');
});