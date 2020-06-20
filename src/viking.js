// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
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
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let viking = this.vikingArmy[vikingIndex];
        let saxon = this.saxonArmy[saxonIndex];
        let damage = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex,1)
        }
        return damage; 
    }
    saxonAttack(){
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];
        let damage = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0) {
            this.vikingArmy.splice(vikingIndex,1)
        }
        return damage; 
    }
    //Bonus
    attack(attackingArmy, defendingArmy) {
        let attackingIndex = Math.floor(Math.random()*attackingArmy.length);
        let defendingIndex = Math.floor(Math.random()*defendingArmy.length);
        let attackingSoldier = attackingArmy[attackingIndex];
        let defendingSoldier = defendingArmy[defendingIndex];
        let damage = defendingSoldier.receiveDamage(attackingSoldier.strength);
        if (defendingSoldier.health <= 0) {
            defendingArmy.splice(defendingIndex,1)
        }
        return damage; 
    }

    showStatus() {
        if(this.saxonArmy.length <= 0 ) {
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day...";
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }

}



