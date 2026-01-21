You are working inside a **Fuse React (MUI) + Framer Motion** project for a premium SaaS landing page (Homeflip.ai).

Your task is to **finalize a glassmorphic feature section** that includes:

- foreground marketing copy
    
- a **3D animated CRM screenshot plane** in the background
    
- scroll-driven motion that feels modern, confident, and not gimmicky
    

---

## GOAL

Create a reusable `FeatureSection3D` component where:

- a high-resolution CRM screenshot **flips up into view**, holds briefly, then **exits the viewport in 3D**
    
- the screenshot looks **razor sharp** (no blur, no soft text)
    
- there is **no visible hard rectangle edge** around the screenshot
    
- the effect feels like a **floating UI panel in space**, not a slideshow
    

---

## TECH STACK CONSTRAINTS

- Fuse React (MUI layout)
    
- Framer Motion is already installed and used
    
- Desktop-first effect; mobile should gracefully simplify
    
- Screenshot assets are **WebP**, ~2200–2400px wide
    

---

## VISUAL & MOTION REQUIREMENTS

### Screenshot Plane

- Implement as a real DOM element, NOT a background image
    
- Wrapped in a parent with:
    
    - `perspective: 1200px`
        
    - `transform-style: preserve-3d`
        
- The `<img>` itself must remain flat (no direct 3D transforms on the image)
    

### Motion (scroll-driven)

Use `useScroll` + `useTransform` tied to the section ref.

Animate through **three states**:

**ENTER**

- rotateX: ~26deg
    
- rotateY: ~-6deg
    
- translateY: ~140px
    
- scale: ~0.96
    
- opacity: 0 → 0.8
    

**HOLD**

- rotateX: ~10deg
    
- rotateY: ~-1deg
    
- translateY: 0
    
- scale: 1.0
    
- opacity: ~0.9
    

**EXIT**

- rotateX: ~24deg
    
- rotateY: ~10deg (direction configurable per section)
    
- translateY: ~-180px
    
- translateX: ~140px (direction configurable)
    
- scale: ~0.98
    
- opacity: ~0.65
    

IMPORTANT:

- ❌ Do NOT animate CSS `filter: blur()` on the screenshot plane
    
- ❌ Do NOT scale above 1.0
    
- Use opacity + translation for depth instead of blur
    

---

## EDGE & SHARPNESS FIXES (CRITICAL)

### Eliminate the hard rectangle edge

Apply a **feathered radial mask** to the screenshot container:

`mask-image: radial-gradient(   120% 85% at 50% 45%,   rgba(0,0,0,1) 62%,   rgba(0,0,0,0) 100% ); -webkit-mask-image: same;`

This should blend the screenshot softly into the background.

### Styling

- Background: `rgba(255,255,255,0.02)`
    
- Border: extremely subtle (`rgba(255,255,255,0.05–0.06)`) or none
    
- Shadow: large, soft, low-contrast
    
- Optional subtle top specular highlight (very low opacity)
    

### Image clarity

- Ensure `backface-visibility: hidden`
    
- `transform: translateZ(0)`
    
- Cap rendered width to ~1100–1200px
    

---

## FOREGROUND CONTENT

- Marketing copy sits ABOVE the animated screenshot
    
- Add a **local glass scrim behind text only**:
    
    - dark gradient (left → right)
        
    - backdrop blur
        
    - keeps text readable without dulling the screenshot
        

---

## MOBILE BEHAVIOR

- Disable heavy 3D transforms on small screens
    
- Replace with:
    
    - fade + slight translateY
        
    - no rotateX/Y
        

---

## DELIVERABLE

- Provide a clean, reusable `FeatureSection3D.tsx` component
    
- Include props for:
    
    - title, eyebrow, subtitle
        
    - screenshot source
        
    - exit direction (left / right)
        
    - intensity (subtle / default / strong)
        
- Ensure code fits Fuse React + MUI conventions
    

The final result should feel **premium, confident, and “cutting-edge CRM”** — no blur, no gimmicks, no obvious frames.