'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Cookie consent storage key
const COOKIE_CONSENT_KEY = 'homeflip-cookie-consent';

// Consent types
export type CookieConsent = {
  essential: boolean; // Always true - required for site function
  analytics: boolean; // Google Analytics, Vercel Analytics
  marketing: boolean; // Facebook Pixel, ad tracking
  timestamp: number;  // When consent was given
};

const DEFAULT_CONSENT: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: 0,
};

// Get stored consent
export const getStoredConsent = (): CookieConsent | null => {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as CookieConsent;
  } catch {
    return null;
  }
};

// Check if marketing cookies are allowed (for Facebook Pixel, etc.)
export const isMarketingAllowed = (): boolean => {
  const consent = getStoredConsent();
  return consent?.marketing ?? false;
};

// Check if analytics cookies are allowed
export const isAnalyticsAllowed = (): boolean => {
  const consent = getStoredConsent();
  return consent?.analytics ?? false;
};

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);

  useEffect(() => {
    // Check if consent has been given
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay to avoid flash on page load
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = { ...newConsent, timestamp: Date.now() };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    setShowBanner(false);

    // Reload page to apply consent changes (load/unload tracking scripts)
    window.location.reload();
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });
  };

  const acceptEssentialOnly = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
  };

  const saveCustom = () => {
    saveConsent(consent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/50 border border-slate-800">
        <div className="p-6">
          {!showDetails ? (
            // Simple view
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">We value your privacy</h3>
                <p className="text-slate-400 text-sm">
                  We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
                  Read our{' '}
                  <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                    Privacy Policy
                  </Link>{' '}
                  for more details.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
                >
                  Customize
                </button>
                <button
                  onClick={acceptEssentialOnly}
                  className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2.5 text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Detailed view
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Cookie Preferences</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Back to simple view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">Essential Cookies</span>
                      <span className="text-xs text-slate-500 bg-slate-700 px-2 py-0.5 rounded">Required</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      These cookies are necessary for the website to function and cannot be disabled.
                      They include authentication, security, and preferences.
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <div className="w-10 h-6 bg-cyan-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-75">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">Analytics Cookies</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Help us understand how visitors interact with our website, allowing us to measure and improve performance.
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <button
                      onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                      className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                        consent.analytics ? 'bg-cyan-600 justify-end' : 'bg-slate-600 justify-start'
                      }`}
                      role="switch"
                      aria-checked={consent.analytics}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">Marketing Cookies</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Used to track visitors and display relevant ads. These may be set by our advertising partners like Meta (Facebook).
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <button
                      onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                      className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                        consent.marketing ? 'bg-cyan-600 justify-end' : 'bg-slate-600 justify-start'
                      }`}
                      role="switch"
                      aria-checked={consent.marketing}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={acceptEssentialOnly}
                  className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={saveCustom}
                  className="px-4 py-2.5 text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Button to reopen cookie settings (for footer)
export function CookieSettingsButton() {
  const reopenSettings = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.location.reload();
  };

  return (
    <button
      onClick={reopenSettings}
      className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all text-left"
    >
      Cookie Settings
    </button>
  );
}
