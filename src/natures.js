let natures = {};

class Nature {

  #id;
  #name;
  #increasedStat;
  #decreasedStat;

  constructor(name, increase = undefined, decrease = undefined) {
    this.#id = name.toLowerCase();
    this.#name = name;
    this.#increasedStat = increase;
    this.#decreasedStat = decrease;
    natures[name.toLowerCase()] = this;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getIncrease() {
    return this.#increasedStat;
  }

  getDecrease() {
    return this.#decreasedStat;
  }

}

const ADAMENT = new Nature('Adament', 'atk', 'spa');
const BASHFUL = new Nature('Bashful');
const BOLD = new Nature('Bold', 'def', 'atk');
const BRAVE = new Nature('Brave', 'atk', 'spe');
const CALM = new Nature('Calm', 'spd', 'atk');
const CAREFUL = new Nature('Careful', 'spd', 'spa');
const DOCILE = new Nature('Docile');
const GENTLE = new Nature('Gentle', 'spd', 'def');
const HARDY = new Nature('Hardy');
const HASTY = new Nature('Hasty', 'spe', 'def');
const IMPISH = new Nature('Impish', 'def', 'spa');
const JOLLY = new Nature('Jolly', 'spe', 'spa');
const LAX = new Nature('Lax', 'def', 'spd');
const LONELY = new Nature('Lonely', 'atk', 'def');
const MILD = new Nature('Mild', 'spa', 'def');
const MODEST = new Nature('Modest', 'spa', 'atk');
const NAIVE = new Nature('Naive', 'spe', 'spd');
const NAUGHTY = new Nature('Naughty', 'atk', 'spd');
const QUIET = new Nature('Quiet', 'spa', 'spe');
const QUIRKY = new Nature('Quirky');
const RASH = new Nature('Rash', 'spa', 'spd');
const RELAXED = new Nature('Relaxed', 'def', 'spe');
const SASSY = new Nature('Sassy', 'spd', 'spe');
const SERIOUS = new Nature('Serious');
const TIMID = new Nature('Timid', 'spe', 'atk');

module.exports = {
  natures: natures,
  Nature,
  ADAMENT,
  BASHFUL,
  BOLD,
  BRAVE,
  CALM,
  CAREFUL,
  DOCILE,
  GENTLE,
  HARDY,
  HASTY,
  IMPISH,
  JOLLY,
  LAX,
  LONELY,
  MILD,
  MODEST,
  NAIVE,
  NAUGHTY,
  QUIET,
  QUIRKY,
  RASH,
  RELAXED,
  SASSY,
  SERIOUS,
  TIMID
}
