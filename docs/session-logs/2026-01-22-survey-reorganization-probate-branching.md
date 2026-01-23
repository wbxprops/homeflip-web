# Session Log: Survey Reorganization & Probate Branching Logic

**Date:** 2026-01-22
**Project:** homeflip-web-site
**Focus:** Reorganized strategy call survey to prioritize business questions, added probate branching logic

---

## Summary

Completely reorganized the conversation-style survey to focus on the prospect's business first (experience, goals, challenges), then added smart branching questions about probate experience as a follow-up. Survey now feels less "probate-heavy" and more consultative.

---

## What Was Accomplished

### 1. Reorganized Survey Flow
**Old order:**
- Contact info → Probate experience → Time/focus → Goal → Confirmation

**New order:**
- Contact info → Experience level → Primary goal → Biggest challenge → Probate experience → Confirmation

Main business questions now come first, probate is a natural follow-up.

### 2. Added Probate Branching Logic
**Step 7:** Probate Experience (radio)
- Options updated to include "Yes, I actively use probate as one of my sources"

**Conditional questions (only if actively use probate):**
- **Step 8:** Buy leads or DIY?
- **Step 9:** Lead provider name (only if buy leads)
- **Step 10:** Pain points with current source (multi-select)
- **Step 11:** Other pain point details (only if selected "other")

### 3. Added `showIf` Conditional Logic to Form Engine
Updated `ConversationForm.tsx` to support conditional questions:
- Added `showIf?: (values: FormValues) => boolean` to Question type
- Form filters questions dynamically based on answers
- Progress bar and step counting adjust for visible questions only

### 4. Updated Question Copy
Changed Step 5 from:
- ❌ "What do you want this next phase of investing to do for you?"
- ✅ "What are you trying to achieve through real estate investing?"

Clearer and less sophisticated for the audience.

### 5. Added County Selection Before Booking
Survey now redirects to `/claim-your-county` (with contact info pre-filled) before booking:
- User completes survey
- Selects their counties
- Then proceeds to booking

Confirmation screen updated: "Next step: select your county to activate your account."

---

## Files Created/Modified

**Modified:**
- `src/components/StrategyCallSurvey.tsx` - Complete reorganization, probate branching
- `src/components/forms/ConversationForm.tsx` - Added conditional question support
- `src/components/forms/types.ts` - Added `showIf` property to Question interface

---

## Technical Notes

### Branching Logic Examples
```typescript
// Only show if actively use probate
showIf: (values) => values.probate_experience === 'actively_use'

// Only show if buy leads
showIf: (values) => values.lead_source_method === 'buy_leads'

// Only show if "other" selected in multi-select
showIf: (values) => {
  const painPoints = values.probate_pain_points as string[] | undefined;
  return painPoints?.includes('other') || false;
}
```

### Survey Data Saved
Source changed to `strategy_call_setup_v3` with these fields:
- `experience_level`
- `primary_goal`
- `biggest_challenge`
- `probate_experience`
- `lead_source_method` (conditional)
- `lead_provider` (conditional)
- `probate_pain_points` (conditional)
- `probate_pain_other` (conditional)

---

## Flow Diagram

```
Survey Entry
    ↓
Contact Info (name, phone, email)
    ↓
Experience Level (main business question)
    ↓
Primary Goal (main business question)
    ↓
Biggest Challenge (main business question)
    ↓
Probate Experience (follow-up)
    ↓
┌─── If "actively use probate" ───┐
│   Lead Source (buy vs DIY)      │
│   ↓ (if buy leads)               │
│   Lead Provider                  │
│   ↓                              │
│   Pain Points (multi-select)    │
│   ↓ (if "other" selected)        │
│   Other Details (free text)     │
└──────────────────────────────────┘
    ↓
Confirmation
    ↓
Claim Your County
    ↓
Booking (booking-blueprint)
```

---

## Next Steps

- [ ] Test full flow: survey → county selection → booking
- [ ] Monitor survey completion rates in analytics
- [ ] Consider adding "houses completed" and "houses goal" questions if needed
- [ ] Build AC automation based on probate experience responses

---

## Notes for Future Sessions

- Survey v2 and v1 routes both point to `StrategyCallSurvey` component (already merged)
- Main route is `/pre-strategy-survey`
- Contact info flows through entire funnel with tracking params preserved
- ClaimCountyForm already modular and reusable (no changes needed)
