

// 1) Sintaks & Operator
function hitungTotal(harga, qty, pajakPct, diskonPct) {
  let subtotal = harga * qty;
  let setelahDiskon = subtotal - (subtotal * diskonPct / 100);
  let total = setelahDiskon + (setelahDiskon * pajakPct / 100);
  return Math.round(total);
}



// 2) If/Else – Grading
function gradeIfElse(nilai) {
  if (nilai >= 90) return "A";
  else if (nilai >= 80) return "B";
  else if (nilai >= 70) return "C";
  else if (nilai >= 60) return "D";
  else return "E";
}


// 3) Switch – Kategori User
function kategoriSwitch(kode) {
  switch (kode) {
    case "S": return "Santri";
    case "M": return "Mentor";
    case "A": return "Admin";
    default: return "Tamu";
  }
}


// 4) For – Jumlah Bilangan Genap
function jumlahGenap(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) total += arr[i];
  }
  return total;
}


// 5) For – Akumulasi Sampai Batas
function akumulasiSampai(batas) {
  let total = 0;
  for (let i = 1; i <= batas; i++) {
    if (total + i > batas) break;
    total += i;
  }
  return total; 
}


// 6) Fungsi – Deklaratif & Ekspresi
function luasPersegiPanjang(p, l) {
  return p * l;
}
const luasPersegi = function (s) {
  return s * s;
};


// 7) Array Dasar — Immutable
function kelolaAntrian(list, aksi) {
  let baru = [...list];
  switch (aksi.type) {
    case "push": return [...baru, aksi.payload];
    case "pop": return baru.slice(0, -1);
    case "shift": return baru.slice(1);
    case "unshift": return [aksi.payload, ...baru];
    case "insert":
      return [...baru.slice(0, aksi.index), aksi.payload, ...baru.slice(aksi.index)];
    case "remove":
      return baru.filter((_, i) => i !== aksi.index);
    default: return baru;
  }
}


// 8) Map – Kurva Nilai
function kurvaNilai(santri, tambah) {
  return santri.map(s => ({
    nama: s.nama,
    nilaiBaru: s.nilai + tambah
  }));
}


// 9) Filter + Find
function seleksiDanCari(arr, batas, namaDicari) {
  const lulus = arr.filter(a => a.nilai >= batas);
  const temuan = arr.find(a => a.nama === namaDicari) || null;
  return { lulus, temuan };
}


// 10) Reduce + Rest
function analitikNilai(...nilai) {
  if (nilai.length === 0) return { total: 0, rata: 0 };
  const total = nilai.reduce((a, b) => a + b, 0);
  const rata = total / nilai.length;
  return { total, rata };
}


// 11) Object – Akses Dinamis (Immutable)
function setGetDynamic(obj, key, value) {
  const objBaru = { ...obj, [key]: value };
  return { value: objBaru[key], obj: objBaru };
}


// 12) Destructuring (Nested)
function ambilDataSantri(s) {
  const { nama, profil: { usia, kontak: { telp } } } = s;
  return `${nama} (${usia}) - ${telp}`;
}


// 13) Spread & Rest
function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {
  const profilGabung = { ...admin, ...asrama };
  const totalTambahan = nilaiTambahan.reduce((a, b) => a + b, 0);
  return { profilGabung, totalTambahan };
}


// 14) Integrasi Ringkas – Laporan Program
function laporanProgram(pondok) {
  let hasil = `=== ${pondok.nama.toUpperCase()} ===\n`;
  for (const prog of pondok.program) {
    hasil += `- Program: ${prog.nama}\n`;
    hasil += `  Mentor: ${prog.mentor.nama} (${prog.mentor.email})\n`;
    hasil += `  Modul:\n`;
    for (const mod of prog.modul) {
      hasil += `    - ${mod.judul}\n`;
      if (mod.submodul) {
        for (const sub of mod.submodul) {
          hasil += `      - ${sub.judul}\n`;
        }
      }
    }
    hasil += `  Santri:\n`;
    let dataSantri = prog.santri.map(s => {
      const rata = s.nilai.reduce((a, b) => a + b, 0) / s.nilai.length;
      const hadirPct = (s.kehadiran.filter(h => h).length / s.kehadiran.length) * 100;
      const statusNilai = rata >= 75 ? "Lulus" : "Tidak Lulus";
      const statusHadir = hadirPct >= 75 ? "Rajin" : "Kurang Rajin";
      return { nama: s.nama, rata, hadirPct, statusNilai, statusHadir };
    });


    for (const d of dataSantri) {
      hasil += `    - ${d.nama} — Nilai: ${d.rata.toFixed(1)} | Hadir: ${d.hadirPct.toFixed(0)}% | Status: ${d.statusNilai} & ${d.statusHadir}\n`;
    }
  }
  return hasil.trim();
}


// Contoh uji coba kecil
console.log(laporanProgram({
  nama: "Pondok Digital Nusantara",
  program: [{
    nama: "Front-End Mastery",
    mentor: { nama: "Mas Rizal", email: "rizal@pondok.id" },
    modul: [
      { judul: "Array & Method", submodul: [{ judul: "map" }, { judul: "filter" }] }
    ],
    santri: [
      { nama: "Arfan", nilai: [80, 90, 85], kehadiran: [true, true, false, true] },
      { nama: "Dewi", nilai: [95, 100, 90], kehadiran: [true, true, true, true] }
    ]
  }]
}));
