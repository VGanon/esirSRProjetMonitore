var express = require('express');
var http = require('http');
var app = express();
var server = module.exports = http.createServer(app);
var io = require('socket.io').listen(server);
var nbj =0;
var listeBonbons = new Array();
var listePseudo = new Array();
var listeJoueurs = new Array();
var j2;


var Bonbon = function (xx, yy) {
    this.x = xx;
    this.y = yy;
    this.image = getImage("Images/red_dot.png");
};
var nbAleaInf400 = function () {
    Math.floor((Math.random() * 400) + 1);
};
var Joueur = function (xx, yy, pp) {
	this.pseudo=pp;
    this.x = xx;
    this.y = yy;
    this.score = 0;
};
/*
 * Créer 10 bonbons aléatoires
 */
var creerLesBonbons = function () {
    for (index = 0; index < 10; index++) {
        var bb = new Bonbon(new nbAleaInf400(), new nbAleaInf400());
        listeBonbons.push(bb);
    }
};
function deplacement(Joueur, e){
	var i=0;
	for(index=0;index<listePseudo.length;index++){
		i=listePseudo.indexOf(Joueur);
		
	}
	if(e == 'up' && listeJoueurs[i].y>=20){
		listeJoueurs[i].y-=20;
	}else if(e == 'down' && listeJoueurs[i].y<=380){
		listeJoueurs[i].y+=20;
	}else if(e == 'right' && listeJoueurs[i].x<=380){
		listeJoueurs[i].x+=20;
	}else if(e == 'left' && listeJoueurs[i].x>=20){
		listeJoueurs[i].x-=20;
	}
}

app.use(express.static('.'));
app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});

io.sockets.on('connection', function (socket) {
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !');
    // Quand le serveur reçoit un signal de type "message" du client    
    socket.on('message', function (message) {
        console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
    });

	
    socket.on('petit_nouveau', function (pseudo) {
        socket.pseudo = pseudo;
		Joueur.pseudo = pseudo;
			console.log("hello")
			j2=new Joueur(20+(nbj*20), 20+(nbj*20),socket.pseudo);
			listePseudo.push(pseudo);
			listeJoueurs.push(j2);

		
    });
    socket.on('key', function (e) {
        console.log('keypressed by ' + socket.pseudo + ' : ' + e);
        //appel des fonction qui mettent à jour les coordonnées du joueur et des bonbons
		deplacement(socket.pseudo, e);
		console.log(listeJoueurs);
		socket.emit('joueur', listeJoueurs);
		socket.emit('bonbon',listeBonbons);
    });

});


server.listen(8080, function () {
    console.log('listening on *:8080');
});