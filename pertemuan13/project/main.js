import { tambah as tambah } from './utils/aritmatika.js';
import { kurang as kurang } from './utils/aritmatika.js';
import { kali as kali } from './utils/aritmatika.js';
import { bagi as bagi } from './utils/aritmatika.js';

const tagDiv10 = document.getElementById('tagDiv10');
console.log(tagDiv10);



function ngisiTag10(a, b) {
    let isi = '';

    let resultAdd = tambah(a, b);
    let resultMin = kurang(a, b);
    let resultMultiply = kali(a, b);
    let resultBagi = bagi(a, b);

    isi += `<h3>${a} + ${b} = ${resultAdd}</h3>`;
    isi += `<h3>${a} - ${b} = ${resultMin}</h3>`;
    isi += `<h3>${a} × ${b} = ${resultMultiply}</h3>`;
    isi += `<h3>${a} ÷ ${b} = ${resultBagi}</h3>`;
    isi += `<h3>====================</h3>`;

    return isi;
}

tagDiv10.innerHTML += ngisiTag10(10, 5);
tagDiv10.innerHTML += ngisiTag10(5, 10);
tagDiv10.innerHTML += ngisiTag10(5, 5);
tagDiv10.innerHTML += ngisiTag10(10, 10);
tagDiv10.innerHTML += ngisiTag10(100, 200);
