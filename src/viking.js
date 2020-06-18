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
    vikingArmy = []
    saxonArmy = []
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);

    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack() {
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        let saxRandom = Math.floor(Math.random() * saxonArmy.length);
        let vikRandom = Math.floor(Math.random() * vikingArmy.length);
        return this.saxonArmy[saxRandom].receiveDamage(this.saxonArmy[vikRandom].strength);
    }
    saxonAttack() {

    }
    showStatus() {

    }
}