window.onload = function()
{
	var canvas = document.getElementById('mapDuJeu');
	if(!canvas)
	{
		alert("impossible de récupérer la map du jeu");
		return;
	}
	console.log("slip");
	var context = canvas.getContext('2d');
	if(!context)
	{
		alert("Impossible de récupérer le context du canvas");
			return;
	}
	context.beginPath();
	context.lineWidth=10;
	context.lineHeight=10;
	context.strokeStyle = "#FF0000";
	context.strokeRect(0,0,400,400);
	context.fillStyle="#DDDDDD";
	context.fillRect(5,5,395,395);
	context.stroke();
	
	
	
}