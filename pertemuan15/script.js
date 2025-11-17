// no 1 
function sapaUser(nama, callback) {
  console.log("Halo " + nama);
  callback();
}
function setelahSapa() {
  console.log("terimakasih telah menyapaku");
}
  function setelahterimaKasih() {
    console.log("semoga harimu menyenangkan");
  }
  function setelahketemu() {
    console.log("sampai jumpa kembali");
  }
function turubroo () {
    console.log("selamat tidur janagan lupa bangun");
  }
function login() {
    console.log("hayu login emel"); 
  }
function madog() {
    console.log("hayu wang badog sampe di sawah"); 
  }
function hoream() {
    console.log("hoream ka luar aing na oge");
    
  }

sapaUser("virman", madog);
 //Callback Sederhana (LEVEL VERY NEWBIE)
//no.1

function ulang(n,callback)
{
    for (let i = 0; i < n; i++) {
        callback();
      }
}
ulang(5, () => console.log("gassssskeunnn!"));

//no.2
function simpanData(data, callback) {
  if (!data.nama) {
    console.log("Nama tidak boleh kosong");
    return;
  }
  callback(data);
}

simpanData({ nama: "Arman sya'bani" }, (obj) => {
  console.log("Data berhasil disimpan:", obj);
});

//no.3
function prosesArray (arr,callback){
    const hasil =callback(arr);
    console.log(hasil);
}

prosesArray([1, 2, 3], arr => arr.map(x => x * 3));

//no.4
console.log("Mulai");

setTimeout(() => {
  console.log("Ini jalan setelah 3 detik");
}, 1000);

console.log("Selesai");
                            
//no.5
function ambilUser(callback) {
  setTimeout(() => {
    callback({ nama: "Arman", umur: 19 });
  }, 2000);
}

ambilUser((user) => {
  console.log(user);
});

// no.6
setTimeout(() => {
  console.log("Halo, selamat pagi!");
}, 3000);

setTimeout(() => {
  console.log("Halo, selamat siang!");
}, 4000);

setTimeout(() => {
  console.log("Halo, selamat malam!");
}, 5000);




