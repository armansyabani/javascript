// modules/api.js
const BASE_URL = "https://api.myquran.com/v2/";

export async function searchCity(keyword) {
  const url = `${BASE_URL}sholat/kota/cari/${keyword}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal mencari kota");
  return res.json();
}

export async function getCityById(id) {
  const url = `${BASE_URL}sholat/kota/id/${id}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal mengambil kota");
  return res.json();
}

export async function getDailySchedule(cityId, dateString) {
  const url = `${BASE_URL}sholat/jadwal/${cityId}/${dateString}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal mengambil jadwal harian");
  return res.json();
}

export async function getMonthlySchedule(cityId, year, month) {
  const url = `${BASE_URL}sholat/jadwal/${cityId}/${year}/${month}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal mengambil jadwal bulanan");
  return res.json();
}

// INSPIRASI API
export async function getRandomAyat() {
  const res = await fetch(`${BASE_URL}quran/ayat/acak`);
  return res.json();
}

export async function getRandomHadits() {
  const res = await fetch(`${BASE_URL}hadits/arbain/acak`);
  return res.json();
}

export async function getRandomDoa() {
  const res = await fetch(`${BASE_URL}doa/acak`);
  return res.json();
}

export async function getRandomAsmaulHusna() {
  const res = await fetch(`${BASE_URL}husna/acak`);
  return res.json();
}
