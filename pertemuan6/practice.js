
//Practice
//Tugas 2: => "Terkadang paham ajh belom mencukupi, jadi coba dari apa yang kamu pahami sejauh ini tolong berikan contoh contoh implementasinya semua itu dengan code code yang bisa anda tuliskan tanpa ada yang tertinggal sedikitpun skill yang sudah anda kuasai sejauh ini"

//📌 Code/Fitur/Fungsi/Program/Sistem yang persis mirip semisal sudah pernah di gunakan dalam sesi kelas tidak di anggap sebagai orisinil maka nilai akan mempengaruhi
// yang saya sudah pelajari


let produk1 = "Sabun Muka";
let produk2 = "Sampo";
let harga1 = 8000;
let harga2 = 4000;

let totalHarga = harga1 + harga2;


let e = 20;
let f = 25;
console.log ( (a < b) && (e < f) ) //and
console.log ( (a < b) || (e < f) ) //or
console.log ( !(a < b) ) //not


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


// LOOPING
function f3(data) {
    for (start = 0; start < data.length; start++) {
        if (start % 2 != 0) {
            console.log(`${start + 1} Genap >>> ${data[start]}`);
            // console.log((start + 1) + " Genap >>>" + data[start]);
        } else {
            console.log(`${start + 1} Ganjil >>> ${data[start]}`);
        }
    }
}

function f4() {
  // Interaktif: tanya role yang dimainkan
  let role = prompt("Role apa yang biasa kamu main di ML? (contoh: tank, marksman, mage, assassin, support, fighter)");

  if (!role) {
    document.getElementById("output").innerText =
      "F4: Kamu belum jawab nih  Tapi nggak apa-apa, mungkin kamu tipe observer yang suka nonton gameplay aja.";
    return;
  }

  role = role.toLowerCase();
  let pesan = "";

  switch(role) {
    case "tank":
      pesan = "Wah! Kamu tipe pelindung sejati , selalu ada di garis depan untuk melindungi teman. Respect!";
      break;
    case "marksman":
      pesan = "Marksman ya? Berarti kamu jago jaga jarak dan punya aim yang tajam banget!";
      break;
    case "mage":
      pesan = "Mage! Pengendali sihir dan damage besar. Kamu pasti suka hero kayak harley atau Xavier ya?";
      break;
    case "assassin":
      pesan = "Assassin  — wkwkwk bagus.. tapi tanggung jawab besar apalagi kalo kalah lord jadi masalah besar tuh.";
      break;
    case "support":
      pesan = "Support!  Kamu tipe yang peduli dan bantu tim yang kesusahan. Hebat banget!";
      break;
    case "fighter":
      pesan = "Fighter  — Mantap kawan berarti maku adalah premean EXP lane !";
      break;
    default:
      pesan = `Role '${role}' unik juga! Kamu pasti punya gaya main sendiri yang nggak biasa `;
  }

  document.getElementById("output").innerText =
    `F4: ${pesan} Terus semangat mainnya dan jangan lupa sholat dan istirahat ya! `;
}

