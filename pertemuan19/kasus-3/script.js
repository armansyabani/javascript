
  const menu = document.getElementById("men");

  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-item")) return;
    document.querySelectorAll(".menu-item")
      .forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
  });

const nama = document.getElementById("nama");
  const save = document.getElementById("save");
  const err = document.getElementById("error");
  const res = document.getElementById("result");

  save.addEventListener("click", () => {
    const value = nama.value.trim();
    if (!value) {
      err.textContent = "Nama tidak boleh kosong.";
      res.textContent = "";
      return;
    }
    err.textContent = "";
    res.textContent = "welcome, " + value + "!";
  });

const photo = document.getElementById("photo");
  const btn = document.getElementById("change-photo");
  let toggle = false;

  btn.addEventListener("click", () => {
    toggle = !toggle;
    photo.src = toggle ? "img2.jpg" : "img1.jpg";
  });

  const check = document.getElementById("startCheck");
  const info = document.getElementById("info");

  check.addEventListener("change", () => {
    if (check.checked) {
      info.textContent = " Mode sadboyy ON! Gaskeun!";
    } else {
      info.textContent = " Kamu belum mengaktifkan mode sadboyy.";
    }
  });

  const students = [
    { name: "Asep", score: 97 },
    { name: "Udin", score: 88 },
    { name: "Angga", score: 92 },
  ];

  const body = document.getElementById("bodyData");

  let index = 1;
  for (const s of students) {
    const row = document.createElement("tr");

    const colNo = document.createElement("td");
    const colName = document.createElement("td");
    const colScore = document.createElement("td");
  colNo.textContent = index++;
    colName.textContent = s.name;
    colScore.textContent = s.score;

    row.appendChild(colNo);
    row.appendChild(colName);
    row.appendChild(colScore);

    body.appendChild(row);
  }

 const countEl = document.getElementById("count");
  const buton = document.getElementById("btn-plus");
  const msg = document.getElementById("msg");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    // pesan kelipatan 10
    if (count % 10 === 0) {
      msg.textContent = "Mantap! Sudah kelipatan 10! 💥";
    }

    // pesan default di angka 5
    else if (count >= 5) {
      msg.textContent = "Wah, rajin juga! 🔥";
    } else {
      msg.textContent = "";
    }

    // warna merah jika lebih dari 30
    if (count > 30) {
      countEl.style.color = "red";
    }
  });