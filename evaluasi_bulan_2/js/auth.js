// auth.js
const USERS_KEY = 'ks_users_v1';
const AUTH_KEY = 'ks_auth_v1';

// Ambil users
function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Simpan users
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Register
function registerUser(username, password) {
    const users = getUsers();

    if (users.find(u => u.username === username)) {
        return { success: false, message: "Username sudah digunakan" };
    }

    users.push({ username, password });
    saveUsers(users);

    return { success: true };
}

// Login
function loginUser(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return { success: false, message: "Username atau password salah" };
    }

    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return { success: true };
}

// Cek sesi login
function getCurrentUser() {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
}

// Logout
function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "login.html";
}
