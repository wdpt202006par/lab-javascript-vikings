// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
      var result = this.strength; 
      console.log(result);
    }

    receiveDamage(theDamage) {
       var damage = this.health -= theDamage;
       console.log(damage);
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
       super(health, strength);
        this.name = name;
    }

    attack(){
        super.attack();
        }
    
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if(this.health < 0){
            console.log (`${this.name} has died in act of combat`)
        }else {console.log (`${this.name} has received ${theDamage} points of damage`)}
    }

    battleCry() {
      console.log (`Odin Owns You All!`)
    }
    }

// Saxon
class Saxon extends Soldier {

    attack(){
          super.attack();
          }
  
    receiveDamage(theDamage) {
          this.health -= theDamage;
          if(this.health < 0){
              console.log (`A Saxon has died in act of combat`)
          }else {console.log (`A Saxon has received ${theDamage} points of damage`)}
      }
  }
  
// War
class War {
    constructor(vikingArmy, saxonArmy){
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
  addViking(viking){
    var addV = this.vikingArmy += [viking];
    console.log(addV)
  }
  
  addSaxon(saxon){
    var addS = this.saxonArmy += [saxon];
    console.log(addS)
  }
  
  vikingAttack(){
    var vikingA = saxon.health;
  
  }
  
  saxonAttack(){
  
  }
  
  }
  
  const war1 = new War(100,50);
  
  war1.addViking(5);
  war1.addSaxon(10);
  war1.vikingAttack(2);
  war1.saxonAttack(3);
