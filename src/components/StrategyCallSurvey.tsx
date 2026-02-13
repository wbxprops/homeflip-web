'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ConversationForm, Question, FormValues } from './forms';
import { fbTrackCompleteRegistration, sendConversionEvent, generateEventId } from './TrackingScripts';

// ==================== QUESTIONS CONFIG (from SPEC) ====================

const SURVEY_QUESTIONS: Question[] = [
  // Step 0 — Entry / Context setter
  {
    id: 'entry',
    type: 'entry',
    header: 'Strategy Call Setup',
    body: "A few quick questions to help us focus the conversation on what matters most to you.",
    note: 'Takes about 2–3 minutes.',
    ctaLabel: 'Begin Setup',
  },

  // Step 1 — Name
  {
    id: 'name',
    type: 'text',
    prompt: "Let's start simple. What should we call you?",
    placeholder: 'Your name',
    helper: "This is how we'll address you on the call.",
    required: true,
    ctaLabel: 'Continue ↵',
  },

  // Step 2 — Phone
  {
    id: 'phone',
    type: 'phone',
    prompt: "What's the best number to reach you for the call?",
    placeholder: '(555) 555-5555',
    helper: "We'll call you at this number. Also used for reminders.",
    required: true,
    ctaLabel: 'Save & Continue',
  },

  // Step 3 — Email
  {
    id: 'email',
    type: 'email',
    prompt: "We'll send the call details here.",
    placeholder: 'you@email.com',
    helper: 'This should match where you received the HVCO access.',
    required: true,
    ctaLabel: 'Confirm Email',
  },

  // Step 4 — Experience Level
  {
    id: 'experience_level',
    type: 'radio',
    prompt: "What best describes your current situation?",
    required: true,
    options: [
      { value: 'first_property', label: "I'm looking for my first investment property." },
      { value: 'getting_back', label: "I've done deals before, took a break, and I'm getting back on track." },
      { value: 'active', label: "I'm actively investing and have closed a deal in the last 12 months." },
      { value: 'not_investor', label: "I'm not an investor — I'm looking for a place to live." },
    ],
    acknowledgment: 'Got it — this helps us tailor the call.',
    ctaLabel: 'Continue',
  },

  // Step 5 — Primary Goal
  {
    id: 'primary_goal',
    type: 'textarea',
    prompt: 'What are you trying to achieve through real estate investing?',
    subPrompt: 'This helps us steer the strategy discussion.',
    placeholder: 'Tell us in your own words…',
    maxLength: 255,
    required: false,
    starterAnchors: [
      'Replacing W-2 income',
      'Finding consistent off-market deals',
      'Scaling what\'s already working',
      'Building a repeatable system',
      'Something else',
    ],
    ctaLabel: 'Continue',
  },

  // Step 6 — Biggest Challenge
  {
    id: 'biggest_challenge',
    type: 'textarea',
    prompt: "What's your biggest challenge in achieving your real estate investing goals?",
    placeholder: 'Tell us what\'s holding you back...',
    maxLength: 255,
    required: false,
    ctaLabel: 'Continue',
  },

  // Step 7 — Probate Experience
  {
    id: 'probate_experience',
    type: 'radio',
    prompt: "What best describes your experience with probate investing?",
    required: true,
    options: [
      { value: 'first_heard', label: "This is the first I've heard of probate investing." },
      { value: 'heard_no_start', label: "I've heard about probate but never knew how to get started." },
      { value: 'tried_no_work', label: "I've tried probate before but couldn't make it work." },
      { value: 'actively_use', label: "Yes, I actively use probate as one of my sources." },
    ],
    acknowledgment: 'Got it — this helps us understand where you are.',
    ctaLabel: 'Continue',
  },

  // Step 8 — Lead Source Method (conditional: only if actively_use)
  {
    id: 'lead_source_method',
    type: 'radio',
    prompt: "Do you buy probate leads or source them yourself?",
    required: true,
    options: [
      { value: 'buy_leads', label: 'I buy probate leads from a provider.' },
      { value: 'diy', label: 'I source them myself (DIY).' },
    ],
    acknowledgment: 'Understood.',
    ctaLabel: 'Continue',
    showIf: (values) => values.probate_experience === 'actively_use',
  },

  // Step 9 — Lead Provider (conditional: only if buy_leads)
  {
    id: 'lead_provider',
    type: 'text',
    prompt: "Where do you currently buy your probate leads from?",
    placeholder: 'e.g., US Lead List, All The Leads, REDX, etc.',
    helper: 'Just the name of the company or service.',
    required: true,
    ctaLabel: 'Continue',
    showIf: (values) => values.lead_source_method === 'buy_leads',
  },

  // Step 10 — What Would You Change (conditional: only if actively_use)
  {
    id: 'probate_pain_points',
    type: 'checkbox',
    prompt: "What would you change about how you're currently getting probate leads?",
    subPrompt: 'Select all that apply.',
    required: false,
    options: [
      { value: 'cost_high', label: 'Cost is too high' },
      { value: 'data_quality', label: 'Data quality or accuracy issues' },
      { value: 'not_enough_leads', label: 'Not enough leads in my area' },
      { value: 'too_manual', label: 'Too much manual work required' },
      { value: 'leads_stale', label: 'Leads are stale or outdated' },
      { value: 'contact_verification', label: 'Hard to verify contact information' },
      { value: 'other', label: 'Something else (tell us below)' },
    ],
    ctaLabel: 'Continue',
    showIf: (values) => values.probate_experience === 'actively_use',
  },

  // Step 11 — Other Pain Point Details (conditional: only if "other" selected)
  {
    id: 'probate_pain_other',
    type: 'textarea',
    prompt: "What else would you change about your current probate lead source?",
    placeholder: 'Tell us in your own words...',
    maxLength: 255,
    required: false,
    ctaLabel: 'Continue',
    showIf: (values) => {
      const painPoints = values.probate_pain_points as string[] | undefined;
      return painPoints?.includes('other') || false;
    },
  },

  // Step 12 — Confirmation / Handoff
  {
    id: 'confirmation',
    type: 'confirmation',
    header: "You're all set.",
    body: "We'll review this before the call so we can focus on what matters most to you.",
    subPrompt: 'Next step: select your county to activate your account.',
    ctaLabel: 'Continue to County Selection',
  },
];

// ==================== TRACKING PARAMS ====================

const CONTACT_FIELDS = ['name', 'firstName', 'first_name', 'lastName', 'last_name', 'email', 'phone', 'token'];

const getTrackingParams = (searchParams: URLSearchParams): Record<string, string> => {
  const tracking: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (!CONTACT_FIELDS.includes(key)) {
      tracking[key] = value;
    }
  });
  return tracking;
};

// ==================== COMPONENT ====================

export const StrategyCallSurvey = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get prefill data from URL params (from ActiveCampaign links)
  const firstName = searchParams.get('firstName') || searchParams.get('first_name') || '';
  const lastName = searchParams.get('lastName') || searchParams.get('last_name') || '';
  const nameFromParams = searchParams.get('name') || (firstName && lastName ? `${firstName} ${lastName}` : firstName);
  const token = searchParams.get('token') || '';

  const prefillValues: Record<string, string> = {};
  if (nameFromParams) prefillValues.name = nameFromParams;
  if (searchParams.get('email')) prefillValues.email = searchParams.get('email')!;
  if (searchParams.get('phone')) prefillValues.phone = searchParams.get('phone')!;

  // Capture tracking params
  const trackingParams = getTrackingParams(searchParams);

  const handleSubmit = async (values: FormValues) => {
    // Save to Supabase
    try {
      // Save survey response
      await supabase
        .from('prospect_responses')
        .insert([{
          email: values.email as string,
          name: values.name as string,
          phone: values.phone as string,
          source: 'strategy_call_setup_v3',
          survey_data: {
            experience_level: values.experience_level,
            primary_goal: values.primary_goal,
            biggest_challenge: values.biggest_challenge,
            probate_experience: values.probate_experience,
            lead_source_method: values.lead_source_method,
            lead_provider: values.lead_provider,
            probate_pain_points: values.probate_pain_points,
            probate_pain_other: values.probate_pain_other,
          },
          ...(token && { token }),
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }]);

      // Upsert to prospects table
      await supabase
        .from('prospects')
        .upsert([{
          email: values.email as string,
          name: values.name as string,
          phone: values.phone as string,
          source: 'strategy_call_setup_v3',
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }], { onConflict: 'email' });
    } catch (err) {
      console.error('Supabase error:', err);
      // Don't block the redirect on DB errors
    }

    // Track CompleteRegistration event (client + server with shared dedup ID)
    const eventId = generateEventId();
    fbTrackCompleteRegistration({ content_name: 'Strategy Call Survey' }, eventId);

    const nameParts = (values.name as string).split(' ');
    await sendConversionEvent({
      eventName: 'CompleteRegistration',
      eventId,
      email: values.email as string,
      phone: values.phone as string,
      firstName: nameParts[0],
      lastName: nameParts.slice(1).join(' '),
      contentName: 'Strategy Call Survey',
    });

    // Redirect to Claim Your County, then to booking
    const params = new URLSearchParams({
      name: values.name as string,
      email: values.email as string,
      phone: values.phone as string,
      redirect_after: 'booking-blueprint',
      ...trackingParams,
    });

    router.push(`/claim-your-county?${params.toString()}`);
  };

  return (
    <ConversationForm
      questions={SURVEY_QUESTIONS}
      onSubmit={handleSubmit}
      prefillValues={prefillValues}
      theme="dark"
      showProgress={false}
    />
  );
};
