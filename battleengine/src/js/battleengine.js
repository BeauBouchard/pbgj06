

/*
 * Title: battleengine.js
 * Description: used for pokemon/FF style battles with different simular functions
 * Author: Beau Bouchard (@beaubouchard)
 */
 

 var creatures = {};
 

 
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
	
	function attack(attacker, target)
	{
		
	}

}
