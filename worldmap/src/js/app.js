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
	this.gamewindow = document.getElementById("game");
	this.map;
	this.tick=0;
	this.player;
	this.keyStroke = [];
}
Game.prototype = {
	initialize: function() {
		messagelog("game.prototype init");
		this.map = new Map();
		this.map.initialize();
		this.player = new Player();
		
		
		
		this.map.canvas.addEventListener("onkeydown", function (e) {
				
				messagelog("keydownlistener");
				game.keyStroke[e.keyCode] = true;
			}, false);
		this.map.canvas.addEventListener("onkeyup", function (e) {
				delete game.keyStroke[e.keyCode];
			}, false);
			
		messagelog("game.prototype init : onstart");
		this.onstart();
		
	},
	onready: function() { 
	
	},
	onstart: 			function() {
		
		this.player.initialize(this.map.getContext());
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
	update: 			function(incMod){
		game.handleInput(incMod);
	},
	render:				function(){
	},
	//+------------------------------------------------+
	//| 		INPUT 				   |
	//+------------------------------------------------+
	// Event listener for keystroke codes
	handleInput:		function(incMod){
			if ((38 in this.keyStroke )|| (87 in this.keyStroke)) {// up key stroke or 'w' key stroke
				game.player.tryMove(game.player.x ,(game.player.y += game.player.speed * incMod));
				game.tick += incMod*5;
			}
			if ((40 in this.keyStroke) || (83 in this.keyStroke)) { // down key stroke or 's' key stroke
				game.player.tryMove(game.player.x ,(game.player.y -= game.player.speed * incMod));
				game.tick += incMod*5;
			}
			if ((37 in this.keyStroke) || (65 in this.keyStroke)){ // left key stroke or 'a' key stroke
				game.player.tryMove((game.player.x += player.speed * incMod*4),game.player.y);
				game.tick += incMod*5;
			}
			if ((39 in this.keyStroke) || (68 in this.keyStroke)) { // right key stroke or 'd' key stroke
				game.player.tryMove((game.player.x -= player.speed * incMod*4),game.player.y);
				game.tick += incMod*5;
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
	this.context;
}
Map.prototype = {
	initialize: function() {
		messagelog("map.prototype init");
		this.canvas 		= document.createElement("canvas");
	 	this.context 		= this.canvas.getContext("2d");
	 	this.canvas.width 	= 1024;
	 	this.canvas.heigh	= 768;
	 	document.getElementById("game").appendChild(this.canvas);
		
		
	},
	getCanvas: function() { 
		return this.canvas;
	},
	getContext: function() {
		return this.context;
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
		messagelog("game.player.initialize");
		this.sprite = new Sprite("box");
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.sprite.initialize(this.x,this.y);
	},
	loadSprite: function() {

		
	},
	spawn: function(ix, iy) {
		this.sprite.spawn(ix, iy);
	},
	render: function() {
		
	},
	tryMove: function(iX, iY) {
		messagelog("game.player.trymove("+iX+","+iY+")");
		//there will be some colition detection here later. "
		this.x = iX;
		this.y = iY;
		thos.sprite.draw(iX, iY);
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

//+------------------------------------------------+
//| 		Sprite	 			   |
//+------------------------------------------------+
function Sprite(inctype){
	this.spritetype = inctype;
	this.spritetable =[
	["box", "None"],
	["player", "media/images/player.png"],
	["monster", "media/images/badguy.png"],
	["tallgrass", "media/images/tallgrass.png"]
	];
	
}
Sprite.prototype = {
	initialize: 		function(iX, iY) {
		messagelog("game.player.sprite.initialize : Type :" + this.spritetype);
		this.context = game.map.getContext();
		this.spawn(iX, iY);
	},
	spawn:				function(iX, iY) {
		switch (this.spritetype) {
			case "box":
				this.context.fillStyle = "rgb(200,0,0)";
				this.context.fillRect (10, 10, 55, 50);
				break;
			case "player":
				
				break;
			case "monster":
			
				break;
			case "tallgrass":
				break;
			default:
				this.context.fillStyle = "rgb(200,0,0)";
				this.context.fillRect (10, 10, 55, 50);
		}
	},
	preloadImages:		function() {
	
	},
	loadImage: 			function(){
	},
	parseImage:			function(){
	},
	draw:			function(iX, iY){
		switch (this.spritetype) {
			case "box":
				this.context.clearRect(0,0,canvas.width,canvas.height);
				this.context.fillStyle = "rgb(200,0,0)";
				this.context.fillRect (iX, iY, 55, 50);
				break;
			case "player":
				
				break;
			case "monster":
			
				break;
			case "tallgrass":
				break;
			default:
				this.context.fillStyle = "rgb(200,0,0)";
				this.context.fillRect (iX, iY, 55, 50);
		}
	}

}



//+------------------------------------------------+
//| 		Menu	 			   |
//+------------------------------------------------+

//		Each Array contains strings, First string is title, each one following is option
//		"menu Title", Option 1, Option 2, ...
var menuArray = [
		["Main Menu","New Game", "Load Game","2:Help", "Exit"],
		["World Map Menu","Something"],
		["In Battle Menu","Something"]];
var subMenuArray = [
		
		["submenu title 1","submenu option 1","submenu option 2","submenu option 3"],
		["submenu title 2","submenu option 1","submenu option 2","submenu option 3"],
		["Help Sub Menu","About Game", "Controls"]];
		
		
function Menu(){
	this.menuList = [];
	
        this.subMenuOpen = false;

}
Menu.prototype = {
	
	initialize: 		function(incMenuNum) {
		//assign which menu to bring up.
		this.menuList = menuArray[incMenuNum];
		//loop through menu
		for (var i = 0; i < this.menuList.length; i++) {
			var menuItem = this.menuList[i];
			//add each menu item to screen
			this.loadMenu[menuItem];
		}
	},
	loadMenu : 		function(incMenuItem) {
		//incMenuItem is a string
		if(incMenuItem.indexOf(":")>0){
			//sub menu detected
			//Loading up submenu
			var menu = incMenuItem.substring(0,incMenuItem.indexOf(":"));
			//When a menu item has a submenu
			//add a onMouseOver event to bring up submenu
		
			addEventListener("mouseover", function (e) {
				menu.loadMenu(menu);
				this.subMenuOpen = true;
			}, false);
			addEventListener("mouseexit", function (e) {
				menu.unLoadMenu(menu);
				this.subMenuOpen = false;
			}, false);
		}
		else {
			//code to append the menu item to canvas
		}
		//for each this.menuList
		//display(this.menuList[x]);
	},
	unloadMenu:		function() {
		//code to unload menu
		// remember to delete self when done, as object is no longer needed.removeChild()
	}
	
}






game = new Game();
game.initialize();

var then = Date.now();
setInterval(game.main(),1);

	
	
