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

/*
  b = Base experience yield of loser
  L = Level of the fainted/caught pokemon
  Lp= Level of winner
  s = (1: when calculating the experience of a pokemon that participated in battle) (2: when calculating the experience of a pokemon that did not participate in the battle)
  t = (1: if winner is current OT as trainer) (1.5: if winner is not from OT) (6934/4096: if winner is not from OT AND has different language of origin)
  e = (1.5: winner is using luckly egg) (1: otherwise)
  v = (4915/4096: If winner is past level when could evolve but hasn't) (1: otherwise)
  f = (4915/4096: If winner has affection of two hearts or more Gen 4 to Gen 7, 100 or higher friendship Lets Go Series, 220 or higher Gen 8 to Current) (1.2: same as before but only Gen 6) (1 otherwise)
  p = (1: No Exp. Point Power is active) (1.5: Roto Exp. Points or Exp. Charm) (0.5: triple down arrow) (0.66: double down arrow) (0.8: single down arrow) (1.2: single up arrow) (1.5: double up arrow) (2: triple up arrow, S, MAX)
  Sb= (1.5: Small or Large) (4: Extra small or Extra large) (1: otherwise)
  F = (1.5: First throw) (1: otherwise)
  T = (1.1: Nice throw) (1.5: Great throw) (2: Excellent throw) (1: otherwise)
  n = (1.1: New catch) (1: otherwise)
*/
function getExperienceGain(winner, loser, caught=false, numberThrows=1, throwType='') {
  let b = loser.training.exp;
  let L = loser.level;
  let Lp = winner.level;
  let s = winner.active?1:2;
  let t = winner.withOT?1:(winner.differentLanguage?6943/4096:1.5);
  let e = winner.heldItem.name === "Lucky Egg";
  let v = winner.level>winner.evolveLevel?4915/4096:1;
  let f = winner.affection>=220?4915/4096:1;
  let p = 1;
  if(winner.trainer.power.name === "Experience") {
    if(winner.trainer.power.type === "Rotom") {
      p *= 1.5;
    } else {
      switch(winner.trainer.power.value) {
        case -3: p *= 0.5; break;
        case -2: p *= 0.5; break;
        case -1: p *= 0.5; break;
        case 1: p *= 1.2; break;
        case 2: p *= 1.5; break;
        case 3: p *= 2; break;
        case 'S': p *= 2; break;
        case 'MAX': p *= 2; break;
      }
    }
  }
  let Sb = 1;
  let F = 1;
  let T = 1;
  let n = 1;
  if(caught) {
    if(loser.isSmall() || loser.isLarge()) Sb += 0.5;
    if(loser.isExtraSmall() || loser.isExtraLarge()) Sb += 2.5;
    if(numberThrows == 1) F = 1.1;
    switch(throwType) {
      case 'nice': T = 1.1; break;
      case 'great': T = 1.5; break;
      case 'excellent': T = 2; break;
    }
    if(!winner.trainer.pokedex.isCaught(loser.getSpecies(), loser.getForm())) {
      n = 1.1
    }
  }
  if(winner.trainer.hasExperienceCharm) p *= 1.5;
  let experienceGain = (b*L)/5;
  experienceGain *= (1/s);
  experienceGain *= Math.pow(((2*L) + 10)/(L+Lp+10), 2.5);
  experienceGain += 1;
  experienceGain *= t;
  experienceGain *= e;
  experienceGain *= v;
  experienceGain *= f;
  experienceGain *= p;
  experienceGain *= Sb;
  experienceGain *= F;
  experienceGain *= T;
  experienceGain *= n;
  return experienceGain;
}

module.exports = {
  getExperienceGain
}
