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
    //carte du jeu (bordure)
    context.beginPath();
    context.lineWidth = 10;
    context.lineHeight = 10;
    context.strokeStyle = "#FF0000";
    context.strokeRect(0, 0, 400, 400);
    context.fillStyle = "#DDDDDD";
    context.fillRect(5, 5, 395, 395);
    context.stroke();

    //test méthode drawImage()
    var img = document.createElement("img");
    img.src = "Images/blue2.png";
    var spriteW = 64, spriteH = 8;
    img.addEventListener("load", function () {
        var cycle = 0;
        setInterval(function () {
            context.clearRect(0, 0, spriteW, spriteH);
            context.drawImage(img,
                    // source rectangle
                    cycle * spriteW, 0, spriteW, spriteH,
                    // destination rectangle
                    0, 0, spriteW, spriteH);
            cycle = (cycle + 1) % 8;
        }, 120);
});

}; //fin