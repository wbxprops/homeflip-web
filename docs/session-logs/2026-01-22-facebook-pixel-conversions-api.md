# Session Log: Facebook Pixel + Conversions API Setup

**Date:** 2026-01-22
**Project:** homeflip-web-site
**Focus:** Facebook Pixel and Meta Conversions API integration

---

## Summary

Set up Facebook Pixel with Meta Conversions API for tracking ad conversions on homeflip.ai.

## What Was Done

### 1. Created New Facebook Pixel
- Pixel Name: "Homeflip Web"
- Pixel ID: `2645391379150401`
- Created in Meta Business Manager with manual setup

### 2. Configured Conversions API Events
Selected events for server-side tracking:
- Lead
- Schedule
- CompleteRegistration
- Contact

Parameters: email, phone, first name, last name, click ID cookies, browser ID cookies, state

### 3. Environment Setup
- Created `.env.local` for homeflip-web-site with:
  - `NEXT_PUBLIC_FB_PIXEL_ID`
  - `FB_CONVERSIONS_API_TOKEN`
  - Supabase keys (optional, fallbacks exist)
- Added same vars to Vercel production environment

### 4. Code Implementation

**TrackingScripts.tsx:**
- Added Facebook Pixel client-side code (respects marketing consent)
- Added helper functions: `fbTrack()`, `fbTrackLead()`, `fbTrackSchedule()`, `fbTrackCompleteRegistration()`, `fbTrackContact()`
- Added `sendConversionEvent()` for server-side API calls
- Added `trackLeadFull()` that fires both client + server-side

**API Route (`/api/fb-conversions/route.ts`):**
- Server-side Conversions API endpoint
- Hashes PII (email, phone, name) per Meta requirements
- Captures IP, user agent for better matching
- Generates event IDs for deduplication

**Forms Updated:**
| Form | Event | Client | Server |
|------|-------|--------|--------|
| CTAForm (Hero) | Contact | ✅ | ❌ |
| ClaimCountyForm | Lead | ✅ | ✅ |
| PPM Landing Page | Lead | ✅ | ✅ |
| StrategyCallSurvey | CompleteRegistration | ✅ | ✅ |

### 5. Deployed & Verified
- Pushed commit `3987065`
- Verified PageView event firing via Meta Pixel Helper

---

## Technical Notes

- Pixel loads only when user gives **marketing consent** (cookie consent banner)
- Conversions API token is server-side only (not exposed to client)
- Events deduplicated via event_id parameter

---

## Not Implemented (Future)

- **Schedule event** for Calendly bookings (requires webhook integration)
- **ViewContent** for specific page tracking (PPM landing page)
- Button click tracking

These can be added later once ads are running and data shows what's needed.

---

## Next Steps

- Set up first Facebook ad campaign
- Monitor Events Manager for incoming events
- Add Schedule tracking via Calendly webhook if needed

---

## Files Changed

- `src/components/TrackingScripts.tsx` - FB Pixel + helpers
- `src/app/api/fb-conversions/route.ts` - NEW - Conversions API endpoint
- `src/components/CTAForm.tsx` - Added Contact tracking
- `src/components/ClaimCountyForm.tsx` - Added Lead tracking
- `src/app/probate-profit-machine/page.tsx` - Added Lead tracking
- `src/components/StrategyCallSurvey.tsx` - Added CompleteRegistration tracking
- `.env.local` - NEW - Environment variables
