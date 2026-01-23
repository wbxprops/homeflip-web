# homeflip-web-site - Marketing Website for homeflip.ai

**Status:** 🚧 **IN PROGRESS**
**Project:** Marketing website for homeflip.ai SaaS platform
**Last Updated:** 2026-01-22 (Survey Reorganization & Probate Branching Logic)
**Claude Code Version:** Claude Opus 4.5

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

**Current Status:** 🚧 IN PROGRESS - Strategy call survey reorganized to prioritize business questions. Probate branching logic added. Survey now flows: contact → experience → goals → challenges → probate (conditional) → county selection → booking.

---

## 👋 Welcome Back!

You're working on **homeflip-web-site** - the marketing website for homeflip.ai, a probate real estate lead intelligence platform.

**Live URL:** https://homeflip-web.vercel.app
**GitHub Repo:** https://github.com/wbxprops/homeflip-web

---

## 🎯 What I Need to Know

### Current Focus
**Active Work:** Pivot the Thank You page from "probate education" to "sell the strategy call". Incorporating high-end glassmorphism and stunning before/after property galleries.

### Session History
#### 2026-01-22 (Survey Reorganization & Probate Branching Logic)
- ✅ **Survey Reorganization**: Moved main business questions first (experience, goal, challenge)
- ✅ **Probate Branching**: Added conditional questions for active probate users (buy/DIY, provider, pain points)
- ✅ **Conditional Logic**: Added `showIf` support to ConversationForm engine
- ✅ **County Selection**: Survey now redirects to /claim-your-county before booking
- ✅ **Updated Copy**: "What are you trying to achieve through real estate investing?"
- **Session log:** `docs/session-logs/2026-01-22-survey-reorganization-probate-branching.md`

#### 2026-01-21 (Thank You Page Tweaks & CTA Tracking)
- ✅ **CTA Tracking**: All 10 "Book Your Strategy Call" buttons now include `?cta=<source>` for analytics
- ✅ **Pricing Consistency**: 26% low (Frank's example), 38% average ARV, 26¢ on the dollar
- ✅ **Copy Tweaks**: Spelling fixes, grammar fixes, "Challenge" vs "Problem" with Probate
- ✅ **Social Notifications**: Expanded to 16 diverse notifications (OH, IN, MA, TX, FL, AZ)
- ✅ **Footer Cleanup**: Real logo, proper /privacy and /terms links, removed Secure Portal
- ✅ **Discovery Game Plan**: Removed Competitor Analysis, updated Scale Assessment
- ✅ **Survey URL Fix**: Changed `/ppm-pre-strategy-survey` to `/pre-strategy-survey`
- ✅ **Mobile-Friendly Success Stories**: Vertical stack on mobile, ARV meters/arrows hidden
- **Git Push**: Commits `91db677`, `59b8c2c`, `3509a7f`
- **Session log:** `docs/session-logs/2026-01-21-thank-you-page-tweaks-cta-tracking.md`

#### 2026-01-21 (Real Customer Success Stories)
- ✅ **Real Customers Added**: Matt O. (Blue Rock, Firestone), Steph & Graem (Gatch), Frank (Chambers), Kassie (Kay)
- ✅ **Photo Organization**: Created structured directories under `/public/before-after/` for each property
- ✅ **Headshots Directory**: Consolidated all customer headshots in `/before-after/headshots/`
- ✅ **BRRRR Fix**: Hawk property photos now display without cropping text (object-contain)
- ✅ **Cleanup**: Removed placeholder sections (Competition Bypass, Agenda #3, fake success stories)
- ✅ **Prompt Template**: Created reusable success story prompt in homeflip-marketing-repo
- **Git Push**: 140 files, commit `bb98fba`
- **Session log:** `docs/session-logs/2026-01-21-real-customer-success-stories.md`

#### 2026-01-20 (Thank You Page Strategy Pivot & Polish)
- ✅ **Strategy Call Agenda**: Re-framed all sections as "Agenda Items" for the discovery call.
- ✅ **Stunning Transformations**: Added `StunningTransformation` component for large-format, full-width property galleries (6 houses total).
- ✅ **Glassmorphism Polish**: Enhanced background orbs, animated glows, and premium video player layout.
- ✅ **Build Fixes**: Resolved critical TypeScript errors in `ConversationForm` and survey components.
- ✅ **Standardization**: Updated all hooks to `React.useState` / `React.useEffect` to prevent "not defined" errors.
- ✅ **Header Refresh**: Non-sticky, transparent header with status message and logo/phone alignment.
- **Session log:** `docs/session-logs/2026-01-20-thank-you-page-strategy-pivot.md`

#### 2026-01-18 (Interactive Case Claim Demo Widget)
- ✅ Built `DiamondIcon.tsx` - faceted gemstone SVG with 4 color variants
- ✅ Built `CaseClaimDemo.tsx` - full interactive demo (~850 lines)
- ✅ Calendar with weekday-only display (M-F), status dots (amber/teal/purple)
- ✅ Three-beat reveal animation: "Scanning..." → "Checking..." → "Verified"
- ✅ CRM-style unclaimed cards with glassmorphic styling, 2px teal border
- ✅ Two-row card layout: Case # • County + Claim/reject capsule, then property/value badges
- ✅ Claim button with hover glow, "reject" link, celebration toast
- ✅ Reset button to replay entire demo experience
- ✅ Custom glassmorphic scrollbar, floating buttons with gradient fade
- ✅ Integrated into `/probate-profit-machine/thank-you` page
- **Session log:** `docs/session-logs/2026-01-18-case-claim-demo-widget.md`

#### 2026-01-16 (Conversation-Style Form + Strategy Call Survey)
- ✅ Built `ConversationForm` module - Typeform-style one-question-at-a-time form engine
- ✅ Created field components: TextField, EmailField, PhoneField, NumberField, TextareaField, RadioField, CheckboxField, EntryScreen, ConfirmationScreen
- ✅ RadioField with acknowledgment text after selection
- ✅ TextareaField with starter anchor chips
- ✅ Created `StrategyCallSurvey` component (8 steps) following PROMPT spec
- ✅ No progress bar design (clean, operational feel)
- ✅ Updated all Calendly booking pages to use `#0d9488` teal color
- ✅ Analytics placeholders (`track()` function)
- **Test URL:** http://localhost:3000/pre-strategy-survey-v2
- **Session log:** `docs/session-logs/2026-01-16-conversation-form-strategy-call-survey.md`

#### 2026-01-14 (Resources Landing Page)
- ✅ Created `/resources` directory page
- ✅ Created `/resources/probate-training-1` with Wistia embed, case studies, SEO content
- ✅ Added before/after photos for Richey Rd (8 before, 3 after + YouTube walkthrough)
- ✅ Added before/after photos for Kemper Ln (4 before, 3 after)
- ✅ Used `homeflip-pw` Redfin endpoint to extract after photos
- ✅ Photos organized in `/public/before-after/richey/` and `/kemper/`
- **Session log:** `docs/session-logs/2026-01-14-resources-landing-page.md`

#### 2026-01-13 (Pre-Strategy Survey Polish)
- ✅ Restructured form from 4 steps to 6 steps (max 2 questions per step)
- ✅ Added URL param prefill for AC merge fields (`%FIRSTNAME%`, `%EMAIL%`, etc.)
- ✅ Made survey header transparent with backdrop blur
- ✅ Verified AC tag IDs via API (survey-complete-ppm-strategy = ID **101**)
- ✅ Set up central API keys at `AI Projects/.keys/api-keys.env`
- ✅ Fixed Calendly type declaration for Vercel build
- **New Step Structure:** Contact → Investor Type → Strategy → Goals → Counties → Calendly
- **Session log:** `docs/session-logs/2026-01-13-pre-strategy-survey-polish.md`

#### 2026-01-12 (Pre-Strategy Survey Funnel)
- Created `/ppm-pre-strategy-survey` page with 4-step form
- Created `PreStrategySurveyForm.tsx` component with conditional logic
- Transformed thank-you page to long-form VSL placeholder structure
- Created `ppm-survey-complete` n8n workflow for AC tagging
- Added `survey-complete-ppm-strategy` tag to TAG-REGISTRY
- Created database migration for `survey_data` JSONB column
- **Manual actions needed:** Run SQL migration, create AC tag, import n8n workflow
- **Session log:** `docs/session-logs/2026-01-12-pre-strategy-survey-funnel.md`

#### 2026-01-10 (Contact Page Cleanup & GTM/GA4 Setup)
- ✅ Simplified `/contact` page - removed form, email, location; now just CTA to claim-your-county
- ✅ Added Google Tag Manager (GTM-5K2H3HDN) to TrackingScripts.tsx
- ✅ Created GA4 property (G-2D3CNVNVKK) and connected via GTM
- ✅ Updated dataLayer event helpers for GTM compatibility
- ✅ Created `homeflip-ai/docs/THIRD-PARTY-SERVICE-IDS.md` for ID reference
- **Deployed**: Commits `cf13d70`, `4973a85` pushed to origin/master

#### 2026-01-09 (Platform Page Redesign Initial Build)
- ✅ Refactored `/platform` page structure to align with `Master_Spec.md`.
- ✅ Implemented new sections: Automation Trap, Timeline Intelligence™, PB Scorecard, and How It Works.
- ✅ Fixed Hero section layout (Case Card overlap fix).
- ✅ Brand Update: Changed "Gary" to "Gary Bailey" and removed community-specific lines for a broader SaaS feel.
- ✅ Fixed critical JSX syntax error and cleared port 3003 dev server hang.
- **Deployed**: Commits `ff0236a`, `9175aca` pushed to origin/master.

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
- [x] ~~**🔥 Google Tag Manager + Google Analytics**~~ (DONE 2026-01-10 - GTM-5K2H3HDN, GA4 G-2D3CNVNVKK)
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
