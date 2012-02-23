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

function windowOnLoad()
{
	var canvas = document.getElementById('myCanvas');
	
	// Force canvas to dynamically change its size to
	// the same width/height as the browser window
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	
	var c = canvas.getContext('2d');

	var grd = c.createLinearGradient(0, 0, canvas.width, canvas.height);
	
	var grdColors = {
		begin : '#ceefff',
		end : '#52bcff' };
	
	grd.addColorStop(0, grdColors.begin );
	grd.addColorStop(1, grdColors.end );
	c.fillStyle = grd;
	c.fillRect(0, 0, canvas.width, canvas.height);

	var phrase = "Click or tap the screen to start the game";
	c.font = 'bold 16px Arial, sans-serif';
	c.fillStyle = '#FFFFFF';
	c.fillText (phrase, 10, 30);
	
	function fadeToWhite(alphaVal) 
	{
		// If the function hasn't received any parameters, start with 0.02
		var alphaVal = (alphaVal == undefined) ? 0.02 : parseFloat(alphaVal) + 0.02;
		// Set the color to white
		c.fillStyle = '#FFFFFF';
		// Set the Global Alpha
		c.globalAlpha = alphaVal;
		// Make a rectangle as big as the canvas
		c.fillRect(0, 0, canvas.width, canvas.height);
		if (alphaVal < 1.0) {
			setTimeout(function() {fadeToWhite(alphaVal);}, 30);
		}
	}
	
	function onClick()
	{
		fadeToWhite();
	}
	window.onclick = onClick;
}

function init()
{
	window.onload = windowOnLoad;
	window.onkeydown = keyDownControl;
	window.onkeyup = keyUpControl;
	canvas = document.getElementById("myCanvas");			
	context = canvas.getContext("2d");
	
	function onLoad()
	{
		context.drawImage(imageObj, x, y);	<!--应该在onload里面做，否则load没完成时调没有任何效果-->
		loaded = true;
	};
	
	//imageObj = new Image();
	//imageObj.src = "superbrothers_pixel_sports.jpg";
	//imageObj.onload = onLoad;
	
	//return setInterval( draw, 10 );
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

function keyDownControl(event)
{
	if( event.keyCode==37 )
	{
		mx = -2;
		my = 0;
	}
	else if( event.keyCode==38 )
	{
		mx = 0;
		my = -2;
	}
	else if( event.keyCode==39 )
	{
		mx = 2;
		my = 0;
	}
	else if( event.keyCode==40 )
	{
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
