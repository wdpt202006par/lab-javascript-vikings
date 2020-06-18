// Iteration 1: Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}
	attack = () => {
		return this.strength
	}
	receiveDamage = damage => {
			this.health -= damage
	}
}

// Iteration 2: Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}
	receiveDamage(damage){
		super.receiveDamage(damage);
		this.health -= damage;
		if(this.health <= 0){
				return `${name} has received ${damage} points of damage`;   
		} else {
				return `${name} has died in act of combat`;
		}
	}
	battleCry() {
		return `Odin Owns You All!`;
	}
}

// Iteration 3: Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength)
	}
	receiveDamage(damage) {
		super.receiveDamage(damage);
		this.health -=  damage;
		if ((this.health - damage) >0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}

// BONUS- Iteration 4: War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}
	addViking(viking) {
		this.vikingArmy.push(viking);
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}

	vikingAttack() {
		let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let doneDamage = saxonRandom.receiveDamage(vikingRandom.strength);
		if (saxonRandom.health <= 0) {
			this.saxonArmy.pop();
		}
		return doneDamage;
	}

	saxonAttack() {
		let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let doneDamage = vikingRandom.receiveDamage(saxonRandom.strenth);
		if (vikingRandom.health <= 0) {
			return this.vikingArmy.pop();
		}
		return doneDamage;
	}
	
	// SUPER BONUS

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return `Vikings have won the war of the century!`;
		} else if (this.vikingArmy.length === 0) {
			return `Saxons have fought for their lives and survived another day...`;
		} else {
			return `Vikings and Saxons are still in the thick of battle.`;
		}
	}
}
