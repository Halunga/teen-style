const products = [
  {id:101,name:"Essential Crew Sock 3P",brand:"Björn Borg",store:"Kids Brand Store",category:"accessoarer",price:69.30,old:99,discount:30,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/essential-crew-sock-3p-141457",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8yMDQ4MzdcLzAxSkM1MlZNNlM4M1dQSFYwRkMxQUNCR1ZQLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:102,name:"Plain T-Shirt",brand:"Lyle & Scott",store:"Kids Brand Store",category:"overdelar",price:269.10,old:299,discount:10,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/plain-t-shirt-99708",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8yMzMyMzRcLzAxSzlZTlRQTUUzUENOU1k2Uzg3OUZITVcxLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:103,name:"Boys Basic CN Knit S/S",brand:"Tommy Hilfiger",store:"Kids Brand Store",category:"overdelar",price:173.40,old:289,discount:40,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/boys-basic-cn-knit-s-s-10583",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8yMzMxNThcLzAxSzlZSjMzMEM1WE1NUktQMzZLTVZXNFpDLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:104,name:"C-Neck T-Shirt 2-Pack",brand:"GANT",store:"Kids Brand Store",category:"overdelar",price:314.30,old:449,discount:30,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/c-neck-t-shirt-2-pack-41034",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8xOTI5OTBcL2hYb211T3VMcE5wU3pPTm4zMTh1RkVQS25uU2lpTi1tZXRhTXpReU5UWTJOMms0ZFc5cGI4eUliR3ByYUdwbmFHWm5ZbU4yTG1wd1p3PT0tLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:105,name:"Jackson Linen Shorts",brand:"RYVLS",store:"Kids Brand Store",category:"byxor",price:359.10,old:399,discount:10,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/jackson-linen-shorts-156697",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8yNDYxNzVcLzAxS1E5WFRUMTcyRDI4UTFKRDg4NlYyNDhYLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:106,name:"555 Relaxed Straight Jeans",brand:"Levi's",store:"Kids Brand Store",category:"byxor",price:494.10,old:549,discount:10,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/lvb-555-relaxed-straight-jeans-1205826",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8yMzYyNTdcLzAxS0ZaUERBWEg4VkpXVjY5M1RBSktINzlTLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:107,name:"Crew Neck Sweatshirt",brand:"Lyle & Scott",store:"Kids Brand Store",category:"overdelar",price:584.10,old:649,discount:10,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/crew-neck-sweatshirt-128182",image:"https://kidsbrandstore.se/_next/image?url=https%3A%2F%2Fimg.kidsbrandstore.com%2FeyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8xOTcxNzBcL3AzcURkdWRaMWVPV0FJRjJNRU9iTlNNREd2TXQySi1tZXRhTlRBMU9UYzNOVEEyTXpJM01pMTBiM0F0Wm5KdmJuUXRRMUl5TFRJdWFuQm4tLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0%3D&w=1080&q=75"},
  {id:108,name:"Air Force 1 LE (GS)",brand:"Nike",store:"Kids Brand Store",category:"skor",price:1034.10,old:1149,discount:10,new:false,secondhand:false,url:"https://kidsbrandstore.se/products/air-force-1-le-gs-487783",image:"https://img.kidsbrandstore.com/eyJrZXkiOiJtZWRpYS1saWJyYXJ5XC8yMjQwOThcLzAxSzJDQ0E4WlFGWFFaWVpIVzRDMDJNSlFKLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6OTB9LCJqcGVnIjp7InF1YWxpdHkiOjkwfSwicmVzaXplIjp7IndpZHRoIjpudWxsLCJoZWlnaHQiOm51bGx9fSwiYnVja2V0Ijoia2JzLXBpbS1wcm9kdWN0aW9uIn0="}
];

const trends = [
  {id:"baggy",name:"Baggy jeans",category:"Silhuett",week:34,quarter:18,score:91,confidence:"Hög säkerhet",available:2,description:"Rymligare denim fortsätter växa, men rena tvättar och bättre proportioner tar över från extrem oversize.",related:["baggy jeans herr","Levi's 555","wide leg jeans"],bars:[35,48,43,61,70,76,92]},
  {id:"jorts",name:"Jorts",category:"Säsong",week:47,quarter:29,score:89,confidence:"Hög säkerhet",available:1,description:"Långa jeansshorts är den tydligaste sommarspiken. Bäst med en enkel t-shirt och slimmare sko.",related:["jorts outfit","långa jeansshorts","denim shorts herr"],bars:[22,31,40,52,59,75,96]},
  {id:"preppy",name:"Smart preppy",category:"Stil",week:16,quarter:32,score:86,confidence:"Medel säkerhet",available:4,description:"Piké, stickat och skjorta används mer avslappnat. Den längre tillväxten är starkare än veckans spike.",related:["old money outfit herr","stickad tröja herr","GANT t-shirt"],bars:[42,48,51,55,64,69,76]},
  {id:"utility",name:"Utility layers",category:"Stil",week:21,quarter:24,score:82,confidence:"Medel säkerhet",available:0,description:"Overshirts, cargobyxor och praktiska detaljer håller i sig. Jordtoner gör looken lättare att kombinera.",related:["overshirt herr","cargobyxor","olive outfit"],bars:[38,45,43,55,60,63,79]},
  {id:"sneakers",name:"Rena sneakers",category:"Skor",week:12,quarter:20,score:78,confidence:"Hög säkerhet",available:1,description:"Klassiska vita modeller fungerar som motvikt till bredare byxor och mer uttrycksfulla överdelar.",related:["vita sneakers herr","Air Force 1","clean sneakers"],bars:[55,57,59,62,64,67,72]},
  {id:"blokecore",name:"Blokecore 2.0",category:"Stil",week:-6,quarter:11,score:69,confidence:"Låg säkerhet",available:0,description:"Fotbollströjor lever kvar, men momentum bromsar. Nyare looks blandar sport med smartare byxor och accessoarer.",related:["football jersey outfit","blokecore herr","retro fotbollströja"],bars:[82,79,76,72,71,67,62]}
];

const hairPlans = {
  straight: {
    short:{name:"Textured crop",brief:"Be om en låg taper, 4–6 cm texturerad längd ovanpå och en mjuk, ojämn lugg.",why:"Ger rakt hår form utan att kräva mycket volym eller lång styling."},
    medium:{name:"Textured flow",brief:"Behåll 10–14 cm ovanpå, mjuka lager och en saxad taper runt öron och nacke.",why:"Lagren hjälper rakt hår att röra sig i stället för att bara ligga platt."},
    long:{name:"Layered curtains",brief:"Be om ansiktsramande lager, mittbena och städade längder runt öron och nacke.",why:"Lager gör längre rakt hår lättare och mer genomtänkt."}
  },
  wavy: {
    short:{name:"Wavy taper",brief:"Be om en låg taper och behåll 5–7 cm vågig textur ovanpå.",why:"Tar vara på din naturliga rörelse och behöver nästan ingen värmestyling."},
    medium:{name:"Messy flow",brief:"Behåll längden, lägg in mjuka lager och undvik att tunna ur för aggressivt.",why:"Vågigt hår har redan den textur många försöker skapa med produkter."},
    long:{name:"Surfer layers",brief:"Be om långa lager och en ren form runt ansiktet utan hårda linjer.",why:"Kontrollerar volymen men låter vågorna vara huvudgrejen."}
  },
  curly: {
    short:{name:"Modern curly taper",brief:"Be om låg taper, ren nacke och behåll tillräcklig längd ovanpå för definierade lockar.",why:"En tydlig form gör att lockarna ser avsiktliga ut även utan mycket styling."},
    medium:{name:"Curly fringe",brief:"Behåll rundad form och lockig lugg; klipp helst lock för lock när håret är torrt.",why:"Ramar in ansiktet och visar lockarna utan att bli för brett på sidorna."},
    long:{name:"Layered curls",brief:"Be om balanserade lager som tar bort tyngd utan att skapa en triangel-form.",why:"Rätt lager ger jämn volym och mindre trassel."}
  },
  coily: {
    short:{name:"Defined low taper",brief:"Be om låg taper och en ren shape-up, men behåll naturlig textur ovanpå.",why:"Skarp form, låg daglig insats och gott om utrymme för din naturliga textur."},
    medium:{name:"Coily rounded shape",brief:"Be om en jämn rundad form, försiktig trimning och rena kanter.",why:"En balanserad form låter tät textur se fyllig och kontrollerad ut."},
    long:{name:"Layered coils",brief:"Be om formbevarande lager och minimal urtunning; prioritera friska toppar.",why:"Behåller definition och minskar ojämn tyngd."}
  }
};

const routines = {
  straight:["Fukta lätt","Arbeta in lite produkt från bak till fram","Forma med fingrar och låt torka"],
  wavy:["Fukta tills håret är lätt fuktigt","Krama in produkt, borsta inte ut","Lufttorka utan att röra för mycket"],
  curly:["Blöt eller återfukta lockarna","Krama in leave-in och curl cream","Lufttorka eller använd låg diffusor"],
  coily:["Återfukta med vatten eller leave-in","Fördela kräm sektion för sektion","Låt torka och undvik att pilla"]
};

let category = "all";
let filter = "all";
let saved = JSON.parse(localStorage.getItem("stilkoll-saved") || "[]");
saved = saved.filter(id => products.some(product => product.id === id));
localStorage.setItem("stilkoll-saved", JSON.stringify(saved));
const grid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const trendList = document.querySelector("#trendList");
const trendDetail = document.querySelector("#trendDetail");
const hairGuide = document.querySelector("#hairGuide");
const hairGuideForm = document.querySelector("#hairGuideForm");
const hairGuideResult = document.querySelector("#hairGuideResult");
let trendPeriod = "week";
let activeTrend = trends[0].id;

function renderProducts() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = products.filter(p => (category === "all" || p.category === category) && (`${p.name} ${p.brand} ${p.store}`.toLowerCase().includes(query)));
  if (filter === "under500") visible = visible.filter(p => p.price < 500);
  if (filter === "sale30") visible = visible.filter(p => p.discount >= 30);
  if (filter === "secondhand") visible = visible.filter(p => p.secondhand);
  if (filter === "new") visible = visible.filter(p => p.new);
  visible.sort((a,b) => sortSelect.value === "price-low" ? a.price-b.price : b.discount-a.discount);
  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <a class="product-card-link" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Se ${p.brand} ${p.name} hos Kids Brand Store">
      <div class="product-image" style="background-image:url('${p.image}')">
        <span class="${p.new ? "fresh-badge" : "discount-badge"}">${p.new ? "NYTT IDAG" : `−${p.discount}%`}</span>
      </div>
      </a>
      <button class="save-product ${saved.includes(p.id) ? "saved" : ""}" data-save="${p.id}" aria-label="Spara ${p.name}">${saved.includes(p.id) ? "♥" : "♡"}</button>
      <div class="product-info">
        <div class="product-source"><span>${p.brand}</span><span>Kids Brand Store</span></div>
        <h3>${p.name}</h3>
        <div class="price-row"><strong>${money(p.price)}</strong><del>${money(p.old)}</del><span class="deal-score">−${p.discount}%</span></div>
        <a class="store-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Till butiken <span>↗</span></a>
      </div>
    </article>`).join("");
  document.querySelector("#emptyState").hidden = visible.length > 0;
  document.querySelector("#savedCount").textContent = saved.length;
}

function money(value) {
  return new Intl.NumberFormat("sv-SE", {style:"currency",currency:"SEK",maximumFractionDigits:2}).format(value);
}

function renderTrends() {
  const sorted = [...trends].sort((a,b) => b[trendPeriod] - a[trendPeriod]);
  trendList.innerHTML = sorted.map((trend,index) => `
    <button class="trend-row ${trend.id === activeTrend ? "active" : ""}" data-trend="${trend.id}">
      <span class="trend-position">${String(index + 1).padStart(2,"0")}</span>
      <span class="trend-name"><strong>${trend.name}</strong><small>${trend.category} · ${trend.confidence}</small></span>
      <span class="mini-bars">${trend.bars.map(value => `<i style="height:${value}%"></i>`).join("")}</span>
      <span class="trend-move ${trend[trendPeriod] >= 0 ? "up" : ""}">${trend[trendPeriod] >= 0 ? "+" : ""}${trend[trendPeriod]}%</span>
    </button>`).join("");
  renderTrendDetail();
}

function renderTrendDetail() {
  const trend = trends.find(item => item.id === activeTrend);
  const googleUrl = `https://trends.google.com/trends/explore?geo=SE&q=${encodeURIComponent(trend.name)}`;
  trendDetail.innerHTML = `
    <div class="detail-top"><span class="section-kicker">Varför den trendar</span><span class="confidence">${trend.confidence}</span></div>
    <h3>${trend.name}</h3>
    <p>${trend.description}</p>
    <div class="score-ring" style="--score:${trend.score}"><div><strong>${trend.score}</strong><small>trendpoäng</small></div></div>
    <div class="detail-signals">
      <div><small>7 dagar</small><strong>${trend.week >= 0 ? "+" : ""}${trend.week}%</strong></div>
      <div><small>3 månader</small><strong>${trend.quarter >= 0 ? "+" : ""}${trend.quarter}%</strong></div>
      <div><small>Deals i appen</small><strong>${trend.available}</strong></div>
      <div><small>Marknad</small><strong>Sverige</strong></div>
    </div>
    <span class="related-label">Relaterade sökningar</span>
    <div class="related-tags">${trend.related.map(term => `<span>${term}</span>`).join("")}</div>
    <a class="trend-source-link" href="${googleUrl}" target="_blank" rel="noopener noreferrer">Utforska signalen i Google Trends ↗</a>`;
}

function renderHairPlan(formData) {
  const texture = formData.get("texture");
  const length = formData.get("length");
  const effort = formData.get("effort");
  const budget = formData.get("budget");
  const plan = hairPlans[texture][length];
  const styling = effort === "low" ? "Lufttorka och använd mindre än en ärtas storlek produkt." : effort === "medium" ? "Forma med fingrar och använd hårfön på låg värme vid behov." : "Föna kontrollerat och bygg formen i flera små steg.";
  const products = getHairProducts(texture,budget);
  const total = products.reduce((sum,item) => sum + item.price,0);
  hairGuideResult.innerHTML = `
    <span class="result-label">Din bästa match</span>
    <h3>${plan.name}</h3>
    <p class="result-match">${plan.why} ${styling}</p>
    <div class="barber-brief"><span>Visa eller säg detta till frisören</span><p>“${plan.brief}”</p></div>
    <div class="routine"><h4>Din morgonrutin</h4><div class="routine-list">${routines[texture].map((step,index)=>`<div><strong>0${index+1}</strong><p>${step}</p></div>`).join("")}</div></div>
    <div class="products"><h4>Produkter som räcker</h4>${products.map(product=>`<div class="product-recommendation"><div><strong>${product.name}</strong><small>${product.use}</small></div><span>ca ${product.price} kr</span></div>`).join("")}<div class="result-total"><span>Startbudget</span><span>ca ${total} kr</span></div></div>
    <button class="guide-reset" type="button" id="hairGuideReset">Ändra mina svar</button>`;
  hairGuideResult.scrollIntoView({behavior:"smooth",block:"nearest"});
}

function getHairProducts(texture,budget) {
  const base = texture === "straight"
    ? [{name:"Matt styling paste",use:"Form och textur",price:89},{name:"Saltvattenspray",use:"Lätt volym",price:79}]
    : texture === "wavy"
      ? [{name:"Lätt curl cream",use:"Definition utan tyngd",price:99},{name:"Leave-in spray",use:"Fukt och mindre friss",price:89}]
      : [{name:"Curl cream",use:"Definition och kontroll",price:109},{name:"Leave-in conditioner",use:"Fukt och mjukhet",price:99}];
  if (budget === "low") return [base[0]];
  if (budget === "high") return [...base,{name:"Mildt schampo",use:"Rengör utan att torka ut",price:119}];
  return base;
}

document.querySelector("#categoryRow").addEventListener("click", e => {
  const button = e.target.closest("[data-category]"); if (!button) return;
  document.querySelectorAll("[data-category]").forEach(x => x.classList.remove("active")); button.classList.add("active");
  category = button.dataset.category; renderProducts();
});
document.querySelector(".filter-row").addEventListener("click", e => {
  const button = e.target.closest("[data-filter]"); if (!button) return;
  document.querySelectorAll("[data-filter]").forEach(x => x.classList.remove("active")); button.classList.add("active");
  filter = button.dataset.filter; renderProducts();
});
grid.addEventListener("click", e => {
  const button = e.target.closest("[data-save]"); if (!button) return;
  const id = Number(button.dataset.save); saved = saved.includes(id) ? saved.filter(x => x !== id) : [...saved,id];
  localStorage.setItem("stilkoll-saved", JSON.stringify(saved)); renderProducts(); showToast(saved.includes(id) ? "Sparad till din lista" : "Borttagen från sparat");
});
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.querySelector("#searchToggle").addEventListener("click", () => { document.querySelector("#deals").scrollIntoView(); setTimeout(() => searchInput.focus(), 400); });
document.querySelector("#savedToggle").addEventListener("click", () => showToast(saved.length ? `${saved.length} produkter sparade` : "Du har inte sparat något ännu"));
document.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.toast)));
trendList.addEventListener("click", event => {
  const button = event.target.closest("[data-trend]"); if (!button) return;
  activeTrend = button.dataset.trend; renderTrends();
});
document.querySelector(".period-switch").addEventListener("click", event => {
  const button = event.target.closest("[data-period]"); if (!button) return;
  document.querySelectorAll("[data-period]").forEach(item => item.classList.remove("active")); button.classList.add("active");
  trendPeriod = button.dataset.period; renderTrends();
});
document.querySelector("#hairGuideStart").addEventListener("click", () => {
  hairGuide.hidden = false;
  hairGuide.scrollIntoView({behavior:"smooth",block:"start"});
});
document.querySelector("#hairGuideClose").addEventListener("click", () => {
  hairGuide.hidden = true;
  document.querySelector("#grooming").scrollIntoView({behavior:"smooth",block:"start"});
});
hairGuideForm.addEventListener("submit", event => {
  event.preventDefault();
  renderHairPlan(new FormData(hairGuideForm));
});
hairGuideResult.addEventListener("click", event => {
  if (!event.target.closest("#hairGuideReset")) return;
  hairGuideForm.scrollIntoView({behavior:"smooth",block:"start"});
});
function showToast(message){const toast=document.querySelector("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove("show"),2200)}
renderProducts();
renderTrends();
