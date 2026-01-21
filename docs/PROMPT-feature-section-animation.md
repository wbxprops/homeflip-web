## The motion recipe that looks modern (not gimmicky)

### The 3 phases per section

1. **Enter / Flip Up**
    

- Starts slightly “laid down” (tilted away)
    
- Comes forward, sharpens, becomes readable
    

2. **Hold**
    

- Very short (user needs ~0.6–1.2s to register it)
    

3. **Exit / Drift Out**
    

- Slightly rotates + translates off screen
    
- Fades _a little_, but don’t ghost it completely (that looks like a slideshow)
    

---

## Visual rules that make it feel real 3D

### 1) Use real perspective on a parent

Put the screenshot inside a wrapper that defines perspective.

- `perspective: 1200px` (desktop)
    
- `perspective: 900px` (laptop)
    
- `transform-style: preserve-3d`
    

### 2) Don’t rotate on Y much

The moment you rotate too much on Y, it screams “carousel”.

Use mostly **X rotation** (flip up), with a _tiny_ Y rotation for depth.

Good ranges:

- Enter: `rotateX(18–26deg)` + `rotateY(-6–3deg)`
    
- Hold: `rotateX(8–12deg)` + `rotateY(-2–2deg)`
    
- Exit: `rotateX(20–30deg)` + `rotateY(6–12deg)`
    

### 3) Make it a “glass print”, not a screenshot

Add:

- very subtle border
    
- soft shadow
    
- faint specular highlight (top gradient)
    
- optional noise layer at 2–4% opacity
    

This is what separates “screenshot flying around” from “premium UI object”.

---

## Layering so your text stays readable

Do **three layers**:

1. Background gradient / ambiance
    
2. Screenshot plane (animated)
    
3. Foreground content + **scrim**
    

Add a scrim behind the text only:

- `rgba(0,0,0,0.35)` → `rgba(0,0,0,0.65)` depending on screenshot brightness
    
- Feathered edges (big blur / radial gradient)
    

This keeps the screenshot vivid without hurting legibility.

---

## Scroll-triggered setup (what to actually build)

### Trigger points (per section)

- Start anim: when section top hits **70%** viewport
    
- Hold: between **55% → 40%**
    
- Exit: when section top hits **25%** viewport and continues until it leaves
    

This creates that “flip up, present, fly away” feeling naturally.

---

## Framer Motion mapping (clean + reliable)

If you’re using React/Framer Motion, do it like this conceptually:

- Use `useScroll({ target: sectionRef, offset: ["start end", "end start"] })`
    
- Map `scrollYProgress` (0 → 1) to transforms:
    

**Enter / Hold / Exit keyframes**

- `rotateX: [28, 12, 24]`
    
- `rotateY: [-6, -1, 10]`
    
- `translateY: [120, 0, -160]`
    
- `translateX: [0, 0, 120]` (or alternate directions per section)
    
- `scale: [0.94, 1.0, 0.96]`
    
- `opacity: [0, 1, 0.65]`
    
- `filter: ["blur(8px)", "blur(0px)", "blur(2px)"]`
    

**Key trick:** blur on the way in makes it feel like it’s “coming into focus” instead of just appearing.

---

## Make it feel “3D” without being loud

### Add subtle parallax based on mouse (desktop only)

- `rotateY` shifts ±2deg on mouse move
    
- `translateX/Y` shifts ±8px max
    

This adds life without turning it into a toy.

### Add a soft shadow that reacts

Shadow should tighten as it “comes forward”:

- Enter: wide + faint
    
- Hold: tighter + slightly darker
    
- Exit: wide again
    

---

## Performance rules (so it doesn’t stutter)

- Use `will-change: transform, filter`
    
- Keep the screenshot as **one flattened layer** (export as WebP)
    
- Avoid animating huge blur values continuously (use short blur windows)
    
- Prefer transform/opacity over background-position tricks
    
- Disable the heavy 3D exit on mobile (use a simpler fade/slide)
    

---

## Simple pattern that sells the illusion

Alternate exit directions per section:

- Section A: exits up-right
    
- Section B: exits up-left
    
- Section C: exits down-right (subtle)
    
- Section D: exits up-right again
    

That prevents “template fatigue.”

---

## Quick critique of your current screenshot

What you have is **close**, but to land the effect:

- Push the dashboard plane **forward** (more scale + clearer edge treatment)
    
- Add **perspective + rotateX** (it still reads mostly flat)
    
- Add a **foreground scrim** so your headline doesn’t fight the UI