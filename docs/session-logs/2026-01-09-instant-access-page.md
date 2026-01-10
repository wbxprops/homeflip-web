# Session Log: 2026-01-09 - Instant Access Page

## Summary
Created `/probate-profit-machine/access` page - a clone of the landing page that provides instant hub access for existing email subscribers without requiring an opt-in form.

## Problem
Existing subscribers clicking a link in an email campaign shouldn't have to:
1. Fill out an opt-in form with info we already have
2. Wait for another email
3. Enter a different nurture funnel

## Solution
Created a cloned landing page at `/probate-profit-machine/access` that:
- Reads email from URL params (`?email={{email}}`)
- Shows full landing page content (no modal)
- On CTA click: generates token via n8n → redirects to hub instantly

## New File

**`src/app/probate-profit-machine/access/page.tsx`**

### Key Components

#### HouseLoader
Animated SVG house loader ported from homeflip-crm. Uses CSS keyframe animation with teal accent element.

```tsx
function HouseLoader({ size = 80 }: { size?: number }) {
  // 2-second animation loop
  // SVG house with animated accent
}
```

#### LoadingOverlay
Full-screen overlay shown during token generation.

```tsx
function LoadingOverlay({ message }: { message: string }) {
  return (
    <motion.div className="fixed inset-0 z-[200] ...">
      <HouseLoader size={100} />
      <motion.p>{message}</motion.p>
    </motion.div>
  );
}
```

#### handleAccessClick
Handles CTA button click - calls n8n webhook, redirects on success.

```tsx
const handleAccessClick = async () => {
  if (!email) {
    setError('No email found...');
    return;
  }

  setIsLoading(true);

  const response = await fetch('https://whitebox-one.onrender.com/webhook/token-generate-instant', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (data.success && data.hub_url) {
    setLoadingMessage('Redirecting to Your Hub...');
    window.location.href = data.hub_url;
  }
};
```

### Edge Case Handling

| Scenario | Behavior |
|----------|----------|
| No `?email=` param | Amber warning banner, button disabled |
| API error | Red error toast, allows retry |
| Success | Loading animation → redirect to hub |

## Page Differences from Original

| Aspect | Original `/probate-profit-machine` | Access `/probate-profit-machine/access` |
|--------|-----------------------------------|----------------------------------------|
| Email capture | Modal with form | URL param |
| CTA text | "Download Your Free Guide" | "Access Your Machine" |
| On submit | Enters ActiveCampaign funnel | Instant redirect to hub |
| Use case | Cold traffic, ads | Email campaigns to existing list |

## Integration

### n8n Workflow
Calls `POST /webhook/token-generate-instant` which:
- Validates email
- Calls `mlh_create_token()` RPC
- Returns `{ success, token, hub_url }`

### Email Templates
Updated to use personalized links:
```
https://homeflip.ai/probate-profit-machine/access?email={{email}}
```

## User Flow

```
Email: "Click here to access your guide"
    ↓
/probate-profit-machine/access?email=user@example.com
    ↓
[Sees full landing page, clicks "Access Your Machine"]
    ↓
Loading overlay: "Assembling Your Machine..."
    ↓
n8n generates/retrieves token
    ↓
Redirect to /hub/probate-profit-machine?token=abc123
    ↓
User is in the hub - no form, no email wait
```

## Related Work
- n8n workflow: `homeflip-marketing-automation/n8n/token-generate-instant.json`
- Email updates: `homeflip-marketing-collateral/emails/homeflip-ai-launch/`
- Full pattern docs: `magic-link-hub/docs/instant-access-pattern.md`

---

*Session completed: 2026-01-09*
