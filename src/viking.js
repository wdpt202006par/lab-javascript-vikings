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

  chooseRandomSoldier(soldierArray){
    // let randomNum = Math.floor(Math.random * soldierArray.length);
    // return soldierArray[randomNum]  
    return soldierArray[Math.floor(Math.random() * soldierArray.length)];
  }

  vikingAttack() {
    let randomViking = this.chooseRandomSoldier(this.vikingArmy);
    let randomSaxon = this.chooseRandomSoldier(this.saxonArmy);

    let damage = randomSaxon.receiveDamage(randomViking.strength);

    for (let i = 0; i < this.saxonArmy.length; i++){
        let saxon = this.saxonArmy[i]
        if(saxon.health <= 0){
            this.saxonArmy.splice(i, 1)
        }
    }
    return damage 
  }


  saxonAttack() {
    let randomViking = this.chooseRandomSoldier(this.vikingArmy);
    let randomSaxon = this.chooseRandomSoldier(this.saxonArmy);

    let damage = randomViking.receiveDamage(randomSaxon.strength);
    
    for (let i = 0; i < this.vikingArmy.length; i++){
        let viking = this.vikingArmy[i]
        if(viking.health <= 0){
            this.vikingArmy.splice(i, 1)
        }
    }
    return damage 

  }

  showStatus() {

  }

}
