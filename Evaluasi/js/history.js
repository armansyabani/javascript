const history = JSON.parse(localStorage.getItem("history")) || [];

const historyList = document.getElementById("historyList");

history.forEach(h => {
    historyList.innerHTML += `
        <li>
            <strong>${h.date}</strong><br>
            ${h.items.map(i => i.name).join(", ")}<br>
            Metode: ${h.method}
        </li>
    `;
});
