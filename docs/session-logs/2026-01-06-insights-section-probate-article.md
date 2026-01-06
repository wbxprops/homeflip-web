# Session Log: Insights Section & Probate vs Foreclosures Article

**Date:** 2026-01-06
**Project:** homeflip-web-site
**Focus:** SEO content section and first research article

---

## Summary

Built out the `/insights` section for hosting SEO-optimized research articles, created the first article comparing probate properties vs foreclosures, and updated Navbar to support light/dark theme variants.

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
- Footer logo updated to use light-background version

---

## Files Modified/Created

### New Files
- `src/app/insights/page.tsx` - Insights index page
- `src/app/insights/probate-vs-foreclosure/page.tsx` - Full article

### Modified Files
- `src/components/Navbar.tsx` - Added variant prop + light theme menu modal
- `src/components/Footer.tsx` - Fixed logo to use light-bg version

---

## Technical Notes

### Insights Page Structure
```tsx
const articles = [
  {
    slug: "probate-vs-foreclosure",
    title: "...",
    excerpt: "...",
    category: "Market Research",
    readTime: "8 min read",
    icon: <BarChart3 />,
    featured: true
  }
];

// Featured articles get star icon section
// Non-featured go to "More Insights" grid
```

### Navbar Light Variant Usage
```tsx
<Navbar variant="light" />
```

---

## Key Decisions

1. **No dates on articles** - Avoids revealing posting frequency
2. **Featured/More structure** - Highlights best content without needing many articles
3. **Educational tone** - Citable research positioning, not salesy
4. **Two CTAs in article** - "Find Out More" + "Claim Your County" for choose-your-own-adventure

---

## Next Session Goals

- [ ] Push changes to Vercel
- [ ] Test insights pages on production
- [ ] Add more articles to insights section
- [ ] Consider adding social sharing buttons to articles

---

## Resume Point

Light theme menu modal complete. Ready to push and test on production.
