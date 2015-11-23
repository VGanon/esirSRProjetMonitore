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
    context.fillStyle = "#DDDDDD";
    context.fillRect(0, 0, 400, 400);
    context.stroke();


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
};

