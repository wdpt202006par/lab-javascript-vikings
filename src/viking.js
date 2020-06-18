// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);

    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack() {
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
        let vikRandom = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.saxonArmy[saxRandom].receiveDamage(this.vikingArmy[vikRandom].strength);
        if (this.saxonArmy[saxRandom].health <=0) {
            this.saxonArmy.splice(saxRandom,1)
        }
        return result;
    }
    saxonAttack() {
        let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
        let vikRandom = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.vikingArmy[vikRandom].receiveDamage(this.saxonArmy[saxRandom].strength);
        if (this.vikingArmy[vikRandom].health <=0) {
            this.vikingArmy.splice(vikRandom,1)
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle.";
    }
}