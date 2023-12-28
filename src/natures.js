let natures = {};

class Nature {

  #name;
  #increasedStat;
  #decreasedStat;

  /**
    @param {string} name - Name of the nature
    @param {string} increase - Acronym of beneficial stat
    @param {string} decrese - Acronym of inhibitted stat
  */
  constructor(name, increase = undefined, decrease = undefined) {
    this.#name = name.toLowerCase();
    this.#increasedStat = increase;
    this.#decreasedStat = decrease;
    natures[name.toLowerCase()] = this;
  }

  /**
    @returns {string} Id of the nature
  */
  getId() {
    return this.#id;
  }

  /**
    @returns {string} Name of the nature
  */
  getName() {
    return this.#name;
  }

  /**
    @returns {string} Name of stat that this nature benefits
  */
  getIncrease() {
    return this.#increasedStat;
  }

  /**
    @returns {string} Name of stat that this nature inhibits
  */
  getDecrease() {
    return this.#decreasedStat;
  }

}

const ADAMANT = new Nature('adamant', 'atk', 'spa');
const BASHFUL = new Nature('bashful');
const BOLD = new Nature('bold', 'def', 'atk');
const BRAVE = new Nature('brave', 'atk', 'spe');
const CALM = new Nature('calm', 'spd', 'atk');
const CAREFUL = new Nature('careful', 'spd', 'spa');
const DOCILE = new Nature('docile');
const GENTLE = new Nature('gentle', 'spd', 'def');
const HARDY = new Nature('hardy');
const HASTY = new Nature('hasty', 'spe', 'def');
const IMPISH = new Nature('impish', 'def', 'spa');
const JOLLY = new Nature('jolly', 'spe', 'spa');
const LAX = new Nature('lax', 'def', 'spd');
const LONELY = new Nature('lonely', 'atk', 'def');
const MILD = new Nature('mild', 'spa', 'def');
const MODEST = new Nature('modest', 'spa', 'atk');
const NAIVE = new Nature('naive', 'spe', 'spd');
const NAUGHTY = new Nature('naughty', 'atk', 'spd');
const QUIET = new Nature('quiet', 'spa', 'spe');
const QUIRKY = new Nature('quirky');
const RASH = new Nature('rash', 'spa', 'spd');
const RELAXED = new Nature('relaxed', 'def', 'spe');
const SASSY = new Nature('sassy', 'spd', 'spe');
const SERIOUS = new Nature('serious');
const TIMID = new Nature('timid', 'spe', 'atk');

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
