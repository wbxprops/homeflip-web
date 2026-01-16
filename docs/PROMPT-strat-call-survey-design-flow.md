# Claude Code Prompt — Homeflip.ai Strategy Call Setup (Conversation-Style Funnel)

You are Claude Code acting as a senior front-end engineer + product designer implementing a “conversation-style” form (Typeform-like) for Homeflip.ai.

## Context (critical)
This flow IS a sales funnel, but the user is WARM:
- They already opted in to HVCO / “Probate Profit Machine”
- They clicked an email link encouraging them to “schedule a strategy call”
- Therefore: this is **call initialization**, not qualification
- It must feel like a serious internal SaaS system preparing a working session — not a wizard, not a hype funnel

## High-level UX goals
- One question per screen (single-focus)
- Calm, operational, system voice (no hype)
- No visible “step count” (no “1 of 8”) and no progress bar
- Subtle, professional motion between screens (short fade/slide)
- Strong input focus states
- “Acknowledgment” microcopy appears after selection to reinforce the system is responding
- Mobile-first responsive, but looks premium on desktop
- Accessibility: keyboard navigation, Enter to continue, focus management, ARIA labels, visible focus rings

## Visual style (match existing Homeflip.ai look)
- Dark background with subtle gradient/glow, glassmorphic-ish card
- Teal/blue accent (like existing UI) for active/selected states
- Avoid nested container clutter; one dominant container
- Inputs: large, clean, minimal; not “marketing form” vibes
- Option cards: calm borders, subtle hover, selected state with accent outline + slight glow
- Buttons: purpose-aware labels (not always “Continue”)

## Deliverable
Update/implement this flow in the existing codebase:
- Replace current multi-field “Let’s Get Started” screen with single-focus screens
- Replace current copy throughout with the copy spec below
- Remove step counter + progress bar entirely
- Implement routing/state so the user can go Back and forward without losing inputs
- Add validation + formatting (phone/email)
- Provide a final confirmation screen that hands off to scheduling

You should:
1) Identify where the current form flow lives (e.g., /pages, /app, /components)
2) Implement the new stepper flow with a single reusable “QuestionScreen” component
3) Implement data model and step config
4) Implement UI
5) Implement validation and form submission
6) Add analytics hooks (placeholder functions) for step view + completion events
7) Provide clear instructions for any env vars or endpoints required
8) Provide a brief QA checklist at the end

If anything is ambiguous, make a reasonable assumption and proceed.

---

## Copy + Step Spec (exact)

### Step 0 — Entry / Context setter (optional if you want to start directly at name)
Header: “Strategy Call Setup”
Subheader:
“You’re already inside the Probate Profit Machine.
This just helps us focus the conversation.”
Muted note: “Takes about 2–3 minutes.”
Primary CTA: “Begin Setup →”

### Step 1 — Name
Prompt: “Let’s start simple. What should we call you?”
Input placeholder: “Your name”
Helper (muted): “This is how we’ll address you on the call.”
CTA: “Continue ↵”

### Step 2 — Phone
Prompt: “Best phone number for call reminders and updates?”
Input placeholder: “(555) 555-5555”
Helper (muted): “System notifications only. No marketing texts.”
CTA: “Save & Continue”

Validation:
- Must be valid US phone number (accept +1, spaces, parentheses, dashes)
- Normalize to E.164 on submit

### Step 3 — Email (confirmation, not collection)
Prompt: “We’ll send the call details here.”
Input placeholder: “you@email.com”
Helper (muted): “This should match where you received the HVCO access.”
CTA: “Confirm Email →”

Validation:
- must be valid email format

### Step 4 — Experience context
Prompt: “Which best describes where you’re at right now?”
Options (radio cards):
1. “I’m looking for my first investment property.”
2. “I’ve done deals before, took a break, and I’m getting back on track.”
3. “I’m actively investing and have closed a deal in the last 12 months.”
4. “I’m not an investor — I’m looking for a place to live.”

After selection acknowledgment (appears below options):
“Got it — this helps us tailor the call.”
CTA: “Continue →”

### Step 5 — Time & focus
Prompt: “Is real estate your primary focus right now?”
Options:
1. “Yes — this is my full-time focus.”
2. “No — I have a day job and invest on the side.”
3. “I’m retired, and invest part-time.”

Acknowledgment after selection:
“Understood. We’ll keep the discussion realistic for your schedule.”
CTA: “Continue →”

### Step 6 — Goal (free text)
Prompt: “What do you want this next phase of investing to do for you?”
Subprompt (muted): “This helps us steer the strategy discussion.”
Starter anchors (lightly styled hints, not required selections):
- “Replacing W-2 income”
- “Finding consistent off-market deals”
- “Scaling what’s already working”
- “Building a repeatable system”
- “Something else”

Textarea placeholder: “Tell us in your own words…”
Character count: “0 / 255”
CTA: “Lock This In →”

Validation:
- Optional but recommended (if empty, allow continue but consider prompting “Add a short note (optional)”)
- Hard limit 255 chars

### Step 7 — Confirmation / Handoff
Header: “You’re all set.”
Body:
“We’ll review this before the call so we can focus on what matters most to you.”
If the scheduling is NEXT:
“Next step: pick a time that works for you.”
System note (muted):
“This is a working session — not a sales pitch.”
Primary CTA: “Continue to Scheduling →”

(If your system already has the scheduled time at this point, show it:
“Your strategy call is scheduled: {Day}, {Date} at {Time} {TZ}”)

---

## Technical requirements

### Architecture
- Create a step configuration array:
  - id, type (input/radio/textarea), prompt, helper, options, ctaLabel, validate(), normalize()
- Store state in a single object:
  {
    name,
    phone,
    email,
    experience_level,
    focus_level,
    primary_goal
  }
- Support Back navigation without losing state
- Support deep linking via query param if token exists:
  - e.g., /strategy-call/setup?token=abc123
  - Include token in submit payload if present

### Focus + keyboard
- On step load, focus the primary input or first radio card
- Enter key advances when valid (except textarea: Cmd/Ctrl+Enter advances; Enter just new line)
- Escape should not exit; ignore or close modals if any
- Visible focus outlines for keyboard users

### Validation UX
- Don’t show error states immediately; show after submit attempt on that step
- Error copy should be calm and direct:
  - Phone: “Enter a valid phone number.”
  - Email: “Enter a valid email address.”

### Submission
- On final CTA (“Continue to Scheduling →”):
  - POST to an endpoint (create if needed):
    - /api/strategy-call-intake
  - Payload includes all fields + token + timestamp + userAgent
  - After success: redirect to scheduling route (existing Calendly page/embed)
- If API fails:
  - Show a non-scary error toast/inline:
    “Something didn’t save. Please try again.”
  - Keep user on the same screen

### Analytics (placeholders)
Add calls like:
- track("strategy_call_setup_step_view", { stepId })
- track("strategy_call_setup_step_complete", { stepId })
- track("strategy_call_setup_complete", { ...summary })
Implement a simple `track()` util that logs to console if no analytics provider is set.

### Styling
- Use existing design system/components if present (Fuse React / MUI etc.)
- Otherwise implement minimal CSS modules/Tailwind consistent with current project
- Avoid “marketing funnel” visuals:
  - No progress bars
  - No confetti
  - No excessive gradients
- Keep a single central card container (max width ~640px), centered vertically with comfortable top bias
- Provide “Back” link top-left (subtle). No heavy button style.

### Accessibility
- Radio cards must be real radio inputs (or ARIA role="radiogroup"/"radio" done correctly)
- Labels properly associated
- Sufficient contrast
- Screen reader friendly headings and prompts

---

## What to change from current implementation (based on screenshots)
- Remove “Probate Investing Blueprint” hero-style headline if it reads too marketing
- Replace with “Strategy Call Setup” and the HVCO continuity language
- Replace any current multi-field screen with single-focus steps
- Remove “1 of 8” step counter and progress indicator
- Keep the dark theme and teal accents but simplify nested container effects

---

## Output format for your response
1) Brief summary of what you changed
2) List of files created/modified
3) Code diffs or full file contents (whichever is more appropriate)
4) Quick QA checklist
5) Any follow-up notes (only if needed)

Proceed with implementation now.