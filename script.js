const products=[
{name:"ليالي الورد",cat:"مطرز",price:349,badge:"الأكثر مبيعاً"},
{name:"SOL CLASSIC",cat:"كلاسيك",price:289,badge:"جديد"},
{name:"موف ساتان",cat:"مودرن",price:329,badge:"حصري"},
{name:"أميرة المساء",cat:"فخم",price:449,badge:"Limited"},
{name:"BLACK LOVE",cat:"كلاسيك",price:279,badge:""},
{name:"روز غولد",cat:"مودرن",price:319,badge:"جديد"},
{name:"تفاصيل لؤلؤ",cat:"مطرز",price:389,badge:""},
{name:"ليلة العمر",cat:"فخم",price:499,badge:"حصري"}
];
let activeCat="الكل", cart=[];
const productEl=document.getElementById("products");
function renderProducts(){
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 const list=products.filter(p=>(activeCat==="الكل"||p.cat===activeCat)&&p.name.toLowerCase().includes(q));
 productEl.innerHTML=list.map((p,i)=>`<article class="product">
   <div class="product-img"><button class="heart" onclick="showToast('أضيفت للمفضلة ♡')">♡</button>${p.badge?`<span class="tag">${p.badge}</span>`:""}</div>
   <h3>${p.name}</h3><p>${p.cat} · SOL ABAYAS</p><p class="price">${p.price} ر.س</p>
   <button class="add" onclick="addToCart(${products.indexOf(p)})">أضيفي للسلة</button>
 </article>`).join("")||"<p>ما لقينا نتائج، جربي كلمة ثانية ♡</p>";
}
function filterProducts(cat,btn){
 activeCat=cat;
 document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));
 if(btn)btn.classList.add("active");
 document.getElementById("shop").scrollIntoView({behavior:"smooth"});
 renderProducts();
}
function addToCart(i){cart.push(products[i]);updateCart();openCart();showToast("انضافت للسلة ♡")}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><div class="cart-thumb"></div><div><b>${p.name}</b><p>${p.price} ر.س</p><button onclick="removeCart(${i})" style="border:0;background:none;color:#a44764;cursor:pointer">حذف</button></div></div>`).join(""):"<p style='text-align:center;color:#987780;margin-top:70px'>السلة فاضية… اختاري عبايتك ♡</p>";
 document.getElementById("cartTotal").textContent=cart.reduce((s,p)=>s+p.price,0)+" ر.س";
}
function removeCart(i){cart.splice(i,1);updateCart()}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("open")}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("open")}
function checkout(){if(!cart.length)return showToast("السلة فاضية ♡");showToast("هنا نربط الدفع/واتساب لاحقاً ✦")}
function showToast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
function focusSearch(){document.getElementById("search").focus();document.getElementById("shop").scrollIntoView({behavior:"smooth"})}
function toggleMenu(){const n=document.getElementById("nav");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="82px";n.style.right="0";n.style.background="#fff";n.style.padding="20px";n.style.flexDirection="column";n.style.width="100%"}
renderProducts();updateCart();
