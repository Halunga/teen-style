# STILKOLL

STILKOLL is a Swedish-focused fashion discovery MVP for teenage boys. It helps users understand trends, compare deals, build complete looks, and discover grooming inspiration.

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000`.

## Current MVP

- Search, category filters, deal filters, and sorting
- Saved products stored locally in the browser
- Complete outfit inspiration with SEK budgets
- Swedish-market trend and grooming sections
- Interactive Swedish trend radar with seven-day and three-month momentum, confidence, related searches, and product availability
- Responsive desktop and mobile interface

The featured catalog currently uses a curated selection from Kids Brand Store with direct product links and retailer-hosted product images. Displayed prices were observed on June 12, 2026 and must be verified at the retailer before purchase.

## Live-data roadmap

1. Create a small scheduled ingestion service using authorized retailer or affiliate product feeds.
2. Normalize retailer, product, variant, size, price, previous price, image, URL, and update timestamp.
3. Store price history to calculate a trustworthy deal score and avoid misleading discounts.
4. Add stock and size availability, location-aware delivery cost, and price alerts.
5. Add editorial review and age-appropriate moderation before publishing trend content.

The trend radar currently uses an explicitly labeled research snapshot. Its model is ready to consume scheduled Swedish Google Trends data through `pytrends`; `pytrends` is unofficial and must be treated as one noisy signal rather than a source of absolute search volume.

Useful source categories include retailer affiliate feeds, Swedish price-comparison partners, and authorized second-hand marketplace integrations. Do not scrape retailer sites without permission.
