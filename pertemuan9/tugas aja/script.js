// ============================================
// LEVEL 1 ARRAY & OPERASI DASAR
// ============================================

// Data awal
const daftarSantri = ["Rafi", "Luqman", "Zain", "Hafidz", "Iqbal", "Aldi", "Rizky", "Taufik", "Bagas", "Satria"]

// Tambah 3 santri terlambat
daftarSantri.push("Dimas", "Fauzan", "Rehan")

// Hapus 1 santri yang izin
daftarSantri.pop()

// Tambah ke awal daftar
daftarSantri.unshift("Abdullah")

// Hapus santri di indeks ke-2
daftarSantri.splice(2, 1)

// Tampilkan total santri
console.log("Daftar Santri:", daftarSantri)
console.log("Total Santri:", daftarSantri.length)


// ============================================
// LEVEL 2 — ARRAY METHOD
// ============================================

const nilaiKelas = [85, 92, 76, 90, 100, 67, 88]

// forEach — tampilkan semua nilai
nilaiKelas.forEach((nilai, i) => {
  console.log(`Nilai ke-${i + 1}: ${nilai}`)
})

// map — tambah bonus nilai
const nilaiBonus = nilaiKelas.map(nilai => nilai + 5)
console.log("Nilai + Bonus:", nilaiBonus)

// filter — ambil yang nilainya >= 90
const nilaiTinggi = nilaiBonus.filter(nilai => nilai >= 90)
console.log("Nilai >= 90:", nilaiTinggi)

// reduce — hitung rata-rata
const rataNilai = nilaiKelas.reduce((a, b) => a + b, 0) / nilaiKelas.length
console.log("Rata-rata nilai:", rataNilai.toFixed(2))

// find — cari nilai sempurna
const nilaiSempurna = nilaiKelas.find(n => n === 100)
console.log("Nilai sempurna:", nilaiSempurna)


// ============================================
// STUDY CASE MEDIUM — SISTEM NILAI KELAS
// ============================================

const nilaiSantri = [85, 92, 76, 90, 100, 67, 88]

console.log("Nilai awal:", nilaiSantri)

const tambahBonus = nilaiSantri.map(n => n + 5)
console.log("Nilai + Bonus:", tambahBonus)

const santriLulus = tambahBonus.filter(n => n >= 85)
console.log("Santri Lulus:", santriLulus)

const rataRata = tambahBonus.reduce((a, b) => a + b, 0) / tambahBonus.length
console.log("Rata-rata:", rataRata.toFixed(2))


// ============================================
// LEVEL 3 — OBJECT & MANIPULASI PROPERTI
// ============================================

const dataSantri = {
  nama: "Rafi Hidayat",
  usia: 19,
  program: "Fullstack Development",
  nilai: 92,
  aktif: true
}

// Tambah properti baru
dataSantri.penerbit = "Pesantren Digital"

// Ubah nilai
dataSantri.nilai = 95

// Hapus properti
delete dataSantri.usia

console.log("Data Santri:", dataSantri)


// ============================================
// STUDY CASE — ARRAY OF OBJECT
// ============================================

const listSantri = [
  { nama: "Rafi", nilai: 90, aktif: true },
  { nama: "Luqman", nilai: 75, aktif: true },
  { nama: "Fauzi", nilai: 60, aktif: false },
  { nama: "Zain", nilai: 95, aktif: true }
]

// Tampilkan santri aktif
const aktif = listSantri.filter(s => s.aktif)
console.log("Santri Aktif:", aktif)

// Tambah bonus 5 poin untuk yang aktif
const bonusAktif = aktif.map(s => ({ ...s, nilai: s.nilai + 5 }))
console.log("Bonus Nilai Aktif:", bonusAktif)

// Hitung rata-rata nilai aktif
const rataAktif = bonusAktif.reduce((sum, s) => sum + s.nilai, 0) / bonusAktif.length
console.log("Rata-rata nilai aktif:", rataAktif.toFixed(2))


// ============================================
// STUDY CASE — ANALISIS SANTRI TERBAIK
// ============================================

const analisisSantri = [
  { nama: "Rafi", nilai: 90, aktif: true },
  { nama: "Luqman", nilai: 75, aktif: true },
  { nama: "Fauzi", nilai: 60, aktif: false },
  { nama: "Zain", nilai: 95, aktif: true }
]

// Nilai tertinggi
const tertinggi = analisisSantri.reduce((max, s) => s.nilai > max.nilai ? s : max)
console.log("Santri Nilai Tertinggi:", tertinggi)

// Nilai terendah
const terendah = analisisSantri.reduce((min, s) => s.nilai < min.nilai ? s : min)
console.log("Santri Nilai Terendah:", terendah)

// Jumlah santri aktif
const jumlahAktif = analisisSantri.filter(s => s.aktif).length
console.log("Jumlah Santri Aktif:", jumlahAktif)

// Daftar santri lulus
const lulus = analisisSantri.filter(s => s.nilai >= 85).map(s => s.nama)
console.log("Santri Lulus:", lulus)


// ============================================
// STUDY CASE — LEADERBOARD SANTRI TERBAIK
// ============================================

const leaderboardSantri = [
  { nama: "Rafi", program: "Fullstack", nilai: 97, aktif: true },
  { nama: "Zain", program: "Frontend", nilai: 95, aktif: true },
  { nama: "Rayhan", program: "Backend", nilai: 91, aktif: true },
  { nama: "Bagas", program: "UI/UX", nilai: 85, aktif: false },
  { nama: "Taufik", program: "Fullstack", nilai: 83, aktif: true },
  { nama: "Rizky", program: "Frontend", nilai: 80, aktif: false },
  { nama: "Luqman", program: "Backend", nilai: 94, aktif: true },
  { nama: "Dimas", program: "Mobile", nilai: 78, aktif: true },
  { nama: "Iqbal", program: "Fullstack", nilai: 89, aktif: true },
  { nama: "Fauzan", program: "Backend", nilai: 73, aktif: false },
  { nama: "Satria", program: "Frontend", nilai: 82, aktif: true },
  { nama: "Hafidz", program: "UI/UX", nilai: 88, aktif: true },
  { nama: "Aldi", program: "Fullstack", nilai: 96, aktif: true },
  { nama: "Tegar", program: "Mobile", nilai: 90, aktif: false },
  { nama: "Andi", program: "Fullstack", nilai: 84, aktif: true },
  { nama: "Fadhil", program: "Backend", nilai: 87, aktif: true },
  { nama: "Rehan", program: "Frontend", nilai: 86, aktif: true },
  { nama: "Fajar", program: "Backend", nilai: 93, aktif: true },
  { nama: "Wahyu", program: "UI/UX", nilai: 92, aktif: true },
  { nama: "Bima", program: "Fullstack", nilai: 79, aktif: true }
]

// Urutkan dari nilai tertinggi ke terendah
const urutNilai = [...leaderboardSantri].sort((a, b) => b.nilai - a.nilai)

// Ambil 5 santri terbaik
const top5 = urutNilai.slice(0, 5)

// Tampilkan hasil
top5.map((s, i) => console.log(`#${i + 1} ${s.nama} — ${s.program} — ${s.nilai} poin`))

// Hitung rata-rata 5 besar
const rataTop5 = top5.reduce((sum, s) => sum + s.nilai, 0) / top5.length
console.log("Rata-rata 5 besar:", rataTop5.toFixed(2))


// ============================================
// MINI PROJECT AKHIR — DASHBOARD SANTRI PINTAR
// ============================================

const santriPintar = [
  { nama: "Rafi", nilai: 95, program: "Tahfidz", aktif: true, kehadiran: 10 },
  { nama: "Luqman", nilai: 88, program: "Tafsir", aktif: true, kehadiran: 9 },
  { nama: "Fauzan", nilai: 92, program: "Fiqih", aktif: true, kehadiran: 10 },
  { nama: "Zain", nilai: 85, program: "Hadits", aktif: true, kehadiran: 8 },
  { nama: "Bagas", nilai: 70, program: "Bahasa Arab", aktif: false, kehadiran: 6 },
  { nama: "Taufik", nilai: 98, program: "Tafsir", aktif: true, kehadiran: 10 },
  { nama: "Iqbal", nilai: 80, program: "Fiqih", aktif: true, kehadiran: 9 },
  { nama: "Rizky", nilai: 76, program: "Aqidah", aktif: false, kehadiran: 7 },
  { nama: "Hafidz", nilai: 90, program: "Hadits", aktif: true, kehadiran: 10 },
  { nama: "Rehan", nilai: 83, program: "Tafsir", aktif: true, kehadiran: 8 }
]

// 1. Daftar santri lulus
const lulusSantri = santriPintar.filter(s => s.nilai >= 80)

// 2. Rata-rata nilai seluruh santri
const rataKeseluruhan = santriPintar.reduce((sum, s) => sum + s.nilai, 0) / santriPintar.length

// 3. Santri dengan kehadiran tertinggi
const hadirTertinggi = santriPintar.reduce((max, s) => s.kehadiran > max.kehadiran ? s : max)

// 4. Jumlah santri aktif
const totalAktif = santriPintar.filter(s => s.aktif).length

// 5. Leaderboard 3 besar
const urutLeaderboard = [...santriPintar].sort((a, b) => b.nilai - a.nilai)
const top3 = urutLeaderboard.slice(0, 3)

// Tambah properti rank
const denganRank = urutLeaderboard.map((s, i) => ({ ...s, rank: i + 1 }))

// Pengurutan dinamis
function urutkan(by = "nilai") {
  const hasil = [...santriPintar]
  hasil.sort((a, b) => {
    if (by === "nama") return a.nama.localeCompare(b.nama)
    return b[by] - a[by]
  })
  return hasil
}

// OUTPUT
console.log("RANKING SANTRI PINTAR")
top3.forEach((s, i) => {
  console.log(`${i + 1}. ${s.nama} — ${s.nilai} poin — Hadir ${s.kehadiran}/10`)
})

console.log("Rata-rata nilai:", rataKeseluruhan.toFixed(2))
console.log("Total Santri Aktif:", totalAktif)

console.log("Leaderboard")
denganRank.forEach((s, i) => {
  console.log(`${i + 1}. ${s.nama} — ${s.nilai} poin — Hadir ${s.kehadiran}/10`)
})