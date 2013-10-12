/*
 * Game Engine for Sprite Based HTML5 Canvas Game
 * Author: Beau Bouchard (@beaubouchard)
 */
 
 


//+------------------------------------------------+
//| 		GAME 				   |
//+------------------------------------------------+

var Game = {
	initialize: function() {
	
	},
	onready: function() { 
	
	},
	onstart: function() {
	},
	renderToCanvas: function(){
	},
	parseImage: function(image, callback) {
	
	},
	setupLevel: function(source) {
		
	}
}
//+------------------------------------------------+
//| 		MAP  								   |
//+------------------------------------------------+
var Map = Class.create({
	initialize: function() {
	 	var canvas = document.createElement("canvas");
	 	var context= canvas.getContext("2d");
	 	canvas.width = 1024;
	 	canvas.height = 768;
	 	document.getElementById("game").appendChild(canvas);
	},
}); // Map

var Monster = Class.create({
	initialize: function() {
	
	},
  });
  
var Player = Class.create({
	initialize: function(canvas) {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		spawn(this.x,this.y);
	},
	spawn: function(ix, iy) {
		
	}
});





//Game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	
	update(delta / 1000);
	render();
	
	then = now;
};

start();
var then = Date.now();
setInterval(main,1);


// Event listener for keystroke codes
var keyStroke = {};

addEventListener("keydown", function (e) {
	keyStroke[e.keyCode] = true;
	}, false);
addEventListener("keyup", function (e) {
		delete keyStroke[e.keyCode];
	}, false);
 
 var tick = 0;
 
 // event action for each keystroke
function handleInput(inc_mod) {
	if ((38 in keyStroke )|| (87 in keyStroke)) {// up key stroke or 'w' key stroke
		if(cdetect){player.y -= player.speed * inc_mod;}
		else{player.y += player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	if ((40 in keyStroke) || (83 in keyStroke)) { // down key stroke or 's' key stroke
		if(cdetect){player.y += player.speed * inc_mod;}
		else{player.y -= player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	if ((37 in keyStroke) || (65 in keyStroke)){ // left key stroke or 'a' key stroke
		if(cdetect){player.x -= player.speed * inc_mod;}
		else{player.x += player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	if ((39 in keyStroke) || (68 in keyStroke)) { // right key stroke or 'd' key stroke
		if(cdetect){player.x += player.speed * inc_mod;}
		else{player.x -= player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	
	if(tick >1){playerAnimate();tick=0;}
	
	//action, or fire? button 
	if ((32 in keyStroke) || (17 in keyStroke)) { // SPACE key stroke or CTRL key stroke
		//Fire
	}
	// PLAYER VARIABLES
}

var update = function (inc_mod) { handleInput(inc_mod); }
	
	
