## Section: “What’s Inside the Probate Profit Machine”

We are building a two-column section.

LEFT COLUMN:
- Static content (headline, subhead, CTA)
- Does not scroll

RIGHT COLUMN:
- A vertically scrollable list of feature cards
- Cards visually resemble HomeFlip.ai “unclaimed case” cards with teal tron borders
- This column must feel app-native, not a marketing carousel

### Core Interaction Requirement
Implement vertical scroll snapping so that:
- As the user scrolls, cards move freely
- When scrolling stops, the nearest card snaps into a centered “featured” position
- Snapping should feel soft and magnetic, similar to the iOS date picker
- Do NOT hijack scrolling or block momentum

### Scroll Behavior
- Vertical scroll only
- No arrows, dots, or pagination
- No auto-scroll
- No looping

### Featured Card State
When a card is centered:
- Slight scale increase (approx 1.02–1.04)
- Border glow becomes more prominent (teal accent)
- Background contrast subtly increases
- Text opacity becomes 100%

### Non-Featured Cards
- Slightly reduced scale
- Slightly reduced opacity (but still readable)
- Maintain presence to create a “stack” effect

### Layout Guidance
- Container height should allow ~1.5 cards visible at once
- One featured card, with clear partial visibility above and below
- Add subtle top/bottom gradient fades to imply continuation

### Styling Constraints
- No em-dashes in copy
- No carousel UI patterns
- No gimmicky animations
- Motion should feel premium, restrained, and intentional

This section should feel like reviewing a live system, not browsing content.
