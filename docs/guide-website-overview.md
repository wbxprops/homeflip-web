You are a senior full-stack engineer + conversion-focused landing page builder.

Project: Build the Homeflip.ai marketing website from scratch, using the “HOMEFLIP.AI — MASTER COPYWRITING SUMMARY” messaging below as the source-of-truth for copy + positioning.

TECH CHOICES (default unless blocked):
- Next.js (App Router) + TypeScript
- TailwindCSS
- Shadcn/ui components where useful
- Deployed-ready structure (Vercel friendly)
- Basic SEO + OpenGraph + sitemap
- Simple analytics hook placeholders (no vendor lock-in)

PRIMARY GOAL:
Create a clean, modern, high-converting marketing site that explains the value of Homeflip.ai and drives users to a primary CTA (Join Waitlist / Book Demo).

TONE / VOICE RULES (very important):
- Clear, confident, outcome-driven
- Practical, investor-to-investor
- NOT hypey, NOT “guru” vibe, NOT get-rich-quick
- Aspirational but grounded
- NOT overly technical about probate law
- Emphasize: consistency + simplicity + guided workflow

POSITIONING (from summary):
Homeflip.ai = the most simplified, guided, AI-powered system for real estate investors who want consistent off-market deals powered by probate.
Probate is the fuel — Homeflip.ai is the vehicle.

CONTENT REQUIREMENTS:
Build these pages:
1) Home (core landing page)
2) How It Works
3) Pricing (can be “Coming soon” with a reasonable placeholder structure)
4) About
5) FAQ (handle common objections)
6) Contact (simple form UI; stub backend)
7) Legal: Privacy Policy + Terms (simple placeholder text)

HOME PAGE SECTIONS (in order):
- Hero: clear one-liner value prop + subhead + primary CTA + secondary CTA
- Social proof strip (placeholder logos + “used by working investors” style)
- Problem → Why current approach fails (inconsistent deal flow, scattered tools, no system)
- Why Probate (high-level benefits ONLY; avoid legal detail)
- Product Value: “guided system” + “AI-powered prioritization” + “consistent off-market flow”
- How it works (3–5 steps)
- Feature highlights (6 cards max)
- Objection handling (3–5 items)
- Final CTA section

FAQ / OBJECTIONS (must include):
- “Probate is creepy / unethical.” → we help families with a clean, respectful process
- “Heirs want top dollar.” → they often value speed + simplicity
- “Probate deals are rare.” → consistent year-round
- “Probate is too hard.” → it’s hard without a system; Homeflip.ai makes it simple

DESIGN REQUIREMENTS:
- Modern, light theme
- Crisp typography, plenty of whitespace
- Minimal but warm (avoid “black + neon SaaS” cliché)
- Simple icons, tasteful gradients allowed (not loud)
- Responsive and mobile-first
- CTA buttons should be consistent and prominent
- Use a small set of brand colors (suggest a palette in code comments)

CTAs:
- Primary CTA: “Join the Waitlist” (routes to /contact or /waitlist)
- Secondary CTA: “See How It Works” (scroll / route)
Create a /waitlist page with a nice form (name, email, market/city, investor type dropdown). No real backend required—store submission handler as a stub and log to console, but structure code so it can be wired to Supabase later.

DELIVERABLES:
- Create the full project file structure + all pages + shared layout components
- Add a reusable <CTAForm /> component
- Add a <Section /> wrapper component for consistent spacing
- Add a simple navigation + footer
- Add metadata for SEO (title/description/og tags)
- Add README with:
  - how to run
  - how to deploy
  - where to update copy
  - how to wire waitlist form to Supabase later

WORKFLOW INSTRUCTIONS:
1) First, propose the site architecture + route map + component map.
2) Then generate the code: create files and fill in copy.
3) Keep copy concise but strong. No fluff.
4) If any copy is missing, write it in the same voice and keep it consistent with the summary.

SOURCE COPY (from “MASTER COPYWRITING SUMMARY”):
- Probate advantages: motivated sellers, distressed properties, fewer competing buyers, consistent lead flow, opportunity to help families.
- Objection rebuttals: creepy/unethical, heirs want top dollar, rare, too hard.
- Positioning: simplified guided AI-powered system for consistent off-market deals, powered by probate.
- Copy qualities: clear, confident, aspirational, outcome-driven, not overly technical.

NOW START: Build the project.
