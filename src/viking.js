// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {}
}

// Viking
class Viking extends Soldier {
  constructor(health, strength, name) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage() {}
  battleCry() {}
}

// Saxon
class Saxon {}

// War
class War {}
