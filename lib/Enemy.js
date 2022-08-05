const Potion = require("./Potion");
const Character = require("./Character");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `Look out! It's a ${this.name}!! With a fucking ${this.weapon}!!!!!!!!`;
  }
}

module.exports = Enemy;
