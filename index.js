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
// const Jimp = require('jimp');
//
// const typings = require('./typing.json');
//
// const TYPING_SIZE = 160;
// const HEIGHT = 16;
//
// let size = TYPING_SIZE+(HEIGHT*(Object.keys(typings).length));
//
// function getRGBA(hex) {
//   let a = 255;
//   let r = 255;
//   let g = 255;
//   let b = 255;
//   switch(hex.length) {
//     case 8:
//       a = parseInt(hex.substring(0,2), 16);
//       hex = hex.substring(2);
//     case 6:
//       r = parseInt(hex.substring(0,2), 16);
//       hex = hex.substring(2);
//       g = parseInt(hex.substring(0,2), 16);
//       hex = hex.substring(2);
//       b = parseInt(hex.substring(0,2), 16);
//       break;
//     default:
//       break;
//   }
//   return [r,g,b,a];
// }
//
// function drawRect(hex, img, x, y, width, height) {
//   let color = getRGBA(hex);
//   for(let i = 0; i < width; i++) {
//     for(let j = 0; j < height; j++) {
//       img.setPixelColor(Jimp.rgbaToInt(...color), x + i, y + j);
//     }
//   }
// }
//
// new Jimp(size, size, (err, img) => {
//   let index = 0;
//   for(let c in typings) {
//     let color = typings[c].color;
//
//     drawRect(color, img, 0, TYPING_SIZE + (HEIGHT * index), TYPING_SIZE, HEIGHT);
//     drawRect(color, img, TYPING_SIZE + (HEIGHT * index), 0, HEIGHT, TYPING_SIZE);
//
//     let index1 = 0;
//     for(let t in typings) {
//       let color1 = typings[t].color;
//       let offset = TYPING_SIZE + (HEIGHT * index1);
//
//       let effect = typings[c].effectiveness[t];
//       console.log(effect);
//
//       let effectColor = 'FF0000';
//       if(effect == 0) effectColor = '000000';
//       else if(effect == 0.5) effectColor = 'FF0000';
//       else if(effect == 1) effectColor = 'A2A2A2';
//       else if(effect == 2) effectColor = '00FF00';
//       else effectColor = '666666';
//
//       let pos = [TYPING_SIZE + (HEIGHT * index1)+1, TYPING_SIZE + (HEIGHT * index)+1];
//
//       drawRect(effectColor, img, pos[0]+1, pos[1]+1, HEIGHT-4, HEIGHT-4);
//
//       drawRect(color, img, pos[0], pos[1], 1, HEIGHT-2); // Vertical
//       drawRect(color, img, pos[0], pos[1] + (HEIGHT-3), HEIGHT-2, 1); // Horizontal
//
//       drawRect(color1, img, pos[0] + (HEIGHT-3), pos[1], 1, HEIGHT-2); // Vertial2
//       drawRect(color1, img, pos[0] + 1, pos[1], HEIGHT-3, 1); // Horizontal 2
//
//       index1++;
//     }
//
//     index++;
//   }
//   img.write('test.png');
// });
