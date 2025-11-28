// auth.js — auth sederhana localStorage
window.Auth = (function(){
  const USERS_KEY = 'ks_users';
  const AUTH_KEY = 'ks_auth';

  function _users(){ return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
  function _setUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

  function register(){
    const u = document.getElementById('regUser').value.trim();
    const p = document.getElementById('regPass').value.trim();
    if(!u || !p) return alert('Isi username & password!');
    const users = _users();
    if(users.find(x=> x.username===u)) return alert('Username sudah ada!');
    users.push({username:u,password:p});
    _setUsers(users);
    alert('Registrasi berhasil! Silakan login.');
    showAuth('login');
  }

  function login(){
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value.trim();
    const users = _users();
    const found = users.find(x=> x.username===u && x.password===p);
    if(!found) return alert('Username atau password salah!');
    localStorage.setItem(AUTH_KEY, JSON.stringify({username:u,loginAt:Date.now()}));
    closeAuth();
    renderUserBox();
    alert('Login sukses: ' + u);
  }

  function logout(){
    localStorage.removeItem(AUTH_KEY);
    renderUserBox();
  }

  function current(){
    return JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
  }

  function renderUserBox(){
    const box = document.getElementById('userBox');
    if(!box) return;
    const cur = current();
    if(cur){
      box.innerHTML = `<div class="hello">Hi, <strong>${cur.username}</strong></div>
      <button class="btn" onclick="Auth.logout()">Keluar</button>`;
    } else {
      box.innerHTML = `<button id="btnLogin" class="btn primary" onclick="openAuth()">Masuk</button>`;
    }
  }

  document.addEventListener('DOMContentLoaded', ()=>{ renderUserBox(); });

  return { register, login, logout, current, renderUserBox };
})();
