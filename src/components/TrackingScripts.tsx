'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getStoredConsent } from './CookieConsent';

// Google Tag Manager Container ID
const GTM_ID = 'GTM-5K2H3HDN';

// Facebook Pixel ID
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '2645391379150401';

export function TrackingScripts() {
  const [consent, setConsent] = useState<{
    analytics: boolean;
    marketing: boolean;
  } | null>(null);

  useEffect(() => {
    // Check consent on mount and after any changes
    const stored = getStoredConsent();
    if (stored) {
      setConsent({
        analytics: stored.analytics,
        marketing: stored.marketing,
      });
    }
  }, []);

  // Don't render anything until we know consent status
  if (consent === null) return null;

  // Load GTM if user has given analytics consent
  if (!consent.analytics) return null;

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Facebook Pixel - loads if marketing consent given */}
      {consent.marketing && (
        <>
          <Script id="fb-pixel-script" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.net/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}

// Helper to push events to dataLayer (for GTM)
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  const consent = getStoredConsent();

  // Push to dataLayer if analytics consent given
  if (consent?.analytics && typeof window !== 'undefined') {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

// Pre-defined event helpers
export const trackPageView = (url: string) => {
  trackEvent('page_view', { page_path: url });
};

export const trackLead = (params?: { value?: number; currency?: string }) => {
  trackEvent('generate_lead', params);
};

export const trackSignUp = () => {
  trackEvent('sign_up');
};

// =============================================================================
// Facebook Pixel Event Tracking (Client-side)
// =============================================================================

// Declare fbq type (supports optional 4th arg for eventID deduplication)
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

/**
 * Generate a unique event ID for deduplication between Pixel and Conversions API.
 * Both client-side fbq() and server-side CAPI must use the SAME eventId
 * so Meta can deduplicate them into a single event.
 */
export function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Extract Meta cookies (_fbp and _fbc) from the browser.
 * These are set by the Meta Pixel and improve user matching on the server side.
 * - _fbp: Facebook Browser ID (always present when pixel loads)
 * - _fbc: Facebook Click ID (present when user arrived via fb ad click)
 */
function getMetaCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === 'undefined') return {};
  const cookies: { fbp?: string; fbc?: string } = {};
  const cookieStr = document.cookie;
  const fbpMatch = cookieStr.match(/(?:^|;\s*)_fbp=([^;]*)/);
  const fbcMatch = cookieStr.match(/(?:^|;\s*)_fbc=([^;]*)/);
  if (fbpMatch) cookies.fbp = fbpMatch[1];
  if (fbcMatch) cookies.fbc = fbcMatch[1];
  return cookies;
}

/**
 * Track a Facebook Pixel event (client-side)
 * Pass eventId for deduplication with server-side Conversions API
 */
export function fbTrack(
  eventName: string,
  params?: Record<string, unknown>,
  eventId?: string
) {
  const consent = getStoredConsent();
  if (consent?.marketing && typeof window !== 'undefined' && window.fbq) {
    if (eventId) {
      window.fbq('track', eventName, params || {}, { eventID: eventId });
    } else {
      window.fbq('track', eventName, params);
    }
  }
}

/**
 * Track a Lead event - use when someone submits a form
 */
export function fbTrackLead(params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}, eventId?: string) {
  fbTrack('Lead', params, eventId);
  trackEvent('generate_lead', params);
}

/**
 * Track a Schedule event - use when someone books a Calendly call
 */
export function fbTrackSchedule(params?: {
  content_name?: string;
}, eventId?: string) {
  fbTrack('Schedule', params, eventId);
  trackEvent('schedule_call', params);
}

/**
 * Track CompleteRegistration - use when someone completes a survey
 */
export function fbTrackCompleteRegistration(params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}, eventId?: string) {
  fbTrack('CompleteRegistration', params, eventId);
  trackEvent('complete_registration', params);
}

/**
 * Track Contact - use for form submissions
 */
export function fbTrackContact(params?: {
  content_name?: string;
}, eventId?: string) {
  fbTrack('Contact', params, eventId);
  trackEvent('contact_form', params);
}

// =============================================================================
// Server-side Conversions API
// =============================================================================

export interface ConversionEventData {
  eventName: 'Lead' | 'Schedule' | 'CompleteRegistration' | 'Contact';
  eventId?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  state?: string;
  contentName?: string;
  value?: number;
  currency?: string;
}

/**
 * Send a conversion event to the server-side Conversions API.
 * Automatically includes _fbp/_fbc cookies for enhanced user matching.
 */
export async function sendConversionEvent(data: ConversionEventData) {
  try {
    const metaCookies = getMetaCookies();
    const response = await fetch('/api/fb-conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        ...metaCookies,
      }),
    });
    if (!response.ok) {
      console.warn('Conversions API error:', await response.text());
    }
  } catch (error) {
    console.warn('Failed to send conversion event:', error);
  }
}

/**
 * Track a lead with both client-side pixel AND server-side Conversions API.
 * Uses a shared eventId so Meta deduplicates them into one event.
 */
export async function trackLeadFull(params: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  state?: string;
  contentName?: string;
  value?: number;
}) {
  const eventId = generateEventId();

  // Client-side pixel with shared event ID (fires immediately, no await needed)
  fbTrackLead({
    content_name: params.contentName,
    value: params.value,
    currency: 'USD',
  }, eventId);

  // Server-side Conversions API with same event ID (must complete before page navigation)
  await sendConversionEvent({
    eventName: 'Lead',
    eventId,
    ...params,
    currency: 'USD',
  });
}
