const { natures } = require('./natures.js');
const { getJSONKeyValue } = require('./helper.js');

let registeredPokemon = {}

class BasePokemon {

  // Important Identifiers
  #pokemon;
  #form_name;
  #pokedex;
  #types = ["", ""]

  // Attributes
  #species;
  #height;
  #weight;
  #abilities = {"1": "", "2": "", "H": ""};
  #base_stats = {hp:0, atk:0, def:0, spa:0, spd: 0, spe: 0};

  // Training
  #ev_amount;
  #ev_type;
  #catch_rate;
  #base_friendship;
  #exp_gain;
  #growth_rate;

  // Breeding
  #egg_groups = [];
  #gender_ratio = {male: 50, female: 50};
  #egg_cycles;

  // Information
  #pokedex_entries = {};
  #local_pokedex = {};
  #games = {};
  #tags = [];

  // Moves
  #moves_level;
  #moves_egg;
  #moves_tm;
  #moves_tr;

  constructor(options) {

  }

  getPokemon() {
    return this.#pokemon;
  }

  getPokedex() {
    return this.#pokedex;
  }

  getTypes() {
    return this.#types;
  }

  getSpecies() {
    return this.#species;
  }

  getHeight() {
    return this.#height;
  }

  getWeight() {
    return this.#weight;
  }

  getAbilities() {
    return this.#abilities;
  }

  getAbility1() {
    return this.#abilities['1'];
  }

  getAbility2() {
    return this.#abilities['2'];
  }

  getAbilityH() {
    return this.#abilities['H'];
  }

  getBaseStats() {
    return this.#base_stats;
  }

  getBaseHP() {
    return this.#base_stats.hp;
  }

  getBaseATK() {
    return this.#base_stats.atk;
  }

  getBaseDEF() {
    return this.#base_stats.def;
  }

  getBaseSPA() {
    return this.#base_stats.spa;
  }

  getBaseSPD() {
    return this.#base_stats.spd;
  }

  getBaseSPE() {
    return this.#base_stats.spe;
  }

  /**
    @returns {number} All base stats added together
  */
  getBaseStatTotal() {
    return this.getBaseHP() + this.getBaseATK() + this.getBaseDEF() + this.getBaseSPA() + this.getBaseSPD() + this.getBaseSPE();
  }

  getEVYieldAmount() {
    return this.#ev_amount;
  }

  getEVYieldType() {
    return this.#ev_type;
  }

  getCatchRate() {
    return this.#catch_rate;
  }

  getBaseFriendship() {
    return this.#base_friendship;
  }

  getExperienceGain() {
    return this.#exp_gain;
  }

  getGrowthRate() {
    return this.#growth_rate;
  }

  getEggGroups() {
    return this.#egg_groups;
  }

  getGenderRatio() {
    return this.#gender_ratio;
  }

  getGenderMaleRatio() {
    return this.#gender_ratio.male;
  }

  getGenderFemaleRatio() {
    return this.#gender_ratio.female;
  }

  getEggCycles() {
    return this.#egg_cycles;
  }

  getPokedexEntries() {
    return this.#pokedex_entries;
  }

  getPokedexEntry(game) {
    return this.#pokedex_entries[(game + "").toLowerCase()]==undefined?"":this.#pokedex_entries[(game + "").toLowerCase()];
  }

  getLocalPokedex() {
    return this.#local_pokedex;
  }

  /**
    @returns {object} List of games and information of the pokemon from those games
  */
  getGames() {
    return this.#games;
  }

  /**
    @returns {string[]} Tags for this pokemon
  */
  getTags() {
    return this.#tags;
  }

  /**
    @returns {object} All moves learned by the pokemon, and how they learn it
  */
  getMoves() {
    // TODO: Create function to combine level, egg, tm, and tr moves into an array
    return [];
  }

  /**
    @returns {object} Moves learned by leveling up
  */
  getMovesLevel() { return this.#moves_level; }

  /**
    @returns {string[]} Moves learned by hatching from an egg
  */
  getMovesEgg() { return this.#moves_egg; }

  /**
    @returns {string[]} Moves learned by TM
  */
  getMovesTM() {
    return this.#moves_tm;
  }

  /**
    @returns {string[]} Moves learned by TR
  */
  getMovesTR() {
    return this.#moves_tr;
  }

  /**
    Parses JSON values into this object
    @param {object} options - JSON object to parse
  */
  fromJSON(options) {
    if(options != undefined) {

    }
  }

  /**
    @returns {object} Converts this object into a JSON for saving
  */
  toJSON() {
    return {};
  }

  /**
    @returns {string} Localization key
  */
  getLocalizationKey() {
    return `pokemon.${this.#pokemon}`
  }

}

class Pokemon extends BasePokemon {

  #nickname;
  #level;
  #experience;
  #friendship;
  #nature;
  #ivs = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }
  #evs = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }
  #language;

  constructor(options) {}

  /**
    Calculates a specified stat value
    @param {string} stat - The stat to calculate
    @returns {number} Calculates 'stat' input based on base stats, ivs, evs, and level
  */
  calculateStatValue(stat) {
    let value = undefined;
    if(this.#ivs[stat] != undefined) {
      if(stat.toLowerCase() === 'hp') {
        value = Math.floor(0.01 * (2 * this.#stats[stat] + this.#ivs[stat] + Math.floor(0.25 * this.#evs[stat])) * this.#level) + this.#level + 10;
        if(this.#pokemon == 'shedinja') value = 1;
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

  /**
    @returns {number} Calculated HP stat based on base stats, ivs, evs, and level
  */
  getHP() {
    return this.calculateStatValue('hp');
  }

  /**
    @returns {number} Calculated Atk stat based on base stats, ivs, evs, and level
  */
  getATK() {
    return this.calculateStatValue('atk');
  }

  /**
    @returns {number} Calculated Def stat based on base stats, ivs, evs, and level
  */
  getDEF() {
    return this.calculateStatValue('def');
  }

  /**
    @returns {number} Calculated Sp. Atk stat based on base stats, ivs, evs, and level
  */
  getSPA() {
    return this.calculateStatValue('spa');
  }

  /**
    @returns {number} Calculated Sp. Def stat based on base stats, ivs, evs, and level
  */
  getSPD() {
    return this.calculateStatValue('spd');
  }

  /**
    @returns {number} Calculated Speed stat based on base stats, ivs, evs, and level
  */
  getSPE() {
    return this.calculateStatValue('spe');
  }

  /**
    @returns {object} All calculated stats for this mon

    @example
      bulbasaur@lvl100 0ivs and 0evs
      returns:
        hp: 200,
        atk: 92,
        def: 92,
        spa: 121,
        spd: 121,
        spe: 85
  */
  getStats() {
    return {
      hp: this.getHP(),
      atk: this.getATK(),
      def: this.getDEF(),
      spa: this.getSPA(),
      spd: this.getSPD(),
      spe: this.getSPE()
    }
  }

}

module.exports = {
  BasePokemon,
  Pokemon
}
