/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//non playable character

var listeBonbons = new Array();
var listeJoueurs = new Array();

var Bonbon = function (xx, yy) {
    this.x = xx;
    this.y = yy;
    this.image = getImage("red_dot.png");
};

Bonbon.prototype.estMange = function () { //le bonbon courant est mangé
    for (index = 0; index < listeBonbons.length; index++) {
        if ((listeBonbons[index].x === this.x) && (listeBonbons[index].y === this.y)) {
            delete listeBonbons[index];
        }
    }
};

var nbAleaInf400 = function () {
    Math.floor((Math.random() * 400) + 1);
};

var creerLesBonbons = function () {
    for (index = 0; index < 10; index++) {
        var bb = new Bonbon(new nbAleaInf400(), new nbAleaInf400());
        listeBonbons.push(bb);
    }
};

//playable character

var Joueur = function (xx, yy) {
    this.x = xx;
    this.y = yy;
    this.image = getImage("blue2.png");
    this.score = 0;
//    document.getElementsById("fenetreJeu").addEventListener("keyPressed", moveUp);
};

Joueur.prototype.draw = function () {
    fill(255, 0, 0);
    this.y = constraint(this.y, 0, height - 50);
    image(this.image, this.x, this.y, 40, 40);
};

Joueur.prototype.moveLeft = function () {
    this.image = getImage("blue3.png");
    this.x -= 10;
};

Joueur.prototype.moveRight = function () {
    this.image = getImage("blue3.png");
    this.x += 10;
};

Joueur.prototype.moveUp = function () {
    this.image = getImage("blue3.png");
    this.y -= 10;
};

Joueur.prototype.moveDown = function () {
    this.image = getImage("blue3.png");
    this.x += 10;
};

var j1 = new Joueur(10, 10);
listeJoueurs.push(j1);
var j2 = new Joueur(10, 50);
listeJoueurs.push(j2);

draw = function () {
    background(255, 255, 255);
    if (keyIsPressed && keyCode === 37) {
        j1.moveLeft();
    }
    j1.draw();
};