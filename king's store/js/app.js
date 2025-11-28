// app.js — logic utama halaman index
(function(){
  const grid = document.getElementById('productGrid');
  const search = document.getElementById('search');
  const catFilter = document.getElementById('categoryFilter');
  const cartCountEl = document.getElementById('cartCount');
  const adminBtn = document.getElementById('openAdmin');

  // modal controls
  window.openAuth = function(){ document.getElementById('modalAuth').classList.remove('hidden'); };
  window.closeAuth = function(){ document.getElementById('modalAuth').classList.add('hidden'); };
  window.showAuth = function(tab){
    document.getElementById('tlogin').classList.remove('active');
    document.getElementById('treg').classList.remove('active');
    document.getElementById('loginPane').classList.add('hidden');
    document.getElementById('registerPane').classList.add('hidden');
    if(tab==='login'){ document.getElementById('tlogin').classList.add('active'); document.getElementById('loginPane').classList.remove('hidden'); }
    else { document.getElementById('treg').classList.add('active'); document.getElementById('registerPane').classList.remove('hidden'); }
  };

  window.openAdmin = function(){
    document.getElementById('modalAdmin').classList.remove('hidden');
    Admin.renderList();
  };
  window.closeAdmin = function(){ document.getElementById('modalAdmin').classList.add('hidden'); };

  function formatPrice(v){ return 'Rp ' + Number(v).toLocaleString(); }

  function render(products){
    grid.innerHTML = '';
    products.forEach(p=>{
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <div class="p-info">
          <div class="cat">Aplikasi Premium</div>
          <div class="title">${p.name}</div>
          <div class="p-btm">
            <div class="badge ${p.status.includes('Tersedia')? 'available': p.status.includes('Tersisa')? 'warning': 'sold'}">${p.status}</div>
            <div class="muted" style="margin-left:auto">${formatPrice(p.price)}</div>
          </div>
          <div style="margin-top:10px;">
            <button class="btn" onclick="viewProduct(${p.id})">Detail</button>
            <button class="btn primary" onclick="addToCart(${p.id})">Beli</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function loadAll(){ render(window.PRODUCTS); updateCartCount(); }
  loadAll();

  search.addEventListener('input', ()=>{
    const q = search.value.trim().toLowerCase();
    let list = window.PRODUCTS.filter(p=> p.name.toLowerCase().includes(q));
    if(catFilter.value !== 'all') list = list.filter(x => x.category === catFilter.value);
    render(list);
  });

  catFilter.addEventListener('change', ()=>{ search.dispatchEvent(new Event('input')); });

  window.viewProduct = function(id){
    window.location = `product.html?id=${id}`;
  };

  window.addToCart = function(id){
    const prod = window.PRODUCTS.find(x=> x.id===id);
    if(!prod) return alert('Produk tidak ditemukan');
    if(prod.status.toLowerCase().includes('stok habis')) return alert('Maaf stok habis');
    let cart = JSON.parse(localStorage.getItem('ks_cart')||'[]');
    const exist = cart.find(c=> c.id===prod.id);
    if(exist) exist.qty++;
    else cart.push({ id:prod.id, name:prod.name, price:prod.price, qty:1 });
    localStorage.setItem('ks_cart', JSON.stringify(cart));
    updateCartCount();
    alert('Ditambahkan ke keranjang');
  };

  window.updateCartCount = function(){
    const cart = JSON.parse(localStorage.getItem('ks_cart')||'[]');
    cartCountEl.innerText = cart.reduce((s,i)=> s + (i.qty||1),0);
  };

  document.getElementById('btnLogin') && document.getElementById('btnLogin').addEventListener('click', openAuth);

  adminBtn.addEventListener('click', ()=>{
    const cur = Auth.current();
    if(!cur || cur.username !== 'admin') {
      if(confirm('Akses admin membutuhkan login dengan user "admin". Mau login sekarang?')) openAuth();
      return;
    }
    openAdmin();
  });

  document.getElementById('themeToggle').addEventListener('click', ()=>{
    if(document.documentElement.style.getPropertyValue('--bg') === '#ffffff'){
      document.body.style.background = '';
      document.documentElement.style.setProperty('--bg','#0f1218');
    } else {
      document.body.style.background = '#ffffff';
      document.body.style.color = '#000';
    }
  });

  document.getElementById('year').innerText = new Date().getFullYear();

  document.addEventListener('DOMContentLoaded', ()=>{
    Auth.renderUserBox();
    updateCartCount();
  });
})();
