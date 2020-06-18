// Iteration 1: Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack = () => {this.strength}

    receiveDamage = damage => {
        this.health -= damage
    }
}

let soldat = new Soldier(30, 20);

console.log(soldat.receiveDamage(4))


// Iteration 2: Viking
class Viking extends Soldier{
    constructor (name){
        super(health, strength);
        this.name = name
    }

    receiveDamage(damage){
				super.receiveDamage(damage);
        this.health -= damage;
        if(this.health <= 0){
            return `${this.name} has received ${damage} points of damage`;   
        } else {
            return `${this.name} has died in act of combat`;
        }
		}
		battleCry() {
			return `Odin Owns You All!`;
		}
}

// Iteration 3: Saxon
class Saxon extends Soldier{
	constructor () {
		super (health, strength);
	}

	receiveDamage(damage){
		super.receiveDamage(damage);
		this.health -= damage;
		if (this.health > 0){
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

		let doneDamage = saxonRandom;
		receiveDamage(vikingRandom.strength);
		if (saxonRandom.health <= 0) {
			this.saxonArmy.pop();
		}
		return doneDamage;
	}

	saxonAttack() {
		let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

		let doneDamage = vikingRandom;

		receiveDamage(saxonRandom.strength);
			if (vikingRandom.health <= 0) {
				this.vikingArmy.pop();
			}
			return doneDamage;
		}
}
