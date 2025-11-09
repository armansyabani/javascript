// Program interaktif sederhana - Belajar Alur Kontrol JS 💫
alert("Selamat datang di Program Interaktif JavaScript 🎉");

let lanjut = true;

while (lanjut) {
  let menu = prompt(
    "Pilih menu:\n" +
    "1️⃣  Cek kategori usia\n" +
    "2️⃣  Cetak angka 1–10\n" +
    "3️⃣  Tampilkan nama hari\n" +
    "4️⃣  Keluar"
  );

  switch (menu) {
    case "1":
      // 🧒 Cek kategori usia
      let usia = prompt("Masukkan usia kamu:");
      usia = Number(usia);

      if (usia < 0) {
        console.log("Usia tidak valid ❌");
      } else if (usia < 13) {
        console.log(`Usiamu ${usia} tahun → Kategori: Anak-anak 👶`);
      } else if (usia < 18) {
        console.log(`Usiamu ${usia} tahun → Kategori: Remaja 🧒`);
      } else if (usia < 60) {
        console.log(`Usiamu ${usia} tahun → Kategori: Dewasa 🧑`);
      } else {
        console.log(`Usiamu ${usia} tahun → Kategori: Lansia 👴`);
      }
      break;

    case "2":
      // 🔢 Cetak angka 1–10
      console.log("Menampilkan angka 1 sampai 10:");
      for (let i = 1; i <= 10; i++) {
        console.log(`👉 ${i}`);
      }
      break;

    case "3":
      // 📅 Tampilkan nama hari
      let angkaHari = prompt("Masukkan angka hari (1–7):");
      angkaHari = Number(angkaHari);

      let namaHari = "";
      switch (angkaHari) {
        case 1:
          namaHari = "Senin";
          break;
        case 2:
          namaHari = "Selasa";
          break;
        case 3:
          namaHari = "Rabu";
          break;
        case 4:
          namaHari = "Kamis";
          break;
        case 5:
          namaHari = "Jumat";
          break;
        case 6:
          namaHari = "Sabtu";
          break;
        case 7:
          namaHari = "Minggu";
          break;
        default:
          namaHari = "Angka tidak valid ❌";
      }

      console.log(`Hari ke-${angkaHari}: ${namaHari}`);
      break;

    case "4":
      alert("Terima kasih sudah menggunakan program ini! 👋");
      lanjut = false;
      break;

    default:
      alert("Pilihan tidak valid, coba lagi ⚠️");
  }
}
