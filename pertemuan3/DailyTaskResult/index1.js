let skor = prompt("Masukkan nilai kamu (0–100):");
skor = Number(skor);

if (skor >= 90) {
  console.log("Nilai kamu: A");
} else if (skor >= 80) {
  console.log("Nilai kamu: B");
} else if (skor >= 70) {
  console.log("Nilai kamu: C");
} else if (skor >= 60) {
  console.log("Nilai kamu: D");
} else {
  console.log("Nilai kamu: E (Perlu belajar lagi)");
}


let menu = prompt("Pilih menu:\n1. Nasi Goreng\n2. Mie Goreng\n3. Sate Ayam");

switch (menu) {
  case "1":
    console.log("Kamu memilih Nasi Goreng 🍚");
    break;
  case "2":
    console.log("Kamu memilih Mie Goreng 🍜");
    break;
  case "3":
    console.log("Kamu memilih Sate Ayam 🍢");
    break;
  default:
    console.log("Pilihan tidak tersedia 😅");
}

for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}


let hitung = 1;
while (hitung <= 5) {
  console.log("Hitung ke-" + hitung);
  hitung++;
}


let angka = 1;
do {
  console.log("Angka saat ini: " + angka);
  angka++;
} while (angka <= 5);
