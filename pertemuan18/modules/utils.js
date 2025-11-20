// modules/utils.js

export function getTodayForApi() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function getTodayForDisplay() {
  const d = new Date();
  const hari = d.toLocaleDateString("id-ID", { weekday: "long" });
  const tgl = d.toLocaleDateString("id-ID");
  return `${hari}, ${tgl}`;
}

// Hitung sholat berikutnya
export function getNextPrayer(times) {
  const now = new Date();
  const prayerList = ["Imsak","Subuh","Terbit","Dhuha","Dzuhur","Ashar","Maghrib","Isya"];

  for (const p of prayerList) {
    const time = times[p.toLowerCase()];
    const [h, m] = time.split(":");
    const prayerTime = new Date();
    prayerTime.setHours(h, m, 0);

    if (now < prayerTime) {
      const diff = prayerTime - now;
      const h2 = String(Math.floor(diff / 1000 / 3600)).padStart(2, "0");
      const m2 = String(Math.floor((diff/1000 % 3600) / 60)).padStart(2, "0");
      const s2 = String(Math.floor(diff/1000 % 60)).padStart(2, "0");

      return { 
        name: p, 
        time: time,
        countdown: `${h2}:${m2}:${s2}`
      };
    }
  }

  return { name: "Selesai", time: "-", countdown: "00:00:00" };
}
