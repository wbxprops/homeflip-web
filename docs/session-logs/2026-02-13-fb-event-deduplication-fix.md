# Session Log: FB Event Deduplication & Coverage Fix

**Date:** 2026-02-13
**Project:** homeflip-web-site
**Commit:** `b12bc83`
**Deployed:** Yes (Vercel auto-deploy from git push)

---

## Summary

Facebook flagged that our Conversions API was sending 1 fewer event than the pixel and that deduplication keys weren't matching. Investigated and fixed three root causes across 7 files.

## Problems Found

### 1. No Shared Event ID (Deduplication Broken)
- Client `fbq()` and server CAPI generated **separate** event IDs
- Meta saw them as 2 different events instead of deduplicating into 1
- Server was generating: `${eventName}_${Date.now()}_${random}` independently

### 2. CTAForm Missing Server-Side Event
- `CTAForm.tsx` only fired `fbTrackContact()` (client-side)
- No `sendConversionEvent()` call — this was the "1 fewer server event" gap

### 3. _fbp/_fbc Cookies Never Sent
- API route had placeholders for `fbc`/`fbp` but no client code extracted them
- These Meta cookies are critical for user matching between pixel and CAPI

### 4. booking-activation Had Zero Tracking
- No imports, no event listeners, no pixel or CAPI calls at all
- Calendly bookings on this page were completely invisible to Meta

## Changes Made

### Core: `TrackingScripts.tsx`
- **`generateEventId()`** — exported helper, generates unique ID shared between pixel + CAPI
- **`getMetaCookies()`** — extracts `_fbp` and `_fbc` cookies from browser
- **`fbTrack()`** — accepts optional `eventId`, passes as `{eventID: id}` 4th arg to `fbq()`
- **All helpers** (`fbTrackLead`, `fbTrackSchedule`, `fbTrackCompleteRegistration`, `fbTrackContact`) — accept and pass through `eventId`
- **`sendConversionEvent()`** — auto-includes `_fbp`/`_fbc` cookies in every server call
- **`ConversionEventData`** interface — added `eventId` field
- **`trackLeadFull()`** — generates shared eventId, passes to both client + server

### Form/Page Updates
- **`CTAForm.tsx`** — Added server-side `Contact` event with shared dedup ID
- **`StrategyCallSurvey.tsx`** — Shared eventId + `await` on server call
- **`booking-activation/page.tsx`** — Added full Calendly tracking (pixel + CAPI)
- **`booking-blueprint/page.tsx`** — Shared eventId
- **`booking-strategy/page.tsx`** — Shared eventId
- **`claim-your-county/book/page.tsx`** — Shared eventId

### No Changes Needed
- **`api/fb-conversions/route.ts`** — Already handled `eventId`, `fbc`, `fbp` fields correctly
- **`probate-profit-machine/page.tsx`** — Uses `trackLeadFull()` which now auto-deduplicates

## Technical Details

### Meta Pixel eventID Parameter
```typescript
// The 4th arg to fbq() is the options object with eventID
fbq('track', 'Lead', { content_name: 'Form' }, { eventID: 'shared_id_123' });
```

### Cookie Extraction Pattern
```typescript
const fbpMatch = document.cookie.match(/(?:^|;\s*)_fbp=([^;]*)/);
const fbcMatch = document.cookie.match(/(?:^|;\s*)_fbc=([^;]*)/);
```

## Next Steps

- Wait 1-2 days for Meta Event Manager to reflect improved scores
- Check "Event Match Quality" and "Event Coverage" in Meta Events Manager
- Consider: StrategyCallSurvey still uses direct Supabase client for prospects upsert (RLS issue from 2/8 — works for prospect_responses but not prospects table)
