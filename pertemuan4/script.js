
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Opeator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});



// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

let dataSantri = [
    "bambang",
    21,
    true,
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]
let dataSantri2 = [
    'Data1', "Data2", 'Data3', 'Data4', 'Data5']

  function a(nama, alamat, rek) {
  {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}
console.log(a("Bambang", "Jakarta", "09876654321"));
 }




// =======================================

// Deklartif





function f1() {
  document.getElementById("output").innerText = 
    "F1: Halo, KAWAN ! Selamat datang di program kami. Di sini kita akan belajar logika dasar JavaScript lewat simulasi kecil buat pemula inimah";
}

function f2(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

function f3() {
  // Interaktif: tanya apakah user main ML
  let mainML = prompt("Apakah kamu main Mobile Legends (ML)? (ya/tidak)");

  if (mainML && mainML.toLowerCase() === "ya") {
    document.getElementById("output").innerText = 
      "F3: Wah keren! Berarti kamu juga bagian dari para pejuang Land of Dawn ";
  } else if (mainML && mainML.toLowerCase() === "tidak") {
    document.getElementById("output").innerText = 
      "F3: Wah, gapapa! Meski nggak main ML, kamu tetap bisa jadi jago ngoding ";
  } else {
    document.getElementById("output").innerText = 
      "F3: Hmm... kamu nggak jawab dengan jelas  Tapi nggak apa, lanjut aja yuk!";
  }
}

function f4() {
  // Interaktif: tanya role yang dimainkan
  let role = prompt("Role apa yang biasa kamu main di ML? (contoh: tank, marksman, mage, assassin, support, fighter)");

  if (!role) {
    document.getElementById("output").innerText = 
      "F4: Kamu belum jawab nih  Tapi nggak apa-apa, mungkin kamu tipe observer yang suka nonton gameplay aja.";
    return;
  }

  role = role.toLowerCase();
  let pesan = "";

  switch(role) {
    case "tank":
      pesan = "Wah! Kamu tipe pelindung sejati , selalu ada di garis depan untuk melindungi teman. Respect!";
      break;
    case "marksman":
      pesan = "Marksman ya? Berarti kamu jago jaga jarak dan punya aim yang tajam banget!";
      break;
    case "mage":
      pesan = "Mage! Pengendali sihir dan damage besar. Kamu pasti suka hero kayak harley atau Xavier ya?";
      break;
    case "assassin":
      pesan = "Assassin  — wkwkwk bagus.. tapi tanggung jawab besar apalagi kalo kalah lord jadi masalah besar tuh.";
      break;
    case "support":
      pesan = "Support!  Kamu tipe yang peduli dan bantu tim yang kesusahan. Hebat banget!";
      break;
    case "fighter":
      pesan = "Fighter  — Mantap kawan berarti maku adalah premean EXP lane !";
      break;
    default:
      pesan = `Role '${role}' unik juga! Kamu pasti punya gaya main sendiri yang nggak biasa `;
  }

  document.getElementById("output").innerText = 
    `F4: ${pesan} Terus semangat mainnya dan jangan lupa sholat dan istirahat ya! `;
}




// Ekpresif
// const f1 = function (angkaPertama, angkaKedua, operator) {
//     togglePopup("1");
//     let result;
//     const a = Number(angkaPertama);
//     const b = Number(angkaKedua);

//     if (isNaN(a) || isNaN(b) && !a || !b) {
//         console.log("Input harus berupa angka");
//         console.log(typeof a);
//         console.log(typeof b);

//         return;
//     }

//     switch (operator) {
//         case "*":
//             result = a * b;
//             break;
//         case "+":
//             result = a + b;
//             break;
//         default:
//             console.log("Operator tidak valid");
//             return;
//     }

//     const output = document.getElementById("outputBox");
//     output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
//     togglePopup("1");
//     return result;
// }
// arrow function
// const funct1 =  (angkaPertama, angkaKedua,) => angkaPertama * angkaKedua;




// LOOPING 
