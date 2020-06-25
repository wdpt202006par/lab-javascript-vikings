// Soldier
class Soldier {
  constructor(health, strength) {
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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
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
  // battle(hitter) {
  //   if (hitter == "Viking") {

  //   }
  // }

  vikingAttack() {
    let saxonDamagedIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonDamagedIndex];
    let vikingAttackerIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    let randomViking = this.vikingArmy[vikingAttackerIndex];
    var attackResult = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health === 0) {
      this.saxonArmy.splice(saxonDamagedIndex, 1); // What is wrong here ?
    }
    return attackResult;
  }
  saxonAttack() {
    let vikingDamagedIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[vikingDamagedIndex];
    let saxonAttackerIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonAttackerIndex];
    var attackResult = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health === 0) {
      this.vikingArmy.splice(vikingDamagedIndex, 1);
    }
    return attackResult;
  }
  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0)
      return "Saxons have fought for their lives and survived another day...";
    if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
