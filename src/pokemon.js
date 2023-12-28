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

  getPokemon() { return this.#pokemon; }
  getPokedex() { return this.#pokedex; }
  getTypes() { return this.#types; }
  getSpecies() { return this.#species; }
  getHeight() { return this.#height; }
  getWeight() { return this.#weight; }
  getAbilities() { return this.#abilities; }
  getAbility1() { return this.#abilities['1']; };
  getAbility2() { return this.#abilities['2']; };
  getAbilityH() { return this.#abilities['H']; };
  getBaseStats() { return this.#base_stats; }
  getBaseHP() { return this.#base_stats.hp; }
  getBaseATK() { return this.#base_stats.atk; }
  getBaseDEF() { return this.#base_stats.def; }
  getBaseSPA() { return this.#base_stats.spa; }
  getBaseSPD() { return this.#base_stats.spd; }
  getBaseSPE() { return this.#base_stats.spe; }
  getEVYieldAmount() { return this.#ev_amount; }
  getEVYieldType() { return this.#ev_type; }
  getCatchRate() { return this.#catch_rate; }
  getBaseFriendship() { return this.#base_friendship; }
  getExperienceGain() { return this.#exp_gain; }
  getGrowthRate() { return this.#growth_rate; }
  getEggGroups() { return this.#egg_groups; }
  getGenderRatio() { return this.#gender_ratio; }
  getGenderMaleRatio() { return this.#gender_ratio.male; }
  getGenderFemaleRatio() { return this.#gender_ratio.female; }
  getEggCycles() { return this.#egg_cycles; }
  getPokedexEntries() { return this.#pokedex_entries; }
  getPokedexEntry(game) {
    return this.#pokedex_entries[(game + "").toLowerCase()]==undefined?"":this.#pokedex_entries[(game + "").toLowerCase()];
  }
  getLocalPokedex() { return this.#local_pokedex; }
  getGames() { return this.#games; }
  getTags() { return this.#tags; }
  getMoves() {
    // TODO: Create function to combine level, egg, tm, and tr moves into an array
    return [];
  }
  getMovesLevel() { return this.#moves_level; }
  getMovesEgg() { return this.#moves_egg; }
  getMovesTM() { return this.#moves_tm; }
  getMovesTR() { return this.#moves_tr; }

  fromJSON(options) {
    if(options != undefined) {

    }
  }

}

class Pokemon extends BasePokemon {

  #nickname = "";
  #level = 1;
  #experience = 1;
  #friendship
  #nature;
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

  constructor(options) {
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

}

module.exports = {
  BasePokemon,
  Pokemon
}
