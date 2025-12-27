# homeflip-web-site - Marketing Website for homeflip.ai

**Status:** 🚧 **IN PROGRESS**
**Project:** Marketing website for homeflip.ai SaaS platform
**Last Updated:** 2025-12-27
**Claude Code Version:** Sonnet 4.5 / Gemini 3.5

---

## 📊 Project Status Legend

- 💡 **IDEAS** - Brainstorming, concepts not ready to build yet
- 📝 **PLANNED** - Not started yet, planning phase
- 🚧 **IN PROGRESS** - Active development
- ⏸️ **ON HOLD** - Paused temporarily
- ⏳ **WAITING ON** - Blocked by external dependency (explain what)
- ↩️ **PIVOTED** - Changed direction, old approach abandoned (explain why)
- ✅ **COMPLETE** - Finished and deployed
- 🔧 **MAINTENANCE** - Done but needs occasional updates

**Current Status:** 🚧 IN PROGRESS - IBM Plex Sans body font, CTA redirects to Claim County funnel, No CC required messaging added.

---

## 👋 Welcome Back!

You're working on **homeflip-web-site** - the marketing website for homeflip.ai, a probate real estate lead intelligence platform.

**Live URL:** https://homeflip-web.vercel.app
**GitHub Repo:** https://github.com/wbxprops/homeflip-web

---

## 🎯 What I Need to Know

### Current Focus
**Active Work:** Maintenance and content refinement.

### Session History
#### 2025-12-27
- ✅ Upgraded body font to IBM Plex Sans (more professional/credible)
- ✅ CTAForm now saves to prospects table, redirects to /claim-your-county
- ✅ ClaimCountyForm pre-fills email from URL params
- ✅ Fixed dark mode input visibility on hero CTA
- ✅ Added "(No CC required)" to hero and claim-your-county pages

#### 2025-12-26
- ✅ Fixed SQL scripts for jurisdictions table (added monthly_license_fee)
- ✅ Created booking page with Calendly embed (`/claim-your-county/book`)
- ✅ ClaimCountyForm redirects to booking after submission
- ✅ Calendly pre-populates with user's name (first/last split), email, phone
- ✅ Synced /faq page with homepage FAQ content (16 questions, 6 categories)

#### 2025-12-24
- ✅ AuraLight theme pivot (white backgrounds, clean aesthetic)
- ✅ Claim Your County page with multi-step form
- ✅ County autocomplete from Supabase jurisdictions table
- ✅ Prospects table and form submission

#### 2025-12-23
- ✅ Complete Design Overhaul
- ✅ Modularized into reusable components
- ✅ Added all pages: How It Works, Pricing, About, FAQ, Contact, Waitlist, Legal
- ✅ Applied AuraDark Theme (Deep Purple-Black + Cyan/Purple)
- ✅ Integrated Adobe Fonts (Neue Haas Grotesk + Proxima Nova + Futura PT Condensed)
- ✅ King Kong-inspired Hero section
- ✅ Fixed hydration issues & local dev setup

### Next Session Goals
- [ ] Add remaining states to jurisdictions table (LA through WY)
- [ ] Test full claim-your-county → booking flow end-to-end
- [ ] Connect custom domain (homeflip.ai)
- [ ] Add real dashboard visuals and social proof logos

---

## 📚 Essential Documentation

### Key Files
- **docs/guide-website-overview.md** - Source of truth for content strategy, tone/voice, page structure
- **src/app/page.tsx** - Main landing page (all content)
- **src/app/globals.css** - Brand colors and utility classes
- **src/app/layout.tsx** - SEO metadata and layout

### Brand Colors (from Aura Design System)
```css
--primary: #5EEADC;      /* Teal */
--primary-dark: #2DD4BF;
--secondary: #A855F7;    /* Purple */
--secondary-dark: #7C3AED;
```

### Gradient CTAs
```css
background: linear-gradient(to right, #5EEADC, #A855F7);
```

---

## 🏗️ Project Architecture Quick Reference

### Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** TailwindCSS
- **Hosting:** Vercel (free tier, auto-deploy from GitHub)
- **Database:** Supabase (for waitlist form, shared with homeflip-crm)
- **Font:** IBM Plex Sans (body), Adobe Fonts (headlines)
- **Version Control:** GitHub

### Key Patterns
- Light theme for marketing (AuraLight)
- Pure white backgrounds with plenty of white space
- High-contrast slate text for readability
- Gradient buttons (dark cyan → deep purple) for primary CTAs
- Mobile-first responsive design
- Long-form educational content with icons and bullet points

### Deployment
- Push to `main` branch auto-deploys to Vercel
- No build command needed - Vercel auto-detects Next.js

---

## ⚠️ Critical Things to Remember

### Architecture Decision (2025-12-22)
**PIVOTED from WordPress/Elementor to Next.js/Vercel** because:
- Claude Code can write the code directly - no CMS needed
- Better developer experience and version control
- Easier integration with Supabase for forms
- Free hosting on Vercel
- Future vision: Multi-tenant user website system

### DO NOT:
- ❌ Use dark theme (that's for CRM)
- ❌ Be hypey or "guru" vibe
- ❌ Get too technical about probate law
- ❌ Make it "black + neon SaaS" cliché

### ALWAYS:
- ✅ Keep messaging consistent with guide-website-overview.md
- ✅ Tone: Clear, confident, outcome-driven, practical
- ✅ Include clear CTAs on every section
- ✅ Test on mobile devices
- ✅ Use brand gradient for primary buttons

---

## 🚀 How to Use This File

### Starting a New Session

Just say:
```
"Read homeflip-web-site/CLAUDE_CONTEXT.md and let's work on [what you want to do]"
```

### Common Commands
```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build/Deploy
git add . && git commit -m "message" && git push
# Vercel auto-deploys on push to main

# Type check
npx tsc --noEmit
```

---

## 📂 Project Structure

```
homeflip-web-site/
├── CLAUDE_CONTEXT.md     ⭐ THIS FILE
├── docs/
│   └── guide-website-overview.md   📚 Content strategy & requirements
├── src/
│   └── app/
│       ├── page.tsx      🏠 Main landing page
│       ├── layout.tsx    📐 Root layout + SEO
│       └── globals.css   🎨 Brand colors + utilities
├── public/               🖼️ Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔗 Related Projects

**homeflip-crm:** `../homeflip-crm/`
- Main CRM application - source for branding (Aura Design System)
- Dark glassmorphic theme (vs light for marketing site)

**homeflip-funnel:** `../homeflip-funnel/`
- Sales funnel strategy - may integrate with website

**homeflip-ai:** `../homeflip-ai/`
- Backend services - technical capabilities to market

---

## 📊 Current Status

**Build Status:** Passing (Vercel)
**Deployment:** Production (https://homeflip-web.vercel.app)

**Ready to Work On:** Additional pages, custom domain, form integration
**Blocked By:** Nothing

---

## 📝 Content Sections (Currently on page.tsx)

1. **Hero** - Value prop + dual CTAs
2. **Why Most Investors Struggle** - 4 traditional lead sources compared
3. **Why Probate Is Different** - 4 advantages with icons
4. **Common Objections** - 4 rebuttals (dark section)
5. **Types of Properties** - Grid of property types
6. **Product Value** - 3 core features
7. **How It Works** - 3-step flow
8. **Features Grid** - 6 feature cards
9. **FAQ** - 4 questions with accordions
10. **Final CTA** - Waitlist signup
11. **Footer** - Links and copyright

---

**Remember:** Just start with "Read homeflip-web-site/CLAUDE_CONTEXT.md" and I'll take it from there!
