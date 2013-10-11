/*
 * Title: battleengine.js
 * Description: used for pokemon/FF style battles with different simular functions
 * Author: Beau Bouchard (@beaubouchard)
 */
 

 var creatures = {};
 var playerC = {};
 var enemyP = {};
	var opponentLock = false; // true means oppenent is making a move, false means player can proceed
	var matchProceed = true;
	var victoryCondition;
 
	// Eventually I want the base attack and base health to be calculated during the create's creation, based on the creature type
	// Creature type = 1; Creature.Type.hpmod(baseHP)   Creature.Type.hpmod(100) returns 125, as 1.25 is the mod
	function Creature (handicap) {
		this.baseHP = 100;		//base Health Points
		this.baseAP = 25; 		//base Attack Damage
		this.currentHP = this.baseHP-handicap;   //
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
	
	//player has 3 slots for creatures,
	// right now 1 creature is stored
	function playerCreature() {}
	playerCreature.prototype = new Creature(0);
	
	function enemyCreture() {}
	enemyCreture.prototype = new Creature(20);
	
	function attack(attacker, target){
		
		target.takeDamage(attacker.getAP());
		checkVictoryCondition(playerC, enemyP);
		//dodge chance? 
		//if( target.getDodge() >= Math.floor((Math.random()*100)+1)){successful dodge}else{attack success}
		console.log("Attack successful");
		updateInterface();
	}
	
	
	
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
	
	
	function checkGame(){
		if(victoryCondition){console.log("You Won!");}else{ console.log("You lose!");}
	}
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
		initCharacters();
		initGUI();
		
		
	}
	
	function initGUI(){
		var enemyhealth = document.getElementById("enemyhealth");
		var yourhealth = document.getElementById("yourhealth");
		enemyhealth.innerHTML =  enemyP.getHP();
		yourhealth.innerHTML = playerC.getHP();
	}
	
	function initCharacters(){
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


