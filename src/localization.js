let languages = {
  "english": {
    "pokedex.bulbasaur.red": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    "pokedex.bulbasaur.blue": "@pokedex.bulbasaur.red"
  }
}

function getLocalization(key, lang) {
  return languages[lang][key];
}

module.exports = {
  getLocalization
}
