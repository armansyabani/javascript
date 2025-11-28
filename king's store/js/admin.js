// admin.js — fitur admin sederhana
window.Admin = (function(){
  const listEl = document.getElementById('adminList');

  function renderList(){
    const prods = window.PRODUCTS;
    listEl.innerHTML = '';
    prods.forEach(p=>{
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<div>
        <strong>${p.name}</strong> <div class="muted">${p.category || ''} • Rp ${Number(p.price).toLocaleString()}</div>
      </div>
      <div>
        <button class="btn" onclick="Admin.edit(${p.id})">Edit</button>
        <button class="btn" onclick="Admin.del(${p.id})">Hapus</button>
      </div>`;
      listEl.appendChild(div);
    });
  }

  function addProduct(){
    const name = document.getElementById('admin_name').value.trim();
    const img = document.getElementById('admin_img').value.trim();
    const cat = document.getElementById('admin_cat').value.trim() || 'apps';
    const status = document.getElementById('admin_status').value.trim() || 'Tersedia';
    const price = Number(document.getElementById('admin_price').value.trim() || 0);
    if(!name || !img) return alert('Isi nama & url gambar!');
    const prods = window.PRODUCTS;
    const id = Math.max(0, ...prods.map(x=>x.id)) + 1;
    prods.push({ id, name, img, category:cat, status, price });
    window.PRODUCTS = prods;
    renderList();
    alert('Produk ditambahkan');
    ['admin_name','admin_img','admin_cat','admin_status','admin_price'].forEach(id=> document.getElementById(id).value='');
    location.reload();
  }

  function del(id){
    if(!confirm('Hapus produk?')) return;
    let prods = window.PRODUCTS;
    prods = prods.filter(p=> p.id !== id);
    window.PRODUCTS = prods;
    renderList();
    location.reload();
  }

  function edit(id){
    const p = window.PRODUCTS.find(x=> x.id===id);
    if(!p) return alert('Produk tidak ditemukan');
    const name = prompt('Nama:', p.name);
    if(name===null) return;
    const price = prompt('Harga (angka):', p.price);
    p.name = name;
    p.price = Number(price||p.price);
    const prods = window.PRODUCTS.map(x=> x.id===id ? p : x);
    window.PRODUCTS = prods;
    renderList();
    location.reload();
  }

  return { renderList, addProduct, del, edit };
})();
