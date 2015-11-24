var joueurs = [];
var bonbons = [];

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
    //context.strokeRect(0, 0, 400, 400);
    context.fillStyle = "#DDDDDD";
    context.fillRect(0, 0, 400, 400);
    context.stroke();

    //Créer 10 bonbons aléatoires
    var img = document.createElement("img");
    img.src = "Images/red_dot.png";
    img.addEventListener("load", function () {
        for (var i = 0; i < 5; i += 1) {
            var x = Math.floor((Math.random() * 20) + 0) * 20;
            var y = Math.floor((Math.random() * 20) + 0) * 20;
            //voir si la position est déjà prise :
            if (bonbons.indexOf([x, y]) === -1) {
                context.drawImage(img, x, y);
                bonbons.push([x, y]);
            } else {
                i -= 1;
            }
        }
    });
    //fin

    //créer 3 joueurs aléatoires
    var imgJoueur = document.createElement("img");
    imgJoueur.src = "Images/blue3.png";
    imgJoueur.addEventListener("load", function () {
        for (var i = 0; i < 3; i += 1) {
            var x = Math.floor((Math.random() * 20) + 0) * 20;
            var y = Math.floor((Math.random() * 20) + 0) * 20;
            //voir si la position est déjà prise :
            if (joueurs.indexOf([x, y]) === -1) {
                context.drawImage(imgJoueur, x, y);
                joueurs.push([x, y]);
            } else {
                i -= 1;
            }
        }
    });
    //fin

}; //fin windows.onload

//comparer les deux tableaux bonbons et joueurs pour voir si au moins un des bonbons est mangé
//le bonbon courant est mangé ou pas ?
//à tester
function mettreAJour() {
    var changementExiste = false;
    for (var iJoueur = 0; iJoueur < joueurs.length; iJoueur++) {
        if (bonbons.indexOf(joueurs[iJoueur]) !== -1) {
            bonbons.splice(iJoueur, 1); //manger le bonbon
            changementExiste = true;
        }
    }
    return changementExiste;
}
;

