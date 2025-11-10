//=============================
// 🧩 UJI COBA HUNGKUL W IEU MAH 
//=============================

//# Array Destructuring Dasar
let colors = [ 'red', 'green', 'blue' ]
let [ r, g, b ] = colors
console.log( r, g )

//# Object Destructuring Dasar
sser = {
    name: 'Arman',
    age: 20,
}
let { name, age } = sser
console.log( name, age )

//# Skip Nilai pada Array
minuman = [ 'susu', 'air', 'jus' ]
let [ s, a, j ] = minuman
console.log(j);

//# Default Value pada Destructuring
let [ x, y = 10 ] = [ 5 ]
console.log( x, y );
// Output: 5 =x, 10=y

//### 1️⃣ Soal 1 — Destructuring Array Sederhana
const buah = [ 'apple', 'banana', 'cherry' ]
const [ b1, b2, b3  ] = buah
console.log ( b1, b2, b3 );

//###2️⃣ Soal 2 — Skip Nilai
const color = [ 'red', 'green', 'blue' , 'yellow' ]
const [ c1, c2, c3, c4 ] = colors
console.log(c1,c3); 

//###3️⃣ Soal 3 — Default Value
const siswa = ["Rina"];
const [s1, s2, s3] = siswa;
console.log(s1, s2, s3);

//###4️⃣ Soal 4 — Destructuring Object
const user = { nama: "Dimas", umur: 17 };
const { nama, umur } = user;
console.log(nama, umur);

//###5️⃣ Soal 5 — Ganti Nama Variabel
//Gunakan destructuring object dengan nama variabel berbeda.
const laptop = { merek: "ROG", harga: 7000000 };
const { merek: ml, harga: bb = laptop } = laptop
console.log(ml, bb);

//###6️⃣ Soal 6 — Destructuring di Function Parameter
function tampilData({ nama, umur }) {
    console.log(`Halo ${nama}, umur kamu ${umur} tahun udah baleg lohh.`)
}
tampilData({ nama: "arman", umur: 19 })

//###7️⃣ Soal 7 — Rest Operator pada Array
const angka = [1, 2, 3, 4, 5];
const [a1, a2, ...man] = angka;
console.log(a1, a2, man);

//###8️⃣ Soal 8 — Spread Operator untuk Menggabungkan Array
//Gabungkan dua array berikut menjadi satu:
const A1 = ["air", "api"];
const B2 = ["tanah", "angin"];
const unsur = [...A1, ...B2];
console.log(unsur);


//9️⃣ Soal 9 — Spread Operator pada Object
//Gabungkan dua object berikut menjadi satu:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);



//🔟 Soal 10 — Default dan Rest Bersamaan
//Buat function yang menerima destructuring seperti:

function jumlah(a = 0, ...angka) {
    return angka.reduce((a, b) => a + b, a);
}
console.log(jumlah(2, 4, 6, 8, 10));


//1️⃣1️⃣ Soal 11 — Destructuring Nested (Bersarang)
//Dari object:
 
const data = {
  user: {
    nama: "asep",
    alamat: { kota: "ciamis", kode: 40123 }
  }
};

const { user: { alamat: { kota } } } = data;
console.log(data);