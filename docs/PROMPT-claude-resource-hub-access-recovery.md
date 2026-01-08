# Claude Prompt — Resource Hub Access Recovery Page (Magic Link Missing / No Token)

You are a **senior SaaS product designer** working on **Homeflip.ai**.

Your task is to refine the **Resource Hub access page** shown when a user visits a hub URL
(e.g. `/hub/probate-profit-machine`) **without a valid magic link token**.

This page is **not an error page**.
It is a **re-entry and acquisition bridge**.

Do NOT redesign from scratch. Improve hierarchy, copy, and intent clarity.

---

## Context (Critical)

The Magic Link Resource Hub serves two audiences when accessed without a token:

1. **Returning users** who previously had access but lost their magic link  
2. **New users** who discovered the resource hub organically and are interested

The page must quietly sort these two audiences **without asking questions**.

---

## Design Goals

- Maintain a calm, premium, trustworthy feel
- Avoid “error” or “unauthorized” language
- Avoid long explanations of tokens or access mechanics
- Make the next step obvious in under 2 seconds
- Preserve brand authority and curiosity

This page is part of a **sales bridge**, not a dead end.

---

## What Must Stay

- Existing hero visual (book / guide cover)
- Existing page title and subtitle
- Two available actions:
  - “Get Access”
  - “Resend Secure Link”

Do not add additional CTAs.

---

## Core Change Required

The two actions must no longer feel equal.

The UI must:
- Clearly frame **Get Access** for new users
- Clearly frame **Resend Secure Link** for returning users
- Do this with **microcopy and hierarchy**, not paragraphs

---

## Copy & Hierarchy Requirements

### Context Line (New)

Add a single, calm line of context **above the buttons**:

> Access to this resource is provided via a secure link.

No apology.  
No technical explanation.  
No mention of “token.”

---

### Primary Action (New / Interested Users)

**GET ACCESS**

- This is the visually primary button
- It routes to the main Homeflip.ai marketing / overview page

Add subtle helper text beneath the button:

> New here? Start with the full overview.

---

### Secondary Action (Returning Users)

**RESEND SECURE LINK**

- This is visually secondary (lower contrast)
- It triggers the email flow to resend the magic link

Add subtle helper text beneath the button:

> Already had access? We’ll email your link.

---

## Optional (Allowed)

- A very subtle “or” divider between the two actions
- Slight spacing separation to reinforce two paths

---

## What to Avoid (Strict)

- No paragraphs explaining access
- No “lost your link?” headline
- No error language (“unauthorized”, “restricted”)
- No inline email input on this page
- No defensive or apologetic tone

---

## Tone Reference

The user should feel:

> “I’m in the right place — this makes sense.”

Not:
> “I messed something up.”

---

## Output Instructions

Provide:
- Updated UI copy (exact text)
- Visual hierarchy guidance (primary vs secondary)
- Brief explanation of why the change improves clarity

Do NOT include code.

---

If the page feels like a **graceful re-entry point instead of a blocker**, you’ve done it correctly.
