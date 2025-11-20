// main.js
import {
  searchCity,
  getDailySchedule,
  getMonthlySchedule,
  getRandomAyat,
  getRandomDoa,
  getRandomHadits,
  getRandomAsmaulHusna
} from "./modules/api.js";

import {
  getTodayForApi,
  getTodayForDisplay,
  getNextPrayer
} from "./modules/utils.js";

import {
  renderDailySchedule,
  renderNextPrayer,
  renderMonthlyTable,
  renderAyat,
  renderDoa,
  renderHadits,
  renderHusna
} from "./modules/ui.js";


const dateDisplay = document.querySelector(".date");
dateDisplay.textContent = getTodayForDisplay();

// Default ID (Jakarta)
let currentCityId = 1301;

async function loadAll() {
  const today = getTodayForApi();

  const daily = await getDailySchedule(currentCityId, today);
  renderDailySchedule(daily.data);

  const next = getNextPrayer(daily.data.jadwal);
  renderNextPrayer(next);

  const d = new Date();
  const monthData = await getMonthlySchedule(currentCityId, d.getFullYear(), d.getMonth() + 1);
  renderMonthlyTable(monthData.data);
}

async function loadInspirasi() {
  renderAyat(await getRandomAyat());
  renderHadits(await getRandomHadits());
  renderDoa(await getRandomDoa());
  renderHusna(await getRandomAsmaulHusna());
}

// EVENT
document.querySelector(".btn").addEventListener("click", async () => {
  const keyword = document.querySelector("input").value;
  if (!keyword) return alert("Masukkan nama kota!");

  const result = await searchCity(keyword);
  if (result.data.length === 0) return alert("Kota tidak ditemukan");

  currentCityId = result.data[0].id;
  loadAll();
});

document.querySelector(".panel-header button").addEventListener("click", loadInspirasi);

// START
loadAll();
loadInspirasi();
