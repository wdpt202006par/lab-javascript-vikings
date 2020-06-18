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

<<<<<<< HEAD
  chooseRandomSoldier(soldierArray){
    // let randomNum = Math.floor(Math.random * soldierArray.length);
    // return soldierArray[randomNum]  
    return soldierArray[Math.floor(Math.random() * soldierArray.length)];
  }

  vikingAttack() {
    let randomViking = this.chooseRandomSoldier(this.vikingArmy);
    let randomSaxon = this.chooseRandomSoldier(this.saxonArmy);

    let damage = randomSaxon.receiveDamage(randomViking.strength);
=======
  choseRandomSoldier(army){
    const randomSoldier = army[Math.floor(Math.random() * army.length)];
    return randomSoldier  
  }

  vikingAttack() {
    let viking = this.choseRandomSoldier(this.vikingArmy);
    let saxon = this.choseRandomSoldier(this.saxonArmy);

    const damage = saxon.receiveDamage(viking.strength);
>>>>>>> 319318503cad27e126c4307c11432d93f7c32000

    for (let i = 0; i < this.saxonArmy.length; i++){
        let saxon = this.saxonArmy[i]
        if(saxon.health <= 0){
            this.saxonArmy.splice(i, 1)
        }
    }
    return damage;
  }


  saxonAttack() {
<<<<<<< HEAD
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
=======
    let viking = this.choseRandomSoldier(this.vikingArmy);
    let saxon = this.choseRandomSoldier(this.saxonArmy);

    const damage = viking.receiveDamage(saxon.strength);
>>>>>>> 319318503cad27e126c4307c11432d93f7c32000

    for (viking of this.vikingArmy){
        if(viking.health === 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1)
        }
    }
    return damage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }

}
