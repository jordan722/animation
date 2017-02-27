var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var requestID;

var stop = function(){
    window.cancelAnimationFrame(requestID);
};

var circleAnimation = function(){
    var r = 1;
    var inc = 1;
    window.cancelAnimationFrame(requestID);
    
    var circlefunc = function(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, r, 0, Math.PI * 2);

	ctx.closePath();
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	
	r += inc;
	if (r == 1 || r == c.height/2)
	    inc *= -1;
	requestID = window.requestAnimationFrame( circlefunc );
    };
    circlefunc();
};

var DVDAnimation = function(){
    var x = Math.floor(Math.random() * 360);
    var y = Math.floor(Math.random() * 220);
    var xinc = 1;
    var yinc = 1;
    window.cancelAnimationFrame(requestID);
    
    var DVDfunc = function(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	var img = new Image();
	img.src = "dvd.jpg"
	ctx.drawImage(img, x, y, 150, 100);
	x += xinc;
	y += yinc;
	
	if (x == -10 || x == c.width-140)
	    xinc *= -1;
	if (y == -20 || y == c.height-80)
	    yinc *= -1;
	
	ctx.closePath();
	ctx.stroke();
	requestID = window.requestAnimationFrame( DVDfunc );
    };
    DVDfunc();
};


var circlebutt = document.getElementById("circle");
circlebutt.addEventListener("click", circleAnimation)

var dvdbutt = document.getElementById("dvd");
dvdbutt.addEventListener("click", DVDAnimation)

var stopbutt = document.getElementById("stop");
stopbutt.addEventListener("click", stop);
