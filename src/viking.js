// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage 
    }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
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

  choseRandomSoldier(soldierArray){
    const randomSoldier = Math.floor(Math.random * soldierArray.length);
    return randomSoldier  
  }

  vikingAttack() {
    const randomViking = this.choseRandomSoldier(this.vikingArmy.length);
    const randomSaxon = this.choseRandomSoldier(this.saxonArmy.length);

    const damage = randomSaxon.receiveDamage(randomViking.strength);

    for (saxon of this.saxonArmy){
        if(saxon.health === 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1)
        }
    }
    return damage 
  }


  saxonAttack() {
    const randomViking = this.choseRandomSoldier(this.vikingArmy.length);
    const randomSaxon = this.choseRandomSoldier(this.saxonArmy.length);

    randomViking.receiveDamage(randomSaxon.strength);

  }

  showStatus() {

  }

}
