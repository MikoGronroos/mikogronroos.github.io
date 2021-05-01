var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

document.body.onload = draw();

function draw(){
	ctx.fillStyle = "#87E0FF";
	ctx.fillRect(0, 0, 1080, 480);
	ctx.fillStyle = "#C2B280";
	ctx.fillRect(0, 480, 1080, 240);
	
	
	//Sun Rays
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(200, 100);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(210, 75);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(210, 50);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(210, 25);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(205, 0);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(190, 125);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(180, 150);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(160, 175);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(140, 200);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 50);
	ctx.lineTo(107, 220);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 60);
	ctx.lineTo(57, 227);
	ctx.stroke();
	
	ctx.strokeStyle  = "#FFFFFF";
    ctx.moveTo(50, 60);
	ctx.lineTo(25, 227);
	ctx.stroke();
	
	//The Sun
	ctx.strokeStyle  = "#F9D71C";
	ctx.beginPath();
	ctx.arc(50, 50, 100, 0, 2 * Math.PI);
	ctx.fillStyle = "#F9D71C";
    ctx.fill();
	ctx.stroke();
	
	//Birds
	
	var bird1 = new Image();
	bird1.onload = function() {
    ctx.drawImage(bird1, 60, 60);
	};
    bird1.src = "../pictures/Bird1.png";
	
	var bird2 = new Image();
	bird2.onload = function() {
    ctx.drawImage(bird2, 600, 80);
	};
    bird2.src = "../pictures/Bird2.png";
	
	var bird3 = new Image();
	bird3.onload = function() {
    ctx.drawImage(bird3, 350, 10);
	};
    bird3.src = "../pictures/Bird2.png";
	
}
/*
	ctx.strokeStyle  = "#FF0000";
    ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();
	ctx.strokeStyle  = "#FF0000";
	ctx.beginPath();
	ctx.arc(245, 125, 50, 0, 2 * Math.PI);
	ctx.stroke();
	
	ctx.beginPath();
    ctx.arc(288, 650, 100, 0, Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = '#EDC9AF';
    ctx.fill();
    ctx.strokeStyle = '#EDC9AF';
    ctx.stroke();
*/

//EDC9AF