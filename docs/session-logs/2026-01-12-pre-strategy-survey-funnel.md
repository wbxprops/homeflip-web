# Session Log: Pre-Strategy Survey Funnel

**Date:** 2026-01-12
**Status:** Implementation complete, manual setup needed

---

## What Was Built

### 1. Pre-Strategy Survey Page (`/ppm-pre-strategy-survey`)
- **File:** `src/app/ppm-pre-strategy-survey/page.tsx`
- **Component:** `src/components/PreStrategySurveyForm.tsx`
- 4-step multi-step form with conditional logic
- Step 1: Contact info (name, email, phone)
- Step 2: Investor profile with conditional questions based on experience level
- Step 3: Goals & challenges + county selection (up to 3 counties across 3 states)
- Step 4: Calendly embed for "Free 15-Minute Blueprint Session"
- Calls n8n webhook on step 3 completion

### 2. Thank-You VSL Page (Transformed)
- **File:** `src/app/probate-profit-machine/thank-you/page.tsx`
- Converted from simple confirmation to long-form VSL placeholder structure
- 6 sections: Confirmation+Video, Problem, Solution, Testimonials, Call Benefits, Final CTA
- All CTAs link to `/ppm-pre-strategy-survey`
- Placeholder content marked with `[Placeholder: ...]`

### 3. n8n Workflow
- **File:** `homeflip-marketing-automation/n8n/ppm-survey-complete.json`
- Endpoint: `POST /webhook/ppm-survey-complete`
- Receives survey data, upserts to Supabase, syncs to AC, applies tag

### 4. Database Migration
- **File:** `docs/migrations/2026-01-12-add-survey-data-column.sql`
- Adds `survey_data` JSONB column to `prospect_responses` table

### 5. Documentation
- Updated `homeflip-marketing-automation/TAG-REGISTRY.md` with Pre-Strategy Survey Funnel section
- Created `homeflip-marketing-automation/docs/GUIDE-activecampaign-api.md` - AC API reference
- Created `homeflip-marketing-automation/scripts/list_ac_tags.py` - Python script to query tags
- Created `homeflip-marketing-automation/scripts/verify-ac-tags.bat` - Quick tag verification

---

## Manual Setup Required

### 1. Run SQL Migration
```sql
-- Run in Supabase SQL Editor
ALTER TABLE prospect_responses
ADD COLUMN IF NOT EXISTS survey_data JSONB;

COMMENT ON COLUMN prospect_responses.survey_data IS
  'Stores pre-strategy survey responses as JSON';
```

### 2. Verify AC Tag ID
The workflow uses tag ID 93 for `survey-complete-ppm-strategy`. Verify this is correct:

**Option A: PowerShell**
```powershell
$env:AC_API_KEY="your-key-from-ac-settings"
cd homeflip-marketing-automation/scripts
.\verify-ac-tags.bat
```

**Option B: Direct curl**
```bash
curl -s "https://whitebox6589.api-us1.com/api/3/tags?limit=100" \
  -H "Api-Token: YOUR_KEY" | jq '.tags[] | {id, tag}'
```

If tag ID is different, update line 67 in `ppm-survey-complete.json`:
```json
"tag": "CORRECT_ID"
```

### 3. Import n8n Workflow
1. Open n8n dashboard
2. Import `homeflip-marketing-automation/n8n/ppm-survey-complete.json`
3. Configure Supabase and ActiveCampaign credentials
4. Activate workflow

### 4. Create Calendly Event (if not exists)
- Event name: "Free 15-Minute Homeflip.ai Blueprint Session"
- Duration: 15 minutes
- This uses existing `booked-call-ppm-triage` tag (ID 92) via `calendly-call-booked` workflow

---

## Funnel Flow

```
/probate-profit-machine (HVCO opt-in)
    ↓
/probate-profit-machine/thank-you (Long-form VSL page)
    ↓ CTA: "Book Your Free Strategy Call"
    ↓
/ppm-pre-strategy-survey (4-step survey)
    ↓ Step 3 completion triggers webhook
    ↓ → n8n applies: survey-complete-ppm-strategy (ID 93)
    ↓
Step 4: Calendly booking
    ↓ → n8n applies: booked-call-ppm-triage (ID 92)
```

---

## AC Automation Use Cases

1. **Survey complete + NO call booked** → Trigger "hey, finish booking your call" sequence
2. **Survey complete + call booked** → Pre-call prep sequence

---

## Files Changed/Created

| File | Action |
|------|--------|
| `src/app/ppm-pre-strategy-survey/page.tsx` | Created |
| `src/components/PreStrategySurveyForm.tsx` | Created |
| `src/app/probate-profit-machine/thank-you/page.tsx` | Transformed |
| `docs/migrations/2026-01-12-add-survey-data-column.sql` | Created |
| `homeflip-marketing-automation/n8n/ppm-survey-complete.json` | Created |
| `homeflip-marketing-automation/TAG-REGISTRY.md` | Updated |
| `homeflip-marketing-automation/docs/GUIDE-activecampaign-api.md` | Created |
| `homeflip-marketing-automation/scripts/list_ac_tags.py` | Created |
| `homeflip-marketing-automation/scripts/verify-ac-tags.bat` | Created |

---

## Next Steps

- [ ] Run SQL migration in Supabase
- [ ] Verify AC tag ID 93 is correct
- [ ] Import and activate n8n workflow
- [ ] Test full funnel flow
- [ ] Replace VSL placeholder content with real copy/video
