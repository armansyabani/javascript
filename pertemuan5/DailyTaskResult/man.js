// 🌍 Variabel Global
const gameName = "SkyRunner";
let difficulty = "Normal";
var player = "Arman";

// Fungsi untuk menampilkan info global
function showGameInfo() {
  info.textContent = `Game: ${gameName}\nMode: ${difficulty}\nPemain: ${player}`;
}

// ==========================
// 🧠 Hoisting Demo
// ==========================
console.log("=== Hoisting Demo ===");

// var
console.log(a); // undefined
var a = 5;

// let
try {
  console.log(b);
} catch {
  console.log("b tidak bisa diakses sebelum deklarasi (let)");
}
let b = 10;

// const
try {
  console.log(c);
} catch {
  console.log("c tidak bisa diakses sebelum deklarasi (const)");
}
const c = 15;

// ==========================
// 🏆 Closure: Skor Pemain
// ==========================
function createScore() {
  let score = 0;
  return {
    getScore: () => score,
    addScore: (value) => {
      if (value <= 0) return log.textContent += "❌ Masukkan angka > 0\n";
      score += value;
      log.textContent += `✅ Skor bertambah ${value} poin!\n`;
      updateDisplay(score);
    }
  };
}

// Buat skor baru
const playerScore = createScore();

// 🔄 Update tampilan
function updateDisplay(value) {
  scoreText.textContent = `Skor: ${value}`;
}

// 🎮 Event
infoBtn.addEventListener("click", showGameInfo);
addBtn.addEventListener("click", () => {
  const value = Number(scoreInput.value);
  playerScore.addScore(value);
  scoreInput.value = "";
});

// Inisialisasi
updateDisplay(playerScore.getScore());
