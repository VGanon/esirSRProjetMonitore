window.onload = function ()
{
    var canvas = document.getElementById('mapDuJeu');
    if (!canvas)
    {
        alert("impossible de récupérer la map du jeu");
        return;
    }
    console.log("slip");
    var context = canvas.getContext('2d');
    if (!context)
    {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
    //création de la carte du jeu (bordure)
    context.beginPath();
    context.lineWidth = 10;
    context.lineHeight = 10;
    context.strokeStyle = "#FF0000";
    context.strokeRect(0, 0, 400, 400);
    context.fillStyle = "#DDDDDD";
    context.fillRect(5, 5, 395, 395);
    context.stroke();
    
    /*
     * Créer 10 bonbons aléatoires
     */
    var bonbons = [];
    var img = document.createElement("img");
    img.src = "Images/red_dot.png";
    img.addEventListener("load", function () {
        for (var i = 0; i < 5; i += 1) {
            var x = Math.floor((Math.random() * 400) + 1);
            var y = Math.floor((Math.random() * 400) + 1);
            context.drawImage(img, x, y);
            bonbons.push([x, y]);
        }
    });
    //fin
    
    //créer 3 joueurs aléatoires
    var joueurs = [];
    var imgJoueur = document.createElement("img");
    imgJoueur.src = "Images/blue3.png";
    imgJoueur.addEventListener("load", function () {
        for (var i = 0; i < 3; i += 1) {
            var x = Math.floor((Math.random() * 400) + 1);
            var y = Math.floor((Math.random() * 400) + 1);
            context.drawImage(imgJoueur, x, y);
            joueurs.push([x, y]);
        }
    });
    //fin

}; //fin windows.onload

var listeBonbons = new Array();

var Bonbon = function (xx, yy) {
    this.x = xx;
    this.y = yy;
    this.image = getImage("Images/red_dot.png");
};

Bonbon.prototype.estMange = function () { //le bonbon courant est mangé
    for (index = 0; index < listeBonbons.length; index++) {
        if ((listeBonbons[index].x === this.x) && (listeBonbons[index].y === this.y)) {
            delete listeBonbons[index];
        }
    }
};

/*
 * Créer un nombre aléatoire entre 1 et 400
 */
var nbAleaInf400 = function () {
    Math.floor((Math.random() * 400) + 1);
};