'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getStoredConsent } from './CookieConsent';

// Facebook Pixel ID - replace with your actual ID when ready
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

// Google Analytics ID - replace with your actual ID when ready
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

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

  return (
    <>
      {/* Google Analytics - only load if analytics consent given */}
      {consent.analytics && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook Pixel - only load if marketing consent given */}
      {consent.marketing && FB_PIXEL_ID && (
        <>
          <Script id="facebook-pixel" strategy="afterInteractive">
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
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}

// Helper to track custom events (respects consent)
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  const consent = getStoredConsent();

  // Track with Google Analytics if consent given
  if (consent?.analytics && typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, params);
  }

  // Track with Facebook Pixel if consent given
  if (consent?.marketing && typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', eventName, params);
  }
}

// Pre-defined event helpers
export const trackPageView = (url: string) => {
  trackEvent('page_view', { page_path: url });
};

export const trackLead = (params?: { value?: number; currency?: string }) => {
  trackEvent('Lead', params);
};

export const trackSignUp = () => {
  trackEvent('CompleteRegistration');
};
