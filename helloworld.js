/*
	在chrome下debug: F12 -> Scripts
*/
var x = 0;
var y = 0;
var canvas;
var context;
var mx = 0;
var my = 0;
var loaded = false;
var imageObj;

function init()
{
	window.onkeydown = keyDownControl;
	window.onkeyup = keyUpControl;
	canvas = document.getElementById("myCanvas");			
	context = canvas.getContext("2d");
	
	imageObj = new Image();
	imageObj.src = "superbrothers_pixel_sports.jpg";
	imageObj.onload = function(){
		context.drawImage(imageObj, x, y);	<!--应该在onload里面做，否则load没完成时调没有任何效果-->
		loaded = true;
	};
	
	return setInterval( draw, 10 );
}

function draw()
{
	if( loaded )
	{
		context.drawImage(imageObj, x, y);
	}
	
	x += mx;
	y += my;
}

function da_mao_mao( num, hard )
{
	alert( "打毛毛" + num + "下，用力" + hard + "级" );
}

function keyDownControl(event)
{
	if(event.keyCode==37) {
		mx = -2;
		my = 0;
		alert("老公爱乖乖");
	} else
	if (event.keyCode==38) {
		mx = 0;
		my = -2;
		da_mao_mao(100,100);
	} else if
	(event.keyCode==39) {
		mx = 2;
		my = 0;
		alert("guaiguaiailaogong" );
	} else
	if (event.keyCode==40) {
		mx = 0;
		my = 2;
	}
}

function keyUpControl(event)
{
	if(event.keyCode>=37 && event.keyCode<=40) {
		mx = 0;
		my = 0;
	}
}
