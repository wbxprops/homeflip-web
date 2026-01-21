# Feature Section Parallax Effect Guide

**Component:** `FeatureSection3D`
**Location:** `src/app/probate-profit-machine/thank-you/page.tsx` (lines ~106-225)
**Last Updated:** 2026-01-21

---

## What It Does

Creates a parallax scroll effect where:
1. A **glassmorphic call-out card** scrolls DOWN the page
2. A **CRM dashboard screenshot** stays FIXED in the center (sticky)
3. As you scroll, the card passes over the background, then fades out
4. When the card fades, the dashboard becomes fully bright/visible

---

## How It Works

### Structure
```
Section (150vh tall, relative positioning)
├── Sticky Background (h-screen, stays centered in viewport)
│   └── Dashboard Image (with radial mask for soft edges)
└── Motion Card (absolute positioned, Y controlled by scroll)
    └── Glassmorphic card with content
```

### Key Framer Motion Hooks

```tsx
// Track scroll progress through the section (0 = entering, 1 = leaving)
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});

// Card Y position: moves from -50px to 1000px
const cardYRaw = useTransform(scrollYProgress, [0.15, 0.5], [-50, 1000]);
const cardY = useSpring(cardYRaw, { stiffness: 100, damping: 30 });

// Card opacity: fully visible until 35%, fades out by 45%
const cardOpacityRaw = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
const cardOpacity = useSpring(cardOpacityRaw, { stiffness: 100, damping: 30 });

// Background opacity: 50% until card fades, then 100%
const bgOpacityRaw = useTransform(scrollYProgress, [0, 0.35, 0.45], [0.5, 0.5, 1]);
const bgOpacity = useSpring(bgOpacityRaw, { stiffness: 100, damping: 30 });
```

---

## Adjustable Values

### Card Starting Position
```tsx
const cardYRaw = useTransform(scrollYProgress, [0.15, 0.5], [-50, 1000]);
//                                                          ^^^
// -50 = starting Y position
// Lower number = card starts HIGHER on page
// Higher number = card starts LOWER on page
//
// History: -100 (too high, overlapped headline), 150 (too low), 0 (close), -50 (just right)
```

### Card Movement Speed
```tsx
const cardYRaw = useTransform(scrollYProgress, [0.15, 0.5], [-50, 1000]);
//                                              ^^^^^^^^^^
// [0.15, 0.5] = scroll progress range when card moves
// Wider range (e.g., [0.1, 0.6]) = slower movement
// Narrower range (e.g., [0.2, 0.4]) = faster movement
```

### Card End Position
```tsx
const cardYRaw = useTransform(scrollYProgress, [0.15, 0.5], [-50, 1000]);
//                                                               ^^^^
// 1000 = how far down the card travels
// Higher number = card exits further down/faster
```

### Card Fade Timing
```tsx
const cardOpacityRaw = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
//                                                      ^^^^  ^^^^
// 0.35 = when card STARTS fading (35% through section scroll)
// 0.45 = when card is FULLY transparent (45% through)
//
// To fade EARLIER: use lower numbers like [0, 0.25, 0.35]
// To fade LATER: use higher numbers like [0, 0.5, 0.6]
```

### Background Brightness
```tsx
const bgOpacityRaw = useTransform(scrollYProgress, [0, 0.35, 0.45], [0.5, 0.5, 1]);
//                                                                   ^^^       ^
// 0.5 = starting opacity (50% = faded/dim)
// 1 = ending opacity (100% = full brightness)
//
// For dimmer background initially: use 0.3 or 0.4
// For brighter background initially: use 0.6 or 0.7
```

### Spring Smoothness
```tsx
const cardY = useSpring(cardYRaw, { stiffness: 100, damping: 30 });
//                                  ^^^^^^^^^       ^^^^^^^
// stiffness: How "snappy" the spring is
//   - Higher (150-200) = more responsive, less smooth
//   - Lower (50-80) = more sluggish, very smooth
//
// damping: How quickly oscillation settles
//   - Higher (40-50) = less bouncy, settles faster
//   - Lower (15-25) = more bouncy, oscillates longer
//
// Current: stiffness: 100, damping: 30 = smooth but responsive
```

---

## Section Height

```tsx
<div ref={sectionRef} style={{ height: '150vh' }}>
```

- `150vh` = section is 1.5x the viewport height
- This determines how long the parallax effect lasts
- Increase (e.g., `200vh`) for longer scroll through the effect
- Decrease (e.g., `120vh`) for shorter scroll

---

## Background Image Styling

### Radial Mask (Soft Edges)
```tsx
style={{
  maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
}}
```
- Creates soft, feathered edges on the dashboard image
- First percentage (50%) = where solid area ends
- Second percentage (90%) = where fade completes

### Image Size
```tsx
className="w-[min(1100px,90vw)]"
```
- Max width 1100px, but scales down to 90% viewport width on smaller screens

---

## Glassmorphic Card Styling

```tsx
style={{
  background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)',
  boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
}}
className="backdrop-blur-xl border border-white/10"
```

- Dark gradient background (95% to 85% opacity)
- Heavy shadow for depth
- Backdrop blur for glassmorphism
- Subtle white border

---

## Mobile Behavior

On mobile (`md:hidden`), the parallax is disabled. Instead:
- Simple stacked layout
- Card appears first
- Screenshot appears below
- No scroll animations

---

## Troubleshooting

### Card and background moving together (no parallax)
- Check that background has `position: sticky`
- Check that card has `position: absolute`
- Verify `useScroll` is targeting the correct ref

### Card not visible
- Check `cardY` starting value (might be off-screen)
- Check `cardOpacity` values (might be fading too early)

### Animation feels choppy
- Add/adjust `useSpring` wrapper
- Lower stiffness value for smoother motion

### Background visible outside section
- Don't use `position: fixed` on background
- Use `position: sticky` which respects parent bounds

---

## Component Props

```tsx
type FeatureSection3DProps = {
  eyebrow?: string;        // Small text above title (e.g., "BUILT FOR ACTION")
  title: string;           // Main headline (e.g., "ACTION-ORIENTED")
  subtitle?: string;       // Description paragraph
  screenshotSrc: string;   // Path to dashboard image (e.g., "/features/homeflip-dashboard.webp")
  screenshotAlt?: string;  // Alt text for image
};
```

---

## Usage Example

```tsx
<FeatureSection3D
  eyebrow="Built for Action"
  title="Action-Oriented"
  subtitle="Most CRMs dump data on you and leave you to figure out what to do with it. Homeflip.ai guides you with actions rather than simply presenting data."
  screenshotSrc="/features/homeflip-dashboard.webp"
  screenshotAlt="Homeflip.ai action-based dashboard"
/>
```
