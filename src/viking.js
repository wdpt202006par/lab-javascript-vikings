// Iteration 1: Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack = () => {this.strength}
    

    receiveDamage = damage => {
        this.health -= damage
    }
}

let soldat = new Soldier(30, 20);

console.log(soldat.receiveDamage(4))


// Iteration 2: Viking
class Viking extends Soldier{
    constructor (name){
        super(health, strength);
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health <= 0){
            return `${this.name} has received t${his.health} points of damage`;   
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

}

// Iteration 3: Saxon
class Saxon {}

// BONUS- Iteration 4: War
class War {}
