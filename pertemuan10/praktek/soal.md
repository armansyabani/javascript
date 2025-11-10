# 🧩 LEVEL 1 — EASY (Dasar Konsep, 1–7)

## Latihan memahami bentuk dan cara kerja dasar destructuring & spread/rest operator.

# Array Destructuring Dasar
Buat array colors = ["red", "green", "blue"].
Destructuring nilai pertama dan kedua ke variabel firstColor dan secondColor.

# Object Destructuring Dasar
Buat object user = { name: "Arman", age: 20 }.
Ambil property name dan age menggunakan destructuring.

# Skip Nilai pada Array
Dari array fruits = ["apple", "banana", "cherry", "mango"],
destructuring hanya elemen pertama dan terakhir saja.

# Default Value pada Destructuring
Dari const [x, y = 10] = [5];
Jelaskan hasil dari console.log(x, y) dan kenapa.

# 🧩 Studi Kasus JavaScript: Destructuring & Spread / Rest Operator

> “Pahami cara memecah dan menyatukan data — karena di situlah kekuatan JavaScript modern.”

---

## 🌱 LEVEL EASY (Dasar)
> Fokus: memahami bentuk dasar destructuring dan penggunaan spread/rest di variabel.

### 1️⃣ Soal 1 — Destructuring Array Sederhana
Terdapat array:
```js
const buah = ["apel", "mangga", "pisang"];
Buatlah destructuring agar variabel a, b, dan c berisi masing-masing nama buah di atas.

2️⃣ Soal 2 — Skip Nilai
Dari array:

js
Salin kode
const warna = ["merah", "biru", "kuning", "hijau"];
Ambil hanya warna pertama dan ketiga menggunakan destructuring (lewati nilai kedua).

3️⃣ Soal 3 — Default Value
Gunakan destructuring agar ketika data berikut:

js
Salin kode
const siswa = ["Rina"];
variabel nama berisi "Rina" dan kelas otomatis "Belum diatur" jika tidak ada di array.

4️⃣ Soal 4 — Destructuring Object
Dari object:

js
Salin kode
const user = { name: "Dimas", umur: 17 };
Gunakan destructuring agar variabel name dan umur bisa langsung digunakan.

5️⃣ Soal 5 — Ganti Nama Variabel
Gunakan destructuring object dengan nama variabel berbeda.

js
Salin kode
const laptop = { merk: "Asus", harga: 7000000 };
Hasilkan variabel brand dan price dari object di atas.

⚙️ LEVEL MEDIUM (Pemahaman Lebih Dalam)
Fokus: penggunaan pada function, rest parameter, dan spread operator.

6️⃣ Soal 6 — Destructuring di Function Parameter
Buat function:

js
Salin kode
function tampilData(/* ... */) { }
yang menerima object {nama, umur} dan menampilkan kalimat
"Halo [nama], umur kamu [umur] tahun."

Gunakan destructuring di parameter function.

7️⃣ Soal 7 — Rest Operator pada Array
Dari array:

js
Salin kode
const angka = [1, 2, 3, 4, 5];
Gunakan destructuring agar pertama berisi 1, kedua berisi 2, dan sisa berisi array sisanya.

8️⃣ Soal 8 — Spread Operator untuk Menggabungkan Array
Gabungkan dua array berikut menjadi satu:

js
Salin kode
const a = ["air", "api"];
const b = ["tanah", "angin"];
Hasilkan array baru bernama unsur.

9️⃣ Soal 9 — Spread Operator pada Object
Dari dua object:

js
Salin kode
const data1 = { nama: "Riko" };
const data2 = { umur: 16 };
Gunakan spread operator untuk menggabungkan keduanya menjadi satu object baru bernama profil.

🔟 Soal 10 — Default dan Rest Bersamaan
Buat function yang menerima destructuring seperti:

js
Salin kode
function biodata({ nama = "Anonim", umur = 0, ...lainnya }) { }
Tampilkan nama, umur, dan isi lainnya (gunakan console.log).

1️⃣1️⃣ Soal 11 — Destructuring Nested (Bersarang)
Dari object:

js
Salin kode
const data = {
  user: {
    nama: "Lina",
    alamat: { kota: "Bandung", kode: 40123 }
  }
};
Gunakan destructuring untuk mengambil langsung nama dan kota.

1️⃣2️⃣ Soal 12 — Rest di Function Parameter
Buat function jumlah(...angka) yang menjumlahkan semua angka yang dikirim:

js
Salin kode
jumlah(1, 2, 3, 4, 5); // output: 15
🔥 LEVEL HARD (Logika & Kombinasi)
Fokus: kombinasi destructuring, spread/rest, dan manipulasi data.
✨ Kisi-kisi tersedia di bawah tiap soal.

1️⃣3️⃣ Soal 13 — Gabungkan dan Pisahkan Data
Terdapat dua array siswa:

js
Salin kode
const kelasA = ["Ari", "Bima", "Citra"];
const kelasB = ["Dewi", "Eka"];
Gabungkan keduanya menjadi semuaSiswa, lalu gunakan destructuring untuk mengambil 2 siswa pertama, sisanya masukkan ke variabel lainnya.

🧩 Kisi-kisi: Gunakan spread untuk gabung, rest untuk pisah.

1️⃣4️⃣ Soal 14 — Destructuring pada Return Function
Buat function getUser() yang mengembalikan object:

js
Salin kode
{ name: "Lili", umur: 19, jurusan: "RPL" }
Lalu lakukan destructuring langsung saat pemanggilan function.

🧩 Kisi-kisi: Destructuring bisa dilakukan dari hasil return function.

1️⃣5️⃣ Soal 15 — Spread untuk Clone dan Ubah
Clone object berikut agar tidak mengubah aslinya:

js
Salin kode
const siswa = { nama: "Agus", nilai: 80 };
Buat siswaBaru dari siswa namun dengan nilai diubah menjadi 90.

🧩 Kisi-kisi: Gunakan spread dan timpa property terakhir.

1️⃣6️⃣ Soal 16 — Destructuring di Loop
Dari array object:

js
Salin kode
const data = [
  { nama: "Andi", nilai: 90 },
  { nama: "Budi", nilai: 85 }
];
Gunakan loop for...of dan destructuring untuk menampilkan setiap nama dan nilai.

🧩 Kisi-kisi: Destructuring bisa langsung di dalam tanda kurung for.

1️⃣7️⃣ Soal 17 — Spread Operator pada Function
Buat function tambah(a, b, c) dan panggil menggunakan array:

js
Salin kode
const arr = [2, 4, 6];
Gunakan spread operator saat pemanggilan function.

🧩 Kisi-kisi: Gunakan tambah(...arr).

1️⃣8️⃣ Soal 18 — Gabung Object dengan Property Bertingkat
js
Salin kode
const info = { nama: "Sinta", hobi: { utama: "menulis" } };
const update = { umur: 20, hobi: { sampingan: "melukis" } };
Gabungkan kedua object agar hasil akhirnya tetap memiliki kedua hobi tanpa menghapus yang lama.

🧩 Kisi-kisi: Spread tidak cukup satu lapis — perlu gabungan manual di hobi.

1️⃣9️⃣ Soal 19 — Kombinasi Rest & Destructuring Object
Dari object:

js
Salin kode
const siswa = { nama: "Tono", kelas: "XII", nilai: 88, umur: 17 };
Ambil nama dan kelas dengan destructuring, lalu simpan sisanya ke variabel detail.

🧩 Kisi-kisi: Gunakan { nama, kelas, ...detail }.

2️⃣0️⃣ Soal 20 — Challenge Akhir 🔥
Dari data:

js
Salin kode
const peserta = [
  { nama: "Lina", nilai: 85 },
  { nama: "Rudi", nilai: 95 },
  { nama: "Eka", nilai: 78 }
];
Gunakan kombinasi destructuring + spread + rest untuk:

Menyalin seluruh data ke array baru (agar data asli tak berubah),

Mengambil peserta dengan nilai tertinggi,

Simpan sisanya ke variabel lainnya.

🧩 Kisi-kisi: Gunakan spread untuk clone, sort untuk urutkan, dan rest untuk pisahkan satu teratas dari sisanya.

🎯 Tujuan Akhir:

Setelah menyelesaikan semua soal ini, kamu akan mampu memecah, menyalin, dan menggabungkan data kompleks dengan Destructuring & Spread/Rest Operator secara efektif!

yaml
Salin kode

---

Apakah kamu mau saya buatkan juga **versi jawaban & pembahasan** dari semua soal ini (bi