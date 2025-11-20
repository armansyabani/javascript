// modules/ui.js

export function renderDailySchedule(data) {
  document.querySelector(".prayer-header-main").textContent =
    `Hari ini • ${data.jadwal.tanggal}`;

  document.querySelector(".prayer-header-sub").textContent =
    `${data.lokasi} — ${data.daerah} • Jadwal harian`;

  // Update daftar waktu
  const times = data.jadwal;

  const mapping = {
    Imsak: times.imsak,
    Subuh: times.subuh,
    Terbit: times.terbit,
    Dhuha: times.dhuha,
    Dzuhur: times.dzuhur,
    Ashar: times.ashar,
    Maghrib: times.maghrib,
    Isya: times.isya,
  };

  document.querySelectorAll(".prayer-item").forEach(item => {
    const label = item.querySelector(".prayer-label")?.textContent;
    if (mapping[label]) {
      item.querySelector(".prayer-time").textContent = mapping[label];
    }
  });
}

export function renderNextPrayer(next) {
  document.querySelector(".pill h2").textContent =
    `Sholat berikutnya: ${next.name} dalam ${next.countdown}`;
}

export function renderMonthlyTable(data) {
  const list = document.querySelector(".month-list");
  const rows = data.map(item => `
    <div class="month-row">
      <div class="month-date">${item.tanggal}</div>
      <div class="month-time">${item.subuh}</div>
      <div class="month-time">${item.dzuhur}</div>
      <div class="month-time">${item.ashar}</div>
      <div class="month-time">${item.maghrib}</div>
      <div class="month-time">${item.isya}</div>
    </div>
  `).join("");

  list.innerHTML = `
    <div class="month-row header">
      <div>Tanggal</div><div>Subuh</div>
      <div>Dzuhur</div><div>Ashar</div>
      <div>Maghrib</div><div>Isya</div>
    </div>
    ${rows}
  `;
}

// Kartu inspirasi
export function renderAyat(data) {
  document.querySelector(".card-accent-indigo .card-title").textContent =
    `${data.data.surat} • ${data.data.ayat}`;
  document.querySelector(".card-accent-indigo .card-arabic").textContent =
    data.data.ar;
  document.querySelector(".card-accent-indigo .card-content").textContent =
    data.data.id;
}

export function renderHadits(data) {
  document.querySelector(".card-accent-amber .card-title").textContent =
    `${data.data.judul} • Hadits ${data.data.number}`;
  document.querySelector(".card-accent-amber .card-arabic").textContent =
    data.data.ar;
  document.querySelector(".card-accent-amber .card-content").textContent =
    data.data.id;
}

export function renderDoa(data) {
  document.querySelector(".card-accent-green .card-title").textContent =
    data.data.judul;
  document.querySelector(".card-accent-green .card-arabic").textContent =
    data.data.arab;
  document.querySelector(".card-accent-green .card-content").textContent =
    data.data.indo;
}

export function renderHusna(data) {
  document.querySelector(".cards-grid .card:last-child .card-title").textContent =
    `${data.data.arab} • ${data.data.latin}`;
  document.querySelector(".cards-grid .card:last-child .card-content").textContent =
    data.data.arti;
}
