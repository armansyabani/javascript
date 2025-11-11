//==============Latihan Mandiri======================
//Buat array data siswa berisi nama, nilai, dan jurusan. Filter hanya siswa dari jurusan "IPA".

const siswa = [
        { nama: "Arman", nilai: 85, jurusan: "IPA" },
        { nama: "Fahmi", nilai: 65, jurusan: "IPA" },
        { nama: "Davi", nilai: 90, jurusan: "IPA" },
        { nama: "Farhan", nilai: 55, jurusan: "IPA" },
        { nama: "Virman", nilai: 75, jurusan: "IPA" },
    ];
    
    const siswaIpa = siswa.filter((siswa) => {
        return siswa.jurusan === "IPA";
    });
    
    console.log(siswaIpa);


   // Ambil nilai siswa yang lebih dari 80.

   const tulab = [
        { nama: "Arman", nilai: 85, jurusan: "IPA" },
        { nama: "Fahmi", nilai: 65, jurusan: "IPA" },
        { nama: "Davi", nilai: 90, jurusan: "IPA" },
        { nama: "Farhan", nilai: 55, jurusan: "IPA" },
        { nama: "Virman", nilai: 75, jurusan: "IPA" },
    ];
    
    const siswaLebihDari80 = tulab.filter((tulab) => {
        return tulab.nilai > 80;
    });
    
    console.log(siswaLebihDari80);

    //Hitung rata-rata nilai seluruh siswa.

    const rataRataNilai = tulab.reduce((a, b) => a + b.nilai, 0) / tulab.length;

    console.log(rataRataNilai);

//======================================
    //Evaluasi Harian (Studi Kasus)
//======================================
//Buat data array `transaksi` yang berisi objek dengan `namaBarang`, `jumlah`, dan `hargaSatuan`. Tampilkan:

const transaksi = [
    { namaBarang: "jaket", jumlah: 2, hargaSatuan: 120000 },
    { namaBarang: "jubah", jumlah: 2, hargaSatuan: 80000 },
    { namaBarang: "peci", jumlah: 1, hargaSatuan: 50000 },
     { namaBarang: "topi", jumlah: 1, hargaSatuan: 150000 }
];

const totalHarga = transaksi.reduce((a, b) => a + b.jumlah * b.hargaSatuan, 0);
console.log(totalHarga);

const rataRataHarga = transaksi.reduce((a, b) => a + b.jumlah * b.hargaSatuan, 0) / transaksi.length;
console.log(rataRataHarga);

//Array baru yang berisi hanya nama barang dan total belanja
const barang = transaksi.map((transaksi) => {
    
    return {
        namaBarang: transaksi.namaBarang,
        totalBelanja: transaksi.jumlah * transaksi.hargaSatuan
    }
})
console.log(barang);