function getTodo() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

function saveTodo(list) {
  localStorage.setItem("todo", JSON.stringify(list));
}

function addTodo() {
  const item = document.getElementById("todoInput").value.trim();
  if (!item) return alert("Isi dulu!");

  const list = getTodo();
  list.push(item);
  saveTodo(list);
  renderTodo();
}

function renderTodo() {
  const list = getTodo();
  const box = document.getElementById("todoList");
  box.innerHTML = "";

  list.forEach((t, i) => {
    box.innerHTML += `
      <li>${t} <button onclick="deleteTodo(${i})">Hapus</button></li>
    `;
  });
}

function deleteTodo(i) {
  const list = getTodo();
  list.splice(i, 1);
  saveTodo(list);
  renderTodo();
}
