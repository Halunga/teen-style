import { chromium } from "playwright";
import { readFile, writeFile } from "node:fs/promises";

const source = "https://kidsbrandstore.se/kille";
const sources = [
  { url: `${source}/ytterklader/jackor`, category: "jackor" },
  { url: `${source}/t-shirts-linnen`, category: "overdelar" },
  { url: `${source}/trojor`, category: "overdelar" },
  { url: `${source}/skjortor`, category: "overdelar" },
  { url: `${source}/byxor`, category: "byxor" },
  { url: `${source}/jeans`, category: "byxor" },
  { url: `${source}/shorts`, category: "byxor" },
  { url: `${source}/skor`, category: "skor" },
  { url: `${source}/accessoarer`, category: "accessoarer" },
];
const outputPath = new URL("../products.json", import.meta.url);
const previousCatalog = JSON.parse(await readFile(outputPath, "utf8"));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  locale: "sv-SE",
  viewport: { width: 1440, height: 1200 },
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36",
});

try {
  const rawProducts = [];
  for (const catalogSource of sources) {
    await page.goto(catalogSource.url, { waitUntil: "domcontentloaded", timeout: 60_000 });
    await page.waitForTimeout(2_500);
    for (let index = 0; index < 10; index += 1) {
      await page.mouse.wheel(0, 2600);
      await page.waitForTimeout(600);
    }
    const pageProducts = await page.locator('a[href*="/products/"]').evaluateAll(anchors =>
      anchors.map(anchor => ({
        url: anchor.href,
        text: anchor.innerText,
        image: anchor.querySelector("img")?.currentSrc || anchor.querySelector("img")?.src || "",
      }))
    );
    rawProducts.push(...pageProducts.map(product => ({ ...product, categoryHint: catalogSource.category })));
    console.log(`${catalogSource.category}: observed ${pageProducts.length} product cards.`);
  }

  const products = [...new Map(rawProducts.map(item => [item.url, normalizeProduct(item)]))]
    .map(([, product]) => product)
    .filter(product => product.name && product.brand && product.image && product.price > 0);

  const minimumSafeCount = Math.max(8, Math.floor(previousCatalog.products.length * 0.7));
  if (products.length < minimumSafeCount) {
    throw new Error(`Only found ${products.length} valid products; refusing to replace ${previousCatalog.products.length}.`);
  }

  const catalog = {
    updatedAt: new Date().toISOString(),
    source,
    products,
  };
  await writeFile(outputPath, `${JSON.stringify(catalog, null, 2)}\n`);
  console.log(`Updated catalog with ${products.length} products.`);
} finally {
  await browser.close();
}

function normalizeProduct(item) {
  const lines = item.text.split("\n").map(value => value.trim()).filter(Boolean);
  const priceLines = lines.filter(value => /\d[\d\s.,]*\s*kr/i.test(value));
  const prices = priceLines.map(parsePrice).filter(Boolean);
  const labels = new Set(["REA", "NYHET", "EXKLUSIV", "3-PACK", "2-PACK", "5-PACK"]);
  const words = lines.filter(value => !labels.has(value.toUpperCase()) && !/\d[\d\s.,]*\s*kr/i.test(value));
  const brand = words[0] || "";
  const name = words[1] || "";
  const price = prices[0] || 0;
  const old = prices[1] || price;
  const discount = old > price ? Math.round((1 - price / old) * 100) : 0;
  return {
    id: stableId(item.url),
    name: titleCase(name),
    brand,
    store: "Kids Brand Store",
    category: item.categoryHint || inferCategory(`${name} ${brand}`),
    price,
    old,
    discount,
    new: lines.some(value => value.toUpperCase() === "NYHET"),
    secondhand: false,
    url: item.url,
    image: item.image.replace(/&w=\d+/, "&w=1080"),
  };
}

function parsePrice(value) {
  return Number(value.replace(/[^\d,.-]/g, "").replace(",", "."));
}

function stableId(value) {
  let hash = 0;
  for (const character of value) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  return hash;
}

function titleCase(value) {
  return value.toLowerCase().replace(/\b\p{L}/gu, character => character.toUpperCase());
}

function inferCategory(value) {
  const text = value.toLowerCase();
  if (/jacka|jacket|vest|väst|coat|parka|overshirt/.test(text)) return "jackor";
  if (/shoe|sneaker|sko|boot|trainer|sandal|force 1/.test(text)) return "skor";
  if (/jean|pant|trouser|short|byxa|chino|cargo/.test(text)) return "byxor";
  if (/sock|boxer|underwear|belt|cap|hat|bag|watch|mössa/.test(text)) return "accessoarer";
  return "overdelar";
}
