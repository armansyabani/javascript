const tagDiv = document.getElementById('app');
const inputNama = document.getElementById('input-nama');
const tagButton1 = document.getElementById("btn-submit");
const tagMessage1 = document.getElementById("msg-name");
const listUsers = document.getElementById("list-users");

/// ================== DEFAULT FUNCTION


function resetInput(input){
    input.value = "";
}

function displayMessage(target, message, color){
    target.textContent = message;
    target.style.color = color;
}

const getDateStr = () => new Date().toLocaleDateString("id-ID", { day: "2-digit", month:'2-digit', year:'numeric' });
const getTimeStr = () => new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });


/// LOCAL STORAGE HANDLER

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}


/// ==========================================


// SIMPAN DATA USER
function saveUser(name) {
    if (!name) {
        return alert("Data belum diisi");
    }

    const users = load("users") || [];

    users.unshift({
        nama: name,
        "date-create": `${getTimeStr()} ${getDateStr()}`
    });

    save("users", users);

    resetInput(inputNama);

    displayMessage(tagMessage1, `Oke Data "${name}" Tersimpan`, "green");

    renderUsers();  // ← WAJIB! Untuk update list secara langsung
}


// EVENT BUTTON KLIK
tagButton1.addEventListener('click', function(e){
    e.preventDefault();
    saveUser(inputNama.value.trim());
});


// TAMPILKAN DATA KE LAYAR
function renderUsers() {
    listUsers.innerHTML = "";

    const users = load("users") || [];

    users.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${index + 1}.</strong> 
            ${item.nama} 
            <span style="color:gray;font-size:12px;">
                (${item["date-create"]})
            </span>
        `;
        listUsers.appendChild(li);
    });
}

renderUsers();
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
  saveUser(inputNama.value.trim());
});
