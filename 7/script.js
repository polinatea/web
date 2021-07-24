function drawPlatform() 
{
		var gradient = ctx.createLinearGradient(platWidth, platX, platHeight, platY);
        gradient.addColorStop(0.0, "#666699");
        gradient.addColorStop(0.8, "#DB7093");
    ctx.beginPath(); // «начать» серию действий описывающих отрисовку фигуры.
    ctx.rect(platX, platY, platWidth, platHeight);
    ctx.fillStyle = gradient; // определяет цвет заливки 
    ctx.fill();
    ctx.closePath(); // завершить рисование проведя линию от текущей позиции к позиции с которой начали рисовать

	
}

function checkBallPosition() 
{	
	if (mainX < platX + platWidth &&
         mainX + radius > platX &&
         mainY < platY + platHeight &&
         mainY + radius > platY)
	angle = -angle;
}

function moving()
{
	
	
	
    ctx.fillStyle = document.getElementById("backgroundColor").value;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Вверхняя нижняя граница
    mainX += Math.cos(angle);
    mainY += Math.sin(angle);
	
	checkBallPosition();
	
    if(mainY < radius || mainY > canvasHeight - radius)
	{
        angle = -angle;
        moving();
    }
	
    // Левая правая граница
    if(mainX  < radius || mainX > canvasWidth - radius)
	{
        angle = Math.PI * 2 - angle;
        if(mainX  < radius)
		{
            angle += Math.PI / 2
        }
        else
		{
            angle -= Math.PI / 2
        }
		
        moving();
    }
		
    ctx.beginPath();
    ctx.fillStyle = document.getElementById("circleColor").value;
    ctx.arc(mainX, mainY, radius - 1, 0, Math.PI * 2, true);
    ctx.fill();
	ctx.closePath();
	
			if (mainX == 400)
			alert("прошла ");
	
    return;
}


function moving2(event)
{
  switch(event.key)
  {
    case 'ArrowRight':platX+=15;break;
    case 'ArrowLeft':platX-=15;break;
	};
};

var stiilb = document.getElementById("stiilb"); // получить наше поле для рисования, Запишем его в переменную 
var ctx = stiilb.getContext('2d'); // объект, содержащий в себе так называемый контекст выполнения.
                                   // Все рисование будет происходить с помощью методов этого объекта

var canvasWidth = stiilb.width;
var canvasHeight = stiilb.height;
var radius = 20;
var mainX = Math.floor(Math.random() * (canvasWidth - 2 * radius) + radius); // floor Округляет аргумент до ближайшего меньшего целого.
var mainY = Math.floor(Math.random() * (canvasHeight - 2 * radius) + radius);
var angle = Math.random() * 2 * Math.PI;

let platX = 300;
let platY = 200;
let platWidth = 105;
let platHeight = 15;

let ballDX = 3; 
let ballDY = 3;


function draw() 
{

	moving();
	drawPlatform();
	 
		if (mainX == 400)
			alert("прошла ");
			//window.clearInterval(intervalID);
}
	

document.addEventListener("keydown", moving2, false);

intervalID = window.setInterval(draw, 5);
