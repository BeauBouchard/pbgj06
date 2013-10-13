/*
 * Game Engine for Sprite Based HTML5 Canvas Game
 * Author: Beau Bouchard (@beaubouchard)
 */
 

var game;

function messagelog(text){
	console.log("## " + text);
}
//+------------------------------------------------+
//| 		GAME 				   |
//+------------------------------------------------+

function Game(){
	this.map;
	this.tick=0;
	this.player;
	this.keyStroke = {};
}
Game.prototype = {
	initialize: function() {
		messagelog("game.prototype init");
		this.map = new Map();
		this.map.initialize();
		addEventListener("keydown", function (e) {
				game.keyStroke[e.keyCode] = true;
			}, false);
		addEventListener("keyup", function (e) {
				delete game.keyStroke[e.keyCode];
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
			if ((38 in this.keyStroke )|| (87 in this.keyStroke)) {// up key stroke or 'w' key stroke
				if(cdetect){player.y -= player.speed * inc_mod;}
				else{player.y += player.speed * inc_mod*4;}
				game.tick += inc_mod*5;
			}
			if ((40 in this.keyStroke) || (83 in this.keyStroke)) { // down key stroke or 's' key stroke
				if(cdetect){player.y += player.speed * inc_mod;}
				else{player.y -= player.speed * inc_mod*4;}
				game.tick += inc_mod*5;
			}
			if ((37 in this.keyStroke) || (65 in this.keyStroke)){ // left key stroke or 'a' key stroke
				if(cdetect){player.x -= player.speed * inc_mod;}
				else{player.x += player.speed * inc_mod*4;}
				game.tick += inc_mod*5;
			}
			if ((39 in this.keyStroke) || (68 in this.keyStroke)) { // right key stroke or 'd' key stroke
				if(cdetect){player.x += player.speed * inc_mod;}
				else{player.x -= player.speed * inc_mod*4;}
				game.tick += inc_mod*5;
			}
			
			if(game.tick >1){playerAnimate();game.tick=0;}
			
			//action, or fire? button 
			if ((32 in this.keyStroke) || (17 in this.keyStroke)) { // SPACE key stroke or CTRL key stroke
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
	this.sprite;
}
Player.prototype = {
	initialize: function(canvas) {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		spawn(this.x,this.y);
	},
	loadSprite: function() {
		this.sprite = new Sprite("player");
		this.sprite.initialize(this.x,this.y);;
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
	var x,y,size,passable = false;
}
Entity.prototype = {
	initialize: function() {
	
	},
	render: function() {
		
	}
}

function Sprite(inctype){
	this.spritetype = inctype;
	this.spritetable =[
	["player", "media/images/player.png"],
	["monster", "media/images/badguy.png"],
	["tallgrass", "media/images/tallgrass.png"]
	];
}
Sprite.prototype = {
	initialize: 		function(iX, iY) {
		
	},
	preloadImages:		function() {
	
	},
	loadImage: 			function(){
	},
	parseImage:			function(){
	}

}




 




game = new Game();
game.initialize();

var then = Date.now();
setInterval(game.main(),1);

	
	
