/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//non playable character

var Bonbon = function(xx, yy) {
    this.x = xx;
    this.y = yy;
    this.disponible = 1;
    this.image = getImage("red_dot.png");
};

Bonbon.prototype.estMange = function() {
    this.disponible = 0;
};

var b1 = new Bonbon(50,50);
var b2 = new Bonbon(70,90);

//playable character

var Player = function(xx, yy) {
    this.x = xx;
    this.y = yy;
    this.image = getImage("blue2.png");
    this.score = 0;
//    document.getElementsById("fenetreJeu").addEventListener("keyPressed", moveUp);
};

Player.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constraint(this.y, 0, height-50);
    image(this.image, this.x, this.y, 40, 40);
};

Player.prototype.moveLeft = function() {
    this.image = getImage("blue3.png");
    this.x -= 10;
};

Player.prototype.moveRight = function() {
    this.image = getImage("blue3.png");
    this.x += 10;
};

Player.prototype.moveUp = function() {
    this.image = getImage("blue3.png");
    this.y -= 10;
};

Player.prototype.moveDown = function() {
    this.image = getImage("blue3.png");
    this.x += 10;
};

var p1 = new Player(10,10);

draw = function() {
    background(255,255,255);
    if(keyIsPressed && keyCode === 37) {
        p1.moveLeft();
    }
    p1.draw();
};