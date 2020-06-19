// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        var randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let attackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        
        // Keep alive Saxons only
        this.saxonArmy = this.saxonArmy.filter(function (aliveSaxons) {
            return aliveSaxons.health > 0;
        });

        return attackResult;
    }

    saxonAttack() {
        var randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let attackResult = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        
        // Keep alive Saxons only
        this.vikingArmy = this.vikingArmy.filter(function (aliveVikings) {
            return aliveVikings.health > 0;
        });

        return attackResult;
    }
    
    // showStatus() {}
}

// new War() // {vikingArmy: []}