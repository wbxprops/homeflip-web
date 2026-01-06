# Session Log: Insights Section, Mobile Optimizations, OG Meta Tags

**Date:** 2026-01-06
**Project:** homeflip-web-site
**Focus:** SEO content section, mobile improvements, social sharing

---

## Summary

Built out the `/insights` section for SEO-optimized research articles, created the first article comparing probate vs foreclosures, updated Navbar for light/dark themes, optimized Probate Profit Machine for mobile, and added proper OG meta tags for social sharing.

---

## What Was Accomplished

### 1. Insights Section Architecture
- Created `/insights/page.tsx` - index page listing articles
- Created `/insights/probate-vs-foreclosure/page.tsx` - full article page
- Designed "Featured + More" layout (no dates shown to avoid revealing posting frequency)
- Article card system with category icons, read times, excerpts

### 2. First Research Article: Probate vs Foreclosures
- **Title:** "Probate vs Foreclosures: Why Investors Are Missing Double the Opportunities in 2026"
- SEO-optimized with proper H2/H3 structure
- Data-backed claims with inline citations and References section
- Author: "By Gary Bailey and the HomeFlip.ai Research Team"
- Glassmorphic "How HomeFlip.ai Can Help" section with two CTAs
- Professional, educational tone (citable research, not salesy)
- Removed all em-dashes (AI writing pattern)
- Proper paragraph spacing (mb-6) and larger list fonts (text-lg)

### 3. Navbar Light Theme Variant
- Added `variant` prop: 'dark' (default) or 'light'
- Light variant: white bg, slate text, proper logo swaps
- Updated menu modal to support light theme:
  - Lighter backdrop (bg-slate-900/30)
  - White panel background
  - Slate-colored text and borders
- Footer logo updated for light backgrounds

### 4. Probate Profit Machine Mobile Optimizations
- Reduced parallax animation distances on mobile (100px vs 400px)
- Section padding: `py-16 sm:py-24` for tighter mobile spacing
- Headline sizes adjusted for mobile readability
- Body copy bumped up with responsive sizing
- Silver Tsunami images constrained with max-w-[90vw]
- Card scroller height reduced on mobile
- CTA button z-index fix (z-20) to stay above parallax images

### 5. OG Meta Tags for Social Sharing
- **Homepage:**
  - Title: "AI-Powered Probate Lead Platform for Real Estate Investors"
  - Description: "Find off-market probate deals using real court data and AI-driven insights."
  - Image: `/og-homeflip-homepage.png`
- **Landing Page:**
  - Title: "Free Probate Lead Guide"
  - Description: "How real estate investors find off-market probate deals."
  - Image: `/og-probate-guide.png`
- Added `metadataBase` for proper URL resolution

---

## Files Modified/Created

### New Files
- `src/app/insights/page.tsx` - Insights index page
- `src/app/insights/probate-vs-foreclosure/page.tsx` - Full article
- `src/app/probate-profit-machine/layout.tsx` - OG metadata for landing page
- `public/og-homeflip-homepage.png` - Homepage OG image
- `public/og-probate-guide.png` - Landing page OG image
- `public/silver-tsunami-headline-02.png` - News headline image
- `public/boomer-household-retention-chart.jpg` - Chart image

### Modified Files
- `src/components/Navbar.tsx` - Light/dark variant + themed menu modal
- `src/components/Footer.tsx` - Fixed logo for light backgrounds
- `src/app/layout.tsx` - OG meta tags + metadataBase
- `src/app/probate-profit-machine/page.tsx` - Mobile optimizations
- `src/app/globals.css` - New animations/styles

---

## Technical Notes

### Navbar Light Variant Usage
```tsx
<Navbar variant="light" />
```

### Mobile Parallax Detection
```tsx
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

const mobileOffset = isMobile ? 100 : 400;
```

### OG Meta Tags Structure
```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://homeflip.ai"),
  openGraph: {
    title: "...",
    description: "...",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
```

---

## Key Decisions

1. **No dates on articles** - Avoids revealing posting frequency
2. **Featured/More structure** - Highlights best content without needing many articles
3. **Educational tone** - Citable research positioning, not salesy
4. **Mobile-first parallax** - Reduced animations prevent jarring UX on small screens
5. **Separate OG metadata per route** - Different social previews for different pages

---

## Deployment

- **Commit:** `4849598` - "Add insights section, mobile optimizations, OG meta tags"
- **Pushed to:** origin/master
- **Vercel:** Auto-deploying

---

## Next Session Goals

- [ ] Test OG previews with opengraph.xyz after deploy
- [ ] Add more articles to insights section
- [ ] Consider social sharing buttons on articles
- [ ] Create thank-you page with actual PDF download

---

## Resume Point

All changes pushed. OG images and meta tags configured. Test social previews after Vercel deploy completes.
