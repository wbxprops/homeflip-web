# Session Log: FB Pixel Race Condition Fix + Funnel Review

**Date:** 2026-02-06
**Project:** homeflip-web-site, homeflip-marketing-automation
**Focus:** Facebook ads lead count discrepancy, AC Automation #59 tag mapping

---

## Summary

Facebook Ads Manager was reporting fewer leads than the CRM. Diagnosed a race condition where the server-side Conversions API call was being aborted by an immediate page redirect. Fixed, deployed, and reviewed the full funnel setup.

## What Was Done

### 1. FB Pixel Race Condition Fix
- **Root cause:** `trackLeadFull()` was not async — the `sendConversionEvent()` fetch to `/api/fb-conversions` fired but `window.location.href` redirected before it completed
- **Fix:** Made `trackLeadFull()` async, added `await` before redirect in:
  - `src/app/probate-profit-machine/page.tsx`
  - `src/components/ClaimCountyForm.tsx`
  - `src/components/TrackingScripts.tsx`
- **Also included:** Previously uncommitted Schedule event tracking on Calendly booking pages (booking-blueprint, booking-strategy, claim-your-county/book)
- **Deployed:** Commit `6391b16`, pushed to Vercel

### 2. Meta Events Manager Review
- **Domain verified** in Meta Business Manager (`homeflip.ai`)
- **Domains allowlisted** on pixel (homeflip.ai + homeflip-web.vercel.app)
- **AEM:** Confirmed Meta removed manual event priority config — it's now automatic
- **No custom conversions** set up (ruled out as cause)
- **Ad sets confirmed** already optimizing for Lead event (not PageView)
- **Event counts:** 87 PageViews vs only 8 Lead events — confirms the race condition was the issue

### 3. AC Automation #59 Tag Mapping
- Old Automation #26 cloned to #59 for fresh data
- Emails already updated with PPM content
- Queried all AC tags via API (80 total tags)
- Mapped old D2S tags → new PPM tags:

**Start of sequence (fix needed):**
- Remove old: `HVCO downloaders email sequence started` (ID 29)
- Keep: `seq-ppm-hvco-active` (93), `seq-ppm-hvco-started` (100)

**End of sequence (fix needed):**
- Old: Add tag 30, Remove tags 27 + 28
- New: Add `seq-ppm-hvco-completed` (94), Remove `trigger-ppm-hvco-optin` (88), Remove `seq-ppm-hvco-active` (93)

**Goal (tomorrow):**
- Trigger: tags 91 or 92 (booked call)
- Actions: Remove 93, Add `seq-ppm-hvco-goal-booked` (95)

### 4. README Updated
- `homeflip-marketing-collateral/marketing/emails/ppm/hvco-optin/README.md` — Automation #26 → #59

---

## Key Findings

- Events Manager showed 87 PageViews but only 8 Lead events over 28 days
- The n8n webhook call was properly `await`ed (line 106), but tracking was not
- Client-side `fbq()` is gated behind cookie consent — server-side Conversions API is the reliable path
- AEM no longer requires manual event prioritization (Meta changed this)

---

## Next Steps

- [ ] Verify Lead events start matching CRM numbers (allow 24-48 hrs)
- [ ] Complete AC Automation #59 tag swaps (start + end steps)
- [ ] Set up goal condition in Automation #59 (books call → exit)
- [ ] Build remaining automations (triage call prep, strategy call prep)

---

## Files Changed

- `src/components/TrackingScripts.tsx` — `trackLeadFull()` now async + awaits
- `src/app/probate-profit-machine/page.tsx` — await before redirect
- `src/components/ClaimCountyForm.tsx` — await for consistency
- `src/app/booking-blueprint/page.tsx` — Schedule event tracking (previously uncommitted)
- `src/app/booking-strategy/page.tsx` — Schedule event tracking (previously uncommitted)
- `src/app/claim-your-county/book/page.tsx` — Schedule event tracking (previously uncommitted)
- `CLAUDE_CONTEXT.md` — Updated session history
- `homeflip-marketing-collateral/.../README.md` — Automation #26 → #59
