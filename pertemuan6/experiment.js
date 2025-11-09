


function mulai() {
  let output = document.getElementById("output");
  output.innerText = "Selamat datang di Land of Dawn Interview ";

  
  let mainML = prompt("Apakah kamu main Mobile Legends (ML)? (ya/tidak)");

  if (!mainML) {
    output.innerText = "kamu gak jawab, tapi gapapa kok!";
    return;
  }
do {
  
} while (condition);
  mainML = mainML.toLowerCase();

  if (mainML !== "ya") {
    output.innerText = "Oke, kamu bukan player ML tapi mungkin penonton turnamen! Tetap keren 😎";
    return;
  }

   
  let nickname = prompt("Nickname ML kamu apa nih?");
  if (!nickname) nickname = "Pemain Misterius";

 
  let role = prompt("Role apa yang paling sering kamu main? (tank, marksman, mage, assassin, support, fighter)");
  if (!role) role = "bebas";
  role = role.toLowerCase();

  
  let rank = prompt("Rank kamu sekarang apa? (Warrior, Elite, Master, Grandmaster, Epic, Legend, Mythic, Glorious)");
  if (!rank) rank = "belum terdeteksi";
  rank = rank.charAt(0).toUpperCase() + rank.slice(1).toLowerCase();

   
  let jamMain = parseFloat(prompt("Berapa jam kamu biasanya main ML per hari? (angka saja)"));
  if (isNaN(jamMain)) jamMain = 0;

   
  let rekomendasiHero = "";
  switch(role) {
    case "tank": rekomendasiHero = "Tigreal, Atlas, atau Lolita"; break;
    case "marksman": rekomendasiHero = "Brody, Melissa, atau Claude"; break;
    case "mage": rekomendasiHero = "Lunox, Kagura, atau Xavier"; break;
    case "assassin": rekomendasiHero = "Gusion, Saber, atau Joy"; break;
    case "support": rekomendasiHero = "Angela, Floryn, atau Rafaela"; break;
    case "fighter": rekomendasiHero = "Chou, Paquito, atau Terizla"; break;
    default: rekomendasiHero = "hero random biar makin seru ";
  }

   
  let tingkatKetagihan = "";
  if (jamMain >= 5) tingkatKetagihan = "pecandu / gila Game ";
  else if (jamMain >= 2) tingkatKetagihan = "Player aktif ";
  else if (jamMain > 0) tingkatKetagihan = "Casual player ";
  else tingkatKetagihan = "Nggak main belakangan ini ya? ";

   
  let quotes = [
    "“Kalah bukan akhir, tapi awal untuk push rank lagi!” ",
    "“Ingat, teamwork lebih penting dari kill!” ",
    "“Main boleh, tapi jangan lupa makan dan tidur!” ",
    "“Jangan toxic, karena ML bukan cuma soal menang!” ",
    
  ];
  let quoteMotivasi = quotes[Math.floor(Math.random() * quotes.length)];

  
  output.innerHTML = `
    <h2> Profil Gamer ML Kamu </h2>
    <p><strong>Nickname:</strong> ${nickname}</p>
    <p><strong>Role Favorit:</strong> ${role}</p>

    <p><strong>Rank Saat Ini:</strong> ${rank}</p>
    <p><strong>Durasi Main:</strong> ${jamMain} jam/hari</p>
    <p><strong>Tingkat Aktivitas:</strong> ${tingkatKetagihan}</p>
    <p><strong>Rekomendasi Hero:</strong> ${rekomendasiHero}</p>
    <p style="margin-top:20px;"> ${quoteMotivasi}</p>

    <p>Terus semangat push rank dan jangan lupa rehat ya, ${nickname}! </p>
    
  `; 
}
