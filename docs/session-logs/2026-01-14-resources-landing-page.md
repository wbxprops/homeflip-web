# Session Log: Resources Landing Page

**Date:** 2026-01-14
**Project:** homeflip-web-site

---

## Summary

Created a new `/resources` section with a video training landing page featuring before/after case studies.

## What Was Built

### /resources (Directory Page)
- Lists available free training videos
- Dark theme matching probate-profit-machine style
- Card-based layout for each resource

### /resources/probate-training-1 (Landing Page)
- **Wistia video embed** - Part 1 of 4 training series (ID: go9lvej13w)
- **Two case studies with before/after photos:**
  - Richey Rd, Williamsburg — $130K → $348K (8 before, 3 after photos + YouTube walkthrough)
  - Kemper Ln, Cincinnati — $140K → $692K (4 before, 3 after photos)
- **SEO content block** - "What You'll Learn", "Why Probate Investing Works"
- **Casual instructor blurb** - first-person voice from transcript
- **Two CTAs** - both "Claim Your County"

## Technical Notes

### Photo Organization
```
/public/before-after/
├── richey/
│   ├── before-1.jpg through before-8.jpg
│   └── after-1.jpg through after-3.jpg
└── kemper/
    ├── before-1.jpg through before-4.jpg
    └── after-1.jpg through after-3.jpg
```

### Redfin Photo Extraction
Used `homeflip-pw` service endpoint to pull after photos:
```
POST https://homeflip-pw.onrender.com/import/redfin-photos
Headers: x-api-key: homeflip-ai-playwright-2024
Body: {"url": "...", "propertyId": "richey-rd"}
```
Photos processed through Vision AI and stored in GCS, then downloaded to public folder.

### Before Photos Source
- Richey: `G:\My Drive\Whitebox Property Files\Richey 4708\`
- Kemper: `G:\My Drive\Whitebox Property Files\Sold   Inactive\Kemper 2241\`

## Commits

1. `5a1d155` - Add /resources landing page with probate training video
2. `d97044b` - Make instructor blurb more casual and personal
3. `07c4d19` - Add more Richey before photos (8 total)
4. `9bf9ff2` - Replace Richey before-1 with exterior front photo

## Next Steps

- Add Parts 2, 3, 4 of training series as separate pages
- Consider adding more case studies as they become available
- Link from main site navigation when ready to promote
