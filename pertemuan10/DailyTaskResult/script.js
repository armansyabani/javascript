
const element = document.getElementById=("element");
//Gunakan destructuring array untuk mengambil nilai dari array `[1, 2, 3, 4]`


let istri =["Devina", "Celsi", "Nami san","Nezuko", "Yaliyali"];
let =[a, b, c, d, e] = istri;
console.log(a);

//Buat object `mobil` dan destructure properti `merek` dan `tahun`
let mobil ={
    merek : "kijang",
    tahun : 2023
}
let {merek, tahun} = mobil
console.log(tahun);



//Gabungkan dua array menggunakan spread operator
let balegmoal = ["1", "2", "3", "4", "5"]
let moalbaleg = ["6", "7", "8", "9", "10"]
let hijikeun = [...balegmoal, ...moalbaleg]
console.log(hijikeun);

//Buat function yang menerima banyak argumen angka dan mengembalikan jumlahnya menggunakan rest.
function jumlah(...angka){
    return angka.reduce((a, b) => a + b, 0);
}
console.log(jumlah(2, 4, 6, 8, 10));


// Buat program yang menerima data siswa dari object, lalu pisahkan nilai tertentu dan manipulasi data lainnya:
let animex = {
    nama : "ealina",
    usia : 19,
    program : "artis",
    cantik :"100%",
    aktif : true
}
let {nama, usia, program, cantik, aktif} = animex
console.log(nama);
console.log(usia);
console.log(program);
console.log(cantik);
console.log(aktif);



//================================//
// study kasus
//================================//
let siswa = {
    name : "arman",
    usia : 19,
    kelas : "XII",
    jurusan : "pengganguran sukses",
}
// gunakan destructuring untuk mengambil nama dan kelas
let {name, kelas} = siswa
console.log(nama);
console.log(kelas);


// gunakan sppread untuk buat objek baru dengan properti nilai 100
let nilai1tambah = {
    ...siswa,
    nilai : 100
}

console.log(nilai1tambah);

//buat fungsi yang banyak menerima nilai ujian dan rata rata nya pake rest
function rataRata(...nilai){
    return nilai.reduce((a, b) => a + b, 0) / nilai.length;
}

console.log(rataRata(89, 74, 97, 66, 100));
