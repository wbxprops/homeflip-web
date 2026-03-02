# Session Log: 2026-02-08 — Prospect Upsert RLS Fix

## Summary

Gary had 2 sales calls booked for tomorrow morning but couldn't find either prospect in the `prospects` table. Diagnosed and fixed a silent RLS bug affecting all website form submissions.

## What Was Accomplished

### Bug Diagnosis
- Two callers (Nermin Moussa, Behar Hoxha) filled out the Claim Your County form and booked Calendly calls
- Their data was in `prospect_responses` and `mlh_events` (call_booked) but NOT in `prospects`
- **Root cause:** The `prospects` table has RLS enabled with no anon INSERT policy. The HVCO form works because it goes through an n8n webhook (server-side with service key). The Claim County, CTA, and Pre-Strategy Survey forms were doing direct client-side upserts with the anon key — silently blocked by RLS.
- Error was caught but only `console.error`'d — never shown to user, never stopped execution

### Data Backfill
- Manually inserted 6 missing prospects into the `prospects` table via service key:
  - **Nermin Moussa** (moussanermin@aol.com) — NJ: Hudson, Bergen, Atlantic — call 8 AM EST 2/9
  - **Behar Hoxha** (behar@beharhsellshome.com) — PA: Erie — call 10 AM EST 2/9
  - **cass** (barnesc66@yahoo.com) — FL: Collier, Okaloosa, Osceola
  - **Robert Coleman** (colemanpropertyco@gmail.com) — TX: Dallas, Ellis, Kaufman + MS: Adams
  - **Jamecia Hill** (jthluxeandflip@gmail.com) — GA: Houston, Bibb, DeKalb + TN: Shelby, Madison, Hardeman
  - **Chad** (hearst_27@yahoo.com) — NC: Davidson, Forsyth, Mecklenburg + SC + MS

### Code Fix
1. **Added `SUPABASE_SERVICE_KEY`** to `.env.local` (server-only, no `NEXT_PUBLIC_` prefix)
2. **Created `/api/prospects/upsert` API route** (`src/app/api/prospects/upsert/route.ts`)
   - Server-side endpoint using service key to bypass RLS
   - Accepts POST with email, name, phone, source, jurisdictions_requested, tracking_params
   - Returns success/error JSON
3. **Updated 3 form components** to call the API route instead of direct Supabase upsert:
   - `ClaimCountyForm.tsx` (source: `claim_county_page`)
   - `CTAForm.tsx` (source: `hero_cta`)
   - `PreStrategySurveyForm.tsx` (source: `pre_strategy_survey_v1`)

### Deployed
- Commit `9fa901b` pushed to master
- Gary added `SUPABASE_SERVICE_KEY` to Vercel env vars
- Vercel auto-deploying

## Key Learnings
- The `prospect_responses` table has an explicit `GRANT INSERT ON prospect_responses TO anon` policy — that's why those inserts worked
- The `prospects` table does NOT have this policy — upserts silently fail with anon key
- The HVCO form (probate-profit-machine) works because it delegates to an n8n webhook on Render (server-side)
- Three other forms were doing direct client-side upserts — all silently failing
- The `calendly_created` field on prospects exists but was never being set (except for the 2 manually inserted records)

## Files Changed
- `src/app/api/prospects/upsert/route.ts` (NEW)
- `src/components/ClaimCountyForm.tsx`
- `src/components/CTAForm.tsx`
- `src/components/PreStrategySurveyForm.tsx`
- `.env.local` (added SUPABASE_SERVICE_KEY)

## Next Steps
- Verify Vercel deployment works (test a form submission in production)
- Consider also updating the n8n `calendly-call-booked` workflow to set `calendly_created = true` on prospects when a call is booked
- The `eramirez@realtye.com` and `hearst_27@yahoo.com` prospect_responses entries from today suggest continued form traffic — fix should catch all future submissions
