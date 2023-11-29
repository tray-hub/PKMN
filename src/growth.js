const { replaceAll } = require('./helper.js');
const growth = require('../resources/growth.json');

for(let rate in growth) {
  console.log(`-= ${rate.toUpperCase()} =-`);
  for(let x = 1; x <= 100; x++) {
    let formula = '';
    for(let levelFormula in growth[rate]) {
      if(eval(replaceAll(levelFormula, 'level', x))) {
        formula = growth[rate][levelFormula];
        break;
      }
    }
    formula = replaceAll(formula, 'level', x);
    let exp = Math.floor(eval(formula));
    console.log(`\t${x}: ${exp}`);
  }
  console.log('\n\n\n');
}
