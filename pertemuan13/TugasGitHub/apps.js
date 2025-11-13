import { tambah, kurang } from './math.js';
console.log(tambah(5, 3)); // 8
console.log(kurang(5, 3)); // 2

import greet from './greet.js';
greet('Budi'); // Halo, yanto

import * as utils from './utils.js';
utils.hello(); // Hello!
utils.bye();   // Bye!

import { hi, bye } from './say.js';
hi('Dika');
bye('Dika');


import { hi as salam, bye as pamit } from './say.js';
salam('Rina');
pamit('Rina');


import * as say from './say.js';
say.salam('Dani');
say.pamit('Dani');


import User from './user.js';
const u = new User('Indra');
console.log(u.name); // Indra


import { default as User } from './user.js';
const a = new User('Indra');
console.log(u.name); // Indra

button.onclick = async () => {
  let { bigFeature } = await import('./heavy.js');
  bigFeature();
};
