/*
 * Game Engine for Sprite Based HTML5 Canvas Game
 * Author: Beau Bouchard (@beaubouchard)
 */
 
var keyStroke = {};
var tick = 0;
var game;

function messagelog(text){
	console.log("## " + text);
}
//+------------------------------------------------+
//| 		GAME 				   |
//+------------------------------------------------+

function Game(){
	this.map;
	this.player;
}
Game.prototype = {
	initialize: function() {
		messagelog("game.prototype init");
		this.map = new Map();
		this.map.initialize();
		addEventListener("keydown", function (e) {
				keyStroke[e.keyCode] = true;
			}, false);
		addEventListener("keyup", function (e) {
				delete keyStroke[e.keyCode];
			}, false);
	},
	onready: function() { 
	
	},
	onstart: 			function() {
	},
	renderToCanvas: 	function(){
	},
	parseImage: 		function(image, callback) {
	
	},
	setupLevel: 		function(source) {
		
	},
	//+------------------------------------------------+
	//| 		Game loop			   |
	//+------------------------------------------------+
	//Game loop
	main: 				function(){
		var now = Date.now();
		var delta = now - then;
	
		game.update(delta / 1000);
		game.render();
	
		then = now;
	},
	update: 			function(inc_mod){
		game.handleInput(inc_mod);
	},
	render:				function(){
	},
	//+------------------------------------------------+
	//| 		INPUT 				   |
	//+------------------------------------------------+
	// Event listener for keystroke codes
	handleInput:		function(inc_mod){
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
}
//+------------------------------------------------+
//| 		MAP  				   |
//+------------------------------------------------+
function Map(){
	this.canvas;
}
Map.prototype = {
	initialize: function() {
		messagelog("map.prototype init");
		this.canvas = document.createElement("canvas");
	 	var context= this.canvas.getContext("2d");
	 	this.canvas.width = 1024;
	 	this.canvas.height = 768;
	 	document.getElementById("game").appendChild(this.canvas);
		
	},
	getCanvas: function() { 
		return this.canvas;
	}
} // Map

//+------------------------------------------------+
//| 		Monster 			   |
//+------------------------------------------------+
function Monster (){
}
Monster.prototype = {
	initialize: function() {
	
	},
	spawn: function(ix, iy) {
		
	},
	render: function() {
		
	},
	tryMove: function(dX, dY) {
		
	}
 }
  
//+------------------------------------------------+
//| 		Player	 			   |
//+------------------------------------------------+
function Player(){
	this.x;
	this.y;
}
Player.prototype = {
	initialize: function(canvas) {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		spawn(this.x,this.y);
	},
	spawn: function(ix, iy) {
		
	},
	render: function() {
		
	},
	tryMove: function(dX, dY) {
		
	}
}

//+------------------------------------------------+
//| 		Entity	 			   |
//+------------------------------------------------+
// other non-moving items. Including barriers/grass
function Entity(){
}
Entity.prototype = {
	initialize: function() {
	
	},
	render: function() {
		
	}
}




 




game = new Game();
game.initialize();

var then = Date.now();
setInterval(game.main(),1);

	
	
