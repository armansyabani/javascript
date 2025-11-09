

// EXAMPLE OF >>>>>>> IF STATEMENTS


function login(){

    let email = prompt("Masukan Email")
    let pw = prompt("Masukan Password")

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi")
        console.log("Login Gagal")
    } else if (email == "armansyabni@gmail.com" && pw == "allahswt1") {
        console.log("Login Berhasil")
    } else {
        alert("Email Atau Password anda salah")
        console.log("Login Gagal")
    }
}

function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}

//EXAMPLE OF SWITCH 

function listMenu() {
    
    if( confirm("Anda mau makan ?")) {
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000')

        switch (menu) {
            case "1":
                console.log("Anda Pilih Mie Ayam : Rp15.000");
                break;
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000");
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000");
                break;
            default:
                console.log("Menu Tidak Tersedia");
                break;
        }
    }
}

function pilihistri(){
    let pilihan = prompt("Pilih Istri : \n 1. devinacaramoy \n 2. celsi \n 3. yaliyali");
    switch(pilihan){
        case "1":
            console.log("Kamu Memilih Devinacaramoy");
            break;
        case "2":
            console.log("Kamu Memilih Celsi");
            break;
        case "3":
            console.log("Kamu Memilih Yaliyali");
            break;
            default:
                console.log("Pilihan Tidak Tersedia");
                break;
    }
}

function jamberangkatbudiman(){
    let pilihan = prompt("silahkan pilih jadual pemberangkatan bandung-wonosobo : \n 1. jam 04.00 dengan harga : Rp135.000 \n 2. jam 10.00 dengan harga : Rp140.000 \n 3. jam 15.00 dengan harga : Rp150.000 \n 4. jam 20.00 dengan harga : Rp145.000");
    switch(pilihan){
        case "1":
            console.log("kamu milih jam 04.00 :Rp135.000");
            break;
        case "2":
            console.log("kamu milih jam 10.00 :Rp140.000");
            break;
        case "3":
            console.log("kamu milih jam 15.00 :Rp150.000");
            break;
        case "4":
            console.log("kamu milih jam 20.00 :Rp145.000");
            break;
        default:
            console.log("Jam Tidak Valid");
            break;
           
    }
}

function jadwalimam(){
    let pilihan = prompt("silahkan pilih jadual imam di masjid pemuda peradaban : \n 1. ustadz Arman sya'bani \n 2. ustadz agus  \n 3. ustadz asep \n 4.ustadz yanto");
    switch(pilihan){
        case "1":
            console.log("kamu milih ustadz Arman sebagai imam");
            break;
        case "2":
            console.log("kamu milih ustadz agus sebagai imam");
            break;
        case "3":
            console.log("kamu milih ustadz asep sebagai imam");
            break;
        case "4":
            console.log("kamu milih ustadz yanto sebagai imam");
            break;
        default:
            console.log("Pilihan Tidak Valid");
            break;
    }
}

function jadwalolahraga(){
let pilihan = prompt("silahkan pilih jenis olahraga yang anda sukai : \n 1. joging \n 2. bersepeda  \n 3. push-up \n 4.berenang");
    switch(pilihan){
        case "1":
            console.log("kamu milih joging");
            break;
        case "2":
            console.log("kamu milih bersepeda");
            break;
        case "3":
            console.log("kamu milih push-up");
            break;
        case "4":
            console.log("kamu milih berenang");
            break;
        default:
            console.log("Pilihan Tidak Valid");
            break;
    }

}
    
// Fungsi pengingat waktu sholat (simulasi)
// Fungsi pengingat waktu sholat (simulasi)
function pengingatwaktusholat() {
  const waktu = {
    "Subuh": "04:35 🕌",
    "Dzuhur": "11:45 🌞",
    "Ashar": "15:10 🌤️",
    "Maghrib": "17:58 🌆",
    "Isya": "19:10 🌙"
  };

  let pilihan = prompt(
    "Pilih waktu sholat yang ingin diingatkan:\n1. Subuh\n2. Dzuhur\n3. Ashar\n4. Maghrib\n5. Isya"
  );

  switch (pilihan) {
    case "1":
      console.log(`Pengingat Waktu Sholat Subuh: ${waktu.Subuh}`);
      break;
    case "2":
      console.log(`Pengingat Waktu Sholat Dzuhur: ${waktu.Dzuhur}`);
      break;
    case "3":
      console.log(`Pengingat Waktu Sholat Ashar: ${waktu.Ashar}`);
      break;
    case "4":
      console.log(`Pengingat Waktu Sholat Maghrib: ${waktu.Maghrib}`);
      break;
    case "5":
      console.log(`Pengingat Waktu Sholat Isya: ${waktu.Isya}`);
      break;
    default:
      console.log("Pilihan tidak valid.");
  }
}
