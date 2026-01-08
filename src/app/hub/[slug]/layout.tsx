'use client';

import React, { useState, useEffect } from 'react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { TrendingUp, Play, GraduationCap, Bell, Landmark, X, Bookmark, ChevronDown, ChevronRight, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { logos, hubBranding } from '@/config/hub.config';

interface HubLayoutProps {
  children: React.ReactNode;
}

interface TokenState {
  status: 'loading' | 'valid' | 'expired' | 'invalid' | 'no_token';
  daysRemaining?: number;
  errorMessage?: string;
}

export default function HubLayout({ children }: HubLayoutProps) {
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slug = params.slug as string;

  // Token validation state
  const [tokenState, setTokenState] = useState<TokenState>({ status: 'loading' });

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      // Check for token in URL first, then sessionStorage
      const urlToken = searchParams.get('token');
      const storedToken = sessionStorage.getItem(`hub_token_${slug}`);
      const token = urlToken || storedToken;

      // If token came from URL, store it for navigation within hub
      if (urlToken) {
        sessionStorage.setItem(`hub_token_${slug}`, urlToken);
      }

      if (!token) {
        setTokenState({ status: 'no_token' });
        return;
      }

      try {
        // Call the mlh_access_hub RPC function
        const { data, error } = await supabase.rpc('mlh_access_hub', { p_token: token });

        if (error) {
          console.error('Token validation error:', error);
          setTokenState({ status: 'invalid', errorMessage: 'Unable to validate access' });
          return;
        }

        const result = data?.[0];

        if (!result || !result.is_valid) {
          // Determine specific error
          const errorMsg = result?.error_message || 'Invalid token';
          if (errorMsg.includes('expired')) {
            setTokenState({ status: 'expired', errorMessage: 'Your access has expired' });
          } else {
            setTokenState({ status: 'invalid', errorMessage: errorMsg });
          }
          // Clear stored token if invalid
          sessionStorage.removeItem(`hub_token_${slug}`);
          return;
        }

        // Calculate days remaining from hub settings (expiry tracked in token)
        // The RPC already validated expiry, so we need to get remaining days
        // For now, we'll query the token directly for expires_at
        const { data: tokenData } = await supabase
          .from('mlh_tokens')
          .select('expires_at')
          .eq('token', token)
          .single();

        let daysRemaining = 30; // Default
        if (tokenData?.expires_at) {
          const expiresAt = new Date(tokenData.expires_at);
          const now = new Date();
          daysRemaining = Math.max(0, Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
        }

        setTokenState({ status: 'valid', daysRemaining });
      } catch (err) {
        console.error('Token validation error:', err);
        setTokenState({ status: 'invalid', errorMessage: 'Unable to validate access' });
      }
    };

    validateToken();
  }, [slug, searchParams]);

  // Guide sections - matches ebook structure
  const guideSections = [
    { id: 'part-1', label: 'Part I: Why Probate', href: `/hub/${slug}/guide/part-1` },
    { id: 'part-2', label: 'Part II: Finding Probate Leads', href: `/hub/${slug}/guide/part-2` },
    { id: 'part-3', label: 'Part III: Working the Leads', href: `/hub/${slug}/guide/part-3` },
    { id: 'part-4', label: 'Part IV: Tying It All Together', href: `/hub/${slug}/guide/part-4` },
  ];

  // Determine active states
  const isGuidePage = pathname === `/hub/${slug}` || pathname.includes('/guide');
  const isGuideSection = pathname.includes('/guide/');
  const activeSection = guideSections.find(s => pathname.includes(s.id));
  const isTrainingPage = pathname.includes('/training');
  const isCommunityPage = pathname.includes('/community');

  // Expand guide nav if on any guide page
  const [guideExpanded, setGuideExpanded] = useState(true);

  // Update expansion when route changes
  useEffect(() => {
    if (isGuidePage) setGuideExpanded(true);
  }, [isGuidePage]);

  // Bookmark reminder notification state
  const [showBookmarkReminder, setShowBookmarkReminder] = useState(false);
  const [reminderVisible, setReminderVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('hub_bookmark_dismissed');
    if (!dismissed) {
      setShowBookmarkReminder(true);
      setReminderVisible(true);
    }
  }, []);

  const dismissReminder = () => {
    setReminderVisible(false);
    setTimeout(() => {
      setShowBookmarkReminder(false);
      sessionStorage.setItem('hub_bookmark_dismissed', 'true');
    }, 300);
  };

  // Loading state
  if (tokenState.status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-[#5fc9ba] animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-sm">Validating access...</p>
        </div>
      </div>
    );
  }

  // Get hub branding for this slug (fallback to generic if not found)
  const brand = hubBranding[slug] || {
    name: 'Resource Hub',
    tagline: 'Your exclusive resources',
    coverImage: null,
    accentColor: '#83d4c0',
    optInPath: '/probate-profit-machine',
    benefits: [],
  };

  // No token or invalid token - show friendly access screen
  if (tokenState.status === 'no_token' || tokenState.status === 'invalid') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 py-12">
        <div className="max-w-lg text-center">
          {/* Ebook cover */}
          {brand.coverImage && (
            <div className="mb-8">
              <img
                src={brand.coverImage}
                alt={brand.name}
                className="h-48 mx-auto drop-shadow-2xl"
              />
            </div>
          )}

          {/* Logo */}
          <img
            src={logos.logo.onDark}
            alt="Homeflip.ai"
            className="h-10 mx-auto mb-6"
          />

          <h1 className="text-2xl font-bold text-white mb-2">Welcome to the {brand.name}</h1>
          <p className="text-white/50 text-sm mb-6">{brand.tagline}</p>

          <p className="text-white/60 mb-6">
            {tokenState.status === 'no_token'
              ? "Get instant access — just enter your email and we'll send your personal access link."
              : "Looks like this link isn't working. No worries — request a fresh one below and you'll be back in seconds."}
          </p>

          <a
            href={brand.optInPath}
            className="btn-gradient inline-block px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide mb-4"
          >
            Get Your Free Access
          </a>

          <p className="text-white/40 text-sm">
            No password needed · No account to create · Just click and you're in
          </p>
        </div>
      </div>
    );
  }

  // Expired token - show friendly renewal screen
  if (tokenState.status === 'expired') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 py-12">
        <div className="max-w-lg text-center">
          {/* Ebook cover */}
          {brand.coverImage && (
            <div className="mb-8">
              <img
                src={brand.coverImage}
                alt={brand.name}
                className="h-48 mx-auto drop-shadow-2xl"
              />
            </div>
          )}

          {/* Logo */}
          <img
            src={logos.logo.onDark}
            alt="Homeflip.ai"
            className="h-10 mx-auto mb-6"
          />

          <h1 className="text-2xl font-bold text-white mb-2">Time for a Fresh Link</h1>
          <p className="text-white/50 text-sm mb-6">Your {brand.name} access has expired</p>

          <p className="text-white/60 mb-6">
            Getting back in is easy. Request a new link below and you'll have instant access to all your resources again.
          </p>

          <a
            href={brand.optInPath}
            className="btn-gradient inline-block px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide mb-4"
          >
            Get a Fresh Link
          </a>

          <p className="text-white/40 text-sm">
            Takes 10 seconds · Same email, new link · All your resources waiting
          </p>
        </div>
      </div>
    );
  }

  // Format days remaining text
  const daysText = tokenState.daysRemaining === 1
    ? '1 day remaining'
    : `${tokenState.daysRemaining} days remaining`;

  return (
    <div className="flex min-h-screen font-inter">
      {/* Sidebar - 280px width, full height */}
      <aside className="hidden lg:flex w-[280px] shrink-0 flex-col h-screen sticky top-0 bg-[#0a0a0f] border-r border-white/[0.06]">
        {/* Beta bar */}
        <div className="flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-400 text-sm font-semibold tracking-wide uppercase text-slate-900 py-2">
          Resource Hub
        </div>

        {/* Brand */}
        <div className="pl-5 pr-4 pt-4 pb-5">
          <img
            src={logos.logo.onDark}
            alt="Homeflip.ai"
            className="h-6"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 pb-6 space-y-6">
          {/* Primary nav */}
          <div className="space-y-0.5">
            {/* Probate Profit Machine - Expandable */}
            <div>
              <button
                onClick={() => setGuideExpanded(!guideExpanded)}
                className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition"
                style={{
                  backgroundColor: isGuidePage ? 'rgba(255,255,255,0.06)' : 'transparent',
                  color: isGuidePage ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
                }}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp
                    className="h-[18px] w-[18px]"
                    style={{ color: isGuidePage ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.45)' }}
                    strokeWidth={1.25}
                  />
                  <span className="text-[14px] font-normal">Probate Profit Machine</span>
                </div>
                {guideExpanded ? (
                  <ChevronDown className="h-4 w-4" style={{ color: 'rgba(255,255,255,0.35)' }} strokeWidth={1.5} />
                ) : (
                  <ChevronRight className="h-4 w-4" style={{ color: 'rgba(255,255,255,0.35)' }} strokeWidth={1.5} />
                )}
              </button>

              {/* Sub-items */}
              {guideExpanded && (
                <div className="mt-1 ml-3 pl-4 space-y-0.5" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Overview link */}
                  <Link
                    href={`/hub/${slug}`}
                    className="block px-3 py-2 rounded-lg text-[13px] transition"
                    style={{
                      backgroundColor: pathname === `/hub/${slug}` ? 'rgba(255,255,255,0.04)' : 'transparent',
                      color: pathname === `/hub/${slug}` ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    Introduction
                  </Link>
                  {/* Section links */}
                  {guideSections.map((section) => (
                    <Link
                      key={section.id}
                      href={section.href}
                      className="block px-3 py-2 rounded-lg text-[13px] transition"
                      style={{
                        backgroundColor: activeSection?.id === section.id ? 'rgba(255,255,255,0.04)' : 'transparent',
                        color: activeSection?.id === section.id ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training Videos - Hidden until content is ready */}
            {/* <Link
              href={`/hub/${slug}/training`}
              className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition"
              style={{
                backgroundColor: isTrainingPage ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: isTrainingPage ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
              }}
            >
              <Play
                className="h-[18px] w-[18px]"
                style={{ color: isTrainingPage ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.45)' }}
                strokeWidth={1.25}
              />
              <span className="text-[14px] font-normal">Training Videos</span>
            </Link> */}

            {/* Community */}
            <Link
              href={`/hub/${slug}/community`}
              className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition"
              style={{
                backgroundColor: isCommunityPage ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: isCommunityPage ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
              }}
            >
              <GraduationCap
                className="h-[18px] w-[18px]"
                style={{ color: isCommunityPage ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.45)' }}
                strokeWidth={1.25}
              />
              <span className="text-[14px] font-normal">Community</span>
            </Link>
          </div>

          {/* Probate Pro Section */}
          <div className="space-y-1">
            <div className="px-3 text-xs font-semibold tracking-[0.12em]">
              <span style={{ color: '#d946ef' }}>PROBATE</span>
              <span style={{ color: 'rgba(255,255,255,0.35)' }}> PRO</span>
            </div>
            <div className="space-y-0.5 pl-4 ml-3 mt-1" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              <Link
                href={`/hub/${slug}/upgrade`}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04]"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                <Bell className="h-[18px] w-[18px]" style={{ color: 'rgba(255,255,255,0.45)' }} strokeWidth={1.25} />
                <span className="text-[14px] font-normal">Get New Cases</span>
              </Link>
              <Link
                href={`/hub/${slug}/upgrade`}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04]"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                <Landmark className="h-[18px] w-[18px]" style={{ color: 'rgba(255,255,255,0.45)' }} strokeWidth={1.25} />
                <span className="text-[14px] font-normal">Subscription</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen relative flex flex-col" style={{ backgroundColor: '#0a0a0f' }}>
        {/* Top Status Bar - Desktop */}
        <div className="hidden lg:flex items-center justify-between px-6 py-2.5 border-b border-white/[0.06]" style={{ backgroundColor: '#0a0a0f' }}>
          <div className="w-[180px]" />

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-[13px]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5fc9ba' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Access Active</span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>{daysText}</span>
            </div>
            {showBookmarkReminder && (
              <div
                className="flex items-center gap-2 transition-all duration-300"
                style={{ opacity: reminderVisible ? 1 : 0, marginTop: '2px' }}
              >
                <Bookmark className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.35)' }} strokeWidth={1.5} />
                <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Save this link — it's your private access
                </span>
                <button
                  onClick={dismissReminder}
                  className="p-0.5 rounded transition hover:bg-white/[0.05]"
                  aria-label="Dismiss"
                >
                  <X className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.25)' }} strokeWidth={1.5} />
                </button>
              </div>
            )}
          </div>

          <div className="w-[180px] flex justify-end">
            <Link
              href={`/hub/${slug}/upgrade`}
              className="btn-gradient px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide hover:scale-[1.02] transition-all"
            >
              Claim Your County
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-40 border-b border-white/[0.06]" style={{ backgroundColor: '#0a0a0f' }}>
          <div className="flex items-center justify-between min-h-12 px-4">
            <img src={logos.logo.onDark} alt="Homeflip.ai" className="h-6" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5fc9ba' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#5fc9ba' }}>Active</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-b border-white/[0.06] px-4 py-2 flex gap-2 overflow-x-auto" style={{ backgroundColor: '#0a0a0f' }}>
          <Link
            href={`/hub/${slug}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition"
            style={{
              backgroundColor: isGuidePage ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: isGuidePage ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
            }}
          >
            <TrendingUp className="h-4 w-4" strokeWidth={1.25} />
            Guide
          </Link>
          <Link
            href={`/hub/${slug}/training`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition"
            style={{
              backgroundColor: isTrainingPage ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: isTrainingPage ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
            }}
          >
            <Play className="h-4 w-4" strokeWidth={1.25} />
            Training
          </Link>
          <Link
            href={`/hub/${slug}/community`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition"
            style={{
              backgroundColor: isCommunityPage ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: isCommunityPage ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
            }}
          >
            <GraduationCap className="h-4 w-4" strokeWidth={1.25} />
            Community
          </Link>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
