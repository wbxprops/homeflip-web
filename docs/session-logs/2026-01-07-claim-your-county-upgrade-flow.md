# Session Log: 2026-01-07

## Claim Your County Upgrade Flow - Resource Hub

### Summary

Built the complete "Claim Your County" upgrade flow inside the Resource Hub. This is the in-product unlock experience for Probate Pro features - designed to feel like CRM system activation, not a marketing funnel.

---

### What Was Accomplished

**Upgrade Page Structure (`/hub/[slug]/upgrade/page.tsx`)**

Built a 4-step flow:

1. **Step 1 - Contact Info**: Name, phone, email form
2. **Step 2 - County Selection**: Form expands, sales copy disappears, user selects markets (up to 3 counties per state)
3. **Step 3 - Confirmation Checkpoint**: "County Activation Pending" - spacious, centered layout with "Finalize Setup" CTA
4. **Step 4 - Calendly Embed**: "Complete County Activation" with inline Calendly, transitions to "Implementation Call Scheduled" confirmation

**Key UX Decisions**

- Two-column layout on step 1-2, form expands leftward when advancing (form stays in place, content collapses)
- Step 3 feels like a checkpoint, not a form step - generous whitespace, no progress indicators
- Step 4 keeps user in CRM - no redirects, inline confirmation after booking
- All copy is system-oriented, calm, factual - no marketing hype

**Calendly Integration**

- Embedded inline widget with dark theme (`background_color=0a0a0f`)
- Prefills firstName, lastName, email from form data
- Listens for `calendly.event_scheduled` to show inline confirmation
- URL: `https://calendly.com/wb-props/county-activation`
- Parameters: `hide_event_type_details=1&hide_gdpr_banner=1`

**Design Refinements**

- Glassmorphic card made subtle (reduced opacity, removed shadow)
- Progress indicators only show on steps 1-2
- "Finalize Setup" button has arrow for continuity
- Expectation-setting line under CTAs

---

### Files Modified

- `src/app/hub/[slug]/upgrade/page.tsx` - Complete upgrade flow
- `src/app/hub/[slug]/layout.tsx` - Hub layout (from earlier)

---

### Technical Notes

- `CalendlyEmbed` component handles script loading, prefill, and event detection
- `splitName()` helper parses "John Smith" → firstName: "John", lastName: "Smith"
- Step state lifted to parent so layout can respond to step changes
- AnimatePresence for smooth transitions between steps

---

### Next Session Goals

- [ ] Build "online ebook" content layout for the Resource Hub
- [ ] Test the full upgrade flow end-to-end
- [ ] Verify Calendly prefill is working correctly

---

### Resume Point

The upgrade flow is complete. Next focus is the ebook/guide content pages within the Resource Hub.
