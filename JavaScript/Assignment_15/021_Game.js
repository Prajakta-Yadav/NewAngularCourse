class Character {
attack() {
console.log("Basic attack");
}
}
class Warrior extends Character {
attack() {
console.log("Warrior sword attack");
}
}
class Mage extends Character {
attack() {
console.log("Mage magic attack");
}
}

let w = new Warrior();
w.attack();

