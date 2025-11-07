let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let hasilMap = angka.map((v) => v * 5);
console.log(hasilMap);

let hasilFilter = angka.filter((v) => v % 2 == 0);
console.log(hasilFilter);

let hasilReduce = angka.reduce((a, b) => a + b);
console.log(hasilReduce);

let hasilfind = angka.find((v) => v == 5);
console.log(hasilfind);





// ========================================
//  EVALUASI HARIAN - STUDI KASUS NILAI SISWA
// ========================================

//  Data siswa (array of objects)
const siswa = [
  { nama: "Arman", nilai: 85 },
  { nama: "Fahmi", nilai: 65 },
  { nama: "Davi", nilai: 90 },
  { nama: "Farhan", nilai: 55 },
  { nama: "Virman", nilai: 75 }
];

// Gunakan map untuk menambah status lulus / tidak lulus
const hasil = siswa.map((item) => {
  return {
    nama: item.nama,
    nilai: item.nilai,
    status: item.nilai >= 70 ? "Lulus ✅" : "Tidak Lulus ❌"
  };
});

// Hitung rata-rata nilai dengan reduce
const totalNilai = siswa.reduce((acc, curr) => acc + curr.nilai, 0);
const rataRata = totalNilai / siswa.length;

//  Tampilkan hasil ke console
console.log("=== HASIL EVALUASI HARIAN ===");
hasil.forEach((s) => {
  console.log(`${s.nama} - Nilai: ${s.nilai} - ${s.status}`);
});

console.log("----------------------------");
console.log(`Rata-rata kelas: ${rataRata}`);
