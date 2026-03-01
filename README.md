# BarberSuplyHub v3.0

Affiliate review site for professional barber gear.

**Domain:** barbersuplyhub.com  
**GitHub:** Meverick9/barbersuplyhub  
**Amazon tag:** barbersupp044-20  
**Stack:** Next.js 14 · CSS Variables · EN/ES/DE · 6 Color Themes · Vercel  

## Replace the existing repo

```bash
# On your local machine, clone the existing repo
git clone https://github.com/Meverick9/barbersuplyhub.git
cd barbersuplyhub

# Delete ALL old files (keep .git!)
git rm -rf .
git clean -fd

# Copy new files from this ZIP into the folder
# (copy all files from the ZIP here)

# Commit and push — Vercel auto-deploys
git add .
git commit -m "v3: EN/ES/DE + 6 themes + /picks/best-clippers SEO"
git push origin main
```

Vercel detects the push → builds → live in ~90 seconds.  
Domain stays connected. No DNS changes needed. ✅

## Environment Variables (Vercel Dashboard → Settings → Env Vars)
```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_AMAZON_TAG=barbersupp044-20
NEXT_PUBLIC_SITE_URL=https://barbersuplyhub.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Adding Products
Edit `src/lib/data.ts` → add to `PRODUCTS` array → `git push` → auto-deploy.

## Project Structure
```
src/
  app/
    layout.tsx               ← Root layout, GA4, Schema.org
    page.tsx                 ← Homepage (Hero, Picks, Email, FAQ)
    picks/best-clippers/     ← Full SEO page (5 products, buying guide, FAQ)
    api/subscribe/           ← Email capture endpoint
    sitemap.ts               ← Auto sitemap.xml
    robots.ts                ← robots.txt
  components/
    ui/ThemeProvider.tsx     ← Context: theme + lang, localStorage
    layout/Navbar.tsx        ← Sticky nav, lang switcher, theme swatches
    layout/Footer.tsx        ← Footer with all links
  lib/
    data.ts                  ← Products DB, affiliate tag, themes, i18n types
  styles/
    globals.css              ← Full design system, 6 themes, animations
public/
  llms.txt                   ← AI search engine context
```
