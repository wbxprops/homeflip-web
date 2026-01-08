# homeflip-web-site - Marketing Website for homeflip.ai

**Status:** 🚧 **IN PROGRESS**
**Project:** Marketing website for homeflip.ai SaaS platform
**Last Updated:** 2026-01-08
**Claude Code Version:** Opus 4.5

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

**Current Status:** 🚧 IN PROGRESS - Resource Hub with guide sections and community workspace complete.

---

## 👋 Welcome Back!

You're working on **homeflip-web-site** - the marketing website for homeflip.ai, a probate real estate lead intelligence platform.

**Live URL:** https://homeflip-web.vercel.app
**GitHub Repo:** https://github.com/wbxprops/homeflip-web

---

## 🎯 What I Need to Know

### Current Focus
**Active Work:** Resource Hub build-out complete. Ready for Training Videos page or additional content.

### Session History
#### 2026-01-08 (Claim Your County Wording Consistency)
- ✅ Fixed main site Claim Your County form to match Resource Hub wording exactly
- ✅ Step 3: "County Activation Pending" + "Finalize Setup" button
- ✅ Removed "Next step" subtext from confirmation step
- ✅ Step 4: Changed "setup call" to "implementation call" throughout
- ✅ Calendly branding: Added `primary_color=5EEADC` for teal theme
- ✅ Navbar: Insights link, glassmorphic right-aligned menu, larger logo/phone
- ✅ Fixed build errors: curly apostrophes in part-3, TypeScript Calendly types
- **Deployed**: Commits `04853af`, `bb68ae0` pushed to origin/master

#### 2026-01-07 (Resource Hub: Guide & Community)
- ✅ Expandable "Probate Profit Machine" nav with Part I, II, III sub-items
- ✅ Guide overview page with section cards and secondary PDF download
- ✅ Part I: "What Is Probate?" - documentation-style reading view
- ✅ Part II: "Finding Cases" - documentation-style reading view
- ✅ Part III: "Making Contact" - documentation-style reading view
- ✅ Community Workspace page redesigned as "bridge surface" (~50-60% marketing)
- ✅ 2-column layout with feature tiles (Live Calls, Trainings, D2S, Real Estate Empires)
- ✅ Layout updates: smaller logo (h-6), aligned with nav icons (pl-5)
- **Deployed**: Commit `0b4bb7e` pushed to origin/master

#### 2026-01-06 (Insights, Mobile, OG Tags)
- ✅ Created `/insights/page.tsx` - index page with Featured/More structure (no dates)
- ✅ Created `/insights/probate-vs-foreclosure/page.tsx` - first research article
- ✅ Navbar: Added `variant` prop for light/dark themes + themed menu modal
- ✅ Footer: Fixed logo for light backgrounds
- ✅ **Probate Profit Machine mobile optimizations:**
  - Reduced parallax animation distances (100px vs 400px on mobile)
  - Section padding: `py-16 sm:py-24`
  - Headline sizes adjusted for mobile readability
  - CTA z-index fix (z-20) to stay above parallax images
- ✅ **OG Meta Tags for social sharing:**
  - Homepage: "AI-Powered Probate Lead Platform for Real Estate Investors"
  - Landing page: "Free Probate Lead Guide"
  - Added `metadataBase` for proper URL resolution
  - Created OG images: `og-homeflip-homepage.png`, `og-probate-guide.png`
- ✅ **Extended Mobile Polish (Continued Session):**
  - Hero: Headline moved to top, increased to 13vw, center-justified
  - CTAs: Full-width with `text-[6.5vw]` + `whitespace-nowrap`
  - Ebook rotation reduced from 8deg to 3deg on mobile
  - All section headlines unified at `text-5xl` on mobile
  - Card signal dots hidden on mobile
  - Step-by-step subheadline hidden on mobile
- **Deployed**: Commits `4849598`, `a6e500d` pushed to origin/master

#### 2026-01-05 (Session 3 - Full Sections Build-Out)
- ✅ Fixed Space Grotesk font-family to `"space-grotesk-variable"`
- ✅ Removed Space Grotesk from eyebrow/subheadline (IBM Plex Sans better)
- ✅ Reduced header hide threshold (100px → 20px)
- ✅ Removed logo link to reduce leakage
- ✅ Minimal footer (© 2026 WhiteBox Academy + Terms/Privacy)
- ✅ Section 2: Stats - "A Generational Transfer of Wealth Is Underway" (41%, ~32M, 9M+)
- ✅ Section 3: Why Probate - 6 bullet points with progressive animations
- ✅ Section 4: What's Inside - 5 icon cards (3-2 centered layout)
- ✅ Section 5: Timing - "Timing Is Everything" two-column layout
- ✅ Section 6: Unasked Question - "Can You Even Contact These Families?"
- ✅ Section 7: Final CTA echoing hero design
- ✅ CTA buttons after sections 2-5 ("Download Your Free Guide")
- **Resume**: Push to Vercel, replace placeholder graphic in Timing section

#### 2026-01-05 (Session 2 - Hero Refinements)
- ✅ Ebook mockup: increased size, left nudge on desktop, soft teal ambient glow
- ✅ Mobile layout: ebook first, CTA underneath
- ✅ Modal: animated progress bar with "Almost There!", larger headline/button, shimmer effect
- ✅ Fixed phone autofill country code issue (strips leading "1")
- ✅ Headline testing: new eyebrow, main headline, subheadline copy

#### 2026-01-05 (Session 1)
- ✅ Confirmed jurisdictions table: 51 states/DC, 3,103 counties
- ✅ Mobile navbar: icon-only logo, centered CTA, pulsing glow animation
- ✅ Created `/probate-profit-machine` landing page (renamed from `/free-guide`)
- ✅ Redesigned to match main homeflip.ai style (dark hero, teal glows, Futura PT Condensed)
- ✅ Two-column hero with ebook image
- ✅ Custom transparent header that fades on scroll
- ✅ Modal form popup for lead capture
- ✅ New themed ebook cover (`ebook-cover-probate-profit-machine.png`)

#### 2025-12-27
- ✅ Upgraded body font to IBM Plex Sans (more professional/credible)
- ✅ CTAForm now saves to prospects table, redirects to /claim-your-county
- ✅ ClaimCountyForm pre-fills email from URL params
- ✅ Fixed dark mode input visibility on hero CTA
- ✅ Added "(No CC required)" to hero and claim-your-county pages
- ✅ Fixed mobile button size consistency
- ✅ Fixed Suspense boundary for useSearchParams (Vercel build)
- ✅ **NEW: prospect_responses table** - tracks every form submission for lead scoring/engagement

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
- [x] ~~Add remaining states to jurisdictions table~~ (DONE - 51 states, 3,103 counties)
- [x] ~~Connect custom domain~~ (homeflip.ai is live!)
- [x] ~~Resource Hub guide sections~~ (DONE - Part I, II, III)
- [x] ~~Community Workspace page~~ (DONE - bridge surface design)
- [ ] **🔥 Google Tag Manager + Google Analytics** - PRIORITY! Track Insights article performance. Install GTM container in layout.tsx, configure GA4 property, set up page view tracking. Articles are getting traction, need analytics ASAP.
- [ ] **Resource Hub: Probate Profit Machine enhancements** (see `docs/CONTEXT-probate-profit-machine-guide.md`)
  - [ ] Build AudioPlayer component (Wistia embed)
  - [ ] Build FullStoryCallout component
  - [ ] Add Part IV page
  - [ ] Add audio players to Part I, II, III, IV pages
  - [ ] Update guide overview with audio indicators
  - [ ] Connect PDF download to actual file
- [ ] Training Videos page content
- [ ] Test upgrade flow end-to-end (Claim Your County → Calendly)
- [ ] Mobile testing for Resource Hub pages
- [ ] **Insights Article: TCPA Compliance** - Write article about TCPA regulations for real estate investors contacting probate leads. Clever title idea: "TCPA: It's Not Optional" or similar. Cover do-not-call rules, cold texting fines, state-specific calling hours, legal disclaimers. Critical topic referenced in Probate Profit Machine ebook. **IMPORTANT:** Once published, link to this article from Section 3 of the Probate Profit Machine guide (compliance disclaimer section).

---

## 📚 Essential Documentation

### Key Files
- **docs/guide-website-overview.md** - Source of truth for content strategy, tone/voice, page structure
- **docs/CONTEXT-resource-hub.md** - Resource Hub philosophy and design rules
- **docs/CONTEXT-probate-profit-machine-guide.md** - PPM guide implementation (web/audio/PDF model)
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
- ✅ **Ensure HVCO landing page (`/probate-profit-machine`) looks good on mobile** - bold headlines, readable copy, smooth animations

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
