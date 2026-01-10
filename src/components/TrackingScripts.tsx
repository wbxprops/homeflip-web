'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getStoredConsent } from './CookieConsent';

// Google Tag Manager Container ID
const GTM_ID = 'GTM-5K2H3HDN';

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
