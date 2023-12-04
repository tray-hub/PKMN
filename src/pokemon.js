const { natures } = require('./natures.js');

class Pokemon {

  #species = "";
  #name = "";
  #nickname = undefined;

  #level = 100;
  #experience = 1;

  #nature;

  #stats = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }
  #ivs = {
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31
  }
  #evs = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }

  constructor() {
    this.#species = 'bulbasaur';
    this.#name = 'Bulbasaur';
    this.#nature = 'adament';
    this.#stats.hp = 45;
    this.#stats.atk = 49;
    this.#stats.def = 49;
    this.#stats.spa = 65;
    this.#stats.spd = 65;
    this.#stats.spe = 45;
  }

  getSpecies() { return this.#species; }
  getName() { return this.#name; }
  getNickname() { return this.#nickname; }
  getLevel() { return this.#level; }
  getExperience() { return this.#experience; };
  getNature() { return natures[this.#nature].getName(); };
  getStats() { return this.#stats; };
  getIndividualValues() { return this.#ivs; };
  getEffortValues() { return this.#evs; };

  isNicknamed() { return this.#nickname == undefined; }

  getStatValue(stat) {
    let value = undefined;
    if(this.#ivs[stat] != undefined) {
      if(stat.toLowerCase() === 'hp') {
        value = Math.floor(0.01 * (2 * this.#stats[stat] + this.#ivs[stat] + Math.floor(0.25 * this.#evs[stat])) * this.#level) + this.#level + 10;
        if(this.#species == 'Shedinja') value = 1;
      } else {
        let nature = 1;
        if(stat==natures[this.#nature].getIncrease()) nature = 1.1;
        if(stat==natures[this.#nature].getDecrease()) nature = 0.9;
        value = (Math.floor(0.01 * (2 * this.#stats[stat] + this.#ivs[stat] + Math.floor(0.25 * this.#evs[stat])) * this.#level) + 5) * nature;
      }
      value = Math.floor(value);
    }
    return value;
  }

}

console.log(natures['adament'].getIncrease())

module.exports = Pokemon;