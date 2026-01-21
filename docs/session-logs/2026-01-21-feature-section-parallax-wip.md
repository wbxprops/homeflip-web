# Session Log: Feature Section Parallax Effect (WIP)

**Date:** 2026-01-21
**Status:** IN PROGRESS - Parallax effect not working correctly

---

## What We're Building

A feature section for the thank-you page that showcases CRM features (starting with "Action-Oriented"). The design should have:

1. **Screenshot background** - The CRM dashboard screenshot (`/features/homeflip-dashboard.webp`)
2. **Glassmorphic card** - Contains eyebrow, headline, and description
3. **Parallax scroll effect** - As user scrolls, the card should appear to float OVER the background and scroll past it

---

## The Desired Effect (User's Words)

> "From a user's standpoint, it should feel like the card itself is affixed in the front and the background is scrolling behind it. Then the card disappears once the background gets past it."

> "As I'm scrolling down the page, the call-out card appears above the screenshot background, and then as I scroll down, it makes it look like the call-out card scrolls down past the screenshot background and then disappears at the bottom."

> "The call-out card is passing in front of the background image as I scroll down the page."

---

## Current Problem

The parallax effect is NOT working. Both the card and background stay fixed together - no relative movement between them when scrolling.

User is about to provide 3 screenshots showing what's happening.

---

## Files Involved

- **Thank You Page:** `src/app/probate-profit-machine/thank-you/page.tsx`
- **Screenshot Image:** `/public/features/homeflip-dashboard.webp` (2400x1077 WebP)
- **Component:** `FeatureSection3D` (lines ~97-230 in page.tsx)

---

## Section Structure (Current)

The "From Lead to Close" section contains:
1. Section header with eyebrow + headline
2. `ActionOrientedFeature` component (uses `FeatureSection3D`)

The section has `bg-black` for flat black background (no gradients).

---

## Component Props

```tsx
type FeatureSection3DProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  screenshotSrc: string;
  screenshotAlt?: string;
};
```

---

## What We Tried

1. **Sticky background, absolute card** - Didn't create parallax effect
2. **Sticky card, absolute background** - Same issue
3. **Various scroll animations with Framer Motion** - Removed to simplify

---

## Design Requirements

- Screenshot should have feathered edges (radial gradient mask)
- Screenshot at ~60-70% opacity (pushed back)
- Card has glassmorphic styling (dark gradient, backdrop blur, border)
- Black section background
- Mobile: Simple stacked layout (no parallax)

---

## Next Steps

1. Look at user's 3 screenshots showing current behavior
2. Fix the parallax effect so card scrolls over fixed background
3. May need to use different CSS approach (background-attachment: fixed, or proper sticky/scroll structure)

---

## Resume Prompt

When resuming, read this file and the thank-you page component, then help fix the parallax effect for the `FeatureSection3D` component. The goal is: background stays fixed, card scrolls over it as user scrolls the page.
