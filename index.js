const Pokemon = require('./src/pokemon.js');

let bulbasaur = new Pokemon();

console.log(`${bulbasaur.getName()}`);
console.log(`\t${bulbasaur.getNature()} nature`);
console.log(`\t HP: ${bulbasaur.getStatValue('hp')}`);
console.log(`\tATK: ${bulbasaur.getStatValue('atk')}`);
console.log(`\tDEF: ${bulbasaur.getStatValue('def')}`);
console.log(`\tSPA: ${bulbasaur.getStatValue('spa')}`);
console.log(`\tSPD: ${bulbasaur.getStatValue('spd')}`);
console.log(`\tSPE: ${bulbasaur.getStatValue('spe')}`);
