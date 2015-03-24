var canvas = document.getElementById("example");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 300;
var context = canvas.getContext("2d");

var background = new Image();
background.src = "img/background.jpg";
background.onload = function() 
{
    context.drawImage(background, 0, 0, canvas.width, canvas.height+500);
}

var img = new Image();
img.src = "img/Cannon.png";
img.onload = function() 
{
    context.drawImage(img, 50, 530, 230, 100);
}

var img2 = new Image();
img2.src = "img/ball.png";
img2.onload = function() 
{
    context.drawImage(img2, 0, 0, 1, 1);
}

var start = document.getElementById("Fire"); 

function Fire() {
  
    var Angle  = parseFloat(document.getElementById("Angle").value) * (Math.PI / 180);
    var Speed  = parseFloat(document.getElementById("Speed").value);
    var g      = 9.81;
    var x      = 250;
    var y      = 535;
        
    var Ball  = document.getElementById("Ball");
        
    var tick = 20, gameTick = tick / 1000;

    var vX = Speed * Math.cos(Angle), 
        vY = Speed * Math.sin(Angle);
        
    var dX = vX * gameTick, dVy = g * gameTick;
        
    var Move = function() {
        x += dX;
        vY -= dVy;
            
        y -= vY * gameTick;

        context.drawImage(background, 0, 0, canvas.width, canvas.height+500);
        context.drawImage(img, 50, 530, 230, 100);
        context.drawImage(img2, x, y, 25, 25);
    };
    var interval = setInterval(Move, tick);
}
start.onclick = Fire;