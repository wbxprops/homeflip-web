'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { fbTrackContact } from './TrackingScripts';

// ==================== TRACKING PARAMS ====================

// Fields that are used for contact info (not tracking)
const CONTACT_FIELDS = ['name', 'firstName', 'first_name', 'lastName', 'last_name', 'email', 'phone', 'redirect_after'];

// Extract all tracking params from URL (everything except contact fields)
const getTrackingParams = (searchParams: URLSearchParams): Record<string, string> => {
  const tracking: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (!CONTACT_FIELDS.includes(key)) {
      tracking[key] = value;
    }
  });
  return tracking;
};

interface CTAFormProps {
  buttonText?: string;
  className?: string;
  onSuccess?: () => void;
}

export const CTAForm = ({
  buttonText = "Claim Your County",
  className = "",
  onSuccess
}: CTAFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Capture all tracking params on mount (UTMs, fbclid, campaign, etc.)
  const [trackingParams] = useState<Record<string, string>>(() => getTrackingParams(searchParams));

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Always log the response (tracks every interaction)
      await supabase
        .from('prospect_responses')
        .insert([{
          email: email,
          source: 'hero_cta',
          // Store all tracking params (UTMs, fbclid, campaign, etc.)
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }]);

      // Upsert to prospects table via server-side API route (bypasses RLS)
      const upsertRes = await fetch('/api/prospects/upsert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          source: 'hero_cta',
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }),
      });

      if (!upsertRes.ok) {
        console.error('Prospects upsert error:', await upsertRes.text());
      }

      // Track FB Contact event
      fbTrackContact({ content_name: 'Hero CTA Form' });

      if (onSuccess) onSuccess();

      // Pass tracking params through to claim-your-county
      const params = new URLSearchParams({
        email: email,
        ...trackingParams,
      });
      router.push(`/claim-your-county?${params.toString()}`);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-2xl border border-slate-200 p-3 sm:p-1.5 shadow-xl focus-within:ring-2 focus-within:ring-[#83d4c0]/30 focus-within:border-[#83d4c0] transition-all dark:bg-white/5 dark:border-white/10 gap-3 sm:gap-0 ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        autoComplete="email"
        data-lpignore="true"
        className="flex-1 bg-transparent px-4 sm:px-8 py-3 sm:py-4 focus:outline-none text-slate-900 [.dark_&]:text-white text-lg sm:text-xl md:text-2xl placeholder:text-slate-400 [.dark_&]:placeholder:text-slate-300 rounded-xl sm:rounded-none"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gradient px-6 sm:px-10 py-4 rounded-xl font-hero font-[900] text-2xl sm:text-2xl md:text-3xl uppercase tracking-tighter shadow-lg shadow-[#83d4c0]/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 whitespace-nowrap w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Joining...' : buttonText}
      </button>
      {status === 'error' && (
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-red-500 text-xs font-bold whitespace-nowrap">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
