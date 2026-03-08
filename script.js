/* ============================================================
   NOOR BOUTIQUE — script.js  (Visitor-facing store)
   ============================================================ */

const DEFAULT_PRODUCTS = [
  { id:"abaya1",  name:"Classic Black Abaya",      category:"abaya",    price:89.99,  originalPrice:null,   emoji:"🖤", badge:"new",      rating:4.8, reviews:124, description:"A timeless black abaya crafted from premium crepe fabric. Features elegant flared sleeves and a subtle golden trim — perfect for everyday elegance.", sizes:["XS","S","M","L","XL","XXL"], imageUrl:null },
  { id:"abaya2",  name:"Embroidered Linen Abaya",  category:"abaya",    price:129.99, originalPrice:159.99, emoji:"🌸", badge:"sale",     rating:4.9, reviews:87,  description:"Breathable linen abaya with intricate hand embroidery along the cuffs and hem. A beautiful blend of tradition and modern style.", sizes:["S","M","L","XL"], imageUrl:null },
  { id:"abaya3",  name:"Velvet Evening Abaya",      category:"abaya",    price:179.99, originalPrice:null,   emoji:"💜", badge:"trending", rating:4.7, reviews:56,  description:"Luxurious velvet abaya in deep plum with crystal button detailing. Ideal for special occasions and evenings.", sizes:["XS","S","M","L","XL"], imageUrl:null },
  { id:"abaya4",  name:"Floral Chiffon Abaya",      category:"abaya",    price:99.99,  originalPrice:119.99, emoji:"🌺", badge:"sale",     rating:4.6, reviews:93,  description:"Light and flowing chiffon abaya with a delicate floral pattern. Comfortable for all-day wear in warm weather.", sizes:["S","M","L","XL","XXL"], imageUrl:null },
  { id:"abaya5",  name:"Open Kimono Abaya",         category:"abaya",    price:109.99, originalPrice:null,   emoji:"✨", badge:"new",      rating:4.5, reviews:44,  description:"Modern kimono-style open abaya with contrast trim. Wear over coordinates or a simple dress for effortless style.", sizes:["One Size","S/M","L/XL"], imageUrl:null },
  { id:"abaya6",  name:"Pearl Button Abaya",        category:"abaya",    price:145.00, originalPrice:null,   emoji:"🤍", badge:null,       rating:4.8, reviews:71,  description:"Elegant ivory abaya with mother-of-pearl button detailing from neckline to hem. Timeless and refined.", sizes:["XS","S","M","L"], imageUrl:null },
  { id:"child1",  name:"Mini Abaya Set - Girls",   category:"children", price:45.99,  originalPrice:59.99,  emoji:"👧", badge:"sale",     rating:4.9, reviews:108, description:"A beautifully designed abaya set for girls aged 4-12. Soft cotton fabric with embroidered star details.", sizes:["4Y","6Y","8Y","10Y","12Y"], imageUrl:null },
  { id:"child2",  name:"Boys Thobe - White",       category:"children", price:39.99,  originalPrice:null,   emoji:"👦", badge:"new",      rating:4.7, reviews:65,  description:"Crisp white thobe for boys, perfect for Eid and special occasions. Easy-care fabric that stays bright wash after wash.", sizes:["4Y","6Y","8Y","10Y","12Y","14Y"], imageUrl:null },
  { id:"child3",  name:"Kids Floral Dress Set",    category:"children", price:34.99,  originalPrice:44.99,  emoji:"🌷", badge:"sale",     rating:4.8, reviews:142, description:"Charming 2-piece floral dress with matching headband for girls aged 2-10. Soft and playful.", sizes:["2Y","4Y","6Y","8Y","10Y"], imageUrl:null },
  { id:"child4",  name:"Boys Casual Denim Set",    category:"children", price:49.99,  originalPrice:null,   emoji:"🧒", badge:null,       rating:4.6, reviews:38,  description:"Comfortable denim shirt and jogger pants set for boys. Ideal for school days and casual outings.", sizes:["4Y","6Y","8Y","10Y","12Y"], imageUrl:null },
  { id:"child5",  name:"Girls Eid Gown",           category:"children", price:64.99,  originalPrice:79.99,  emoji:"🌟", badge:"trending", rating:4.9, reviews:97,  description:"A stunning Eid party gown in rose gold satin with tulle layers. Every girl's dream dress.", sizes:["3Y","5Y","7Y","9Y","11Y"], imageUrl:null },
  { id:"child6",  name:"Kids Pyjama Set",          category:"children", price:24.99,  originalPrice:null,   emoji:"😴", badge:"new",      rating:4.7, reviews:55,  description:"Super soft cotton pyjama set with moon and star prints. Available for boys and girls.", sizes:["2Y","4Y","6Y","8Y","10Y"], imageUrl:null },
  { id:"baby1",   name:"Newborn Gift Set",         category:"baby",     price:54.99,  originalPrice:69.99,  emoji:"🍼", badge:"sale",     rating:4.9, reviews:176, description:"A complete 7-piece newborn gift set: 3 bodysuits, 2 hats, bib, and booties. 100% organic cotton.", sizes:["0-3M","3-6M"], imageUrl:null },
  { id:"baby2",   name:"Baby Blanket - Muslin",    category:"baby",     price:22.99,  originalPrice:null,   emoji:"🌙", badge:"new",      rating:4.8, reviews:83,  description:"Ultra-soft 4-layer muslin swaddle blanket. Breathable, gentle on baby's skin, and machine washable.", sizes:["One Size"], imageUrl:null },
  { id:"baby3",   name:"Baby Romper - 3 Pack",     category:"baby",     price:34.99,  originalPrice:44.99,  emoji:"🐣", badge:"sale",     rating:4.7, reviews:121, description:"Set of 3 adorable snap-button rompers in neutral colours. Soft cotton interlock fabric perfect for all seasons.", sizes:["0-3M","3-6M","6-9M","9-12M"], imageUrl:null },
  { id:"baby4",   name:"Baby Sleep Bag",           category:"baby",     price:44.99,  originalPrice:null,   emoji:"😇", badge:null,       rating:4.9, reviews:59,  description:"Safe, cosy sleeping bag for babies. Features a zip opening, adjustable shoulder buttons, and certified safe tog rating.", sizes:["0-6M","6-18M","18-36M"], imageUrl:null },
  { id:"baby5",   name:"Embroidered Baby Cap Set", category:"baby",     price:16.99,  originalPrice:null,   emoji:"🧢", badge:"new",      rating:4.6, reviews:34,  description:"Set of 3 cotton baby caps with delicate embroidery. Keeps baby's head warm while looking adorable.", sizes:["0-3M","3-6M","6-12M"], imageUrl:null },
  { id:"baby6",   name:"Baby Footwear Set",        category:"baby",     price:19.99,  originalPrice:24.99,  emoji:"👶", badge:"trending", rating:4.8, reviews:47,  description:"Pack of 3 pairs of soft-sole baby shoes/booties. Non-slip soles and soft elastic keeps them on tiny feet.", sizes:["0-3M","3-6M","6-12M"], imageUrl:null },
];

let PRODUCTS = [...DEFAULT_PRODUCTS];

async function loadProductsFromFirebase() {
  try {
    if (!window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey.includes("PASTE")) return;
    const { initializeApp }   = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getFirestore, collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const app = initializeApp(window.FIREBASE_CONFIG);
    const db  = getFirestore(app);
    const snapshot = await getDocs(collection(db, "products"));
    if (snapshot.empty) return;
    const firestoreProducts = [];
    snapshot.forEach(d => firestoreProducts.push({ id: d.id, ...d.data() }));
    PRODUCTS = DEFAULT_PRODUCTS.map(def => {
      const live = firestoreProducts.find(p => p.id === def.id);
      return live ? { ...def, ...live } : def;
    });
    firestoreProducts.forEach(fp => { if (!PRODUCTS.find(p => p.id === fp.id)) PRODUCTS.push(fp); });
    renderProducts();
    updateCategoryCounts();
  } catch(e) { console.warn("Firebase load error:", e); }
}

let cart = JSON.parse(localStorage.getItem("noorCart") || "[]");
let currentFilter = "all", currentSort = "default", searchQuery = "";
let wishlist = JSON.parse(localStorage.getItem("noorWishlist") || "[]");

const productsGrid  = document.getElementById("productsGrid");
const filterTabs    = document.getElementById("filterTabs");
const sortSelect    = document.getElementById("sortSelect");
const cartCount     = document.getElementById("cartCount");
const cartItems     = document.getElementById("cartItems");
const cartEmpty     = document.getElementById("cartEmpty");
const cartFooter    = document.getElementById("cartFooter");
const cartTotal     = document.getElementById("cartTotal");
const cartSidebar   = document.getElementById("cartSidebar");
const cartOverlay   = document.getElementById("cartOverlay");
const cartBtn       = document.getElementById("cartBtn");
const closeCart     = document.getElementById("closeCart");
const toast         = document.getElementById("toast");
const searchBtn     = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput   = document.getElementById("searchInput");
const closeSearch   = document.getElementById("closeSearch");
const hamburger     = document.getElementById("hamburger");
const mobileNav     = document.getElementById("mobileNav");
const contactForm   = document.getElementById("contactForm");
const formSuccess   = document.getElementById("formSuccess");
const checkoutBtn   = document.getElementById("checkoutBtn");
const shopNowBtn    = document.getElementById("shopNowBtn");
const modalOverlay  = document.getElementById("modalOverlay");
const modalClose    = document.getElementById("modalClose");
const modalInner    = document.getElementById("modalInner");
const noResults     = document.getElementById("noResults");
const abayaCount    = document.getElementById("abayaCount");
const childrenCount = document.getElementById("childrenCount");
const babyCount     = document.getElementById("babyCount");

function init() { renderProducts(); updateCartUI(); updateCategoryCounts(); bindEvents(); loadProductsFromFirebase(); }

function updateCategoryCounts() {
  abayaCount.textContent    = PRODUCTS.filter(p=>p.category==="abaya").length+" items";
  childrenCount.textContent = PRODUCTS.filter(p=>p.category==="children").length+" items";
  babyCount.textContent     = PRODUCTS.filter(p=>p.category==="baby").length+" items";
}

function getFilteredProducts() {
  let products = [...PRODUCTS];
  if (currentFilter!=="all") products=products.filter(p=>p.category===currentFilter);
  if (searchQuery.trim()) { const q=searchQuery.toLowerCase(); products=products.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)||p.description.toLowerCase().includes(q)); }
  if (currentSort==="price-asc") products.sort((a,b)=>a.price-b.price);
  else if (currentSort==="price-desc") products.sort((a,b)=>b.price-a.price);
  else if (currentSort==="name") products.sort((a,b)=>a.name.localeCompare(b.name));
  return products;
}

function renderProducts() {
  const products = getFilteredProducts();
  productsGrid.innerHTML = "";
  noResults.style.display = products.length===0?"block":"none";
  products.forEach((p,i)=>productsGrid.appendChild(createProductCard(p,i)));
}

const WA_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

function createProductCard(product, delay=0) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.style.animationDelay = `${delay*0.06}s`;
  const isWishlisted = wishlist.includes(product.id);
  const stars = getStars(product.rating);
  const priceHtml = product.originalPrice
    ? `<span class="price-current">$${(+product.price).toFixed(2)}</span><span class="price-original">$${(+product.originalPrice).toFixed(2)}</span>`
    : `<span class="price-current">$${(+product.price).toFixed(2)}</span>`;
  const badgeHtml = product.badge ? `<div class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</div>` : "";
  const imgContent = product.imageUrl
    ? `<img src="${product.imageUrl}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;" />`
    : `<span style="font-size:4rem;">${product.emoji}</span>`;
  const imgBg = product.imageUrl ? "background:#f0ebe0;" : `background:${getCategoryGradient(product.category)};`;

  card.innerHTML = `
    <div class="product-image-wrap">
      <div class="product-image" style="${imgBg}display:flex;align-items:center;justify-content:center;">${imgContent}</div>
      ${badgeHtml}
      <button class="product-wishlist ${isWishlisted?'active':''}" data-id="${product.id}" title="Wishlist">${isWishlisted?"❤️":"🤍"}</button>
      <div class="product-quick-view" data-id="${product.id}">Quick View</div>
    </div>
    <div class="product-body">
      <div class="product-category">${capitalize(product.category)}</div>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating"><span class="stars">${stars}</span><span class="rating-count">(${product.reviews})</span></div>
      <div class="product-footer">
        <div class="product-price">${priceHtml}</div>
        <button class="whatsapp-btn" data-id="${product.id}" title="Order on WhatsApp">${WA_SVG} Order</button>
      </div>
    </div>`;
  card.querySelector(".whatsapp-btn").addEventListener("click",e=>{e.stopPropagation();sendWhatsApp(product.id);});
  card.querySelector(".product-wishlist").addEventListener("click",e=>{e.stopPropagation();toggleWishlist(product.id,e.currentTarget);});
  card.querySelector(".product-quick-view").addEventListener("click",()=>openModal(product.id));
  card.querySelector(".product-image-wrap").addEventListener("click",()=>openModal(product.id));
  return card;
}

function getCategoryGradient(cat) {
  return {abaya:"linear-gradient(135deg,#2d1f14,#3d2518)",children:"linear-gradient(135deg,#2a3a2a,#354535)",baby:"linear-gradient(135deg,#2a2535,#352545)"}[cat]||"var(--cream-dark)";
}
function getStars(r){const f=Math.floor(r),h=r%1>=0.5?1:0,e=5-f-h;return"★".repeat(f)+(h?"½":"")+"☆".repeat(e);}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

function openModal(id) {
  const p = PRODUCTS.find(x=>x.id==id); if(!p) return;
  const stars = getStars(p.rating);
  const priceHtml = p.originalPrice ? `$${(+p.price).toFixed(2)} <small style="font-size:1rem;color:var(--ink-muted);text-decoration:line-through">$${(+p.originalPrice).toFixed(2)}</small>` : `$${(+p.price).toFixed(2)}`;
  const sizesHtml = (p.sizes||[]).map((s,i)=>`<button class="size-btn ${i===0?'active':''}" onclick="selectSize(this)">${s}</button>`).join("");
  const imgHtml = p.imageUrl ? `<img src="${p.imageUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg) 0 0 var(--radius-lg);">` : p.emoji;
  const imgBg = p.imageUrl ? "" : `background:${getCategoryGradient(p.category)};`;
  modalInner.innerHTML = `
    <div class="modal-img" style="${imgBg}">${imgHtml}</div>
    <div class="modal-content">
      <p class="modal-cat">${capitalize(p.category)}</p>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-rating"><span class="stars">${stars}</span><span style="color:var(--ink-muted);font-size:0.85rem;">${p.rating} · ${p.reviews} reviews</span></div>
      <div class="modal-price">${priceHtml}</div>
      <p class="modal-desc">${p.description}</p>
      <div class="modal-sizes"><h4>Select Size</h4><div class="sizes-row">${sizesHtml}</div></div>
      <button class="modal-wa-btn" onclick="sendWhatsApp('${p.id}');closeModal();">${WA_SVG} Order on WhatsApp</button>
    </div>`;
  modalOverlay.classList.add("active");
  document.body.style.overflow="hidden";
}
function closeModal(){modalOverlay.classList.remove("active");document.body.style.overflow="";}
function selectSize(btn){btn.closest(".sizes-row").querySelectorAll(".size-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");}

function sendWhatsApp(id) {
  const p=PRODUCTS.find(x=>x.id==id); if(!p) return;
  const num=(window.WHATSAPP_NUMBER||"94755646479");
  const msg=`Hello! I'm interested in ordering:\n\n*${p.name}*\nCategory: ${capitalize(p.category)}\nPrice: $${(+p.price).toFixed(2)}\n\nPlease let me know availability. Thank you!`;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,"_blank");
  showToast(`Opening WhatsApp for ${p.name}...`);
}

function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI();}
function changeQty(id,delta){const item=cart.find(i=>i.id==id);if(!item)return;item.qty+=delta;if(item.qty<=0){removeFromCart(id);return;}saveCart();updateCartUI();}
function saveCart(){localStorage.setItem("noorCart",JSON.stringify(cart));}
function updateCartUI(){
  const totalQty=cart.reduce((s,i)=>s+i.qty,0); cartCount.textContent=totalQty;
  if(cart.length===0){cartEmpty.style.display="flex";cartFooter.style.display="none";cartItems.innerHTML="";cartItems.appendChild(cartEmpty);return;}
  cartEmpty.style.display="none";cartFooter.style.display="block";
  let html="",total=0;
  cart.forEach(item=>{const p=PRODUCTS.find(x=>x.id==item.id);if(!p)return;const lt=p.price*item.qty;total+=lt;
    const img=p.imageUrl?`<img src="${p.imageUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius);">`:p.emoji;
    html+=`<div class="cart-item"><div class="cart-item-img">${img}</div><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div class="cart-item-cat">${capitalize(p.category)}</div><div class="cart-item-controls"><button class="qty-btn" onclick="changeQty('${p.id}',-1)">-</button><span class="qty-val">${item.qty}</span><button class="qty-btn" onclick="changeQty('${p.id}',1)">+</button><span class="cart-item-remove" onclick="removeFromCart('${p.id}')">🗑️</span></div></div><div class="cart-item-price">$${lt.toFixed(2)}</div></div>`;
  });
  cartItems.innerHTML=html;cartTotal.textContent=`$${total.toFixed(2)}`;
}

function toggleWishlist(id,btn){const idx=wishlist.indexOf(id);if(idx===-1){wishlist.push(id);btn.textContent="❤️";btn.classList.add("active");showToast("Added to wishlist!");}else{wishlist.splice(idx,1);btn.textContent="🤍";btn.classList.remove("active");showToast("Removed from wishlist.");}localStorage.setItem("noorWishlist",JSON.stringify(wishlist));}

let toastTimeout;
function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove("show"),2800);}

function setFilter(filter){currentFilter=filter;document.querySelectorAll(".filter-tab").forEach(t=>t.classList.toggle("active",t.dataset.filter===filter));document.querySelectorAll(".category-card").forEach(c=>c.classList.toggle("active",c.dataset.category===filter));renderProducts();}
window.filterByCategory=function(cat){setFilter(cat);document.querySelector("#products").scrollIntoView({behavior:"smooth"});};

function bindEvents(){
  window.addEventListener("scroll",()=>document.getElementById("header").classList.toggle("scrolled",window.scrollY>60));
  filterTabs.addEventListener("click",e=>{if(e.target.classList.contains("filter-tab"))setFilter(e.target.dataset.filter);});
  document.querySelectorAll(".category-card").forEach(c=>c.addEventListener("click",()=>{setFilter(c.dataset.category);document.querySelector("#products").scrollIntoView({behavior:"smooth"});}));
  sortSelect.addEventListener("change",()=>{currentSort=sortSelect.value;renderProducts();});
  cartBtn.addEventListener("click",()=>{cartSidebar.classList.add("open");cartOverlay.classList.add("active");document.body.style.overflow="hidden";});
  closeCart.addEventListener("click",closeCartSidebar);cartOverlay.addEventListener("click",closeCartSidebar);
  if(shopNowBtn)shopNowBtn.addEventListener("click",e=>{e.preventDefault();closeCartSidebar();document.querySelector("#products").scrollIntoView({behavior:"smooth"});});
  checkoutBtn.addEventListener("click",()=>showToast("Redirecting to checkout..."));
  searchBtn.addEventListener("click",()=>{searchOverlay.classList.add("active");setTimeout(()=>searchInput.focus(),100);});
  closeSearch.addEventListener("click",closeSearchOverlay);
  searchOverlay.addEventListener("click",e=>{if(e.target===searchOverlay)closeSearchOverlay();});
  searchInput.addEventListener("input",debounce(()=>{searchQuery=searchInput.value;renderProducts();},300));
  searchInput.addEventListener("keydown",e=>{if(e.key==="Enter"){closeSearchOverlay();document.querySelector("#products").scrollIntoView({behavior:"smooth"});}if(e.key==="Escape")closeSearchOverlay();});
  hamburger.addEventListener("click",()=>mobileNav.classList.toggle("open"));
  contactForm.addEventListener("submit",e=>{e.preventDefault();formSuccess.classList.add("show");contactForm.reset();setTimeout(()=>formSuccess.classList.remove("show"),4000);});
  modalClose.addEventListener("click",closeModal);
  modalOverlay.addEventListener("click",e=>{if(e.target===modalOverlay)closeModal();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeSearchOverlay();closeCartSidebar();}});
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",e=>{const t=document.querySelector(link.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"});mobileNav.classList.remove("open");}}));
}
function closeCartSidebar(){cartSidebar.classList.remove("open");cartOverlay.classList.remove("active");document.body.style.overflow="";}
function closeSearchOverlay(){searchOverlay.classList.remove("active");searchInput.value="";searchQuery="";renderProducts();}
function debounce(fn,delay){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),delay);};}

function initScrollAnimations(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="translateY(0)";obs.unobserve(e.target);}});},{threshold:0.1});
  document.querySelectorAll(".category-card,.feature,.contact-item,.footer-links").forEach((el,i)=>{el.style.opacity="0";el.style.transform="translateY(30px)";el.style.transition=`opacity 0.6s ease ${i*0.08}s,transform 0.6s ease ${i*0.08}s`;obs.observe(el);});
}

document.addEventListener("DOMContentLoaded",()=>{ init(); setTimeout(initScrollAnimations,100); });
