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
	
	
