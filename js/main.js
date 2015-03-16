var canvas = document.getElementById("example");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 300;
var context = canvas.getContext("2d");

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
    context.drawImage(img2, 150, 450, 10, 10);
}

$(function() {
    function Fire() {
  
        var Angle  = parseFloat($("#Angle").val()) * (Math.PI / 180);
        var Speed  = parseFloat($("#Speed").val());
        var g      = 9.81;
        var x      = 150;
        var y      = 450;
        var i      = 0;
        
        var Ball  = $("#Ball");
        
        var tick = 100, gameTick = tick / 1000;
        
        var vX = Speed * Math.cos(Angle), 
            vY = Speed * Math.sin(Angle);
        
        var dX = vX * gameTick, dVy = g * gameTick;
        
        var Move = function() {
            x += dX;
            vY -= dVy;
            
            y += vY * gameTick;
            
            Ball.stop().animate({
                'left'   : x,
                'bottom' : y
            }, tick - 1);
            
            if (i++ > 0 && y <= 0) {
                clearInterval(interval);
                return;
            }
        };
        
        var interval = setInterval(Move, tick);
        
    }

    $('#Fire').click(Fire);
});
