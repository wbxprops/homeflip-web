# Probate Profit Machine Guide - Implementation Context

**Created:** 2026-01-08
**Location:** Resource Hub (`/hub/[slug]/guide/*`)
**Master Plan:** `homeflip-funnel/docs/probate-profit-machine-delivery-plan.md`

---

## What This Document Covers

This document describes the **implementation details** for the Probate Profit Machine guide experience within the Resource Hub. It covers the page structure, components, and the web/audio/PDF multi-format model.

For the overall Resource Hub philosophy, see `CONTEXT-resource-hub.md`.

---

## The Multi-Format Model

The Probate Profit Machine is delivered in three formats:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   WEB (Light)          AUDIO (Full)         PDF (Full)     │
│   Quick summary    →   Gary's voice     →   Everything     │
│   2-3 min read         10-12 min listen     40-60 pages    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Web Version (Current Part I, II, III pages)
- **Purpose:** Quick browse, scannable overview
- **Content:** Educational summary (~400 words per section)
- **Tone:** Clear, factual, reference-style
- **Example:** "What is probate?", "The timeline", "Key players"

### Audio Version (Embedded on each page)
- **Purpose:** Full content, passive consumption
- **Content:** Gary reading the complete ebook chapter (~1,500 words)
- **Tone:** Gary's voice - conversational, stories, specific deals
- **Example:** "$17K brick house story", "Day-one deal", "Why I started"
- **Hosting:** Wistia (audio/podcast feature)
- **Voice:** AI-generated clone trained on Gary's training videos

### PDF Version (Download link)
- **Purpose:** Complete reference, offline reading
- **Content:** Full 40-60 page ebook with all four sections
- **Format:** Designed PDF with formatting, pull quotes, sidebars

---

## Page Structure

### Guide Overview Page (`/hub/[slug]/page.tsx`)

```
┌──────────────────────────────────────────────────────────────┐
│  📄 Internal Documentation                                   │
│                                                              │
│  PROBATE PROFIT MACHINE                                     │
│  A complete introduction to probate real estate investing.   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  SECTIONS                                               │ │
│  │                                                         │ │
│  │  Part I    What Is Probate?           5 min  🎧  →     │ │
│  │  Part II   Finding Cases              7 min  🎧  →     │ │
│  │  Part III  Making Contact             8 min  🎧  →     │ │
│  │  Part IV   Next Steps                 3 min  🎧  →     │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  📥 DOWNLOAD COMPLETE GUIDE                             │ │
│  │  Get all four sections as a beautifully designed PDF    │ │
│  │  [Download PDF]                                         │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**Updates needed:**
- Add audio indicator (🎧 or headphones icon) to section cards
- Add Part IV section card
- Update PDF download section copy to emphasize "complete guide"

---

### Section Page (`/hub/[slug]/guide/part-1/page.tsx`)

```
┌──────────────────────────────────────────────────────────────┐
│  PART I                                         5 min read   │
│                                                              │
│  What Is Probate?                                           │
│  Understanding the probate process and why it creates       │
│  unique opportunities for real estate investors.            │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  🎧  LISTEN TO THIS CHAPTER                   12:34    │ │
│  │  ▶ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │ │
│  │  Gary reads the full chapter aloud                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ── The Basics ──────────────────────────────────────────── │
│                                                              │
│  [Web summary content - current content stays]               │
│                                                              │
│  ── Why Probate Properties Are Different ─────────────────  │
│                                                              │
│  [Web summary content continues...]                          │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  📖  WANT THE FULL STORY?                              │ │
│  │                                                         │ │
│  │  This is the quick-read version. The complete guide    │ │
│  │  includes Gary's personal stories, specific deal       │ │
│  │  numbers, and 20 years of lessons learned.             │ │
│  │                                                         │ │
│  │  [Download the Full Guide]                             │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  ← Overview                              Part II: Finding → │
└──────────────────────────────────────────────────────────────┘
```

---

## Components to Build

### 1. AudioPlayer Component

**Location:** `src/components/hub/AudioPlayer.tsx`

**Props:**
```typescript
interface AudioPlayerProps {
  wistiaId: string;          // Wistia media ID
  title?: string;            // e.g., "Listen to this chapter"
  duration?: string;         // e.g., "12:34"
  description?: string;      // e.g., "Gary reads the full chapter aloud"
}
```

**Design:**
- Dark card matching hub theme
- Teal accent color (#83d4c0)
- Play/pause button
- Progress bar
- Duration display
- Subtle headphones icon

**Implementation Options:**
1. Wistia embed (responsive audio player)
2. Custom player with Wistia API
3. Simple HTML5 audio with Wistia-hosted MP3 URL

### 2. FullStoryCallout Component

**Location:** `src/components/hub/FullStoryCallout.tsx`

**Props:**
```typescript
interface FullStoryCalloutProps {
  pdfUrl?: string;           // Link to PDF download
}
```

**Design:**
- Subtle card (not attention-grabbing)
- Book/document icon
- Brief explanation of web vs full
- Single CTA to download PDF
- Positioned after main content, before navigation

### 3. Section Card Updates

**Location:** `src/app/hub/[slug]/page.tsx`

**Updates:**
- Add headphones icon if audio is available
- Add Part IV card
- Update descriptions to reflect "quick read" framing

---

## File Structure

```
src/app/hub/[slug]/
├── page.tsx                    # Guide overview (update)
├── layout.tsx                  # Hub layout with nav
└── guide/
    ├── part-1/page.tsx        # What Is Probate? (update)
    ├── part-2/page.tsx        # Finding Cases (update)
    ├── part-3/page.tsx        # Making Contact (update)
    └── part-4/page.tsx        # Next Steps (CREATE)

src/components/hub/
├── AudioPlayer.tsx            # CREATE
└── FullStoryCallout.tsx       # CREATE
```

---

## Content Sources

| Section | Web Content | Audio Content | Status |
|---------|------------|---------------|--------|
| Part I | Current page content | `copywriting-repo/.../Section-1-The-Opportunity.md` | Web ✅, Audio pending |
| Part II | Current page content | `copywriting-repo/.../Section-2-*.md` (TBD) | Web ✅, Audio pending |
| Part III | Current page content | `copywriting-repo/.../Section-3-*.md` (TBD) | Web ✅, Audio pending |
| Part IV | TBD | `copywriting-repo/.../Section-4-*.md` (TBD) | Both pending |

---

## Audio Generation Workflow

1. **Content:** Full ebook section text from `copywriting-repo`
2. **Voice:** ElevenLabs Professional Voice Clone (trained on Gary's training videos)
3. **Output:** MP3 files
4. **Hosting:** Upload to Wistia
5. **Embed:** Use Wistia media ID in AudioPlayer component

For detailed voice clone setup, see `homeflip-funnel/docs/probate-profit-machine-delivery-plan.md`.

---

## Design Guidelines

### Audio Player
- Should feel like part of the content, not a separate widget
- Teal accent (#83d4c0) for play button and progress
- Dark background matching hub theme
- Subtle, not attention-grabbing
- Mobile-friendly (full width on small screens)

### Full Story Callout
- Positioned after content, before navigation
- NOT a hard sell - informational tone
- Explains the difference between quick-read and full guide
- Single, subtle CTA
- Should feel like a helpful note, not a pitch

### Overall
- Maintain Resource Hub "bridge surface" philosophy (40-60% marketing energy)
- Focus on value, not urgency
- Encourage return visits
- Audio as an enhancement, not a replacement for reading

---

## Testing Checklist

- [ ] Audio player works on desktop
- [ ] Audio player works on mobile
- [ ] Wistia embeds load correctly
- [ ] Play/pause controls work
- [ ] Progress bar updates
- [ ] PDF download link works
- [ ] Navigation (prev/next) works with new Part IV
- [ ] Part IV page displays correctly
- [ ] Guide overview shows all 4 sections with audio indicators

---

## Related Documents

- `CONTEXT-resource-hub.md` - Hub philosophy and design rules
- `homeflip-funnel/docs/probate-profit-machine-delivery-plan.md` - Master strategy and checklist
- `copywriting-repo/hvco-probate-profit-machine/WRITING-PROMPT.md` - Ebook writing guide
