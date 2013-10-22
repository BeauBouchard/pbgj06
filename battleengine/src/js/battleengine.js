/*
 * Title: battleengine.js
 * Description: used for pokemon/FF style battles with different simular functions
 * Author: Beau Bouchard (@beaubouchard)
 */
 

	var creatureTypes = [];
	var playerC = {};
	var enemyP = {};
	var opponentLock = false; // true means oppenent is making a move, false means player can proceed
	var matchProceed = true;
	var victoryCondition;
	
	/* ***************************************
	 *  Creature Types (Rock, Fire, Water, Eletric, Leaf)
	 * ***************************************/
 	function Type (inctypenum,incName,incDesc, incmodHP,incmodAP,incmodDodge,incweakness, incstrength) {
		this.typenum 	= inctypenum;
		this.Name		= incName;
		this.Desc		= incDesc;
		this.modHP 		= incmodHP;
		this.modAP 		= incmodAP;
		this.modDodge 	= incmodDodge;
		this.weakness	= incweakness;
		this.strength 	= incstrength;
	}
	Type.prototype = {
		getTypenum: 	function() { return this.typenum},
		getName: 		function() { return this.Name},
		getDesc: 		function() { return this.Desc},
		getModHP: 		function() { return this.modHP},
		getModAP: 		function() { return this.modAP},
		getModDodge: 	function() { return this.modDodge},
		getWeakness: 	function() { return this.weakness },
		getStrength: 	function() { return this.strength }
	}
	
	/* 
	Rock			=	(bonus damage to Electric)
	Water			=	(bonus damage to Rock and Fire)
	Fire			=	(bonus damage to Rock)
	Electric		=	(bonus damage to Water)
	
	
	
	*/
	
		TYPE = {
				// Health Increase, Attack Increase, Dodge, weakness
			ROCK:		{ hp: 0.05,  ap: 0.20, dodge: 0.0, weakness: TYPE.WATER },
			FIRE:		{ hp: 0.00,  ap: 0.20, dodge: 0.05, weakness: TYPE.ROCK },
			NATURE: 	{ hp: 0.15,  ap: 0.05, dodge: 0.05, weakness: TYPE.FIRE },
			ELECTRIC:	{ hp: 0.05,  ap: 0.00, dodge: 0.20, weakness: TYPE.NATURE},
			WATER:		{ hp: 0.1,  ap: 0.1, dodge: 0.05, weakness: TYPE.ELECTRIC }
		};
		
	function initCreatureTypes(){
		//01 - Rock			
		var rock = new Type(1
		,"Rock"
		,"Rock Creature has a little more health, Is grounded from Electric Types, Is weak against Water Type"
		,0.25
		,0.05
		,0.0
		,2
		,4);
		
		(inctypenum,incName,incDesc, incmodHP,incmodAP,incmodDodge,incweakness, incstrength)
		//02 - Water			
		var water = new Type(2
		,"Water"
		,"Water creature Strong against Fire, Is weak against Electric Types"
		,0.05
		,0
		,0.05
		,4
		,3);
		
		
		//03 - fire			
		var fire = new Type(3
		,"Fire"
		,"Fire creature has a strong attack Is weak against water Types"
		,0
		,0.2
		,0.05
		,4
		,3);
		
		
		
		//04 - Electric			
		var electric = new Type(4
		,"Electric"
		,"Electric creature Strong against Water, Is weak against Rock"
		,0.05
		,0
		,0.15
		,1
		,2);
		creatureTypes.push(rock);
		creatureTypes.push(water);
		creatureTypes.push(fire);
		creatureTypes.push(electric);
	}
	
	/* ***************************************
	 *  Special Attacks
	 * ***************************************/
	
	function  Special (incdmg) {
		
		this.dmg		= incdmg;
		
	
		
		
	}
	Special.prototype = {
		init: 		function(){
			
		},
		animate: 	function(){
			
		}
	}
	
	/* ***************************************
	 *              CREATURE
	 * ***************************************/
	
	// Eventually I want the base attack and base health to be calculated during the create's creation, based on the creature type
	// Creature type = 1; Creature.Type.hpmod(baseHP)   Creature.Type.hpmod(100) returns 125, as 1.25 is the mod
	function Creature (nerf, inctype) {
		this.type  = creatureTypes[inctype] instanceof Type;
		this.baseHP = 100;		//base Health Points
		this.baseAP = 25; 		//base Attack Damage
		this.baseDodge = 5;		//base percentage of dodge
		this.currentHP = this.baseHP*(this.type.getModHP()+1);
		
		this.getInfo = function getInfo() {
        return 'Stats \n baseHP:' + this.baseHP + '\n baseAttack: ' + this.baseAP + '.';
		}
    }
	Creature.prototype = {
		takeDamage: function(incdmg) {this.currentHP = this.currentHP - incdmg;},
		heal: function(inchealth) {this.currentHP = this.currentHP + inchealth;},
		getHP: function() {return this.currentHP;},
		getAP: function() {return this.baseAP;}
	};
	
	
	//Creature.prototype.constructor = {}
	
	/* ***************************************
	 *              PLAYER
	 * ***************************************/
	
	function Player( ){
		this.creatureStack = [];
		
		
	}
	Player.prototype = {
		switchCreature: function(fromcreature,tocreature) {
			
		},
		generateThreeCreatures: function(){
			
			var creatureOne		= generateRandCreature();
			var creatureTwo		= generateRandCreature();
			var creatureThree 	= generateRandCreature();
			this.creatureStack.push(creatureOne);
			this.creatureStack.push(creatureTwo);
			this.creatureStack.push(creatureThree);
		}
	}
	
	//player has 3 slots for creatures,
	// right now 1 creature is stored
	function playerCreature() {}
	playerCreature.prototype = new Creature(0,1);
	
	function enemyCreture() {}
	enemyCreture.prototype = new Creature(20,2);
	
	function generateRandCreature(){
		
		var randcreatureobj = new Creature(0,Math.floor((Math.random()*3))));
		
		return randcreatureobj;
	}
	
	function attack(attacker, target){
		
		target.takeDamage(attacker.getAP());
		checkVictoryCondition(playerC, enemyP);
		//dodge chance? 
		//if( target.getDodge() >= Math.floor((Math.random()*100)+1)){successful dodge}else{attack success}
		console.log("Attack successful");
		updateInterface();
	}
	
	
	/*
	* checkVictoryCondition()
	*/
	function checkVictoryCondition(player, enemy){
		if(enemy.getHP()<=0){
			//victory!
			console.log("Enemy destroyed!");
			matchProceed = false;
			victoryCondition = true;
			
		}
		if(player.getHP()<=0){
			//defeat
			console.log("You were destroyed!");
			matchProceed = false;
			victoryCondition = false;
		}
		
	}
	
	/*
	* checkGame()
	* checks to see if the game is over, and alert victory condition
	*/
	function checkGame(){
		if(victoryCondition){console.log("You Won!");}else{ console.log("You lose!");}
	}
	
	
	
	/*
	* playerGoes()
	* Allows player to attack gamer permitting
	*/
	function playerGoes(){
	
		if(opponentLock)
		{
			console.log("opponent is currently going");
		}
		else
		{
			if(matchProceed)
			{
				attack(playerC, enemyP);
				console.log("opponent's turn!");
				window.setTimeout(opponentTurn,2000);
				opponentLock = true;
			}
			else {
				checkGame();
				console.log("Game is over.");
			}
		}

	}
	
	/*
	* opponentTurn()
	* Processes opponent's move
	*/
	function opponentTurn(){
		if(matchProceed)
		{
			attack(enemyP, playerC);
		}
		else {
			checkGame();
			console.log("Game is over.");
		}
		opponentLock = false;
		
	}
	
	
	
	function init(){
		//initializing buttons
		var atbutton = document.getElementById("attack");
		atbutton.addEventListener("click", function(){playerGoes(); });
		initCreatureTypes();
		initBattle();
		initGUI();
		
		
	}
	
	function initGUI(){
		var enemyhealth = document.getElementById("enemyhealth");
		var yourhealth = document.getElementById("yourhealth");
		enemyhealth.innerHTML =  enemyP.getHP();
		yourhealth.innerHTML = playerC.getHP();
	}
	
	
	function initBattle(){
		playerC = new playerCreature();
		enemyP = new enemyCreture();
	}
	
	function updateInterface(){
		var enemyhealth = document.getElementById("enemyhealth");
		var yourhealth = document.getElementById("yourhealth");
		enemyhealth.innerHTML =  enemyP.getHP();
		yourhealth.innerHTML = playerC.getHP();
	}
	
	
	
	window.onload = init();


