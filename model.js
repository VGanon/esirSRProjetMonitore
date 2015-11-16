/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function bonbon(xx, yy) {
    this.x = x;
    this.y = yy;
    this.disponible = 1;
    this.changerDisponible = function (newdispo) {
        this.dispo = newdispo;
    }
}

function joueur(xx, yy) {
    this.currentX = xx;
    this.currentY = yy;
    this.moveUp = function () {
        this.currentY = this.currentY + 1;
    }
    //moveDown, Left, Right à faire
    document.getElementsById("fenetreJeu").addEventListener("keyPressed", moveUp);
}

// function map(?) attend le travail d'Yannick